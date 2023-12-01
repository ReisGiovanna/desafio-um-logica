//Declarando variáveis
let nomeHeroi = "Felipão Mil Grau"
let xpHeroi = 0
let nivelHeroi = ""
let categoriaHeroi = 0
const introducao = "Informações do herói: "

//Estrutura de repetição para contar o xp do herói
for (let i = 0; i < 8000000; i++)
{
    xpHeroi += 1
}

//Estrutura de decisão para decidir a categoria do herói a partir da quantia de xp
if (xpHeroi < 1000)
{
    categoriaHeroi = 1
}

else if (xpHeroi >= 1001 && xpHeroi <= 2000)
{
    categoriaHeroi = 2
}

else if (xpHeroi >= 2001 && xpHeroi <= 5000)
{
    categoriaHeroi = 3
}

else if (xpHeroi >= 5001 && xpHeroi <= 7000)
{
    categoriaHeroi = 4
}

else if (xpHeroi >= 7001 && xpHeroi <= 8000)
{
    categoriaHeroi = 5
}

else if (xpHeroi >= 8001 && xpHeroi <= 9000)
{
    categoriaHeroi = 6
}

else if (xpHeroi >= 9001 && xpHeroi <= 10000)
{
    categoriaHeroi = 7
}

else if (xpHeroi >= 10001)
{
    categoriaHeroi = 8
}

//Estrutura de decisão para decidir o nível do herói
switch (categoriaHeroi)
{
    case 1:
        nivelHeroi = "Ferro"
        break

    case 2:
        nivelHeroi = "Bronze"
        break

    case 3:
        nivelHeroi = "Prata"
        break

    case 4:
        nivelHeroi = "Ouro"
        break

    case 5:
        nivelHeroi = "Platina"
        break

    case 6:
        nivelHeroi = "Ascendente"
        break

    case 7:
        nivelHeroi = "Imortal"
        break

    case 8:
        nivelHeroi = "Radiante"
        break
}

//Saída com as informações como: nome e nível
console.log(introducao + "\nO herói de nome " + nomeHeroi +
" está no nível " + nivelHeroi)