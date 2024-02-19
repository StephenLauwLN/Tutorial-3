window.onload = function() {
    var display = document.querySelector('.display');
    var keys = Array.from(document.querySelectorAll('.calculator__keys button'));
  
    keys.forEach(function(key) {
      key.addEventListener('click', function() {
        var keyValue = this.textContent;
  
        if (keyValue === 'C') {
          clearDisplay();
        } else if (keyValue === '=') {
          performCalculation();
        } else {
          updateDisplay(keyValue);
        }
      });
    });
  
    function updateDisplay(value) {
      display.textContent += value;
    }
  
    function performCalculation() {
      var expression = display.textContent;
      var operands = expression.split(/[-+x÷]/g);
      var operators = expression.split(/[0-9.]/g).filter(Boolean);
      var result = parseFloat(operands[0]);
  
      for (var i = 0; i < operators.length; i++) {
        var operator = operators[i];
        var operand = parseFloat(operands[i + 1]);
  
        switch (operator) {
          case '+':
            result += operand;
            break;
          case '-':
            result -= operand;
            break;
          case 'x':
            result *= operand;
            break;
          case '÷':
            result /= operand;
            break;
        }
      }
  
      display.textContent = result;
    }
  
    function clearDisplay() {
      display.textContent = '';
    }
  };