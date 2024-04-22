let users = localStorage.getItem('users');
let user = localStorage.getItem('user');
const userName = document.getElementById('userName');
const email = document.getElementById('userEmail');
const total = document.getElementById('total-offers');
const accepted =document.getElementById('accepted-offers');
const refused = document.getElementById('refused-offers');
let success = 0 ;
let fail = 0 ;
let pending = 0;

if(!user){
    window.location.href = './loginPage.html';
}


user = JSON.parse(user);
users = JSON.parse(users);

userName.innerHTML = user.fullName;
userEmail.innerHTML = user.email;

user.myActivity.forEach(function(element){
    if(element.status === 'success'){
        success++;
    }
    if(element.status === 'fail'){
        fail++;
    }

    if(element.status === 'pending'){
        pending++;
    }
    
});

total.innerHTML = user.myActivity.length;
accepted.innerHTML = success;
refused.innerHTML = fail;


const logOut = document.getElementById('logOut');

logOut.addEventListener('click',function(e){
    e.preventDefault();
    console.log('FF');
   localStorage.removeItem('user');
   window.location.href = './loginPage.html';
})
