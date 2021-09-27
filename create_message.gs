var userId = ""; // SlackのメンションするユーザーID
var youbi = ["日", "月", "火", "水", "木", "金", "土"];
var numberString = [
	":one:",
	":two:",
	":three:",
	":four:",
	":five:",
	":six:",
	":seven:",
];
var startTimeString = [
	"09:00",
	"10:45",
	"12:55",
	"14:40",
	"16:20",
	"18:00",
	"19:40",
];
var classTypeMessage = [
	"対面のみ",
	"Zoomのみ",
	"対面とZoomの併用",
	"対面推奨（Zoomもあり）",
	"対面（後日共有あり）",
	"Zoom（後日共有あり）",
	"対面とZoomの併用（後日共有あり）",
	"対面推奨（Zoomもあり/後日共有あり）",
  "オンデマンド"
];

function createTopMessage() {
	// 今日の日付を取得
	var date = new Date();
	var dateFormat =
		Utilities.formatDate(date, "Asia/Tokyo", "yyyy/MM/dd") +
		"(" +
		youbi[date.getDay()] +
		")";

	// メッセージを作成
	var message = {
		type: "section",
		text: {
			type: "mrkdwn",
			text:
				"<@" +
				userId +
				"> おはようございます:sunny: \n今日は" +
				dateFormat +
				"です！ 今日もがんばろう！:muscle:",
		},
	};

	return message;
}

function createSection(period, name, classLink, type, zoomLink) {
	var message = {};

	Logger.log(type);
	message.type = "section";
	message.text = {
		type: "mrkdwn",
		text:
			numberString[period] +
			" *" +
			name +
			"*\n開始時刻: " +
			startTimeString[period] +
			" | 授業サイトは<" +
			classLink +
			"|こちら> | 今日は" +
			classTypeMessage[type] +
			"での授業です",
	};
	if (zoomLink != null && zoomLink != "") {
		message.accessory = {
			type: "button",
			url: zoomLink,
			text: {
				type: "plain_text",
				emoji: true,
				text: "参加する",
			},
		};
	}

	return message;
}

function createDivider() {
	return { type: "divider" };
}
