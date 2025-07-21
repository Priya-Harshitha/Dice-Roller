function roll(){
   let num = document.getElementById('num').value ;
   let dr = document.getElementById('dr');
   let di = document.getElementById('di');
   num = Number(num);
   let values = [];
   let images = [];
   for(let i = 0; i < num ; i++){
      const r=Math.floor(Math.random()*6)+1;
      console.log(r);
      values.push(r);
      images.push(`<img src="Dice-images/${r}.png" alt="Dice-${r}">`);
   }
   dr.textContent = `dice: ${values.join(", ")}`;
   di.innerHTML = images.join("");
}