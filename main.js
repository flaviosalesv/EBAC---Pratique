
var alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Pedro', nota: 6 }
];

function filtrarAlunos() {
    var alunosAprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 6;
    });

    return alunosAprovados;
}


var alunosAprovados = filtrarAlunos();
console.log(alunosAprovados);

