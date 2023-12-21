function multiplicar(a: number, b: number): number {
    return a * b;
}


function saudacao(nome: string): string {
    return "Olá " + nome;
}


const resultadoMultiplicacao = multiplicar(3, 4);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const mensagemSaudacao = saudacao("João");
console.log(mensagemSaudacao);
