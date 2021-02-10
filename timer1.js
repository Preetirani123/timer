
const args = process.argv.slice(2);

const timer1 = function() {
  process.stdout.write('\x07');
}

for (let i = 0; i < args.length; i++) {
  if (args[i] < 0) {
    
  } 
  
  else if (isNaN(Number(args[i]))) {
    
  }

  else {
    setTimeout(() => timer1(), args[i]*1000)
  }

};