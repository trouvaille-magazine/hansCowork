// 8 * 8 = 64
// " # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #"
// console.log(" # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #");

let line = "";
const lineA = " #";
const lineB = "# ";
let output = "";

for (let y = 1; y <= 8; y++) {
  if (y % 2 === 0) {
    line = lineB;
  } else {
    line = lineA;
  }
  for (let n = 1; n <= 4; n++) {
    output += line;
    if (n === 4) output += "\n";
  }
}

console.log(output);

let output2 = " # # # #\n# # # # \n # # # #\n# # # # ";

console.log("================");
console.log(output2);
