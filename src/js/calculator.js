var add = require('./functions/add'),
    subtract = require('./functions/subtract'),
    $ = require('jquery');

function calculator(fn) { 
    return function () {
        var value1 = Number($('#input1').val());
        var value2 = Number($('#input2').val());
        var result = fn.calculate(value1, value2);
        $('#result').text(result);
    }
};

$(document).ready(function() {
    $('#addButton').click(calculator(add));
    $('#subtractButton').click(calculator(subtract));
});