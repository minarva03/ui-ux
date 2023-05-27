/*class Student{
    constructor(){
        this.name=null;
        this.age=0;
    }
    set Name(value){
        if(value.length<=20){
            this.name=value;
        }
    }
    get Name(){
                return this.name;
    }    
    
    set Age(value){
        if(value>=18 && value<=40){
            this.age=value;
        }
    }
    get Age(){
                return this.age;
    }   
}

// objcet creation 
let s=new Student()
s.Name="SurendraPanda";
s.Age=23;
console.log(s.name)
console.log(s.age)

s.Name="Priyanka";
s.Age=222;
console.log(s.name)
console.log(s.age)
*/

// Default Argumnet with method :

/*
class Demo{
    m1(x=100){
        console.log(x);
    }
}

// objcet creation 
let d=new Demo();
d.m1()
d.m1(500)

*/
//Arrow function creation inside a class 
/*
class Student {
    constructor(){
        this.x=100;

        this.m1=()=>{
            console.log('hello');
        }
    }
}

// objcet creation 
let s=new Student();
document.querySelector('#button1').addEventListener("click",s.m1);
*/



//method example 

class Student{
    constructor(a,b,c){
        this.id=a;
        this.name=b;
        this.marks=c;
    }

    result(){
        if(this.marks>=33){
            return "pass";
        }
        else{
            return "fail";
        }
    }
}

// objcet creation 
let s=new Student(101,"Rahul",55);
console.log(s.id);
console.log(s.name);
console.log(s.marks);
// check rahul pass or fail 
console.log(s.result())


