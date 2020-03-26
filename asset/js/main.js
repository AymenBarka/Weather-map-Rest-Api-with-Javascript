$(function () {
  var apiKey = 'd00007cf7260ba5de6dc72d6f9021c73';

  var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?APPID=' + apiKey + '&units=metric&cnt=7&lang=fr';
  

  $('#weather button').click(function (e) {

    e.preventDefault();

    var cityValue = $('#city').val();

    var params = {
      url: baseUrl + '&q=' +cityValue,
      method: 'GET',
    };

    $.ajax(params).done(function (response) {
      console.log(response);
      //show card
      $('.card').removeClass('d-none');
      //ERROR
      $('#city').removeClass('is-invalid');
      $('.invalid-feedback').slideUp();
      $('.card').show();
      // title
      $('.card-title').text(response.city.name);

      var contenu = ""
      for(let i = 0; i< response.list.length; i++) {
        contenu = contenu + "<div class='card mt-4 col' style='width: 15rem;'><div class='text-center'><img src='http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png' class=' image-weather1' width='50' height='50' alt='' /></div><div class='card-body'><h5 class='card-title'></h5><div class='card-text'><p class='description-weather1'>"+ response.list[i].weather[0].description +"</p><p><strong>Température :</strong> <span class='temp-weather1'>" + Math.round(response.list[i].main.temp)  + "</span><br /><strong>Max :</strong> <span class='temp-max-weather1'>" + Math.round(response.list[i].main.temp_max) + "</span><strong>Min :</strong> <span class='temp-min-weather1'>"+ Math.round(response.list[i].main.temp_min)+"</span></p></div></div></div>"

      }
      $('#contenu').empty().append(contenu);

       document.getElementById("contenu").innerHTML = contenu;

      

    }).fail(function () {
        $('.invalid-feedback').slideDown();
        $('#city').addClass('is-invalid');
        $('.card').hide();
        console.log('Erreur');
      })
  });


});

