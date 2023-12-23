// A string url is given. Return the parameter values in an array. The keys can be ignored.

// First approach
function getURLParams(url) {
    return url.split("&").map(param => param.split("=")[1]);
}

// Second approach
// function getURLParams(url) {
//     const newUrl = url.split("?")?.[1]?.split("&");
//     if (!newUrl) return [];
//     return newUrl.map(param => param.split("=")[1]);
// }

console.log(getURLParams('https://jscodebox.com/test.xml?id=3&value=file'));    // ['3','file']
console.log(getURLParams('https://jscodebox.com/'));   // []
console.log(getURLParams('https://jscodebox.com/index.php?kex=Jfs873nj&id=1&action=delete'));   // ['Jfs873nj','1','delete']
console.log(getURLParams('https://jscodebox.com/delete.php?api_key=njkASF5'));    // ['njkASF5']
console.log(getURLParams('https://jscodebox.com/?action=new&user_id=3&force=false'));   // ['new','3','false']