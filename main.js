
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard.")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pNode = document.querySelector("p#compoundInvestment")
  var double = pNode.innerHTML * 2
  pNode.innerHTML = double
})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
var circle = document.querySelector('#circle-bw')
	if (circle.style.background === 'black') {
   		circle.style.background = 'white'
 }
   else {				
   		circle.style.background = 'black'
   	}
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var redCircle = document.querySelector(".circle-red")
  var redCircleStyles = window.getComputedStyle(redCircle)
  //console.log(redCircleStyles)
  var redCircleWidth = parseInt(redCircleStyles.width)
  redCircle.style.width = (redCircleWidth * 2) + "px"

  var redCircleHeight = parseInt(redCircleStyles.height)
  redCircle.style.height = (redCircleHeight * 2) + "px"

	if (redCircleWidth >= 320) {
 	redCircle.style.width = 40 + "px"
 	redCircle.style.height = 40 + "px"
}
  console.log(redCircleWidth)
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

    var removeNode = document.querySelector('#userList')
  var inactiveUsers = document.querySelectorAll('.inactive')
  while (inactiveUsers.length){
  	removeNode.removeChild(inactiveUsers[0])
  	inactiveUsers = document.querySelectorAll('.inactive')
  }
})

//   var listItems = removeNode.children
// //this function will look at all the children of the node
//   for(var i = 0; i < listItems.length; i++){
//     var liNode = listItems[i]
//     //check whether its class includes "done"
//     if(liNode.classList.contains('Inactive')){
//       // remove it from its parent
//       removeNode.removeChild(liNode)

//     }
//   }

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var row = document.querySelector("#reverse-squares .answer-box")
 var rowOfSquares = row.querySelectorAll(".square")
 for (var i = rowOfSquares.length; i--;) {
 	row.appendChild(rowOfSquares[i])
 }
})


document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var taskList = document.querySelector("#pig-latin .answer-box")
  var listItems = taskList.querySelectorAll("li")
  for (var i = 0; i < listItems.length; i++) {
	var split = listItems[i].innerHTML.split("")
	//console.log(split)
	var flipped = split.reverse()
	//console.log(flipped)
	listItems[i].innerHTML = flipped.join("")
	// console.log(backwards)
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  //REMEMBER THIS ONE FOR FINAL PROJECT
	var image = document.querySelector("#city-img")
	var srcCode = image.src.length
	var i = parseInt(image.src.substring(srcCode-1))
	i = i + 1
	image.src = image.src.substring(0, [srcCode-1]) + i
})