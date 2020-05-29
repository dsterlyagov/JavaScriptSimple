function urlGenerator(domain) {
    return function (url, apikey, numberPage, quantity) {
        return `https://${url}.${domain}?=${apikey}&${numberPage}&${quantity}`
    }
}

const comUrl = urlGenerator('com');

// for(let i = 0; i<50;i++){
//     console.log(comUrl('google','4B12BBCE-D7AE-4B82-BE7A-5F8117EDB528', i,15));
// }
// console.log(comUrl('google','4B12BBCE-D7AE-4B82-BE7A-5F8117EDB528', 1,15));
// //console.log(comUrl('netflix'));
//

function urlParseGenerator(begin, end, quantity) {
   let arr =[];
    for (let i=begin; i<=end;i++){
      arr.push(comUrl('google','4B12BBCE-D7AE-4B82-BE7A-5F8117EDB528', i,quantity))
    }
    return arr;
}

console.log(urlParseGenerator(1, 10, 20));
