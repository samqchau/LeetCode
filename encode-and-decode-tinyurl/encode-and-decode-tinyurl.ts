/**
 * Encodes a URL to a shortened URL.
 Time Complexity - O(1)
 Function time complexity is not dependent on string input size.
 
 Space Complexity - O(n)
 O(2n) --> O(n) --> Two hashmaps are used as key value stores. We save the longUrl to keep track of whether or not this url already has a tinyUrl, and we save the codes generated so to avoid generating two of the same tinyUrl.
 
 
 */
let usedCodesDB = {};
let urlDB = {};

function generateCode(): string {
    const chars:string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let code:string = ''
    for(let i = 0; i < 6; i++) {
        code += chars[Math.floor(62 * Math.random())]
    }
    return code
}

function encode(longUrl: string): string {
    if(urlDB[longUrl]) return  
    let code: string = generateCode();
    console.log(code)
    while(usedCodesDB[code]) {
        code = generateCode();
    }
    usedCodesDB[code] = longUrl;
    urlDB[longUrl] = code;    
    return `http://tinyurl.com/${code}`
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    return usedCodesDB[shortUrl.split('http://tinyurl.com/')[1]]
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */