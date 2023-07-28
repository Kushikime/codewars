let alphabet = String.fromCharCode(...Array(123).keys()).slice(97);

function encryptor(mod, message) {
  let steps = Math.abs(mod);
  return message
    ? message
        .split('')
        .map((letter) => {
          let currentIdx = alphabet.indexOf(letter.toLowerCase());
          let isUpperCase =
            currentIdx >= 0 && alphabet.indexOf(letter) === -1 ? true : false;

          if (currentIdx === -1) {
            return letter;
          }

          if (steps === 0) {
            return letter;
          }

          if (mod > 0) {
            while (steps > 0) {
              if (currentIdx === alphabet.length - 1) {
                currentIdx = -1;
              }

              currentIdx++;
              steps -= 1;
            }
          }

          if (mod < 0) {
            while (steps > 0) {
              if (currentIdx === 0) {
                currentIdx = alphabet.length;
              }

              currentIdx--;
              steps -= 1;
            }
          }

          steps = Math.abs(mod);
          return !isUpperCase
            ? alphabet[currentIdx]
            : alphabet[currentIdx].toUpperCase();
        })
        .join('')
    : '';
}

let test1 = encryptor(13, ''); //''
let test2 = encryptor(0, 'no cypher'); // 'no cypher'
let test3 = encryptor(13, 'Caesar Cipher'); // 'Pnrfne Pvcure'

console.log('test1:', test1);
console.log('test2:', test2);
console.log('test3:', test3);
