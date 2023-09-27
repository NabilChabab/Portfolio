(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

var typed = new Typed(".typing", {
    strings: ["", "Mobile Developer", "Web Developer", "UI/UX Designer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactProject.value === '') {

        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the inputs fields ⚠️'
    } else {
        emailjs.sendForm('service_fct69q3', 'template_nlmhcsr', '#contact-form', 'znBwCPFCSPTb454dc')
            .then(() => {
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message Sent Successfully ✅'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS ! SOMETHING WENT WRONG...', error)
            })

        contactName.value = ''
        contactEmail.value = ''
        contactSubject.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)