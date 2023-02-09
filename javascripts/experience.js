function livetype(inputFieldId, outputId) {
    const inputField = document.getElementById(inputFieldId);
    const output = document.getElementById(outputId);
  
    inputField.addEventListener('input', function() {
      output.textContent = inputField.value;
    });
};

livetype('position','r-position');
livetype('employer','r-employer');
livetype('start_date','r-start_date');
livetype('due_date','r-due_date');
livetype('due_date','r-due_date');
livetype('description','r-description');

// resume
// name
const rName = document.getElementById('r-name');
rName.innerHTML = localStorage.getItem('name') ? localStorage.getItem('name') : "";
// surname
const rSurname = document.getElementById('r-surname');
rSurname.innerHTML = localStorage.getItem('surname') ? localStorage.getItem('surname') : "";
// photo
let expImage = document.getElementById('r-image');
expImage.src = localStorage.getItem("image");
// email
const rEmail = document.getElementById('r-email');
rEmail.innerHTML = localStorage.getItem('email') ? localStorage.getItem('email') : '';
// phone
const rPhone = document.getElementById('r-phone');
rPhone.innerHTML = localStorage.getItem('phone_number') ? + localStorage.getItem('phone_number') : '';
// about me
const rAbout = document.getElementById('r-about_me');
rAbout.innerHTML = localStorage.getItem('about_me') ? localStorage.getItem('about_me') : "";

if(localStorage.getItem('about_me')){
  document.querySelector('.about-me').style.display = "block";
}else{
  document.querySelector('.about-me').style.display = "none";
}
// validation

// position
let positionValid = true;

const positionContainer = document.querySelector('.email-container');
const positionInput = document.getElementById('position');
positionInput.value = localStorage.getItem('position') ? localStorage.getItem('position') : "";
const rPosition = document.getElementById('r-position');
rPosition.innerHTML = localStorage.getItem('position') ? localStorage.getItem('position') : "";

positionInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
      positionContainer.classList.remove('success');
      positionContainer.classList.add('error');
      positionValid = false;
    }else if(el.target.value.trim().length < 2){
      positionContainer.classList.remove('success');
      positionContainer.classList.add('error');
      positionValid = false;
    }else{
      localStorage.setItem('position', el.target.value.trim());
      positionContainer.classList.remove('error');
      positionContainer.classList.add('success');
      positionValid = true;
    }
})

// employer
let employerValid = true;

const employerContainer = document.querySelector('.phone-container');
const employerInput = document.getElementById('employer');
employerInput.value = localStorage.getItem('employer') ? localStorage.getItem('employer') : "";
const rEmployer = document.getElementById('r-employer');
rEmployer.innerHTML = localStorage.getItem('employer') ? localStorage.getItem('employer') : "";

employerInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
      employerContainer.classList.remove('success');
      employerContainer.classList.add('error');
      employerValid = false;
    }else if(el.target.value.trim().length < 2){
      employerContainer.classList.remove('success');
      employerContainer.classList.add('error');
      employerValid = false;
    }else{
      localStorage.setItem('employer', el.target.value.trim());
      employerContainer.classList.remove('error');
      employerContainer.classList.add('success');
      employerValid = true;
    }
})

// startDate
let starDateValid = true;

const starDateContainer = document.querySelector('.name')
const starDateInput = document.getElementById('start_date');
starDateInput.value = localStorage.getItem('start_date') ? localStorage.getItem('start_date') : "";
const rStartDate = document.getElementById('r-start_date');
rStartDate.innerHTML = localStorage.getItem('start_date') ? localStorage.getItem('start_date') : "";

starDateInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
      starDateContainer.classList.remove('success');
      starDateContainer.classList.add('error');
      starDateValid = false;
    }else{
      localStorage.setItem('start_date', el.target.value.trim());
      starDateContainer.classList.remove('error');
      starDateContainer.classList.add('success');
      starDateValid = true;
    }
})
// 

// dueDate
let dueDateValid = true;

const dueDateContainer = document.querySelector('.surname')
const dueDateInput = document.getElementById('due_date');
dueDateInput.value = localStorage.getItem('due_date') ? localStorage.getItem('due_date') : "";
const rDueDate = document.getElementById('r-due_date');
rDueDate.innerHTML = localStorage.getItem('due_date') ? localStorage.getItem('due_date') : "";

dueDateInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
      dueDateContainer.classList.remove('success');
      dueDateContainer.classList.add('error');
      dueDateValid = false;
    }else{
      localStorage.setItem('due_date', el.target.value.trim());
      dueDateContainer.classList.remove('error');
      dueDateContainer.classList.add('success');
      dueDateValid = true;
    }
})

// description
let descriptionValid = true;

const descriptionContainer = document.querySelector('.about-me-container')
const descriptionInput = document.getElementById('description');
descriptionInput.value = localStorage.getItem('description') ? localStorage.getItem('description') : "";
const rDescription = document.getElementById('r-description');
rDescription.innerHTML = localStorage.getItem('description') ? localStorage.getItem('description') : "";

descriptionInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
      descriptionInput.classList.remove('borderGreen');
      descriptionInput.classList.add('borderRed');
      descriptionValid = false;
    }else{
      localStorage.setItem('description', el.target.value.trim());
      descriptionInput.classList.add('borderGreen');
      descriptionInput.classList.remove('borderRed');
      descriptionValid = true;
    }
})
