
function validateForm(){
    let email = document.getElementById('email').value;
    let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailRegex)){
        alert("Enter valid mail.");
        return false;
    }

    let password = document.getElementById('password').value;
    if(password.length < 8) {
        alert("Password > 8 char.");
        return false;
    }
    return true;
}





document.getElementById('theme-toggle').addEventListener('click', function () {
    togglePage('theme-toggle');
});

function togglePage(page) {
    if (page === 'theme-toggle') {
        toggleDarkMode();
    } else {
        window.location.href = page;
    }
}

function toggleDarkMode() {
    let body = document.body;
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}


