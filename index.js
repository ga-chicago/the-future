// constants never change
const TAG = 'NODE_APP';
const Reader = require('./Reader');
const Writer = require('./Writer');

let data = {
  eyes: 'blue',
  isFragile: true,
  emoSongs: 4
}

// let is only scoped to a block of code
{
  // a simple block of code :)
  let test = new Writer('james.json', JSON.stringify(data));
  console.log(test.toString());
  test.writeData();

  let experiment = new Reader('james.json');
  console.log(experiment.toString());
  experiment.readFile();
  console.log(experiment.toJSON());
}











