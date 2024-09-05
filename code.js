function toggleText(id) {
    const textElement = document.getElementById(id);
    if (textElement.style.maxHeight) {
        textElement.style.maxHeight = null;
    } else {
        textElement.style.maxHeight = textElement.scrollHeight + "px";
    }
}

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Text for Project Descriptions
function toggleText(id) {
    const text = document.getElementById(id);
    text.classList.toggle('expanded');
    if (text.classList.contains('expanded')) {
        text.style.maxHeight = 'none';
    } else {
        text.style.maxHeight = '100px';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelector('.social-links');
    let offset = -100;

    const slideIn = () => {
        socialLinks.style.transform = `translateX(${offset}%)`;
        offset += 20;
        if (offset > 0) {
            offset = -100;
        }
    };

    setInterval(slideIn, 2000); // Slide every 2 seconds
});


