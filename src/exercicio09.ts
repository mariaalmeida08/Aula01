import { createInterface } from "node:readline/promises";

async function main(): Promise<void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("1 - Judo");
    console.log("2 - Jiu-Jitsu");
    console.log("3 - Boxe");
    console.log("4 - Muay Thai");

    const opcao: number = Number(
        await leitor.question("Escolha uma modalidade: ")
    );

    switch (opcao) {
        case 1:
            console.log("Você escolheu Judo.");
            break;

        case 2:
            console.log("Você escolheu Jiu-Jitsu.");
            break;

        case 3:
            console.log("Você escolheu Boxe.");
            break;

        case 4:
            console.log("Você escolheu Muay Thai.");
            break;

        default:
            console.log("Opção inválida.");
    }

    leitor.close();
}

main();