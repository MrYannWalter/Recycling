const email=document.getElementById('email');
const password=document.getElementById('password');
let user = null;
const formulaire= document.getElementById('formulaire');
let users =[];
 users = JSON.parse( localStorage.getItem('users'));
if(!users){
  users = []
}


formulaire.addEventListener('submit', function (e) {
    e.preventDefault();

    user = users.find(function(user){
        return (user.password === password.value && user.email === email.value)
    });

    if(user){
        localStorage.setItem('user' , JSON.stringify(user));
        window.location.href = './myActivities2.html';
    }else{
        alert('user not found')
        formulaire.reset()
    }

    console.log(user);
})