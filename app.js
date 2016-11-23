//BreweryDB Key bb8d5c2eead8c18146c9b0c24e3bb7fa
var BREWERYDB_BASE_URL = 'http://api.brewerydb.com/v2/'

function getDataFromApi(city, state, callback) {
    var query = {
        key: 'bb8d5c2eead8c18146c9b0c24e3bb7fa',
        locality: city,
        region: state

    }
    $.getJSON(BREWERYDB_BASE_URL + "locations", query, callback);
}



function watchSubmit() {
    $('#js-locate-form').submit(function(e) {
        e.preventDefault();
        var city = $(this).find('#js-city').val();
        var state = $(this).find('#js-state').val();
        getDataFromApi(city, state, function(data) {});
    })
}

$(function() { watchSubmit(); });
