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
// Property decorator 
// Method decorator 
// Parameter decorator 
// Acessor decorator

