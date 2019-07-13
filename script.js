function getNumberOfEven(n){
    n = String(n);
    var sum = 0;
    for (var j = 0; j < n.length; j++) {
        if (!(n[j] % 2)) {
            sum++;
        }
    }
    return sum; 
}

getNumberOfEven(223344) // 4
getNumberOfEven(111) // 0
getNumberOfEven(123456) // 3
getNumberOfEven(97531) // 0
getNumberOfEven(8642) // 4
getNumberOfEven(24688642) // 8