class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        setInterval(() => this.age++,1000)
    }
};

const a = new Person('Aram',19);
const b = new Person('Narek',38);
const c = new Person('Hovo',14);
const d = new Person('Ashot',6);

let arr = [];
arr.push(a,b,c,d)


setInterval(() => {
     arr = arr.filter((el) => el.age < 40);
    console.log(arr)},1000)
    
setInterval(() => {
    name =  Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    age = Math.floor(Math.random() * 50) + 1;
    const e = new Person(name,age);
    arr.push(e)},2000)



