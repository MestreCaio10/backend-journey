const promise = new Promise ((resolve) => {
    const success = true;

    if (success) {
        setTimeout(() => {
            resolve("Product loaded successfully.")
        }, 1000);
    }
});

promise
    .then(result => {
        console.log(result);
    });