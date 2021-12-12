// run `node _genertator.js > src/index.js` to generate source code

for (let i = 0; i < 2000; i++) {
  console.log(`import "./demo.css?_=${i}";`);
}
