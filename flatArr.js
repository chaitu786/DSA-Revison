let arr = [1, [2, [3, 4, 5, [6]]]];

let output = [];

const getFlattenArr = (arr = []) => {
  arr.forEach((el) => {
    if (el?.length) {
      getFlattenArr(el);
    } else {
      output.push(el);
    }
  });
};

getFlattenArr(arr);
console.log(output);

const obj= {info:{name: {fname: "aman",lname: {middlename: "kumar",pname: {mom: "mon",dad: "dad"}}}},address: "gt road "};

let output2 = {};
const lastObj = (obj) => {
    let keys = Object.keys(obj);
        keys.forEach(key => {
            if(typeof obj[key] == "object"){
                lastObj(obj[key]);
            }
            else {
                output2[key] = obj[key];
            }
        })
}
lastObj(obj);
console.log(output2)