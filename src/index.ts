let strings:Array<string> = [];
let answers:number = 100;

for (let i = 0; i < answers; i++) {
    strings.push((i+1).toString());
}

for (let i = 0; i < strings.length; i++) {
    const element = strings[i];
    const felement = Number(element);
    if (felement % 3 === 0 && felement % 5 == 0){
        strings.splice(i, 1, "FizzBuzz");
    } else if (felement % 3 === 0) {
        strings.splice(i, 1, "Fizz");
    } else if(felement % 5 === 0){
        strings.splice(i, 1, "Buzz");
    }
}

for (let i = 0; i  < strings.length; i ++) {
  const element = strings[i];
  console.log((i+1) + ": " + element);
}