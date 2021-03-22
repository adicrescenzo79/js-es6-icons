$(document).ready(function(){
  icons.forEach((icona) => {
    let color = '';
    if (icona.type == 'animal') {
      color = 'blue';
    } else if (icona.type == 'vegetable') {
      color = 'yellow';
    } else if (icona.type == 'user') {
      color = 'purple';
    }
    $('.icons').append(`<div class='${icona.type} ${icona.name}'><i class='${color} ${icona.family} ${icona.prefix}${icona.name}'></i><span>${icona.name}</span></div>`);
  });

  $('select').change(function(){
    let type = $(this).val();
    if (type == 'all') {
      $('.icons > div').show();

    } else {
      $('.icons > div').hide();
      $(`.icons >div.${type}`).show();
    }
  })

  
});
