/*
 * method encodeURI () mã hóa một URI.
 * - Lưu ý:
 *   - encodeURI() method không encode (mã hoá) các ký tự như: , / ? : @ & = + $ * #
 *   - Nếu muốn encode các ký tự trên thì dùng encodeURIComponent() để thay thế.
 * - Dùng decodeURI() để giải mã.
 */

export const newURI = "https://w3schools.com/my test.asp?name=ståle&car=saab";
const encodeNewUri = encodeURI(newURI); // https://w3schools.com/my%20test.asp?name=st%C3%A5le&car=saab
const decodeNewUri = decodeURI(encodeNewUri); // https://w3schools.com/my test.asp?name=ståle&car=saab
console.log("decodeNewUri", decodeNewUri);
