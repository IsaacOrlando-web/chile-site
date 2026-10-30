const btn=document.querySelector('.menu'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open)});
