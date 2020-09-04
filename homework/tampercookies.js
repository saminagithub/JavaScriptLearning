const assert = require('assert');

//var str = "Visit Microsoft!";
//var res = str.replace("Microsoft", "W3Schools");

const replaceSessionType = session => {
  return session.replace('SessionType=somebank', 'SessionType=OIDC');
};

const editSpecificCookieEntry = (cookie, cookieToModify, newValue) => {
  const cookieSeparator = '&';
  const cooassign = '=';
  const cookieToFind = cookieToModify; // 'SessionType'
  const cookieArray = cookie.split(cookieSeparator);
  // 0: disc=true
  // 1: SessionType=somebank
  // 2: ul=Test
  // 3: ue=keyqa3345%40somecompany.com
  // 4: va=t .....
  let finalresult = '';
  for (let j = 0; j < cookieArray.length; j = j + 1) {
    let currentCookie = cookieArray[j];

    if (currentCookie.includes(cookieToFind)) {
      // if it includes SessionType, then modify it with OIDC
      const [cookey, cooval, ...rest] = currentCookie.split(cooassign);
      // cookey = SessionType
      // cooval = somebank
      // rest = ''
      cookieToAdd = `${cookey}${cooassign}${newValue}`;
    }

    if (j === 0) {
      finalResult = cookieToAdd;
    } else {
      finalResult = finalResult + cookieSeparator + cookieToAdd;
    }
  }
  console.log('finalResult', finalResult);
  return finalResult;
};

const encryptionStuff = () => {
  //   val HASH_FUNCTION = "HmacSHA1"
  // val mac = Mac.getInstance(HASH_FUNCTION)
  // mac.init(new SecretKeySpec("supersecretkey".getBytes, HASH_FUNCTION))
  // val signature = Hex.encodeHexString(mac.doFinal(cookieValue.getBytes))
  // val result = s"$sig-$cookieValue"

  // var hash = CryptoJS.HmacSHA256("Message", "Secret Passphrase");
  var hash = CryptoJS.HmacSHA1('HmacSHA1', 'supersecretkey');
  var base64 = hash.toString(CryptoJS.enc.Base64);
  console.log(hash, base64);
};

assert(
  replaceSessionType('12345SessionType=somebank78900123') ===
    '12345SessionType=OIDC78900123'
);

assert(
  replaceSessionType(
    'disc=true&SessionType=somebank&ul=Test&ue=keyqa3345%40somecompany.com&va=t&custodian=compaynyx&p=t&csrfToken=0b24cb6a097547072136d300061d19fb87eaf05d-1595833558949-6ddbd76c4101e561e6237224&uid=591c3304e4b076c7437bbc7e&csg=true&uf=Test&dac=true&accessToken=c2Vzc2lvbjo0NTBkZWY4Ny0xZmEyLTQyY2EtOTAzMS00MmIyZGI0ZTYxZDc6ZDBmNDAyNTUtNzY4ZS00NzM5LTkxN2QtZmViYTNkNmE4NTBjOjE1OTU4MzM1NTg6NTkxYzMzMDRlNGIwNzZjNzQzN2JiYzdlOlVzZXJSb2xlOlRlc3QgVGVzdHw1SXZ4Z0JVZFNONE5SMmd4VlZLTlFYV0ZITW1kaTlhUjlpbEgwX0VKOC1r'
  ) ===
    'disc=true&SessionType=OIDC&ul=Test&ue=keyqa3345%40somecompany.com&va=t&custodian=compaynyx&p=t&csrfToken=0b24cb6a097547072136d300061d19fb87eaf05d-1595833558949-6ddbd76c4101e561e6237224&uid=591c3304e4b076c7437bbc7e&csg=true&uf=Test&dac=true&accessToken=c2Vzc2lvbjo0NTBkZWY4Ny0xZmEyLTQyY2EtOTAzMS00MmIyZGI0ZTYxZDc6ZDBmNDAyNTUtNzY4ZS00NzM5LTkxN2QtZmViYTNkNmE4NTBjOjE1OTU4MzM1NTg6NTkxYzMzMDRlNGIwNzZjNzQzN2JiYzdlOlVzZXJSb2xlOlRlc3QgVGVzdHw1SXZ4Z0JVZFNONE5SMmd4VlZLTlFYV0ZITW1kaTlhUjlpbEgwX0VKOC1r'
);

assert(
  editSpecificCookieEntry(
    '12345&SessionType=somebank&78900123',
    'SessionType',
    'OIDC'
  ) === '12345&SessionType=OIDC&78900123'
);

assert(
  editSpecificCookieEntry(
    '12345&SessionType=somebank&someTOKEN=78900123',
    'someTOKEN',
    'newToken'
  ) === '12345&SessionType=somebank&someTOKEN=newToken'
);

assert(
  editSpecificCookieEntry(
    'disc=true&SessionType=somebank&ul=Test&ue=keyqa3345%40somecompany.com&va=t&custodian=compaynyx&p=t&csrfToken=0b24cb6a097547072136d300061d19fb87eaf05d-1595833558949-6ddbd76c4101e561e6237224&uid=591c3304e4b076c7437bbc7e&csg=true&uf=Test&dac=true&accessToken=c2Vzc2lvbjo0NTBkZWY4Ny0xZmEyLTQyY2EtOTAzMS00MmIyZGI0ZTYxZDc6ZDBmNDAyNTUtNzY4ZS00NzM5LTkxN2QtZmViYTNkNmE4NTBjOjE1OTU4MzM1NTg6NTkxYzMzMDRlNGIwNzZjNzQzN2JiYzdlOlVzZXJSb2xlOlRlc3QgVGVzdHw1SXZ4Z0JVZFNONE5SMmd4VlZLTlFYV0ZITW1kaTlhUjlpbEgwX0VKOC1r',
    'SessionType',
    'OIDC'
  ) ===
    'disc=true&SessionType=OIDC&ul=Test&ue=keyqa3345%40somecompany.com&va=t&custodian=compaynyx&p=t&csrfToken=0b24cb6a097547072136d300061d19fb87eaf05d-1595833558949-6ddbd76c4101e561e6237224&uid=591c3304e4b076c7437bbc7e&csg=true&uf=Test&dac=true&accessToken=c2Vzc2lvbjo0NTBkZWY4Ny0xZmEyLTQyY2EtOTAzMS00MmIyZGI0ZTYxZDc6ZDBmNDAyNTUtNzY4ZS00NzM5LTkxN2QtZmViYTNkNmE4NTBjOjE1OTU4MzM1NTg6NTkxYzMzMDRlNGIwNzZjNzQzN2JiYzdlOlVzZXJSb2xlOlRlc3QgVGVzdHw1SXZ4Z0JVZFNONE5SMmd4VlZLTlFYV0ZITW1kaTlhUjlpbEgwX0VKOC1r'
);

// assert(encryptionStuff() === "");

// const replaceSessionType2 = session => {
//   const oidc = "OIDC78900123";
//   let finalResult = "";

//   const sessionArray = session.split("=");
//   sessionArray[sessionArray.length - 1] = oidc;

//   for (let j = 0; j < sessionArray.length; j = j + 1) {
//     if (j === 0) {
//       finalResult = sessionArray[j];
//       console.log("true part if", finalResult);
//     } else {
//       finalResult = finalResult + "=" + sessionArray[j];
//       console.log("else part if", finalResult);
//     }
//   }
//   console.log("finalResult", finalResult);
//   return finalResult;
// };
