// -----------first part----------------


function getNodesTexts(selector) {
	const elementsList = document.querySelectorAll(selector)
	const elementsTextsList = []
	for (const element of elementsList) {
		elementsTextsList.push(element.innerText)
	}
	return elementsTextsList
}

function randomSortElementsTexts(targetArr) {
	return [...targetArr].sort(() => Math.random() - 0.5)
}

function constructElementsMarkup(tag, className, textsList) {
	return textsList.reduce((markupStr, element) => {
		const liMarkup = `<${tag} class="${className}">${element}</${tag}>`
		markupStr += liMarkup
		return markupStr
	}, "")
}

function replaceMarkup(selector, markupString) {
	const element = document.querySelector(selector)
	element.innerHTML = markupString
}

function firstTaskManager() {
	const SELECTOR_STR = "randomListItem"
	setInterval(() => {
		const liElementsTextsList = getNodesTexts(`.${SELECTOR_STR}`)
		const sortedTextsList = randomSortElementsTexts(liElementsTextsList)
		const liMarkupString = constructElementsMarkup(
			"li",
			SELECTOR_STR,
			sortedTextsList
		)

		replaceMarkup(".randomList", liMarkupString)
	}, 5000)
}

function main() {
	firstTaskManager()
}

main()

// -----------second part----------------

function getUserBrowserInfo() {
	const browserInfoObj = {
		userScreenWidth: screen.availWidth,
		userScreenHeight: screen.availHeight,
		browserUserAgent: navigator.userAgent,
		userPlatform: navigator.platform
	}
	return browserInfoObj
}

function replaceInfo(browseInfoFunk) {
	const element = document.querySelector('#browserInfo').children
	const obj = {} = browseInfoFunk
	for (let i = 0; i < element.length;) {
		for (prop in obj) {
			const tempStr = element[i].innerText.replace("unknown", `${obj[prop]}`)
			element[i].innerText = tempStr
			i++
		}
	}
	return element
}

function mainFunk() {
	replaceInfo(getUserBrowserInfo())
}

setTimeout(() => {
	mainFunk()
	setTimeout(() => {
		changesTag("h3")
	}, 5000)
}, 4600)

// -----------third part----------------

function changesTag(tagName) {
	const header = document.querySelector(tagName)
	return header.outerHTML = '<h1>NEW LIST HEADER</h1>'
}

// -----------forth part----------------


function getDateInTightFormat() {
	const myDate = new Date()
	let stringMyDate = myDate.toString()
	let nowDateSplit = stringMyDate.split(' ', 4)
	let strDate = nowDateSplit.toString()
	for (let i = 0; i < 3; i++) {
		strDate = strDate.replace(",", " ")
	}
	return strDate
}

function dateInPage(nowDate, tagName) {
	document.querySelector(tagName).innerText = nowDate
}

function chengecolor(elem) {
	elem.setAttribute("style", "color: red;")
}

function mainDate() {
	dateInPage(getDateInTightFormat(), "nav")
	chengecolor(navbar)
}

mainDate()