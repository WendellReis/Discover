//Imprime uma mensagem no console
console.log("Sejam bem vindos!")

/**
    * Tipos de dados -
    
    - Boolean (true / false)

    - Object:
        . Propriedades / Atributos
        . Funcionalidades / Métodos

    {propriedade : "valor"}
 */

console.log({
    //atributos
    nome: "Wendell",
    idades: 18,
    curso: "Engenharia de Computacao",
    //metodos
    falar: function() {
        console.log("Estou falando!")
    }
})

/** - Indefined
 * 
 *  - Null
 * 
 * - Number
 *  . 33 // inteiros
 *  . 12.5 // reais - float
 *  . NoN // Not a Number
 *  . Infinity // infinito
 */

console.log(-7)
console.log(12.5 == Infinity) // expressao logica
console.log(10 / 2.5)
console.log(2 / "abc") // Not a Number

/**
 * - String
 */

console.log(`Soma = ${1 + 1}`)
