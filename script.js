//your JS code here. If required.
const btn = document.getElementById("btn")
btn.addEventListener('click', myFunction)
async function myFunction() {
	let userInput = document.getElementById("text").value;
	let userDelay = document.getElementById("delay").value;
	await setTimeout(()=>{
		document.getElementById("output").innerHTML = userInput;
	}, userDelay)
  
}