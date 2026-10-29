
//for in loop , it is mainly used when traversing object
var obj = {
    name :"siddik",
    age : 22,
    city: "kolkata"
};

for(var key in obj){
    console.log(key,obj[key]);
}

//for each loop is mainly used for traversing in the arrays

arr = [1,2,3,65,4];
arr.forEach(element => {
   console.log(element);
});