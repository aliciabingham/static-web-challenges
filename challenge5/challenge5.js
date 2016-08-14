var a = 0;
var b = 1;
var f = 1;

for (var i = 0; i < 15; i++) {
f = a + b;
a = b;
b = f;

console.log(f)
}