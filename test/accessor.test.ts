import { useAccessor, getAccessorType, getAccessorFromStore } from '../'
import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import { getters, state, actions, mutations } from './fixture/store'

import * as submodule from './fixture/store/submodule'

const pattern = {
  getters,
  state,
  actions,
  mutations,
  modules: {
    submodule: {
      ...submodule,
      namespaced: true,
      modules: {
        nestedSubmodule: {
          ...submodule,
          namespaced: true,
        },
      },
    },
  },
}

const accessorType = getAccessorType(pattern)
const submoduleAccessorType = getAccessorType(submodule)

const submoduleBehaviour = (accessor: typeof submoduleAccessorType) => {
  expect(accessor.firstName).toEqual('')
  accessor.setFirstName('Nina')
  expect(accessor.firstName).toEqual('Nina')
  accessor.setLastName('Willis')
  expect(accessor.fullName).toEqual('Nina Willis')

  accessor.initialise()
  expect(accessor.fullName).toEqual('John Baker')
  accessor.setName('Jordan Lawrence')
  expect(accessor.firstName).toEqual('Jordan')
}

describe.only('accessor', () => {
  let store: Store<any>
  let accessor: typeof accessorType

  beforeEach(() => {
    Vue.use(Vuex)
    store = new Store(pattern)
    accessor = useAccessor(store, pattern)
  })
  test('store exists', async () => {
    expect(pattern).toMatchSnapshot()
  })
  test('accessor object exists', async () => {
    expect(accessor).toMatchSnapshot()
  })
  test('accessor can be generated from store object', async () => {
    const accessorFromStore = getAccessorFromStore(store)(store)
    expect(accessorFromStore).toMatchSnapshot()
  })
  test('accessor works with state object', async () => {
    const stateAccessor = useAccessor(store, {
      state: {
        email: 'this does not matter',
      },
      mutations: {
        setEmail(state, newValue: string) {
          ;(state as any).email = newValue
        },
      },
    })
    expect(stateAccessor.email).toMatchSnapshot()
    stateAccessor.setEmail('test1@email.com')
    expect(stateAccessor.email).toMatchSnapshot()
  })
  test('accessor state, getter, mutation and actions work', async () => {
    expect(accessor.fullEmail).toEqual('')

    accessor.setEmail('john@j.com')
    expect(accessor.email).toEqual('john@j.com')
    expect(accessor.fullEmail).toEqual('john@j.com')

    accessor.resetEmail()
    expect(accessor.fullEmail).toEqual('a@a.com')
  })
  test('accessor submodule state, getter, mutation and actions work', async () => {
    submoduleBehaviour(accessor.submodule)
  })
  test('namespaced modules work', async () => {
    const nonNamespacedPattern = {
      getters,
      state,
      actions,
      mutations,
      modules: {
        submodule: {
          ...submodule,
          namespaced: false,
        },
      },
    }
    const nonNamespacedStore = new Store(nonNamespacedPattern)
    const nonNamespacedAccessor = useAccessor(
      nonNamespacedStore,
      nonNamespacedPattern
    )
    submoduleBehaviour(nonNamespacedAccessor.submodule)
  })
  test('nested modules work', async () => {
    submoduleBehaviour(accessor.submodule.nestedSubmodule)
  })
  test('namespaced dynamic modules work', async () => {
    store.registerModule('dynamicSubmodule', { ...submodule, namespaced: true })
    const dynamicAccessor = useAccessor(store, {
      modules: { dynamicSubmodule: { ...submodule, namespaced: true } },
    })

    submoduleBehaviour(dynamicAccessor.dynamicSubmodule)

    store.unregisterModule('dynamicSubmodule')
  })
  test('dynamic module helper function works', async () => {
    store.registerModule('dynamicSubmodule', submodule)
    const dynamicAccessor = useAccessor(store, submodule, 'dynamicSubmodule')

    submoduleBehaviour(dynamicAccessor)
    store.unregisterModule('dynamicSubmodule')
  })
})
