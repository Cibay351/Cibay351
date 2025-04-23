const nama = "Kamal Abdul Mujib";
let usia = 11;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
  let generasi;
  
  if (usia > 2 && usia < 10) {
    generasi = "gen BETA";
  } 
  else if (usia > 10 && usia < 18) {
    generasi = "gen ALPA";
  } 
  else if (usia > 18 && usia < 26) {
    generasi = "gen Z";
  } 
  else if (usia > 26) {
    generasi = "generasi milenial";
  } 
  else { 
      generasi = "generasi apa";
  }
  return biodata.innerHTML = generasi;
}

console.log (nama);
console.log (usia);

console.log (`Nama saya adalag ${nama} dan usia saya sekarang ${usia} tahun`);

generateBiodata();