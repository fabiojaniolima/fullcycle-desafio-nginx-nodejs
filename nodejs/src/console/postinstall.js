const { existsSync, copyFileSync } = require('fs');
const { join } = require('path');

const pathFile = join(process.cwd(), '.env');

if (!existsSync(pathFile)) {
    try {
        copyFileSync('.env-sample', '.env');
    } catch (e) {
        console.log(e.message);
    }
}
