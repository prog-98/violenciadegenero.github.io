let bar = document.querySelector('.bar')
let topBtn = document.querySelector('.topBtn')
let btn = document.querySelector('.topBtn i')
let  = document.querySelector('.btn')
let btn2 = document.querySelector('.btn a')
let nav = document.querySelector('nav ul')

bar.addEventListener('click',()=>{
    bar.classList.toggle('active')
    nav.classList.toggle('active')
})

topBtn.addEventListener('click',()=>{
    btn.click()
})




var options = {
    strings: ['Verbal', 'Física', 'Psicológica', 'Sexual'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  };
  
  var typed = new Typed('.typing1', options);


  ScrollOut({
    targets: '.img, .aboutText , .box, div.left, div.right'
  })
  ScrollOut({
    targets: '.header',
    offset: 50
  })
 