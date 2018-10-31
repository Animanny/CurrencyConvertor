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
        $('#from').append("<option value='" + key + "'>" + key + "</option>")
        $('#to').append("<option value='" + key + "'>" + key + "</option>")
        //alert(currencySymbols[key]);

      }

    }
  });


  $('#fromnum').on("input", function() {
    if ($("#from").children("option").filter(":selected").text() === "Choose..." || $("#to").children("option").filter(":selected").text() === "Choose...") {

    } else {
      var from = $("#from").children("option").filter(":selected").text();
      var to = $("#to").children("option").filter(":selected").text();
      var amount = $('#fromnum').val();
      var out = 0;

      var endpoint = 'convert';
      $.ajax({
        url: 'http://data.fixer.io/api/latest?access_key=1972a0e4b17f2acb6b1fc1e053eb13a2',
        dataType: 'jsonp',
        success: function(json) {
          var call = json.rates;

          var out = amount / call[from];
          out = out * call[to]
          $('#tonum').val(Math.round(out*100)/100);

        }
      });
    }


  });
});
