let nomeHeroi = "Fulano"
let xpHeroi = 0
let nivelHeroi = ""
let categoriaHeroi = 0
const introducao = "Informações do herói: "

for (let i = 0; i < 1001; i++)
{
    xpHeroi += 1
}

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

else if (xpHeroi > 10001)
{
    categoriaHeroi = 8
}

console.log(introducao + "\nO herói de nome " + nomeHeroi +
" está no nível " + nivelHeroi)