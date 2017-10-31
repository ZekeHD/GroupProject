$(function () {

    var names = [
      'Amazon',
      'Barnes and Noble',
      'Chegg',
      'ValoreBooks',
      '2nd and Charles',
      'alibris',
      'ThriftBooks'
    ];

    function chooseToExclude(arr) {
        var x = Math.floor(Math.random() * 5);
        var array = arr;
        array.splice(x, 1);
        return array;
    }

    function generatePrice() {
        var x = Math.ceil(Math.random() * 10000) / 100;
        return x.toFixed(2);
    }

    var names_fake = names;
    var names_real = chooseToExclude(names_fake);
    for (var i = 0; i < names_real.length; i++) {
        var currentName = names_real[i];
        var currentPrice = generatePrice();
        $('#sourcesTable').append('<tr><td>' + currentName + ':</td><td>$' + currentPrice + '</td></tr>');
    }
});