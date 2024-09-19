// document.getElementById('button-login').addEventListener('click', function(event){
//     // prevent default reload page
//     event.preventDefault();

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     if(phoneNumber === '01854286370' && pinNumber === '123456'){

//     }
//     else{
//         alert('Wrong phone number or pin');
//     }
// })


document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;


    if (phoneNumber === '01854286370' && pinNumber === '1234') {
        window.location.href = '/home.html';
    }
    else {
        alert('Please enter phone number or pin');
    }
});