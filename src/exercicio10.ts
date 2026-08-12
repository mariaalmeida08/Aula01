import { createInterface } from "node:readline/promises";

function verificarMaioridade(idade: number): string {
    if (idade >= 18) {
        return "Maior de idade";
    }

    return "Menor de idade";
}

async function main(): Promise<void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const nome: string = await leitor.question(
        "Digite seu nome: "
    );

    const idade: number = Number(
        await leitor.question("Digite sua idade: ")
    );

    const resultado: string = verificarMaioridade(idade);

    console.log(`${nome}: ${resultado}`);

    leitor.close();
}

main();