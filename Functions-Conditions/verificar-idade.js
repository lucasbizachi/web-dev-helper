function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "É maior de idade";
    } else {
        return "É menor de idade";
    }
}

console.log(verificarMaioridade(20)); // Saída: É maior de idade
