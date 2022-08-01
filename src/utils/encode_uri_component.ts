/*
 * encodeURIComponent() method encode một thành phần URI.
 * encodeURIComponent() method encode các ký tự đặc biệt bao gồm: , /? : @ & = + $ #
 * - Sử dụng decodeURIComponent() method để decode một thành phần URI được encode.
 */

export const uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
const encodeUri = encodeURIComponent(uri); // https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab
const decodeUri = decodeURIComponent(encodeUri);
console.log("decodeUri", decodeUri); // https://w3schools.com/my test.asp?name=ståle&car=saab
