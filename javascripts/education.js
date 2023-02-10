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
// degree
const degree = document.getElementById('degree');
let resumeDegree = document.getElementById('r-degree');

degree.addEventListener('change', function() {
  let selectedOption = degree.options[degree.selectedIndex];
  console.log(selectedOption.text)
  resumeDegree.textContent = selectedOption.text;
});
