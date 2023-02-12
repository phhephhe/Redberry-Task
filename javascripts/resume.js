
const firstname = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const image = document.getElementById('image')
const aboutMe = document.getElementById('r-about_me')
const position = document.getElementById('position')
const employer = document.getElementById('employer')
const start_date = document.getElementById('start_date')
const due_date = document.getElementById('due_date')
const description = document.getElementById('description')
const institute = document.getElementById('institute')
const degree = document.getElementById('degree')
const institute_due_date = document.getElementById('institute_due_date')
const r_education_description = document.getElementById('r-education_description')
const imageData = localStorage.getItem('image');
if (imageData) {
  // Set the source of the expImage element to the binary data
  image.src = 'data:image/png;base64,' + imageData;
}

firstname.innerHTML = localStorage.getItem('name');
surname.innerHTML = localStorage.getItem('surname');
email.innerHTML = localStorage.getItem('email');
phone.innerHTML = localStorage.getItem('phone_number');
aboutMe.innerHTML = localStorage.getItem('about_me');
position.innerHTML = localStorage.getItem('position');
employer.innerHTML = localStorage.getItem('employer');
start_date.innerHTML = localStorage.getItem('start_date');
due_date.innerHTML = localStorage.getItem('due_date');
description.innerHTML = localStorage.getItem('description');
institute.innerHTML = localStorage.getItem('institute');
degree.innerHTML = localStorage.getItem('degree');
institute_due_date.innerHTML = localStorage.getItem('Idue_date');
r_education_description.innerHTML = localStorage.getItem('Edescription');






// ვნიშნავთ ინფუთებს რომლის მნიშვნელობასაც შევცვლით ლოქალ სთორიჯიდან
