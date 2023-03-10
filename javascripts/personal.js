// validations
let nameValid = true;
let surnameValid = true; 
let emailValid = true;
let mobileValid = true;
let photoValid = true;

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
let imageContainer = document.querySelector('.image-container')

imageInput.addEventListener("change", function() {
  const reader = new FileReader();

  reader.onload = function(event) {
    // Convert the image data to a binary string
    const binaryData = event.target.result.split(',')[1];

    // Save the binary data to local storage
    localStorage.setItem('image', binaryData);

    // Create an image element and set its source to the data URL
    const resumeImage = document.createElement('img');
    resumeImage.src = event.target.result;
    imageContainer.appendChild(resumeImage);
  };

  // Read the image file as a data URL
  reader.readAsDataURL(imageInput.files[0]);
});

const imageData = localStorage.getItem('image');
if (imageData) {
  // Create an image element and set its source to the binary data
  const image = new Image();
  image.src = 'data:image/png;base64,' + imageData;

  // Append the image to the image container
  imageContainer.appendChild(image);
}

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
const rName = document.getElementById('r-name');
rName.innerHTML = localStorage.getItem('name') ? localStorage.getItem('name') : "";

name.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
        localStorage.setItem('name', el.target.value.trim());
        firstname.classList.remove('success');
        firstname.classList.add('error');
        nameValid = false;
    }else if(el.target.value.trim().length < 2){
        localStorage.setItem('name', el.target.value.trim());
        firstname.classList.remove('success');
        firstname.classList.add('error');
        nameValid = false;
    }else if(!checkLang(el.target.value.trim())){
        localStorage.setItem('name', el.target.value.trim());
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
const rSurname = document.getElementById('r-surname');
rSurname.innerHTML = localStorage.getItem('surname') ? localStorage.getItem('surname') : "";

surname.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
        localStorage.setItem('surname', el.target.value.trim());
        lastname.classList.remove('success');
        lastname.classList.add('error');
        surnameValid = false;
    }else if(el.target.value.trim().length < 2){
        localStorage.setItem('surname', el.target.value.trim());
        lastname.classList.remove('success');
        lastname.classList.add('error');
        surnameValid = false;
    }else if(!checkLang(el.target.value.trim())){
        localStorage.setItem('surname', el.target.value.trim());
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
    
    if(photoInput.files.length > 0){
        photoContainer.classList.remove('error')
        photoContainer.classList.add('success')
        photoValid = true;
    }else{
        photoContainer.classList.remove('success')
        photoContainer.classList.add('error');
        photoValid = false;
    }
})
  
// ABOUT ME არა სავალდებულო
const rAbout = document.getElementById('r-about_me');
//rightcontaner red text
const about = document.querySelector('.about-me');
const aboutContainer = document.querySelector('.about-me-container');
const aboutMeTextarea = document.getElementById('about_me');
aboutMeTextarea.value = localStorage.getItem('about_me') ? localStorage.getItem('about_me') : "";
rAbout.innerHTML = localStorage.getItem('about_me') ? localStorage.getItem('about_me') : "";

aboutMeTextarea.addEventListener('change', (el) => {
    if(el.target.value){
        about.style.display = 'block';
        aboutMeTextarea.classList.add('borderGreen')
        localStorage.setItem('about_me', el.target.value);  
        localStorage.setItem("displayAbout", about.style.display); 
    }else{
        aboutMeTextarea.classList.remove('borderGreen')
        about.style.display = 'none';
    }
});

// EMAIL
const rEmail = document.getElementById('r-email');
const sabachka = document.getElementById('sabachka');
const emailContainer = document.querySelector('.email-container');
const emailInput = document.getElementById('email');

const redberryMail = /^([A-Za-z0-9\._]+)@redberry.ge$/;
const mailValidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
rEmail.innerHTML = localStorage.getItem('email') ? localStorage.getItem('email') : '';

