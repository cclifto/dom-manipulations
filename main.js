
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
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})