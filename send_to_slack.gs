var username = '授業お知らせBot';  // 通知時に表示されるユーザー名
var icon = ':hatching_chick:';  // 通知時に表示されるアイコン

function sendToSlack(pretext, fields) {
  var jsonData =
  {
    "username" : username,
    "icon_emoji": icon,
    "attachments": [
      {
         "fallback": "今日の授業のお知らせ",
         "pretext": pretext,
         "color": "#898989",
         "fields": fields
      }
   ]
  };
  var payload = JSON.stringify(jsonData);

  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };

  UrlFetchApp.fetch(PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL'), options);
}