emailInput.value = localStorage.getItem('email') ? localStorage.getItem('email') : '';
emailInput.addEventListener('change', (el) => {
    if(el.target.value){
        sabachka.style.display = 'block'
    }else{
        sabachka.style.display = 'none'
    }
    if(!el.target.value.trim()){
        localStorage.setItem('email', el.target.value.trim());
        emailContainer.classList.remove('success');
        emailContainer.classList.add('error');
        emailValid = false;
    }else if(!el.target.value.match(mailValidation)){
        localStorage.setItem('email', el.target.value.trim());
        emailContainer.classList.remove('success');
        emailContainer.classList.add('error');
        emailValid = false;
    }else if(!el.target.value.match(redberryMail)){
        localStorage.setItem('email', el.target.value.trim());
        emailContainer.classList.remove('success');
        emailContainer.classList.add('error');
        emailValid = false;
    }else{
        localStorage.setItem("displaySabachka", sabachka.style.display); 
        localStorage.setItem('email', el.target.value.trim());
        emailContainer.classList.remove('error');
        emailContainer.classList.add('success');
        emailValid = true; 
    }
});


// PHONE
function checkNumber(number) {
    let withoutSpace = number.replaceAll(' ', '');
    let geoNum = withoutSpace.slice(0, 5);
    if(geoNum == '+9955' && withoutSpace.length === 13){
        return true;
    } else {
        return false;
    }
};
const phoneIcon = document.getElementById('phoneIcon');
const phoneContainer = document.querySelector('.phone-container');
const phoneInput = document.getElementById('phone_number');
phoneInput.value = localStorage.getItem('phone_number') ? localStorage.getItem('phone_number') : '';
const rPhone = document.getElementById('r-phone');
rPhone.innerHTML = localStorage.getItem('phone_number') ? + localStorage.getItem('phone_number') : '';

phoneInput.addEventListener('change', (el) => {
    if(el.target.value){
        phoneIcon.style.display = 'block'
    }else{
        phoneIcon.style.display = 'none'
    }
    if(!el.target.value.trim()){
        localStorage.setItem('phone_number', el.target.value.trim().replaceAll(' ', ''));
        phoneContainer.classList.add('error');
        phoneContainer.classList.remove('success');
        mobileValid = false;
    }else if(!checkNumber(el.target.value)) {
        localStorage.setItem('phone_number', el.target.value.trim().replaceAll(' ', ''));
        phoneContainer.classList.add('error');
        phoneContainer.classList.remove('success');
        mobileValid = false;
    } else{
        localStorage.setItem("displayPhone", phoneIcon.style.display); 
        localStorage.setItem('phone_number', el.target.value.trim().replaceAll(' ', ''));
        phoneContainer.classList.remove('error');
        phoneContainer.classList.add('success');
        mobileValid = true;
    }
});

 
window.onload = function() {
    var displayAbout= localStorage.getItem("displayAbout");
    var displayPhone = localStorage.getItem("displayPhone");
    var displaySabachka = localStorage.getItem("displaySabachka");

    if (displayAbout) {
      about.style.display = displayAbout;
    }
    if (displaySabachka) {
      sabachka.style.display = displaySabachka;
    }
    if(displayPhone) {
        phoneIcon.style.display = displayPhone;
    }
};

const form = document.getElementById('form');
form.addEventListener('submit', (el) => {
    el.preventDefault();
    if(!name.value.trim()){
        firstname.classList.remove('success');
        firstname.classList.add('error');
        nameValid = false;
    }
    if(!surname.value.trim()){
        lastname.classList.remove('success');
        lastname.classList.add('error');
        surnameValid = false;
    }
    if(photoInput.files.length <= 0 && !localStorage.getItem('image')){
        photoContainer.classList.add('error')
        photoValid = false;
    }
    if(!emailInput.value.trim()){
        emailContainer.classList.add('error');
        emailValid = false;
    }
    if(!phoneInput.value.trim()){
        phoneContainer.classList.add('error');
        mobileValid = false;
    }
    if(
        nameValid &&
        surnameValid &&
        photoValid &&
        emailValid &&
        mobileValid
    ) {
        window.location.href = "experience.html";
    }
})