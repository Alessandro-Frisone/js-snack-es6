// Creazione array ad oggetti con proprietà (nome, punti fatti e falli subiti)
const footballTeams = [
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
];

// Ciclo che genera dei numeri random nelle proprietà (punti fatti) e (falli subiti)
for (let i = 0; i < footballTeams.length; i++) {
    footballTeams[i].puntiFatti = Math.floor(Math.random() * 100);
    footballTeams[i].falliSubiti = Math.floor(Math.random() * 100);
}
console.log(footballTeams);

// Array con elementi (punti fatti) e (falli subiti)
const infoFootballTeams = [];
for (let i = 0; i < footballTeams.length; i++) {
    infoFootballTeams.push({
        nome: footballTeams[i].nome,
        falliSubiti: footballTeams[i].falliSubiti
    });
}
console.log(infoFootballTeams)