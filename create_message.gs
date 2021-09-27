var userId = PropertiesService.getScriptProperties().getProperty('SLACK_USER_ID'); // SlackのメンションするユーザーID
var youbi = ["日", "月", "火", "水", "木", "金", "土"];
var numberString = [":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:"]
var startTimeString = ["09:00", "10:45", "12:55", "14:40", "16:20", "18:00", "19:40"]
var classTypeMessage = ["対面のみ", "Zoomのみ", "対面とZoomの併用", "対面推奨（Zoomもあり）", "対面（後日共有あり）", "Zoom（後日共有あり）", "対面とZoomの併用（後日共有あり）", "対面推奨（Zoomもあり/後日共有あり）", "オンデマンド"]

function createPretext() {
  // 今日の日付を取得
  var date = new Date();
  var dateFormat = Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy/MM/dd') + "(" + youbi[date.getDay()] + ")"

  // メッセージを作成
  var message = '<@' + userId + '> おはようございます:sunny: \n今日は' + dateFormat + 'です！ 今日もがんばろう！:muscle:';

  return message
}

function createField(period, title, classLink, type, zoomLink) {
  var message = {};
  var classType = '';
  if (zoomLink != null && zoomLink != ""){
    classType = '<' + zoomLink + '|' + classTypeMessage[type] + ">"
  } else {
    classType = classTypeMessage[type]
  }

  message.title = numberString[period] + ' *' + title + '*';
  message.value = '開始時刻: ' + startTimeString[period] + ' | 授業サイトは<' + classLink + '|こちら> | 今日は' + classType + 'での授業です'
  return message
}
