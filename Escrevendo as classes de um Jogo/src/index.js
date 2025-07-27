class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Verifica o tipo do herói e define o ataque
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque indefinido";
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso
const heroi1 = new Heroi("Aragorn", 87, "guerreiro");
const heroi2 = new Heroi("Gandalf", 2019, "mago");
const heroi3 = new Heroi("Bruce", 33, "monge");
const heroi4 = new Heroi("Hanzo", 29, "ninja");

heroi1.atacar(); // O guerreiro atacou usando espada
heroi2.atacar(); // O mago atacou usando magia
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
