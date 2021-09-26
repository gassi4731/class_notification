var postUrl = ""; // SlackのPost先のURL
var username = "授業お知らせBot"; // 通知時に表示されるユーザー名
var icon = ":hatching_chick:"; // 通知時に表示されるアイコン

function sendToSlack(classMessage) {
	var jsonData = {
		username: username,
		icon_emoji: icon,
		blocks: classMessage,
	};
	var payload = JSON.stringify(jsonData);

	var options = {
		method: "post",
		contentType: "application/json",
		payload: payload,
	};

	UrlFetchApp.fetch(postUrl, options);
}
