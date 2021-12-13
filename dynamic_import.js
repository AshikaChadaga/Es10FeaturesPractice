//Dynamic import() returns a promise for the module namespace object of the requested module.
const mymoduleSpecifier = './mymodule.mjs';
import(mymoduleSpecifier)
    .then((module) => {
        console.log(module.getMessage());// outputs Hello world
    });

(async function(){
    const mymoduleSpecifier = './mymodule.mjs';
    const module = await import(mymoduleSpecifier)
    console.log(module.getMessage());// outputs Hello world
})();