let nomeHeroi = "Fulano"
let xpHeroi = 0
let nivelHeroi = ""
const introducao = "Informações do herói: "

for (let i = 0; i < 1002; i++)
{
    xpHeroi += 1
}

switch (xpHeroi)
{
    case (xpHeroi < 1000):
        nivelHeroi = "Ferro"

    default:
        nivelHeroi = "Ainda está crescendo!"
}

console.log(introducao + "\nO herói de nome " + nomeHeroi +
" está no nível " + nivelHeroi)