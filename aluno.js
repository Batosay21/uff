var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
    Aluno.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", a minha idade \u00E9 ").concat(this.idade, " e estou cursando ").concat(this.curso, ".");
    };
    return Aluno;
}());
console.log("TESTE de CLASSE ALUNO");
// Teste 1
var aluno1 = new Aluno("Maria Silva", 22, "Engenharia de Software");
console.log("\nTeste 1:");
console.log("Resultado de apresentar():", aluno1.apresentar());
// Teste 2
var aluno2 = new Aluno("João Santos", 20, "Medicina");
console.log("\nTeste 2:");
console.log("Resultado de apresentar():", aluno2.apresentar());
