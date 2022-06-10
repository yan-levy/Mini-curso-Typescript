// Type Alias

// definição
type GameT = {
    title: string;
}

type DLCT = {
    extra: string;
}

// intersection

type GameCollectionT = Game & DLCT & { content: boolean };

// implements

class CreateGameT implements GameCollection {}

// ========== Diferenças ========== //

// permite declarar tipos primitivos

type IDT = string | number;

// pode declarar tuplas normalmente

 type TupleT = [number, number, number];

 [1, 2, 3] as TupleT;

//  Apenas uma declaração por escopo

type JQueryT = { a: string};
type JQueryT = {b: string};

// mais recomendado
// na maioria das vezes
// React - Props 

// CONSISTÊNCIA!