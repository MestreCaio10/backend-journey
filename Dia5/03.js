const promise = new Promise ((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Product loaded successfully.");
    } else {
        reject("Error loading product.");
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(reject => {
        console.log(reject);
    });