const fs = require('fs');

const filePath = '1-file-cleaner.md';


fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    const updated = data.replace(/\s+/g,' ');

    fs.writeFile(filePath, updated, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('Content with start line added successfully!');
      });

    
});