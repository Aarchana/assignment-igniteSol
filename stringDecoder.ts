/* (Q_N0.5)
  @function takes in an encoded string and splits the encoded string into characters
  and checks if each character code is either an upper or lower case letter, if so applies decoding logic and returns decoded char code,
  else returns the same char code and finally the decode char code is converted to appropriate char and joined to return the final decoded ouput string.

  @param string which is encoded
  @return string which is decoded
*/
function decodeString(encodedString: String) {
  let decodedString = 
      encodedString.split('')
      .map((char,index) => { 
        let charCode = encodedString.charCodeAt(index);
        if(isUpperOrLowerCaseLetter(charCode)) {
          let decodedCharCode = charCode-3;
          if(isUpperOrLowerCaseLetter(decodedCharCode))
          return decodedCharCode;
          else
          return decodedCharCode+26;
        }
        return char;
      })
      .map(code =>  {
        if(typeof(code) == "number") {
          return String.fromCharCode(code);
        }
        return code;
      })
      .join('');
  console.log(decodedString)
}
/* 
@function isUpperOrLowerCaseLetter is returns true if the input char code is either an upper or lower case letter code
  @param character code(ASCII)
  @return true/false (Boolean)
*/
function isUpperOrLowerCaseLetter(charCode) {
  let isUpperCaseLetter = charCode>=65 && charCode<=90;
  let isLowerCaseLetter = charCode>=97 && charCode<=122;
  return isUpperCaseLetter||isLowerCaseLetter;
}