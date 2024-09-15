# E-Book-dealer

電子記事を購入したり販売できるアプリケーションです。

## 目次
- [使用技術一覧](#heading-01)
- [環境](#heading-02)
- [インストール](#heading-03)
- [使い方](#heading-04)
- [ライセンス](#heading-05)
- [ディレクトリ構成](#heading-06)


<h2 id="heading-01">使用技術一覧</h2>
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
</p>

<h2 id="heading-02">環境</h2>

### nodeバージョン

- node v20.16.0
- npm v10.8.1


### 使用言語/フレームワーク

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Next.js               | 14.2.5     |
| React                 | 18.3.1     |
| Prisma                | 5.18.0     |
| NextAuth              | 4.24.7     |
| TailwindCSS           | 3.4.6      |
| Node.js               | 20.16.0    |

<h2 id="heading-03">インストール</h2>


```bash
npm i
```

開発に必要なライブラリがインストールされます。

<h2 id="heading-04">使い方</h2>


```bash
npm run dev

```

http://localhost:3000 でローカルサーバーが立ち上がります。


<h2 id="heading-05">ライセンス</h2>

ライセンスを明示する

E-Book-dealer is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).


<h2 id="heading-06">ディレクトリ構成</h2>

```
e-book-dealer/
├── out
├── prisma　　　　　　 # prisma設定ファイル
│   ├── migrations
│   └── schema.prisma
├── public
│   ├── images       # 画像を格納
└── src
    ├── app
    │   ├── (page)   # ルーティングファイル
    │   ├── api
    │   └── lib      # ライブラリや設定済みのインスタンスをエクスポートするファイルを設置(axiosやreactQueryなど)
    ├── components   # ボタンやフォームなど汎用的なコンポーネントを格納
    │   ├── elements # アプリケーション内で頻繁に使用される部品を格納（ボタンなど）
    │   └── layouts  # ページ共通で使用されるガワに当たるコンポーネントを格納（ヘッダー、フッターなど）
    ├── hooks        # 汎用的なカスタムフックを格納
    ├── constants    # アプリケーション全体で管理する定数を格納
    └── utils        # 汎用的な関数を格納
    └── types        # 型定義ファイル
    └── stores       # アプリケーション全体のグローバルステートの管理
    └── features     # 一つにページにしか存在しないユニークなコンポーネントを格納
        └── (something)  # src/app/(page)のディレクトリに対応させる（例：/features/login/など）
            └── components
            └── layouts
```

<h2 id="heading-07">注意</h2>

<ul>
<li>componentディレクトリ内でデータの取得は行わないでください。できる限りページでデータの取得を行うようにし、コンポーネントはpropsを受け取るだけにとどめてください。</li>
<li>Stripeはテスト環境を使用しています。そのため、以下<a href='https://docs.stripe.com/testing#cards' target='_blank'>テスト用のカード情報</a>を使用して決済機能を試すことができます。</li>
</ul>
