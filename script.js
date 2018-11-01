$(document).ready(function() {
  // set endpoint and your access key

  // get the most recent exchange rates via the "latest" endpoint:
  $.ajax({
    url: 'https://api.exchangeratesapi.io/latest?base=USD',
    dataType: 'json',
    success: function(json) {
      var currencySymbols = json.rates;
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
        url: 'https://api.exchangeratesapi.io/latest?base=USD',
        dataType: 'json',
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
