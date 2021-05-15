let cel_inp= document.getElementById("cel-inp");
let fah_inp= document.getElementById("fah-inp");
cel_inp.addEventListener('input', function () {
     let cel= cel_inp.value;
     let fah_out= (cel * 9/5) + 32;
     cel_inp.value= cel_out ;
     if (!Number.isInteger(fah_out)) {
          fah_out =  fah_out.toFixed(4);
     }
     cel_inp.value= cel_out ;
    
})
fah_inp.addEventListener('input', function () {
     let fah= fah_inp.value;
     let cel_out= (fah - 32) * 5/9
    
     if (!Number.isInteger(cel_out)) {
          cel_out =  cel_out.toFixed(4);
      }
      cel_inp.value= cel_out ;
})