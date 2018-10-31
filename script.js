$(document).ready(function() {

  // set endpoint and your access key
  endpoint = 'symbols'
  access_key = '1972a0e4b17f2acb6b1fc1e053eb13a2';

  // get the most recent exchange rates via the "latest" endpoint:
  $.ajax({
    url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function(json) {
      var currencySymbols = json.symbols;
      // exchange rata data is stored in json.rates

      for (var key in currencySymbols) {
        $('#from').append("<option value='" + currencySymbols[key] + "'> " + currencySymbols[key] + " </option>")
        $('#to').append("<option value='" + currencySymbols[key] + "'> " + currencySymbols[key] + " </option>")
        //alert(currencySymbols[key]);

      }

    }
  });


  $('#fromnum').on("input",function() {
    $('#tonum').val($('#fromnum').val());
  });

  $("#convert_button").click(function() {
    alert("Hello!");
  });









});
