# Kato Practice Project 課題 2

## 概要

このプロジェクトは練習用のコードベースで、意図的に不完全な実装となっています。学習者が以下の課題を見つけ、修正することで学習効果を高めることができます。

## 使用している技術と基礎知識

### HTML

- `<!DOCTYPE html>`: HTML5 の宣言
- `lang="ja"`: 日本語のページであることを示す
- `meta charset="UTF-8"`: 文字エンコーディングの指定
- `input type="number"`: 数値入力フィールド
- `id属性`: 要素を特定するための識別子

### CSS

- セレクタの種類
  - 要素セレクタ（例：`body`, `h1`）
  - ID セレクタ（例：`#result`）
- ボックスモデル
  - `margin`: 要素の外側の余白
  - `padding`: 要素の内側の余白
- フォントスタイリング
  - `font-family`: フォントの種類
  - `font-size`: 文字の大きさ
  - `font-weight`: 文字の太さ

### JavaScript

- DOM 操作
  - `document.getElementById()`: ID 指定で要素を取得
  - `.value`: input 要素の値を取得
  - `.textContent`: 要素のテキスト内容を設定
- イベント処理
  - `onclick`: クリックイベントの処理
- データ型変換
  - `Number()`: 文字列を数値に変換

## 現状の問題点と学習ポイント

1. HTML

   - タイトルが空（`<h1></h1>`）
   - 入力フィールド B が不足
   - 結果表示用の div に ID が設定されていない
     などなど

2. JavaScript

   - id の指定がない
   - 最終結果の計算がない
     などなど

3. CSS
   - 色や文字の大きさが一部未実装
     などなど
