// Creazione array ad oggetti con proprietà (nome e peso)
const bikes = [
    { nome: "Bianchi",
      peso: 6.8 },
    { nome: "Specialized", 
      peso: 6.7 },
    { nome: "Trek", 
      peso: 6.9 },
    { nome: "Cannondale",
      peso: 7.0 },
    { nome: "Pinarello",
      peso: 6.2 },
  ];
// Funzione che stampa a schermo la bici con il peso minore 
function lightBike(bici) {
    let biciLeggera = bici[0];
    for (let i = 1; i < bici.length; i++) {
      if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
      }
    }
    return biciLeggera;
  }
const biciPiuLeggera = lightBike(bikes);
// Stampa a schermo
alert(`La bici con il peso minore è la ${biciPiuLeggera.nome} con un peso di ${biciPiuLeggera.peso} kg`);