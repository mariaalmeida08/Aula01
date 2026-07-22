import { createInterface } from "node:readline/promises";

async function main (): Promise <void> {
    const leitor = createInterface ({
        input: process.stdin,
        output : process.stdout

    });

    const nome : string = await leitor.question(
        "Digite seu nome:"
    );

    const idade : number = Number (
        await leitor.question ("Digite sua idade: ")
    );

    console.log (`Olá, ${nome}! Você tem ${idade} anos.`);

    leitor.close();
}

main();