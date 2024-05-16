const nameArr=["ahmed","omar","amin","adham","Ahmed","Alaa","amina","youssef","assem","Amina","mahmoud","aa","ab"]

const getNamesWithLetterA = (arr:string[]) =>{
    const mySet = new Set<string>();
    arr.map(name=>name.toLowerCase());
    arr.sort();
    arr.forEach(name=> name[0]==='a' && name.length<=255 && mySet.add(name))
    return mySet;
}

console.log(getNamesWithLetterA(nameArr))

