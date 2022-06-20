//Task 1 Создайте объект ноутбука

let notebook = {
    serialNumber : "3V5E7EA",
    model : "HP 255 G8",
    display:{
        type: "IPS",
        screen: [1980,1080],
    },
    CPU :{
        core : '8',
        modelCPU: 'AMD Ryzen 7 5700U',
        frequency : '1.8 - 4.3 HHz'
    } ,

    ram:'8GB',

    storage:{
        HDD : 'none',
        SDD: '256 GB'
    },

    graphics:'AMD Radeon Graphics',

    frame:{
        color:'Серебристый',
        weight:'1.7 kg',
        dimensions:'(Ш х Г х В) 358 x 242 x 19',
    },
}

console.log(notebook)

//Task Создайте класс который описывает создание нового пользователя с помощью логина и пароля.

class User{
    constructor(login,password){
        this.login = login;
        this.password = password;
    }
}

let user1 = new User('Matt','qwerty123');
console.log(user1);

let user2 = new User('John','asdfgh321');
console.log(user2);

let user3 = new User('David','741852963')
console.log(user3)

let userArray = [];
userArray.push(user1,user2,user3);
console.log(userArray)

//Task 3 Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин

let userMap = new Map();

userArray.forEach(el => {userMap.set(el.login,el)})
console.log(userMap)

//Соединение двух массивов без повторов

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
//1
let res1=arr1.concat(arr2);
console.log(res1);
//2
let res2 = [...arr1,...arr2];
console.log(res2);
//3
let res3 = [];
arr1.forEach(el => {res3.push(el)});
arr2.forEach(el => {res3.push(el)});
console.log(res3)

