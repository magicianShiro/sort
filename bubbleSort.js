/**
 * 冒泡排序
 */

let Bubble = function(option) {
	this._init(option)
}

Bubble.prototype = {
	constructor: Bubble,
	_init: function(option) {
		this.arr = option.arr
		this.liObjs = option.liObjs
	},
	start: function() {
		this.bubble = this.sort()
		this.bubble.next()
	},
	// 排序
	sort: function* (){
		var newArr = [].slice.call(this.arr)
		for(let i = 0; i < newArr.length - 1; i++){
			for(let j = 0; j < newArr.length -1 - i ; j++) {
				yield this.changeLiColor(j, j+1)
				if(newArr[j] > newArr[j+1]) {	
					yield this.changeLiHeight(j, j+1)	

					// 交换li的位置
					var temp = newArr[j]
					newArr[j] = newArr[j+1]
					newArr[j+1] = temp
					// [newArr[j], newArr[j+1]] = [newArr[j+1], newArr[j]]
				}
			}
		}

		// 全部变为灰色
		this.liObjs.forEach(function(liObj){
			liObj.style.backgroundColor = '#ccc'
		})
	},
	// 高亮排序的li的颜色
	changeLiColor: function(currentNum, targetNum){
		// 排他
		this.liObjs.forEach(function(liObj){
			liObj.style.backgroundColor = '#ccc'
		})

		this.liObjs[currentNum].style.backgroundColor = 'cyan'
		this.liObjs[targetNum].style.backgroundColor = 'cyan'

		
		setTimeout(() => {
			this.bubble.next()
		}, 50)
	},
	// 改变排序后的li高度
	changeLiHeight: function(currentNum, targetNum){
		var temp = this.liObjs[currentNum].style.height
		this.liObjs[currentNum].style.height = this.liObjs[targetNum].style.height 
		this.liObjs[targetNum].style.height = temp

		setTimeout(() => {
			this.bubble.next()
		}, 50)
	}
}