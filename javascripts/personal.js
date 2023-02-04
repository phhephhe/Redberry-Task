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