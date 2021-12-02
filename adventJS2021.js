//challenge 1

export default function contarOvejas(ovejas) {
  return ovejas.filter(o => o.color=="rojo")
  .filter(o => (/^.*(A.*N|N.*A).*$/i).test(o.name));
}
