class Person {
    constructor(name) {
        this.name = name;
    }

    setSurname(surname) {
        this.surname = surname;
        // Return this for chaining
        return this;
    }

    setAge(age) {
        this.age = age;
        // Return this for chaining
        return this;
    }

    save() {
        console.log(this.name, this.surname, this.age);
        // Return this for chaining
        return this;
    }
}

const person = new Person("John")
    .setSurname("Doe")
    .setAge(29)
    .save();



// 
// 惰性函数
let time = ()=>{
    let t = new Date().getTime();
    time = () => t; 
    return time();
}


//


// 获得手机号
// const APIdata = { state: true, res: { name:'小明'}  } 
    // && { phone }
 

// const person = {
//     name: "未知",
//     age: 0,
//     phone:0,
//     ...APIdata.res 
// }

// //验证接口规范
// function apiverification(source ) { 
    
//     return {
//         state: false, data: {} || [], msg: '', token: '',
//         ...source
//     } 
// }