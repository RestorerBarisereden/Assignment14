let age = 60
let haspreExistingCondition = true
if (age >= 18 && age <= 60 && !haspreExistingCondition){
    console.log("Aproved");
}
else if (age > 60 && !haspreExistingCondition){
    console.log("Limited Coverage Plan");
}
else {
    console.log("Rejected");
}