var classMessage = []; // 授業内容のお知らせ

function mainFunction() {
  let pretext = createPretext();
  let fields = createFields();
  sendToSlack(pretext, fields);
}

function createFields() {
  var classData = getClassData();
  var fields = [];
  classData.forEach(function(value){
    fields.push(
      createField(value.period, value.name, value.classLink, value.type, value.zoomLink)
    )
  });

  return fields;
}

function settingENV() {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperties({
    'SLACK_USER_ID': '',
    'SLACK_WEBHOOK_URL': '',
    'SPREADSHEET_ID': ''
  });
}