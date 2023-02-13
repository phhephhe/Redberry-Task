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
selectedOption.text = localStorage.getItem('degree') ? localStorage.getItem('degree') : "აირჩიე ხარისხი";
const rDegree = document.getElementById('r-degree');
rDegree.innerHTML = localStorage.getItem('degree') ? localStorage.getItem('degree') : "";
degreeInput.addEventListener('change', (el) => {

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
// დამთავრების თარიღი (უნივერსიტეტი)
let dueDateValid = true;

const dueDateContainer = document.querySelector('.surname')
const dueDateInput = document.getElementById('due_date');
dueDateInput.value = localStorage.getItem('Idue_date') ? localStorage.getItem('Idue_date') : "";
const rInstituteDueDate = document.getElementById('r-institute_due_date');
rInstituteDueDate.innerHTML = localStorage.getItem('Idue_date') ? localStorage.getItem('Idue_date') : "";

dueDateInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
      localStorage.setItem('Idue_date', el.target.value.trim());
      dueDateContainer.classList.remove('success');
      dueDateContainer.classList.add('error');
      dueDateValid = false;
    }else{
      localStorage.setItem('Idue_date', el.target.value.trim());
      dueDateContainer.classList.remove('error');
      dueDateContainer.classList.add('success');
      dueDateValid = true;
    }
})
// description EDUCATION
let EdescriptionValid = true;

const EdescriptionContainer = document.querySelector('.about-me-container')
const EdescriptionInput = document.getElementById('description');
EdescriptionInput.value = localStorage.getItem('Edescription') ? localStorage.getItem('Edescription') : "";
const ErDescription = document.getElementById('r-education_description');
ErDescription.innerHTML = localStorage.getItem('Edescription') ? localStorage.getItem('Edescription') : "";

EdescriptionInput.addEventListener('change', (el) => {
    if(!el.target.value.trim()){
      localStorage.setItem('Edescription', el.target.value.trim());
      EdescriptionInput.classList.remove('borderGreen');
      EdescriptionInput.classList.add('borderRed');
      EdescriptionValid = false;
    }else{
      localStorage.setItem('Edescription', el.target.value.trim());
      EdescriptionInput.classList.add('borderGreen');
      EdescriptionInput.classList.remove('borderRed');
      EdescriptionValid = true;
    }
})

// more education

const moreEducationBtn = document.querySelector('.add-experience-btn');
const newEducation = document.querySelector('.new-experience')
moreEducationBtn.addEventListener('click', (el) => {
  el.preventDefault();
  
  // Create form elements
  const container = document.createElement('container');
 // Create form elements
 const emailContainer = document.createElement("div");
 emailContainer.classList.add("email-container");
 const emailLabel = document.createElement("label");
 emailLabel.setAttribute("for", "institute");
 emailLabel.textContent = "სასწავლებელი";
 const emailInput = document.createElement("input");
 emailInput.setAttribute("type", "text");
 emailInput.setAttribute("name", "institute");
 emailInput.setAttribute("id", "institute");
 emailInput.setAttribute("placeholder", "სასწავლებელი");
 const emailP = document.createElement("p");
 emailP.textContent = "მინიმუმ 2 სიმბოლო";
 const emailCheck = document.createElement("img");
 emailCheck.setAttribute("src", "photos/check.png");
 emailCheck.classList.add("check");
 const emailWarning = document.createElement("img");
 emailWarning.setAttribute("src", "photos/error.png");
 emailWarning.classList.add("warning");
  // Append elements to emailContainer
  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);
  emailContainer.appendChild(emailP);
  emailContainer.appendChild(emailCheck);
  emailContainer.appendChild(emailWarning);
  // კონტეინერში ჩამატება
  container.appendChild(emailContainer);
// degree
// Create fullname div
const fullnameContainer = document.createElement("div");
fullnameContainer.classList.add("fullname");
//create degree div-container
const nameContainer = document.createElement("div");
nameContainer.classList.add("name");
// create degree label
const degreeLabel = document.createElement("label");
degreeLabel.setAttribute("for", "degree");
degreeLabel.innerHTML = 'ხარისხი';
// select dropdown and fetch
// Create the select element
let select = document.createElement('select');
select.name = 'degree';
select.id = 'degree';
select.classList.add('select');

// Create the default option
let defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.disabled = true;
defaultOption.selected = true;
defaultOption.textContent = 'აირჩიე ხარისხი';

// Append the default option to the select element
select.appendChild(defaultOption);

// Fetch the options from the API endpoint
fetch('https://resume.redberryinternship.ge/api/degrees')
  .then(response => response.json())
  .then(data => {
    // Create an option for each item in the data array
    data.forEach(item => {
      let option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.title;
      // Append the option to the select element
      select.appendChild(option);
    });
  })
  .catch(error => console.error(error));

  // label-ის ჩაგდება containerში
  nameContainer.appendChild(degreeLabel);
  // name container ში ჩაგდება
  nameContainer.appendChild(select)
  // surname container
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

// კონტეინერში ჩამატება
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
descriptionInput.setAttribute("placeholder", "განათლების აღწერა");
aboutMeContainer.appendChild(descriptionLabel);
aboutMeContainer.appendChild(descriptionInput);
  // კონტეინერში ჩამატება
container.appendChild(aboutMeContainer);
// // //Create the line div
var line = document.createElement("div");
line.classList.add("line");
container.appendChild(line)
  // საბოლოო კონტაინერში დამატება
newEducation.appendChild(container);
});

// submit validation and post request

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(!instituteInput.value.trim()){
    instituteContainer.classList.remove('success');
    instituteContainer.classList.add('error');
    instituteValid = false;
  }if(!localStorage.getItem('degree')){
    degreeContainer.classList.remove('success');
    degreeContainer.classList.add('error');
    degreeValid = false;
  }if(!dueDateInput.value.trim()){
    dueDateContainer.classList.remove('success');
    dueDateContainer.classList.add('error');
    dueDateValid = false;
  } if(!EdescriptionInput.value.trim()){
    EdescriptionInput.classList.remove('borderGreen');
    EdescriptionInput.classList.add('borderRed');
    EdescriptionValid = false;
  }if (instituteValid &&
       degreeValid &&
       dueDateValid &&
       EdescriptionValid
    ) {
    // const formData = new FormData();
    const experiences = [
      { 
        position: localStorage.getItem('position'),
        employer: localStorage.getItem('employer'),
        start_date: localStorage.getItem('start_date'),
        due_date: localStorage.getItem('due_date'),
        description: localStorage.getItem('description')
      }
    ];
    const educations = [
      {
        institute: localStorage.getItem('institute'),
        degree: localStorage.getItem('degree'),
        due_date: localStorage.getItem('Idue_date'),
        description: localStorage.getItem('Edescription')
      }
    ];
 
      fetch("https://resume.redberryinternship.ge/api/cvs", {
        method: "POST",
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify({
          mode:'no-cors',
          name:localStorage.getItem('name'),
          surname:localStorage.getItem('surname'),
          email: localStorage.getItem('email'),
          phone_number :localStorage.getItem('phone_number'),
          image: localStorage.getItem('image'),
          experiences: experiences,
          educations: educations
        })
      })
        .then((response) => response)
        .then((data) => {
          if(data.errors){
            console.log(data)
        } else {
         window.location.href = "resume.html";
        }
        })
        .catch((error) => console.log(error));
  }
})



