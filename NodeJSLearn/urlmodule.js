import url from 'url';

/*here we can build url like these parameters in url systemetic way
URL {
    href: 'https://example.org/a/b/c?d=e#fgh',
    origin: 'https://example.org',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'example.org',
    hostname: 'example.org',
    port: '',
    pathname: '/a/b/c',
    search: '?d=e',
    searchParams: URLSearchParams { 'd' => 'e' },
    hash: '#fgh'
  }
  */

const myURL = new URL('https://example.org:9000');
myURL.pathname='/a/b/c';
myURL.search = '?d=e';
myURL.hash= '#fgh';
console.log(myURL);