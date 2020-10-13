const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','menu')


const navLink = document.querySelectorAll('.link')

function linkAction(){
    const navMenu = document.getElementById('menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-title', {})
sr.reveal('.home-scroll', {delay: 200})
sr.reveal('.home-img', {origin:'right', delay: 400})


sr.reveal('.about-img', {delay: 500})
sr.reveal('.about-subtitle', {delay: 300})
sr.reveal('.about-profession', {delay: 400})
sr.reveal('.about-text', {delay: 500})
sr.reveal('.about-social-icon', {delay: 600, interval: 200})


sr.reveal('.skills-img', {interval: 200})


sr.reveal('.portfolio-img', {interval: 200})


sr.reveal('.contact-subtitle', {})
sr.reveal('.contact-text', {interval: 200})
sr.reveal('.contact-input', {delay: 400})
sr.reveal('.contact-button', {delay: 600})


// function validateForm(){
// 	var name = document.forms["post"]["your-name"].value;
// 	var email = document.forms["post"]["your-email"].value;
// 	var message = document.forms["post"]["your-message"].value;

// 	if (name.length<1) {
//         document.getElementById('error-name').innerHTML = " Please Enter Your Name *"
//     }
//     if (email.length<1) {
//         document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
//     }

//     }
//     if (message.length<1) {
//         document.getElementById('error-message').innerHTML = " Please Enter Your Message *";
//     }          
//     if(name.length<1 || email.length<1 || message.length<1){
//        	return false;
//     }            

// (function() {
//     emailjs.init("user_UfccqHfPSZqfYub04ZRlM"); //please encrypted user id for malicious attacks
//   })();
// //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
//   var templateParams = {
//     to_name: 'xyz',
//     from_name: 'abc',
//     message_html: 'Please Find out the attached file'
//   };

//   emailjs.send('loredana', 'YOUR_TEMPLATE_ID', templateParams)
//     .then(function(response) {
//       console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//       console.log('FAILED...', error);
//     });


// var myform = $("form#myform");
// myform.submit(function(event){
// 	event.preventDefault();

//   // Change to your service ID, or keep using the default service
//   var service_id = "gmail";
//   var template_id = "template_OajPEu62";

//   myform.find("button").text("Sending...");
//   emailjs.sendForm(service_id,template_id,myform[0])
//   	.then(function(){ 
//     	alert("Sent!");
//        myform.find("button").text("Send");
//     }, function(err) {
//        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//        myform.find("button").text("Send");
//     });
//   return false;
// });
