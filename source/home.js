const {createCipheriv, createDecipheriv} = require('node:crypto');

const algorithm = 'aes-256-cbc';
const key = 'REtgV24bDB7xQYoMuypiBASMEaJbc59n';
const iv = '8d2bc3f0f69426fc';

//Criptografia dos dados
const encrypt = (data) => {
	const cipher = createCipheriv(algorithm, key, iv);
	let crypted = cipher.update(data, 'utf8', 'hex');
	crypted +=cipher.final('hex');
	return crypted;
};

//Descryptografia dos dados
const decrypt = (data) => {
	const decipher = createDecipheriv(algorithm, key, iv);
	let decrypted = decipher.update(data, 'hex', 'utf8');
	decrypted = decrypted +decipher.final('utf8');
	return decrypted;
};


const data = 'Criptografia data';

const dataEncrypt = encrypt(data);
const dataDecrypt = decrypt(dataEncrypt);

//Datas
console.log(`Data=[${data}]`);

//Data Crypto
console.log(`Data encrypted=[${dataEncrypt}]`);

//Data Des
console.log(`Data decrypted=[${dataDecrypt}]`);

/*const {
  scrypt,
  randomFill,
  createCipheriv
} = require ('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) => {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) => {
    if (err) throw err;

    // Once we have the key and iv, we can create and use the cipher...
    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = '';
    cipher.setEncoding('hex');

    cipher.on('data', (chunk) => encrypted += chunk);
    cipher.on('end', () => console.log(encrypted));

    cipher.write('some clear text data');
    cipher.end();
  });
});*/

/*const { createHmac } = require ('node:crypto');

const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
               .update('fuck')
               .digest('hex');
console.log(hash);*/