class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

const alunos = [
    new Aluno("João", "Silva", 7, 8.5),
    new Aluno("Maria", "Santos", 8, 9.0),
    new Aluno("Pedro", "Oliveira", 6.5, 7.0),
    new Aluno("Ana", "Ferreira", 5.5, 6.0),
    new Aluno("Carlos", "Ribeiro", 4.0, 3.5),
];

function mostrarDadosAlunos() {
    const resultadoDiv = document.getElementById("resultado");
    
    for (const aluno of alunos) {
        const nomeCompleto = aluno.nomeCompleto();
        const media = aluno.media();
        const situacao = aluno.situacao();
        
        const alunoInfo = document.createElement("p");
        alunoInfo.textContent = "Nome Completo: " + nomeCompleto + ", Média: " + media + ", Situação: " + situacao;
        resultadoDiv.appendChild(alunoInfo);
    }
}

mostrarDadosAlunos();
