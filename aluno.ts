
class Aluno {

    nome: string;
    idade: number;
    curso: string;

  
    constructor(nome: string, idade: number, curso: string) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome}, a minha idade é ${this.idade} e estou cursando ${this.curso}.`;
    }
}

console.log("TESTE de CLASSE ALUNO");

// Teste 1
var aluno1 = new Aluno("Maria Silva", 22, "Engenharia de Software");
console.log("\nTeste 1:");
console.log("Resultado de apresentar():", aluno1.apresentar());


// Teste 2
var aluno2 = new Aluno("João Santos", 20, "Medicina");
console.log("\nTeste 2:");
console.log("Resultado de apresentar():", aluno2.apresentar());

