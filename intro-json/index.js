const myLife={
    name:'rafsan',
    age:25,
    id:1,
    job:'bekar',
    isSingle :false,
}

const jsonData=JSON.stringify(myLife)


console.log(jsonData);

// output::{"name":"rafsan","age":25,"id":1,"job":"bekar","isSingle":false}

const objectFormat =JSON.parse(jsonData);
console.log(objectFormat);

// output::{ name: 'rafsan', age: 25, id: 1, job: 'bekar', isSingle: false }
