var nameArr = ["ahmed", "omar", "amin", "adham", "Ahmed", "Alaa", "amina", "youssef", "assem", "Amina", "mahmoud", "aa", "ab"];
var getNamesWithLetterA = function (arr) {
    var mySet = new Set();
    arr.map(function (name) { return name.toLowerCase(); });
    arr.sort();
    arr.forEach(function (name) { return name[0] === 'a' && name.length <= 255 && mySet.add(name); });
    return mySet;
};
console.log(getNamesWithLetterA(nameArr));
