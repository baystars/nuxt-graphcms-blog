# nuxt-graphcms-blog

* Graphcmsの検証用
* 残り
  * 認証
  * ブログ詳細ページ/タグ
  * デプロイ

## インストール

インストール

```shell
npx create-nuxt-app nuxt-graphcms-blog
```

設定項目

* Project name: nuxt-graphcms-blog
* Programming Lauguage: Javascript
* Package manager: Yarn
* UI Framework: None
* Nuxt.js modues: None
* Liting tools: None
* Testing framework: None
* Rendering mode: Universal (SSR/SSG)
* Deployment target: Server
* Development tools: None
* Continuous Integration: None
* Version control system: Git

サーバ起動

```shell
cd nuxt-graphcms-blog
yarn dev
```

## 設定

```shell
yarn add @nuxtjs/bulma
```

nuxt.config.js

```js
  modules: [
    '@nuxtjs/bulma'
  ],
```

### nuxtjs/apollo

```shell
yarn add @nuxtjs/apollo
yarn add apollo-link-http graphql
yarn add graphql-tag
```

nuxt.config.js

```js
modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/apollo'
]
```

GrapCMSのWEB-API設定

Settings>API Access>Public API permissions>Content from stage Publishedにチェック

```shell
yarn add date-fns
```

## リンク

* [To create a portfolio site in Nuxt\.js \+ GraphCMS \+ Netlify\(Others\-Community\)](https://titanwolf.org/Network/Articles/Article?AID=f4225949-a8f0-4557-804a-2e15540a3f51#gsc.tab=0)
