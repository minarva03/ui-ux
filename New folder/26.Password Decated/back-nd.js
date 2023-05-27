// Log-in Page..
let submitBtn = document.getElementById("submit");
let creatAcc = document.getElementById("create");
let emailBox = document.getElementById("email");
let passwordBox = document.getElementById("password");

submitBtn.addEventListener("click", function () {
 
  if (
    localStorage.getItem(emailBox.value) &&
    passwordBox.value == localStorage.getItem(emailBox.value)
  ) {
    alert("ଆମ ୱେବସାଇଟ କୁ ଆପଣଙ୍କୁ ସ୍ୱାଗତ ଜଣାଉଛୁ ");

    window.open("http://127.0.0.1:5500/back.html");
  } else {
    alert(
      "ଆପଣ ପ୍ରବେଶ କରିଥିବା ଇମେଲ୍ କିମ୍ବା ମୋବାଇଲ୍ ନମ୍ବର ଏକ ଏକାଉଣ୍ଟ୍ ସହିତ ସଂଯୁକ୍ତ ନୁହେଁ | ଆପଣଙ୍କ ଏକାଉଣ୍ଟ୍ ଖୋଜନ୍ତୁ ଏବଂ ଲଗ୍ ଇନ୍ ହୁଅନ୍ତୁ ।"
    );
    emailBox.value = null;
    passwordBox.value = null;
  }
});
creatAcc.addEventListener("click", function () {
  document.getElementById("wellcome").style.display = "none";
  createBox.style.display = "block";
});

//   Create........!!

let createBox = document.getElementById("createbx");
createBox.style.display = "none";

let emailBoxx = document.getElementById("emailx");
let passwordBoxx = document.getElementById("passwordx");
let npasswordBox = document.getElementById("npasswordx");

let submitBtnx = document.getElementById("submitx");
submitBtnx.addEventListener("click", function () {

  if (passwordBoxx.value == npasswordBox.value) {
  

    alert("ନୂଆ ଆକାଉଣ୍ଟ ଖୋଲିଥିବାରୁ ଆପଣଙ୍କୁ ଧନ୍ୟବାଦ ");
    alert("ଆମ ୱେବସାଇଟ କୁ ଆପଣଙ୍କୁ ସ୍ୱାଗତ ଜଣାଉଛୁ ");
    localStorage.setItem(emailBoxx.value, passwordBoxx.value);
    window.open("http://127.0.0.1:5500/back.html");
  } else {
    alert("ଭୁଲ  ଅଛି ଆଉଥରେ ଚେଷ୍ଟା କରନ୍ତୁ ");
    emailBoxx.value=null;
    passwordBoxx.value=null;
    npasswordBox.value=null;
  }
});

// forget..

let forgetpass = document.getElementById("forgetpass");

forgetpass.style.display = "none";

let fLink = document.getElementById("forgetpasslink");

fLink.addEventListener("click", function () {
  forgetpass.style.display = "block";
  document.getElementById("wellcome").style.display = "none";
});

let emailyBox = document.getElementById("emaily");
let pastInp = document.getElementById("pastinp");
let pestBtn = document.getElementById("pestbtn");
let submityBtn = document.getElementById("submity");
let copyInp = document.getElementById("copyinp");
let copyBtn = document.getElementById("copybtn");
let newPassword = document.getElementById("newpass");
let newPassword2 = document.getElementById("newpass2");
let forgetSub = document.getElementById("forgetsub");

// display None
pastInp.style.display = "none";
pestBtn.style.display = "none";
copyBtn.style.display = "none";
copyInp.style.display = "none";
newPassword.style.display = "none";
newPassword2.style.display = "none";
forgetSub.style.display = "none";
const val = Math.floor(1000 + Math.random() * 9000);

copyInp.value = val;

submityBtn.addEventListener("click", function () {
  if (localStorage.getItem(emailyBox.value)) {
    emailyBox.style.display = "none";
    submityBtn.style.display = "none";
    pestBtn.style.display = "block";
    pastInp.style.display = "block";

    setTimeout(() => {
      copyBtn.style.display = "block";
      copyInp.style.display = "block";
    }, 2000);

    copyBtn.addEventListener("click", function () {
      copyInp.select();
      document.execCommand("copy");
    });

    pestBtn.addEventListener("click", function () {
      if (copyInp.value == pastInp.value) {
        newPassword.style.display = "block";
        newPassword2.style.display = "block";
        pastInp.style.display = "none";
        pestBtn.style.display = "none";
        forgetSub.style.display = "block";

        forgetSub.addEventListener("click", function () {
          if (newPassword.value == newPassword2.value) {
            localStorage.setItem(emailyBox.value, newPassword.value);
            alert("ଆମ ୱେବସାଇଟ କୁ ଆପଣଙ୍କୁ ସ୍ୱାଗତ ଜଣାଉଛୁ ");

            window.open("http://127.0.0.1:5500/back.html");
          } else {
            alert("ଭୁଲ  ଅଛି ଆଉଥରେ ଚେଷ୍ଟା କରନ୍ତୁ");
          }
        });
      } else {
        alert("ଆପଣଙ୍କ OTP ସଂଯୋଗ କରନ୍ତୁ ");
        pastInp.value=null;
      }
    });
  } else if (emailyBox.value) {
    alert(
      "ଆପଣ ପ୍ରବେଶ କରିଥିବା ଇମେଲ୍ କିମ୍ବା ମୋବାଇଲ୍ ନମ୍ବର ଏକ ଏକାଉଣ୍ଟ୍ ସହିତ ସଂଯୁକ୍ତ ନୁହେଁ  " );
   emailyBox.value=null
  } else {
    alert("ଫୋରମ ଟି କୁ ଫିଲ-ଅପ କରନ୍ତୁ ");
  }
});



// localStorage.setItem('dsantosh366@gmail.com','qwerqwer')
// localStorage.setItem('das7890366@gmail.com','1234567')
// localStorage.setItem('907965433','wewewew')
// localStorage.setItem('7609097334','salman')