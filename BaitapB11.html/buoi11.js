function soHH(n) {
    var sum = 0
    for (let i = 0; i <= n/2; i++){
        if (n % i == 0) {
            sum = sum + i;
        }
    }
    if (sum = n) {
        return true;
        }
    else
        return false
}