console.log('type \'sabique\' ;)');
const secret = "sabique";
const input = [];
let foundSecret = false;

function recordKey(e){
  input.push(e.key);
  
  //Trim Array
  input.splice(-input.length, input.length - secret.length);

  if(input.join('').toLowerCase() === secret){
    foundSecret = true;
    unicornAttack();
  }
}

function unicornAttack() {
  cornify_add();
}

window.addEventListener('keyup', (e) => { foundSecret ? unicornAttack() : recordKey(e) });