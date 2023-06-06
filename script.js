function volume_sphere() {
    let radius = document.getElementById('radius').value;
    console.log(radius);
    let ans;
    if (radius) {
        ans = (4 * Math.PI * Math.pow(radius, 3)) / 3;
    }
    let volume = document.getElementById('volume');
    if (ans != undefined) {
        volume.value = ans.toFixed(4);
    }
    return false;
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