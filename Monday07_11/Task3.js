
function calculateSupply(amount_per_day , age) {
    // max_age=100
    // x='cups of tea';
    // result= x * 100 ;
    // console.log('You will need ' + result + ' cups of tea to last you until the ripe old age of ' + max_age);

    max_age=100;
    result=(amount_per_day * 365) * (max_age - age)
    console.log('You will need ' + result + ' cups of tea to last you until the ripe old age of ' + max_age);
}
calculateSupply(28,50);