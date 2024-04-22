const address = document.getElementById('address');
const category = document.getElementById('categories');
const partner = document.getElementById('partners');
const quantity= document.getElementById('quantity');
const formulaire= document.getElementById('formulaire');
let montant =document.getElementById('montant')
let users = localStorage.getItem('users');
let user = localStorage.getItem('user');

const userName= document.getElementById('userName');
const email = document.getElementById('userEmail')

const categories = {
    'paper' : 100 ,
    'electronic' : 5000 ,
    'plastic' : 700
}

if(!user){
    window.location.href = './loginPage.html';
}

user = JSON.parse(user);
users = JSON.parse(users);

userName.innerHTML = user.fullName;
userEmail.innerHTML = user.email;

myActivity= {};




formulaire.addEventListener('submit', function (e){
    e.preventDefault();
    myActivity.address = address.value;
    myActivity.category = category.value;
    myActivity.partner = partner.value;
    myActivity.quantity = quantity.value;
    myActivity.total = categories[category.value] * parseInt(quantity.value);
    myActivity.date = new Date();
    myActivity.status = 'pending';
    
    if(!user.myActivity){
      user.myActivity = [ myActivity ];
    }else{
        user.myActivity.push(myActivity)
    }

    localStorage.setItem('user' , JSON.stringify(user));


    users.forEach(el => {
        if(el.email === user.email && el.fullName === user.fullName ){
            el.myActivity = user.myActivity;
        }
    });

    localStorage.setItem('users' , JSON.stringify(users));



    alert('activity added successfully');
    formulaire.reset();
    console.log(user)

});

category.addEventListener('change', function (e){
   let total= categories[category.value] * parseInt(quantity.value);
   montant.innerHTML =total

})

quantity.addEventListener('keyup', function (e){
    console.log(quantity.value)
    let total= categories[category.value]  * parseFloat(quantity.value);
    montant.innerHTML =total
 
 });
 const logOut = document.getElementById('logOut');

 logOut.addEventListener('click',function(e){
    localStorage.removeItem('user');
    window.location.href = './loginPage.html';
 })

