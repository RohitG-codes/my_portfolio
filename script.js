var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for( let tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for( let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

var sidemen=document.getElementById('sidemenu');
function openmenu(){
    sidemen.style.right='0';   
}
function closemenu(){
    sidemen.style.right='-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzEOgSvZ1lUEUK1Rr5DSOTMoC0TSylp6VcKN7pqkB9Q_8DSTM8C6LU24vtgCMns20e/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById('msg');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Succesfully"
        setTimeout(function(){msg.innerHTML=""},5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
})

