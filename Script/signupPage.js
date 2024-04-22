const fullName=document.getElementById('fullName');
const phoneNumber=document.getElementById('phone');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirmPassword');
const status=document.getElementById('status');
const user ={}
const formulaire= document.getElementById('formulaire');
let users =[];
 users = localStorage.getItem('users');
if(!users){
  users = []
}

formulaire.addEventListener('submit', function (e) {
    e.preventDefault();
    if(password.value !== confirmPassword.value){
     alert('Password incompatible')
     formulaire.reset()
    }
    user.fullName=fullName.value;
    user.phoneNumber= phoneNumber.value;
    user.email=email.value;
    user.password= password.value;
    user.status= status.value;
    users.activities = [];
    users.push(user);
    localStorage.setItem('user' , JSON.stringify(user));
    localStorage.setItem('users' , JSON.stringify(users));
    window.location.href = './myActivities2.html';
});






