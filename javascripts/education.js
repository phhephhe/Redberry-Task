function livetype(inputFieldId, outputId) {
    const inputField = document.getElementById(inputFieldId);
    const output = document.getElementById(outputId);
  
    inputField.addEventListener('input', function() {
      output.textContent = inputField.value;
    });
};
livetype('institute','r-institute');
// livetype('degree','r-degree');
livetype('due_date','r-institute_due_date');
livetype('description','r-education_description');