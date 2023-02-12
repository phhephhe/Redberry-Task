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
const imageData = localStorage.getItem('image');
if (imageData) {
  // Set the source of the expImage element to the binary data
  expImage.src = 'data:image/png;base64,' + imageData;
}

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
// validations

// position
let positionValid = true;

const positionContainer = document.querySelector('.email-container');
const positionInput = document.getElementById('position');
positionInput.value = localStorage.getItem('position') ? localStorage.getItem('position') : "";
const rPosition = document.getElementById('r-position');
rPosition.innerHTML = localStorage.getItem('position') ? localStorage.getItem('position') : "";

positionInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
      localStorage.setItem('position', el.target.value.trim());
      positionContainer.classList.remove('success');
      positionContainer.classList.add('error');
      positionValid = false;
    }else if(el.target.value.trim().length < 2){
      localStorage.setItem('position', el.target.value.trim());
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
      localStorage.setItem('employer', el.target.value.trim());
      employerContainer.classList.remove('success');
      employerContainer.classList.add('error');
      employerValid = false;
    }else if(el.target.value.trim().length < 2){
      localStorage.setItem('employer', el.target.value.trim());
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
      localStorage.setItem('start_date', el.target.value.trim());
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
      localStorage.setItem('due_date', el.target.value.trim());
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
      localStorage.setItem('description', el.target.value.trim());
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

// New EXPERIENCE

const moreExperienceBtn = document.querySelector('.add-experience-btn');
const newExperience = document.querySelector('.new-experience')
moreExperienceBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const container = document.createElement('container');
  // Create form elements
  const emailContainer = document.createElement("div");
  emailContainer.classList.add("email-container");
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "position");
  emailLabel.textContent = "თანამდებობა";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("name", "position");
  emailInput.setAttribute("id", "position");
  emailInput.setAttribute("placeholder", "დეველოპერი, დიზაინერი, ა.შ.");
  const emailP = document.createElement("p");
  emailP.textContent = "მინიმუმ 2 სიმბოლო";
  const emailCheck = document.createElement("img");
  emailCheck.setAttribute("src", "photos/check.png");
  emailCheck.classList.add("check");
  const emailWarning = document.createElement("img");
  emailWarning.setAttribute("src", "photos/error.png");
  emailWarning.classList.add("warning");
//   // Append elements to emailContainer
  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);
  emailContainer.appendChild(emailP);
  emailContainer.appendChild(emailCheck);
  emailContainer.appendChild(emailWarning);
  // კონტეინერში ჩამატება
  container.appendChild(emailContainer);
// დამსაქმებელი
  const phoneContainer = document.createElement("div");
  phoneContainer.classList.add("phone-container");
  const phoneLabel = document.createElement("label");
  phoneLabel.setAttribute("for", "employer");
  phoneLabel.textContent = "დამსაქმებელი";
  const phoneInput = document.createElement("input");
  phoneInput.setAttribute("type", "text");
  phoneInput.setAttribute("name", "employer");
  phoneInput.setAttribute("id", "employer");
  phoneInput.setAttribute("placeholder", "დამსაქმებელი");
  const phoneP = document.createElement("p");
  phoneP.textContent = "მინიმუმ 2 სიმბოლო";
  const phoneCheck = document.createElement("img");
  phoneCheck.setAttribute("src", "photos/check.png");
  phoneCheck.classList.add("check");
  const phoneWarning = document.createElement("img");
  phoneWarning.setAttribute("src", "photos/error.png");
  phoneWarning.classList.add("warning");
  phoneContainer.appendChild(phoneLabel);
  phoneContainer.appendChild(phoneInput);
  phoneContainer.appendChild(phoneP);
  phoneContainer.appendChild(phoneCheck);
  phoneContainer.appendChild(phoneWarning);
  // კონტეინერში ჩამატება
  container.appendChild(phoneContainer);

// Create fullname div
const fullnameContainer = document.createElement("div");
fullnameContainer.classList.add("fullname");

// Create name div
const nameContainer = document.createElement("div");
nameContainer.classList.add("name");

const startDateLabel = document.createElement("label");
startDateLabel.setAttribute("for", "start_date");
startDateLabel.innerHTML = "დაწყების რიცხვი";

const startDateInput = document.createElement("input");
startDateInput.setAttribute("type", "date");
startDateInput.setAttribute("name", "start_date");
startDateInput.setAttribute("id", "start_date");

nameContainer.appendChild(startDateLabel);
nameContainer.appendChild(startDateInput);

// Create surname div
const surnameContainer = document.createElement("div");
surnameContainer.classList.add("surname");

const dueDateLabel = document.createElement("label");
dueDateLabel.setAttribute("for", "due_date");
dueDateLabel.innerHTML = "დამთავრების რიცხვი";

const dueDateInput = document.createElement("input");
dueDateInput.setAttribute("type", "date");
dueDateInput.setAttribute("name", "due_date");
dueDateInput.setAttribute("id", "due_date");

surnameContainer.appendChild(dueDateLabel);
surnameContainer.appendChild(dueDateInput);

fullnameContainer.appendChild(nameContainer);
fullnameContainer.appendChild(surnameContainer);
  // კონტეინერში ჩამატება
container.appendChild(fullnameContainer);
// // Create about-me container
const aboutMeContainer = document.createElement("div");
aboutMeContainer.classList.add("about-me-container");
const descriptionLabel = document.createElement("label");
descriptionLabel.setAttribute("for", "description");
descriptionLabel.innerHTML = "აღწერა";
const descriptionInput = document.createElement("textarea");
descriptionInput.classList.add('textarea')
descriptionInput.setAttribute("name", "description");
descriptionInput.setAttribute("id", "description");
descriptionInput.setAttribute("placeholder", "როლი თანამდებობაზე და ზოგადი აღწერა");
aboutMeContainer.appendChild(descriptionLabel);
aboutMeContainer.appendChild(descriptionInput);
  // კონტეინერში ჩამატება
container.appendChild(aboutMeContainer);
// // //Create the line div
var line = document.createElement("div");
line.classList.add("line");
container.appendChild(line)
  // საბოლოო კონტაინერში დამატება
newExperience.appendChild(container)
})

// Validation

const form = document.getElementById('form');
form.addEventListener('submit', (el) => {
    el.preventDefault()
    if(!positionInput.value.trim()){
      positionContainer.classList.remove('success');
      positionContainer.classList.add('error');
      positionValid = false;
    } 
    if(!employerInput.value.trim()){
      employerContainer.classList.remove('success');
      employerContainer.classList.add('error');
      employerValid = false;
    }
    if(!starDateInput.value.trim()){
      starDateContainer.classList.remove('success');
      starDateContainer.classList.add('error');
      starDateValid = false;
    }
    if(!dueDateInput.value.trim()){
      dueDateContainer.classList.remove('success');
      dueDateContainer.classList.add('error');
      dueDateValid = false;
    }
    if(!descriptionInput.value.trim()){
      descriptionInput.classList.remove('borderGreen');
      descriptionInput.classList.add('borderRed');
      descriptionValid = false;
    }
    if(
      positionValid &&
      employerValid &&
      starDateValid &&
      dueDateValid &&
      descriptionValid
      ){
        window.location.href = "education.html";
      }
})