function ContaBancaria(numero, saldo) {
    this.numero = numero;
    this.saldo = saldo;
}

ContaBancaria.prototype.depositar = function(valor) {
    this.saldo += valor;
};

ContaBancaria.prototype.sacar = function(valor) {
    if (valor <= this.saldo) {
        this.saldo -= valor;
    } else {
        console.log("Saldo insuficiente.");
    }
};

let conta = new ContaBancaria("12345", 1000);
conta.depositar(500);
conta.sacar(200);
console.log(conta.saldo); // Saída: 1300
