import CryptoJS from 'crypto-js';

  function encryptText(text, key, iv) {
      const encrypted = CryptoJS.AES.encrypt(text, key, { iv: iv }).toString();
      return encrypted;
    }

  
  function decryptText(encryptedText, key, iv) {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, { iv: iv }).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

  const encButton = document.getElementById("encrypt");
  const decButton = document.getElementById("decrypt");
  
  
  const text = document.getElementById("crypto_textbox");
  const key = document.getElementById("key_textbox");
  const iv = CryptoJS.lib.WordArray.random(16);
  
  
    function onEncrypt() {
      const encrypted = CryptoJS.AES.encrypt(text, key, { iv: iv }).toString();
      document.getElementById("output").innerHTML = encrypted;
      console.log(encrypted)
    }
  
    function onDecrypt() {
      const decrypted = CryptoJS.AES.decrypt(text, key, { iv: iv }).toString();
      document.getElementById("output").innerHTML = decrypted;
      console.log(decrypted)
    }
  
  
  
  encButton.addEventListener("click", onEncrypt);
  decButton.addEventListener("click", onDecrypt);
  
  function myJavaScriptFunction(text) {
    // Your JavaScript code that uses the text from the submit button goes here
    console.log("Submitted text:", text);
    // You can perform any other actions with the text here, such as sending it to a server or displaying it on the webpage.
  }

  

const secretKey = "YourSecretKey"; // Replace this with your secret key (should be a long, random string)
// const iv = CryptoJS.lib.WordArray.random(16); // Generate a random IV

const originalText = "DaBaby";
const encryptedText = encryptText(originalText, secretKey, iv);
console.log("Encrypted Text:", encryptedText);

const decryptedText = decryptText(encryptedText, secretKey, iv);
console.log("Decrypted Text:", decryptedText);

