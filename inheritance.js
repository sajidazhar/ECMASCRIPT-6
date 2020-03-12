class myclass{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayhello()
    {
        console.log(` Hi ${this.name} your age is ${this.age}`);
    }
}
class userprofile extends myclass{
    username(){
        console.log(this.name);
    }
}
const profile= new userprofile('sajid',21);
profile.sayhello();
profile.username();