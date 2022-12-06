let count =0;
let output = document.getElementById("result")
function decrement(){
	count -= 1
	output.textContent=count
}

function increment(){
	count += 1
	output.textContent=count
}

function reset(){
	count =0
	output.textContent=count
}