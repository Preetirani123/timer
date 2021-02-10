
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const timer = function() {
  process.stdout.write('\x07');
}

rl.question("Press 'b' for immediate beep or 1 to 9 for delayed beep : ", (answer) => {
  if (answer === 'b') {
    setTimeout(() => timer(), 0)
  }

  else if (answer >= 1 && answer <= 9) {
    console.log(`setting timer to ${answer} seconds`)
    setTimeout(() => timer(), answer*1000)
  }
  
  else if (answer < 1  || answer > 9) {
    console.log("time is not between 1 and 9")
  }

  rl.on('close', function() {
    console.log('Thanks for using me, ciao!');
    process.exit(0);
  });

});