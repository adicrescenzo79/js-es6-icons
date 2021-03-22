$(document).ready(function(){

  const studenti = [
    'gino',
    'pino',
    'ale',
    'sara',
    'marco',
    'giuditta',
    'lorenzo',
    'raffaele',
    'susanna'
  ];

  // const studenti1 = studenti.filter((item, i) => 0 < i && i < 4);

  // console.log(studenti1);


  const myFunction = (array, a , b) => array.filter((item, i) => a < i && i < b);

  const studenti1 = myFunction(studenti, 2, 8);

  console.log(studenti1);

  // console.log(myFunction(studenti, 2, 8));

});
