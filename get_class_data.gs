var ssId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID'); // スプレッドシートのID
var weekId = new Date().getDay(); // 曜日を取得

function getClassData() {
  var spreadsheet = SpreadsheetApp.openById(ssId);
  var classData = [];

  // 開始日からの差分を取る
  var settingSheet = spreadsheet.getSheetByName('setting');
  var startDay = settingSheet.getRange(1,2,1,1).getValue();
  var today = new Date();
  var termDay = Math.floor((today - startDay) / 86400000);

  // タイトルを取得
  var titleSheet = spreadsheet.getSheetByName("gas_title");
  var titleList = titleSheet.getRange(weekId, 1, 1, 5).getValues().flat();

  // 授業URLを取得
  var classLinkSheet = spreadsheet.getSheetByName("gas_classLink");
  var classLinkList = classLinkSheet.getRange(weekId, 1, 1, 5).getValues().flat();

  // 授業のタイプを取得
  var typeSheet = spreadsheet.getSheetByName("calendar_type");
  var typeList = typeSheet.getRange(termDay + 2, 3, 1, 5).getValues().flat();

  // ZoomLinkを取得
  var commonZoomLinkSheet = spreadsheet.getSheetByName("gas_classLink");
  var commonZoomLinkList = commonZoomLinkSheet.getRange(weekId, 1, 1, 5).getValues();
  var dayZoomLinkSheet = spreadsheet.getSheetByName("calendar_zoomLink");
  var dayZoomList = dayZoomLinkSheet.getRange(termDay + 2, 3, 1, 5).getValues().flat();

  // 返却用データを準備
  for(var i=0; i<=titleList.length; i++) {
    if (titleList[i] == null || titleList[i] == '') { continue }
    var zoomLink = '';
    if (commonZoomLinkList[i] != null && commonZoomLinkList[i] != '') {
      zoomLink = commonZoomLinkList[i];
    } else if (dayZoomList[i] != null && dayZoomList[i] != '') {
      zoomLink = dayZoomList[i];
    }

    classData.push(
      {
        'period': i,
        'name': titleList[i],
        'classLink': classLinkList[i],
        'type': parseInt(typeList[i]),
        'zoomLink': zoomLink,
      }
    );
  }

  return classData;
}
