let daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let namesOfMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let namesOfFemale =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]

function validateForm() {
    let year = document.querySelector["#birthYear"].value;
    let month = document.querySelector["#birthMonth"].value;
    let day = document.querySelector["#birthDay"].value;
    if (year == "" || month == "" || day == "") {
        console.log()
      alert("Please fill all the form details correctly");
      return false;
    }else{
        getUserInput()
    }
  }
let form = document.querySelector('form')
let submitButton = document.querySelector('#submit-button')
console.log(submitButton);
form.addEventListener('submit', function(submitevent){
submitevent.preventDefault();
console.log(submitevent);
})
form.reset();

var getUserInput = () => {
    let inputYear = document.querySelector("#birthYear").value;
    let intYear = parseInt(inputYear);


    let inputMonth = document.querySelector("#birthMonth").value;
    let intMonth = parseInt(inputMonth);

    let inputDay = document.querySelector("#birthDay").value;
    let intDay = parseInt(inputDay);

    let inputGender = document.querySelector("#gender").value;
    let akanName;


    if (intDay <= 0 || intDay > 31) {
        alert("Enter correct day");
    }
    if (intMonth <= 0 || intMonth > 12) {
        alert("Enter correct month");
    }

    let day = new Date(intYear + "-" + intMonth + "-" + inputDay).getDay();


    if (inputGender === "Male") {
        akanName = namesOfMale[day];
        alert("Your Akan name is " + akanName + ". Because you are a male born on " + daysOfTheWeek[day]);
    } else if (inputGender === "Female") {
        akanName = namesOfFemale[day];
        alert("Your Akan name is " + akanName + ". Because you are a female born on " + daysOfTheWeek[day]);
    }
}

let reset = function(){
    location.reload();
} 
