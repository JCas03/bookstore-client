const environmentUrls = new Map();



environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('book-store-web-v2.herokuapp.com', 'https://book-store-v2.herokuapp.com');


export default environmentUrls.get(window.location.hostname);