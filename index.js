const fs = require('fs');
const parser = require('./lib/parser.js');

const file = './data/julian replay  - from start to end.replay';

const buffer = fs.readFileSync(file);

var data = parser.parse(buffer);

var kills = data.chunks
    .filter((c) => c.res && c.res.group == 'playerElim')
    .map((c) => {
      c.res.res.time = c.res.time1;
      return c.res.res;
    })
    .map((c) => `${c.time}-.-${c.killer}-.-${c.killed}`);

var killsArray = []

for (let i = 0; i < kills.length; i++) {
  killsArray.push(kills[i].split("-.-"));
}

for (let i = 0; i < killsArray.length; i++) {
  console.log(killsArray[i]);
}
