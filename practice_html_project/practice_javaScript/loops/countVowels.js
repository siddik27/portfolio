let name = "Siddik";
count = 0;

for(let char in name.toLowerCase()){
    if(char==="a" || char==="e"|| char==="i"||char==="o"||char==="u"){
        count++;
    }
}

console.log("Total Vowels",count);