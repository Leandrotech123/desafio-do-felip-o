const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Arthur: ", function(nome) {
    readline.question("10000 (XP): ", function(xpInput) {
        let xp = parseInt(xpInput);
        let nivel = "Radiante";

        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp >= 1000 && xp <= 2000) {
            nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            nivel = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            nivel = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            nivel = "Imortal";
        } else if (xp > 10000) {
            nivel = "Radiante";
        }

        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        readline.close();
    });
});