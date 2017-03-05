// 定义li的个数
var liNum = 15
// 定义生成的个数
var count = 30
// 获取元素
var ulObj = document.querySelector('ul')
var h2 = document.querySelector('h2')
// 清楚能放下li的最大值
var max = Math.floor(getStyle(ulObj, 'width') / liNum)


// 获取最小值到最大值之间的随机数
function range(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min)
}

// 生成数据不同的随机数组
function getRandomArr(max, min=1){
	count < (max - min + 1) ? count : (max - min + 1)
	var currentArr = []
	while(count){
		var random = range(min, max)
		if(!currentArr.includes(random)){
			count--
			currentArr.push(random)
		}
	}
	return currentArr
}

// 简化console.log
function log(param){
	return console.log(param)
}

// 获取样式
function getStyle(targetObj, property) {
	return window.getComputedStyle ? parseInt(window.getComputedStyle(targetObj, null)[property]) : parseInt(targetObj.currentStyle[property])
}

// 获取随机数
var randomArr = getRandomArr(max, 10)

// 根据数组的值,等到百分比,最大是max
var persentArr = randomArr.map((num) => {
	return num/max
})


// 动态生成li
persentArr.forEach(function(num, index){
	var liObj = document.createElement('li')
	liObj.style.width = liNum + 'px'
	liObj.style.height = num*getStyle(ulObj, ['height']) +'px'
	liObj.style.left = (index+1) * (liNum+5) +'px'
	ulObj.appendChild(liObj)
})


var liObjs = document.querySelectorAll('li')
