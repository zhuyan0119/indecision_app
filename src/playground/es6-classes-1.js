class Person {
    constructor (name, age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription (){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person("Yan Zhu", 29);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());