## [0.3.0](https://github.com/danielroe/typed-vuex/compare/0.2.0...0.3.0) (2022-02-19)


### Features

* add `createMapper` convenience utility ([#264](https://github.com/danielroe/typed-vuex/issues/264)) ([a26d2da](https://github.com/danielroe/typed-vuex/commit/a26d2da67c51beb0733e44c1da05482eaeca1d90))


### Bug Fixes

* check Function instance for store state rather than typeof ([4363a56](https://github.com/danielroe/typed-vuex/commit/4363a5602d1031944d226117f04970785f14b5c8))

## [0.2.0](https://github.com/danielroe/typed-vuex/compare/0.1.22...0.2.0) (2021-04-29)


### ⚠ BREAKING CHANGES

* all imports are now from `typed-vuex` rather than `nuxt-typed-vuex`, which is *exclusively* the module in your `nuxt.config`

**Migration path**: Search/replace through your project `nuxt-typed-vuex` for `typed-vuex`, with the sole exception of your `nuxt.config.js`. 😊

### Bug Fixes

* expose all typed-vuex types ([#231](https://github.com/danielroe/typed-vuex/issues/231)) ([9d6c479](https://github.com/danielroe/typed-vuex/commit/9d6c479b0d0781916596fd27e5f5e5e32f8579c9))


### Code Refactoring

* separate module from runtime ([#219](https://github.com/danielroe/typed-vuex/issues/219)) ([b8d556b](https://github.com/danielroe/typed-vuex/commit/b8d556b041e162c66de3e8dbd11c8f1dd5461c2a))

### [0.1.22](https://github.com/danielroe/nuxt-typed-vuex/compare/0.1.21...0.1.22) (2020-09-30)


### Performance Improvements

* increase tree-shakeability of module ([8b98e33](https://github.com/danielroe/nuxt-typed-vuex/commit/8b98e330c560c70468e536592773f2f2ada5555f))

### [0.1.21](https://github.com/danielroe/nuxt-typed-vuex/compare/0.1.20...0.1.21) (2020-08-30)


### Features

* **nuxt-typed-vuex:** automatically transpile module ([35eb0a0](https://github.com/danielroe/nuxt-typed-vuex/commit/35eb0a0f221718e9f29e1f100a574f7c1e88bf1d))

### [0.1.20](https://github.com/danielroe/nuxt-typed-vuex/compare/nuxt-typed-vuex@0.1.19...0.1.20) (2020-08-02)

### Bug Fixes

- move @nuxt/types and vuex to peerDeps ([4d6029e](https://github.com/danielroe/nuxt-typed-vuex/commit/4d6029ea582cc055010612b8427b4ae12fcd4fac))
- state lazy evaluation in accessor ([#75](https://github.com/danielroe/nuxt-typed-vuex/issues/75)) ([bae68f5](https://github.com/danielroe/nuxt-typed-vuex/commit/bae68f59dfd7f05511469569943a56a15583b9b9))

## [0.1.19](https://github.com/danielroe/nuxt-typed-vuex/compare/typed-vuex@0.1.18...typed-vuex@0.1.19) (2020-06-13)

**Note:** Version bump only

## [0.1.18](https://github.com/danielroe/nuxt-typed-vuex/compare/typed-vuex@0.1.17...typed-vuex@0.1.18) (2020-04-20)

**Note:** Version bump only

## [0.1.17](https://github.com/danielroe/nuxt-typed-vuex/compare/typed-vuex@0.1.16...typed-vuex@0.1.17) (2020-03-05)

### Bug Fixes

- move @nuxt/types and vuex to peerDeps ([4d6029e](https://github.com/danielroe/nuxt-typed-vuex/commit/4d6029ea582cc055010612b8427b4ae12fcd4fac))

## [0.1.16](https://github.com/danielroe/nuxt-typed-vuex/compare/typed-vuex@0.1.15...typed-vuex@0.1.16) (2020-02-08)

### Bug Fixes

- state lazy evaluation in accessor ([#75](https://github.com/danielroe/nuxt-typed-vuex/issues/75)) ([bae68f5](https://github.com/danielroe/nuxt-typed-vuex/commit/bae68f59dfd7f05511469569943a56a15583b9b9))

## [0.1.15](https://github.com/danielroe/nuxt-typed-vuex/compare/typed-vuex@0.1.14...typed-vuex@0.1.15) (2019-12-12)

**Note:** Version bump only

## 0.1.14 (2019-12-12)

**Note:** Version bump only

## [0.1.14-alpha.2](https://github.com/danielroe/nuxt-typed-vuex/compare/typed-vuex@0.1.14-alpha.0...typed-vuex@0.1.14-alpha.2) (2019-12-12)

### Performance Improvements

- exclude source maps ([e638b97](https://github.com/danielroe/nuxt-typed-vuex/commit/e638b977d971636f59cd58886fe69a0d008175b3))

## [0.1.14-alpha.1](https://github.com/danielroe/nuxt-typed-vuex/compare/typed-vuex@0.1.14-alpha.0...typed-vuex@0.1.14-alpha.1) (2019-12-12)

### Performance Improvements

- exclude source maps ([e638b97](https://github.com/danielroe/nuxt-typed-vuex/commit/e638b977d971636f59cd58886fe69a0d008175b3))

## 0.1.14-alpha.0 (2019-12-08)

**Note:** Version bump only for package typed-vuex

### [0.1.13](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.13-beta.0...v0.1.13) (2019-11-26)

### [0.1.12](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.11...v0.1.12) (2019-11-22)

### Bug Fixes

- allow any kind of dispatch ([75f4637](https://github.com/danielroe/nuxt-typed-vuex/commit/75f463723d54949a98100c21481e5bae5f6d7a87))

### [0.1.11](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.10...v0.1.11) (2019-11-22)

### Bug Fixes

- restore dispatch to action context ([019f1bb](https://github.com/danielroe/nuxt-typed-vuex/commit/019f1bb53ddac38fcde81c195a4df3c9afc49f57)), closes [#43](https://github.com/danielroe/nuxt-typed-vuex/issues/43)

### [0.1.10](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.10-beta.2...v0.1.10) (2019-11-06)

### [0.1.9](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.8...v0.1.9) (2019-11-03)

### Bug Fixes

- require @nuxt/types and vuex as peer deps ([c1ebc33](https://github.com/danielroe/nuxt-typed-vuex/commit/c1ebc33))

### Features

- add example codesandbox ([a6b89b1](https://github.com/danielroe/nuxt-typed-vuex/commit/a6b89b1))
- allow simpler usage of useAccessor ([9cb8cd2](https://github.com/danielroe/nuxt-typed-vuex/commit/9cb8cd2)), closes [#13](https://github.com/danielroe/nuxt-typed-vuex/issues/13)

### [0.1.8](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.7...v0.1.8) (2019-10-13)

### [0.1.7](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.6...v0.1.7) (2019-10-13)

### Bug Fixes

- use correct paths on Windows machines ([56b714a](https://github.com/danielroe/nuxt-typed-vuex/commit/56b714a))

### [0.1.6](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.5...v0.1.6) (2019-10-11)

### Features

- add rootState and rootGetters type helpers ([2661017](https://github.com/danielroe/nuxt-typed-vuex/commit/2661017))

### [0.1.5](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.4...v0.1.5) (2019-10-06)

### Bug Fixes

- allow defining rootState & rootGetters ([fe484b2](https://github.com/danielroe/nuxt-typed-vuex/commit/fe484b2))

### Features

- add helper functions for use within store ([59bed72](https://github.com/danielroe/nuxt-typed-vuex/commit/59bed72))

### [0.1.4](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.3...v0.1.4) (2019-10-05)

### Bug Fixes

- state is still required ([91ae3d7](https://github.com/danielroe/nuxt-typed-vuex/commit/91ae3d7))

### Features

- support state objects ([97ed828](https://github.com/danielroe/nuxt-typed-vuex/commit/97ed828))

### [0.1.3](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.2...v0.1.3) (2019-10-05)

### Bug Fixes

- allow partial submodules ([d27bea0](https://github.com/danielroe/nuxt-typed-vuex/commit/d27bea0))
- allow specifying different rootState ([a837a24](https://github.com/danielroe/nuxt-typed-vuex/commit/a837a24))
- convert plugin to ts ([ae240eb](https://github.com/danielroe/nuxt-typed-vuex/commit/ae240eb))

### [0.1.2](https://github.com/danielroe/nuxt-typed-vuex/compare/v0.1.1...v0.1.2) (2019-10-04)

### Features

- add commit and dispatch options ([ef320e7](https://github.com/danielroe/nuxt-typed-vuex/commit/ef320e7))

### 0.1.1 (2019-10-04)

### Features

- initial commit ([b3eed9a](https://github.com/danielroe/nuxt-typed-vuex/commit/b3eed9a))
