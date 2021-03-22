$(document).ready(function(){
  // Creare un array di oggetti:
  const bikes = [];
  // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
  // nome e peso.
  let nome = '';
  let peso = '';

  let bike = {
    nome,
    peso,
  }

  nome = 'Mountain-bike'
  peso = 23

  bike = {
    nome,
    peso,
  }

  bikes.push(bike);

  nome = 'Graziella'
  peso = 12

  bike = {
    nome,
    peso,
  }

  bikes.push(bike);

  nome = 'City-bike'
  peso = 15

  bike = {
    nome,
    peso,
  }

  bikes.push(bike);


  console.log(bikes);

  let pesoMinore = bikes[0].peso;
  let bici = bikes[0].nome;
  bikes.forEach((item) => {
    if (item.peso < pesoMinore) {
      pesoMinore = item.peso;
      bici = item.nome
    }
  });

  console.log(`La bicicletta più leggera è la ${bici} che pesa ${pesoMinore} Kg`);

});
