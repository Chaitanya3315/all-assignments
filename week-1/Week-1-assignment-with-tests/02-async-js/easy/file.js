const fs = require('fs');



fs.readFile('3-read-from-file.md', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    const updated = "New line Added\n" + data;

    fs.writeFile('3-read-from-file.md', updated, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('Content with start line added successfully!');
      });

    
});