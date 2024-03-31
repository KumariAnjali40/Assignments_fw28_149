type Name = string;

type age=number;

type isFetching=boolean;


//creating an array.
const numbersArray: number[] = [1, 2, 3, 4, 5];
const stringsArray: Array<string> = ["apple", "banana", "orange"];


//creating a tuple.

type MyTuple=[string,boolean];

const myTuple: MyTuple=["anjali",true];

//create an enum.

enum UserRole{
    User,
    SuperUser,
    Admin,
    SuperAdmin,
}

//create fucntion

function multiply (x:number, y:number): number{
    return x*y;
}

function divide(x:number, y:number): number{
    if(y!=0){
        return x/y;
    }else{
        throw new Error("Cannot divide by zero");
    }
}

function print(name:string):void{
    console.log(name);
}

const userName:Name="anjali";
const userAge: age = 25;
const fetchingData: isFetching = false;



print(userName);


const userRole: UserRole = UserRole.Admin;
console.log("User role:", UserRole[userRole]);