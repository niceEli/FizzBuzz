var strings = [];

for (let i = 0; i < 100; i++) {
    strings.push((i+1).toString());
}

for (let i = 0; i < strings.length; i++) {
    const element = strings[i];
    const felement = Number(element);
    if (felement % 3 == 0 && felement % 5 == 0){
        strings.splice(i, 1, "Bizz");
    } else if (felement % 3 == 0) {
        strings.splice(i, 1, "Fizz");
    } else if(felement % 5 == 0){
        strings.splice(i, 1, "Buzz");
    }
}

console.log(strings);