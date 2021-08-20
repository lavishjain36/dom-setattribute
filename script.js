const obj = [
  {
    brand: "apple",
    model: "ios",
  },

  {
    brand: "dell",
    model: "inspiron",
  },
];

// for (i = 0; i < obj.length; i++) {
//   console.log(obj);
// }
obj.forEach((vimal) => {
  for (var key in vimal) {
    console.log(key, vimal[key]);
  }
});
