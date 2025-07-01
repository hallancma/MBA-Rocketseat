// Rest params (...) permite representar um número indefinido de argumentos como um array.

function values(...rest) {
  //console.log(a);
  console.log(rest.length);
  console.log(...rest);
}

function values2(...args) {
  //console.log(a);
  console.log(args.length);
  console.log(...args);
}

values(2, 1);
values2(2, 1, 8, 0, 6);