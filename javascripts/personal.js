function livetype(inputFieldId, outputId) {
    const inputField = document.getElementById(inputFieldId);
    const output = document.getElementById(outputId);
  
    inputField.addEventListener('input', function() {
      output.textContent = inputField.value;
    });
}
  livetype('name','r-name');
  livetype('surname','r-surname');
  livetype('email','r-email');
  livetype('phone_number','r-phone');
  livetype('about_me','r-about_me');

//   photo

const imageInput = document.getElementById('image');
const resumeImage = document.getElementById('r-image');

imageInput.addEventListener("change", function() {
  const reader = new FileReader();

  reader.onload = function(event) {
    resumeImage.src = event.target.result;
  };

  reader.readAsDataURL(imageInput.files[0]);
});



// validations
let nameValid = true;
let surnameValid = true; 

// check georgian language
function checkLang(text = '') {
    let spells = text.split('');
    for(let i = 0; i < spells.length; i++){
        if(!(/[ა-ჰ]/).test(spells[i]) && spells[i] !== ' '){
            return false;
        }
    }
    return true;
};

const firstname = document.querySelector('.name');
const name = document.getElementById('name');
name.value = localStorage.getItem('name') ? localStorage.getItem('name') : "";

name.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
        firstname.classList.remove('success');
        firstname.classList.add('error');
        nameValid = false;
    }else if(el.target.value.trim().length < 2){
        firstname.classList.remove('success');
        firstname.classList.add('error');
        nameValid = false;
    }else if(!checkLang(el.target.value.trim())){
        firstname.classList.remove('success');
        firstname.classList.add('error');
        nameValid = false;
    }else{
        localStorage.setItem('name', el.target.value.trim());
        firstname.classList.remove('error');
        firstname.classList.add('success');
        nameValid = true;
    }
})

const lastname = document.querySelector('.surname');
const surname = document.getElementById('surname');

surname.value = localStorage.getItem('surname') ? localStorage.getItem('surname') : "";

surname.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
        lastname.classList.remove('success');
        lastname.classList.add('error');
        surnameValid = false;
    }else if(el.target.value.trim().length < 2){
        lastname.classList.remove('success');
        lastname.classList.add('error');
        surnameValid = false;
    }else if(!checkLang(el.target.value.trim())){
        lastname.classList.remove('success');
        lastname.classList.add('error');
        surnameValid = false;
    }else{
        localStorage.setItem('surname', el.target.value.trim());
        lastname.classList.remove('error');
        lastname.classList.add('success');
        surnameValid = true;
    }
})

// PHOTO
const photoContainer = document.querySelector('.photo-upload');
const photoInput = document.getElementById('image');

photoInput.addEventListener('change', (el) => {
    if(!el.target.value){
        phoneContainer.classList.add('error')
        // აქ უნდა დავამატო გაფრთხილების icon
    }
})

// ABOUT ME არა სავალდებულო
const aboutContainer = document.querySelector('.about-me-container');
const aboutMeTextarea = document.getElementById('about_me');

// EMAIL
let emailValid = true;
const emailContainer = document.querySelector('.email-container');
const emailInput = document.getElementById('email');

const redberryMail = /^([A-Za-z0-9\._]+)@redberry.ge$/;
const mailValidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

emailInput.value = localStorage.getItem('email') ? localStorage.getItem('email') : '';
emailInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
        emailContainer.classList.remove('success');
        emailContainer.classList.add('error');
        emailValid = false;
    }else if(!el.target.value.match(mailValidation)){
        emailContainer.classList.remove('success');
        emailContainer.classList.add('error');
        emailValid = false;
    }else if(!el.target.value.match(redberryMail)){
        emailContainer.classList.remove('success');
        emailContainer.classList.add('error');
        emailValid = false;
    }else{
        localStorage.setItem('email', el.target.value.trim());
        emailContainer.classList.remove('error');
        emailContainer.classList.add('success');
        emailValid = true; 
    }
});



// PHONE
// const phoneContainer = document.querySelector('.phone-container');
// const phoneInput = document.getElementById('phone_number');
