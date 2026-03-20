---
name: project_deploy
description: ゲームポータルサイトのデプロイ構成。gamedeploy フォルダ、Cloudflare Pages、pain-game.com ドメイン。モバイル対応、SEO、AdSense。
type: project
---

## デプロイ構成

### フォルダ構成
```
D:/aavscode/          ← 開発用
  game3/, game7/, game8/, game9slot/

D:/gamedeploy/        ← デプロイ用（GitHubリポジトリ）
  index.html          ← ポータルページ（ペインゲーム）
  privacy.html        ← プライバシーポリシー
  contact.html        ← お問い合わせ（Googleフォーム埋め込み）
  sitemap.xml         ← サイトマップ
  robots.txt
  ss_game*.webp       ← スクショ画像
  game3/              ← ビルド済み（base: './'）
  game7/              ← ビルド済み（base: './'）
  game8/              ← ビルド済み（base: './'）
  game9slot/          ← 静的サイト（ビルド不要）
```

### ホスティング
- **GitHub**: painsama7/game-portal（master + gh-pagesブランチ）
- **Cloudflare Pages**: game-portal-dut.pages.dev
- **カスタムドメイン**: pain-game.com（SSL有効）
- **Google Search Console**: 登録済み、サイトマップ送信済み
- **Google AdSense**: 全ページにスクリプト追加済み、審査中

### デプロイ手順
1. `aavscode/` でコード修正
2. ビルド: `cd gameX && npm run build`（game9slotはビルド不要）
3. コピー: `cp -r dist/* D:/gamedeploy/gameX/`
4. **重要**: デプロイ版HTMLにAdSense/SEO metaを再追加（ビルドで消えるため）
5. push: `cd D:/gamedeploy && git add -A && git commit && git push`
6. Cloudflareが自動デプロイ

### ビルド後に再追加が必要なもの
各ゲームの `<head>` に以下を毎回追加：
- AdSenseスクリプト: `<script async src="...adsbygoogle.js?client=ca-pub-6052048572694342" ...>`
- title, description, og:tags, canonical

### vite.config.js
各ゲームに `export default { base: './' }` を追加済み（サブディレクトリ対応）

### 容量
- game3: 15MB（GLBテクスチャ512px圧縮済み）
- game7: 508KB
- game8: 6MB（character.glb削除済み、未使用だった）
- game9slot: 8.7MB（PNG→WebP変換済み）

### 注意
- Cloudflare Pagesは1ファイル25MB制限
- game8のcharacter.glb（28MB）は未使用だったため削除。ビルドし直すと復活するので毎回削除が必要
- game9slotのPNGは削除済み（WebPのみ）、元に戻せない

## モバイル対応

_isMobile（ユーザーエージェント+タッチ検出）で自動判別。PC→従来操作、スマホ→タッチUI。

| ゲーム | スマホ操作 |
|--------|-----------|
| game3 | 左スワイプ: 操縦、右タップ: ミサイル、右長押し: 機銃、ボタン1タップ: ブースト、ダブルタップ: 必殺技、速度: 自動加速 |
| game7 | ジョイスティック: 移動、JUMPボタン: ジャンプ/二段ジャンプ |
| game8 | ジョイスティック: 移動、画面タッチ: 照準、FIREタップ: 射撃、ダブルタップ長押し: チャージ、NEXTボタン: ステージ遷移 |
| game9slot | レスポンシブUI（メディアクエリで縮小表示、タップで操作可能） |

## SEO
- 全ページにmeta description, og:tags, canonical
- sitemap.xml + robots.txt
- Google Search Console登録済み

## AdSense
- 全7ページにAdSenseスクリプト追加
- pub ID: ca-pub-6052048572694342
- 審査中（2026-03-20申請）

## ポータルデザイン
- フォント: Yu Mincho（明朝体）、タイトルは太め（text-stroke 4px）
- 画像: ジグザグレイアウト（左→右→左→右）
- 「あそぶ」ボタン: オレンジ背景
- フッター: プライバシーポリシー + お問い合わせリンク

**Why:** 4ゲームをpain-game.comで公開、収益化準備
**How to apply:** ゲーム更新時はaavscodeで修正→ビルド→AdSense/SEO再追加→gamedeployにコピー→push
