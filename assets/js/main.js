/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/* handling Form */

let tg = {
    token: "5558392279:AAHzj1ZwLFxusJrPddvQzChYKVpWxyFYTTQ", // Your bot's token that got from @BotFather
    chat_id: "728907666" // The user's(that you want to send a message) telegram chat id
}

/**
 * By calling this function you can send message to a specific user()
 * @param {String} the text to send
 *
*/


async function sendMessage()

{
    var form = document.querySelector("#contactForm");
    
   
       var name="Name : "+form.querySelector('input[name = "name"]').value+"\n"+  "---------------------------------------" + "\n"
       var phone="Phone : "+form.querySelector('input[name = "phone"]').value+"\n" + "---------------------------------------" + "\n"
       var email="Email : "+form.querySelector('input[name = "email"]').value+"\n" + "---------------------------------------" + "\n"
       var message="Message : "+form.querySelector('textarea[name = "message"]').value+"\n"  +"---------------------------------------" + "\n"
    data = name+phone+email+message
    //alert("Sending...");
    //var formData=JSON.stringify(("#contactForm").toString)

    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request
    var text = data
    
    console.log(data)
    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text: data // The text to send
    };
    //var XMLHttpRequest = require('xhr2');

    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));
};
