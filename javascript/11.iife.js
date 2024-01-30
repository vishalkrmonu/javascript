
//Immediately invoked function expressions (IIFE)


// ()()  first paranthesis function or 2nd for excution

(function chai(){ //named iife
    console.log(`DB CONNECTED`);
})();

((name) => { //unnamed iife(without function and name is parameter)
    console.log(`DB CONNECTED two  ${name}`);
})('vishal')


//two iife ek sath likhna hai toh semicolumn use kre