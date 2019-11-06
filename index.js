const data = require('./bank-data/data/banks.json');
const fs = require('fs');
const arr = [];
for (let key in data) {
    const d = data[key];
    arr.push({
        bank_code: d.code,
        bank_name: d.name,
        sort_higa: d.hira,
        sort_kata: d.kana,
        popular_status: 0
    });
}

fs.writeFile('./convert/banks.json', JSON.stringify(arr, null, 4), function (err) {
    if (err) throw err;
    console.log('saved');
});