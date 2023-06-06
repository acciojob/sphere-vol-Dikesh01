function volume_sphere() {
    //Write your code here
  let radius=document.getElementById('radius').value;
  console.log(radius);
  let ans;
  if(radius){
  ans=(4*3.14*radius*radius*radius)/3;
  }
  let volume=document.getElementById('volume');
//   console.log(volume);
if(ans!=undefined){
    volume.value=ans;
}

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// -----------------
// let clickfn = document.getElementById("submit");
// clickfn.addEventListener("click", getVol);

// function getVol(){
//   let radius = document.getElementById("radius").value;
//   let volume = 4/3*3.14*radius*radius*radius;
//   console.log(volume);
//   document.getElementById("volume").innerText = volume;
// }
// // getVol();