const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElement = document.querySelector('.animate');
const hiddenElement1 = document.querySelector('.circlemenu');
observer.observe(hiddenElement);
observer.observe(hiddenElement1);
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } 
    else {
        navbar.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const title = document.querySelector('.title i');
    
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
