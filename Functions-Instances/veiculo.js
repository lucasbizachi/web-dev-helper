function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

Veiculo.prototype.info = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
};

let carro = new Veiculo("Toyota", "Corolla");
carro.info(); // Saída: Marca: Toyota, Modelo: Corolla
