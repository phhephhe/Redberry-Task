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
// text about me 
if(localStorage.getItem('about_me')){
  document.querySelector('.about-me').style.display = "block";
}else{
  document.querySelector('.about-me').style.display = "none";
}
// position
const rPosition = document.getElementById('r-position');
rPosition.innerHTML = localStorage.getItem('position') ? localStorage.getItem('position') : "";
//employer
const rEmployer = document.getElementById('r-employer');
rEmployer.innerHTML = localStorage.getItem('employer') ? localStorage.getItem('employer') : "";
//r-start_date
const rStartDate = document.getElementById('r-start_date');
rStartDate.innerHTML = localStorage.getItem('start_date') ? localStorage.getItem('start_date') : "";
//r-due_date
const rDueDate = document.getElementById('r-due_date');
rDueDate.innerHTML = localStorage.getItem('due_date') ? localStorage.getItem('due_date') : "";
// description
const rExperienceDescription = document.getElementById('r-description');
rExperienceDescription.innerHTML = localStorage.getItem('description') ? localStorage.getItem('description') : "";
// get degree information
fetch('https://resume.redberryinternship.ge/api/degrees')
    .then(response => response.json())
    .then(data => {
        let select = document.getElementById('degree');
        data.forEach(item => {
            let option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.title;
            select.appendChild(option);
        })
    })
    .catch(error => console.error(error));
// livetyping function
function livetype(inputFieldId, outputId) {
    const inputField = document.getElementById(inputFieldId);
    const output = document.getElementById(outputId);
  
    inputField.addEventListener('input', function() {
      output.textContent = inputField.value;
    });
};

livetype('institute','r-institute');
livetype('due_date','r-institute_due_date');
livetype('description','r-education_description');


// Validations

let instituteValid = true;

const instituteContainer = document.querySelector('.email-container');
const instituteInput = document.getElementById('institute');
instituteInput.value = localStorage.getItem('institute') ? localStorage.getItem('institute') : "";
const rInstitute = document.getElementById('r-institute');
rInstitute.innerHTML = localStorage.getItem('institute') ? localStorage.getItem('institute') : "";

instituteInput.addEventListener('change', (el) => {
  if(!el.target.value.trim()){
    localStorage.setItem('institute', el.target.value.trim());
    instituteContainer.classList.remove('success');
    instituteContainer.classList.add('error');
    instituteValid = false;
  }else if(el.target.value.trim().length < 2){
    localStorage.setItem('institute', el.target.value.trim());
    instituteContainer.classList.remove('success');
    instituteContainer.classList.add('error');
    instituteValid = false;
  }else{
    localStorage.setItem('institute', el.target.value.trim());
    instituteContainer.classList.remove('error');
    instituteContainer.classList.add('success');
    instituteValid = true;
  }
})

// degree

let degreeValid = true;

const degreeContainer = document.querySelector('.name')
const degreeInput = document.getElementById('degree');
const selectedOption = degreeInput.options[degreeInput.selectedIndex];
selectedOption.text = localStorage.getItem('degree') ? localStorage.getItem('degree') : "";
const rDegree = document.getElementById('r-degree');
rDegree.innerHTML = localStorage.getItem('degree') ? localStorage.getItem('degree') : "";
degreeInput.addEventListener('change', (el) => {
    console.log(degreeInput.value);

    let selectedOption = degreeInput.options[degreeInput.selectedIndex];
    rDegree.innerHTML = selectedOption.text;
    if(!el.target.value.trim()){
      localStorage.setItem('degree',selectedOption.text);
      degreeContainer.classList.remove('success');
      degreeContainer.classList.add('error');
      degreeValid = false;
    }else{
      localStorage.setItem('degree',selectedOption.text);
      degreeContainer.classList.remove('error');
      degreeContainer.classList.add('success');
      degreeValid = true;
    }
})