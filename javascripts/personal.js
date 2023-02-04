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



