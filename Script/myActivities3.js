const table = document.getElementById('table');

let users = localStorage.getItem('users');
let user = localStorage.getItem('user');
const userName = document.getElementById('userName');
const email = document.getElementById('userEmail');


if(!user){
    window.location.href = './loginPage.html';
}


user = JSON.parse(user);
users = JSON.parse(users);

userName.innerHTML = user.fullName;
userEmail.innerHTML = user.email;

user.myActivity.forEach(function (element) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

cell1.innerHTML = element.category;
cell2.innerHTML = element.quantity;
cell3.innerHTML = element.total;
cell4.innerHTML = element.partner;
cell5.innerHTML = element.status;
cell6.innerHTML = new Date(element.date).toLocaleString();

});
const logOut = document.getElementById('logOut');

logOut.addEventListener('click',function(e){
   localStorage.removeItem('user');
   window.location.href = './loginPage.html';
})
