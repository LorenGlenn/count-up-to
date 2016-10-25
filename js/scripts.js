var result = [];
var calculate = function(countingTo, countingBy) {
  if (countingBy <= 0 || countingTo <= 0) {
  alert('Nice try, enter a positive number.')
  }
    else if (!Number.isInteger(countingBy) || !Number.isInteger(countingTo)) {
      alert("You're dumb, enter a number!");
    }
    else if (countingBy > countingTo) {
      alert("Can you read? Put them in the right spot.")
    }
    else {
        for (var index = countingBy; index <= countingTo; index += countingBy) {
          result.push(index);
        };
        alert('Your answer is ' + result + " .")
      };
  };



$(document).ready(function()  {
  $("#submit").click(function() {
    var countingTo = parseInt($("#count-to").val());
    var countingBy = parseInt($("#count-by").val());
    calculate(countingTo, countingBy);
  });
});
