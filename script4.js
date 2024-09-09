//Must include break statement or all cases will run
switch (operand) {
    case '+':
      console.log(x + y);
      break;
    case '-':
      console.log(x - y);
      break;
    case '*':
      console.log(x * y);
      break;
    case '/':
      console.log(x / y);
      break;
    case '**':
      console.log(x ** y);
      break;
    default:
      console.log('Invalid Operand');
      break;
  }
  let health = 100;
  let enemyHealth = 100;
  function decision(action) {
    switch (action) {
      case 'attack':
        enemyHealth -= 15;
        break;
      case 'heal':
        health += 50;
        break;
      case 'defend':
        health -= 25;
        if (health <= 0) console.log(`You have died`);
        break;
      default:
        console.log(`Not a valid action`);
    }
  }
  decision(`defend`);
  decision(`defend`);
  decision(`defend`);
  decision(`defend`);
  console.log(`Our health`, health, `Enemy health`, enemyHealth);