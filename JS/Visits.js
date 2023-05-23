const fs = require('fs');

fs.readFile('./File/visit.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})

const content = "somthing"

fs.writeFile('./File/visit.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
})