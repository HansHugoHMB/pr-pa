const encryptedUrl = "U2FsdGVkX1+qoVXMsvCbLXg7M0q53t7gZiesAn3q9HNbG0i1IZL78wMqmgwka3u9";
const passwordBase64 = "TXVhbWJhMjAwNiE=";
const key = atob(passwordBase64);

document.addEventListener("DOMContentLoaded", () => {
    const decryptedUrl = CryptoJS.AES.decrypt(encryptedUrl, key).toString(CryptoJS.enc.Utf8);
    document.getElementById("iframe").src = decryptedUrl;
});