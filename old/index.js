var typed = new Typed('.loves-animated', {
    strings: ["", "data science.", "machine learning.", "building amazing things.", "solving challenging problems."],
    typeSpeed: 40,
    backSpeed: 70,
    backDelay: 3500,
    startDelay: 300,
    cursorChar: '|',
    onComplete: () => {
        setTimeout(() => {
            var x = document.querySelector('.typed-cursor')
            x.parentNode.removeChild(x);
        }, 1000)
    }
    // loop: true
});

document.getElementById('rm').innerText = "aditya" + "." + "rathod" + "@" + "utdallas.edu";