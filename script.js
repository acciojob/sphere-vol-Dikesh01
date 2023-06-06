// function volume_sphere() {
//     //Write your code here
// 	var volume;
// 		var radius = document.getElementById("radius").value;
// 		radius = (4/3)*Math.PI*Math.pow(radius,3);
// 		volume = volume.toFixed(4);
// 	document.getElementById("volume").value = volume;
// 	return false;
  
// } 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// -----------------
let clickfn = document.getElementById("submit");
clickfn.addEventListener("click", getVol);

function getVol(){
  let radius = document.getElementById("radius").value;
  let volume = 4/3*3.14*radius*radius*radius;
  console.log(volume);
  document.getElementById("volume").innerText = volume;
}
// getVol();