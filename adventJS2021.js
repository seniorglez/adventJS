//challenge 1

export default function contarOvejas(ovejas) {
  return ovejas.filter(o => o.color=="rojo")
  .filter(o => (/^.*(A.*N|N.*A).*$/i).test(o.name));
}

//challenge 2

export default function listGifts(letter) {
 return letter.trim()
 .split(/\s+/)
 .filter(word => !word.startsWith('_'))
 .reduce((acc, cur)=> {
     acc[cur] = (acc[cur] ?? 0) + 1;
     return acc;
 }, {})
}
