function fat (n) {
    let fat = 1;
    for(let i = n; i >= 1; i--){
        fat *= i;       
    }
    return fat;
}

console.log(fat(5))
