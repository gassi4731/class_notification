# class_notification
Slackで今日の授業をお知らせしてくれるBot

## 実行環境

- Google Apps Script
- Google スプレッドシート

## 導入方法
### 1.準備する
- SlackにIncoming Webhookを導入する（[やり方](https://slack.com/intl/ja-jp/help/articles/115005265063-Slack-%E3%81%A7%E3%81%AE-Incoming-Webhook-%E3%81%AE%E5%88%A9%E7%94%A8)）
- スプレッドシートを作る（雛形は、[こちら](https://docs.google.com/spreadsheets/d/1Eqln1zoWNErlklQbUJf5Qk9toRooQG49RRaaqRnaIoA/edit?usp=sharing)）
- がんばってスプレッドシートに入力する

### 2.コードを書く
1. 新しいGoogle Apps Scriptのファイルを作成する
2. 1で作成したファイルに、このリポジトリにコードをコピペする
3. SlackのURLなど必要な環境変数を整える
  - SlackのPost URL
  - Slackのメンション先のユーザーID
  - スプレッドシートのID

### 3.定期実行させる
トリガーを設定する！
