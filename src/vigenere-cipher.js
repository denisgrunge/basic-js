const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  reverseString(str) {
    return (str === '') ? '' : this.reverseString(str.substr(1)) + str.charAt(0);
  }
  encryption(input, keyword, operation) {
    if (input === undefined || keyword === undefined) {
      throw new NotImplementedError('Incorrect arguments!');
    }

    const inputText = input.toUpperCase();
    const keywordText = keyword.toUpperCase();
    let result = '';
    let keyword_index = 0;

    for (let symbol of inputText) {
      const symbolCode = symbol.charCodeAt();

      if (symbolCode >= 65 && symbolCode <= 90) {
        const charCode = operation(symbol.charCodeAt() - 65, keywordText[keyword_index].charCodeAt() - 65) % 26;
        result += String.fromCharCode(charCode + 65);

        if ((keyword_index + 1) === keywordText.length) {
          keyword_index = 0;
        } else {
          keyword_index++;
        }
      } else {
        result += symbol;
      }
    }

    return this.isDirect ? result : this.reverseString(result);
  }
  encrypt(input, keyword) {
    return this.encryption(input, keyword, (a, b) => a + b);
  }
  decrypt(input, keyword) {
    return this.encryption(input, keyword, (a, b) => a + 26 - b);
  }
}

module.exports = {
  VigenereCipheringMachine
};
