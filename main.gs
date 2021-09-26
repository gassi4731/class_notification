var classMessage = []; // 授業内容のお知らせ

function mainFunction() {
	classMessage.push(createTopMessage());
	createClassMessage();
	sendToSlack(classMessage);
}

function createClassMessage() {
	classMessage.push(createDivider());
	var classData = getClassData();
	classData.forEach(function (value) {
		classMessage.push(
			createSection(
				value.period,
				value.name,
				value.classLink,
				value.type,
				value.zoomLink
			)
		);
	});
	classMessage.push(createDivider());
}
