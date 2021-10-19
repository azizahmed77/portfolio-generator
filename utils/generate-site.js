const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theres an errpr, reject the Promise and send error to Promise's `catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure Promise doesnt accident exceute resolve() function
                return;
            }

            // if everything went well, resolve Promise and send succesful data to `then()` method
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        //if theres an errpr, reject the Promise and send error to Promise's `catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure Promise doesnt accident exceute resolve() function
            return;
        }

        // if everything went well, resolve Promise and send succesful data to `then()` method
        resolve({
            ok: true,
            message: "File copied!"
        });
    });
});
}



module.exports = { writeFile, copyFile };