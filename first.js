console.log("Hello");
let b=4;
console.log(b);
b="mannu"
console.log(b);;;
b=10_000_00
console.log(b)
console.log(typeof b);;;;;;;;;;;;
console.log(`hello value ${b}`)
let obj={
    name:"mannu",
    age:23,
    laptop:{
        brand:"HP",
       Gb:43
    }
}
//console.log(obj)
//delete obj.laptop.Gb
for(let key in obj)
{
    if(typeof obj[key]==="object")
    {
        for(let key2 in obj[key])
        console.log(key2,obj[key][key2])
    }
    else
    console.log(key,obj[key])
}

let data=["manisha",{pro:'js'},"hello"]
console.log(data[1].pro);
let arr=new Array();
arr.push(4);
arr.push("guess")
console.log(arr[0]+""+arr[1]);