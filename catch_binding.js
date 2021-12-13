//Old versions
// const undefined_Function = (string) => {
//     console.log(str);
// }

try {
    undefined_Function("In try Block");
} catch (error) {
    console.log("In catch block");
}

//ES10
try {
    undefined_Function("In try Block");
} catch {
    console.log("In catch block");
}