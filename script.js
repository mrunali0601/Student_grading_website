// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  const calcy = () =>{
    let math = document.getElementById('math').value ;
    let his = document.getElementById('his').value ;
    let lang = document.getElementById('lang').value ;
    let mus = document.getElementById('mus').value ;
    let gro = document.getElementById('gro').value ;
    let total = parseFloat(math) +parseFloat(his) + parseFloat(lang) + parseFloat(mus) + parseFloat(gro) ;
    let parc = (total/500)*100 ;
    let grade=  "";
    if(total >= 35){
      grade = " Congratulation!! you are pass"

    }else{
      grade = "you are fail !! better luck next time"
    }
    document.getElementById('showdata').innerHTML = ` you have got ${total} out of 500 and persantage is ${parc}%. ${grade}`
  }

  