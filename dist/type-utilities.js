"use strict";
// Readonly 
const todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
};
console.log(todo);
// todo.completed = true;
function updatedTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updatedTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};
const todo4 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};
