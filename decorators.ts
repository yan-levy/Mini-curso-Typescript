// @Component 
// @Selector 
// @useState("dasdas")

// Factory
function Logger(prefix: string){
    return(target: any) => {
        console.log(`${prefix} - ${target}`);
    }
}


@Logger("awesome")
class Foo {}

// Class decorator

// function setAPIVersion(apiVersion: string){
//     return (constructor) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }

// // decorator - anotar a vesão da API
// @setAPIVersion("1.0.0")
// class API {}

// console.log(new API());


// Property decorator 

// function minLength (length: number){
//     return (target: any, key: string) => {
//         let val = target[key]

//         const getter = () => val;

//         const setter = (value: string) => {
//             if(value.length < length){
//             console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.`);
//             } else {
//                 val = value
//             }
//         }

//         Object.defineProperty(target, key, {
//             get: getter,
//             set:setter,
//         })
//     }
// }

// class Movie {
//     // validação - se for menor que 5 - error
//     @minLength(5)
//     title: string;

//     constructor(t: string){
//         this.title = t;
//     }
// }

// const movie = new Movie("Interstellar");
// console.log(movie.title);


// Method decorator 

// function delay(ms: number){
//     return (target: any, key: string, descriptor: PropertyDescriptor) => {
//         const originalMethod = descriptor.value;

//         descriptor.value = function (...args) {
//             console.log(`Esperando ${ms}...`);
//             setTimeout(() => {
//                 originalMethod.apply(this, args)
//             }, ms);

//             return descriptor;
            
//         }
//     }
// }

// class Greeter {
//     greeting: string;

//     constructor(g:string){
//         this.greeting = g;
//     }

//     // esperar um tempo e aí rodar o método (ms)
//     @delay(1000)
//     greet() {
//         console.log(`Hello! ${this.greeting}`);
//     }
// }

// const pessoinha = new Greeter("Pessoinha!");
// pessoinha.greet();
// Parameter decorator 
// Acessor decorator

