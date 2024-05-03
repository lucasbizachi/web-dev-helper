class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    som() {
      console.log('Som do animal');
    }
  }
  
  class Cachorro extends Animal {
    som() {
      console.log('Au au');
    }
  }
  
  let cachorro = new Cachorro('Rex');
  cachorro.som(); // Saída: Au au
  