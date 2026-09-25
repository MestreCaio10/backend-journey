const promise = new Promise ((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Product loaded successfully.");
    } else {
        reject("Error loading product.");
    }
});

async function execute() {
    try {
        const result = await promise;
        console.log(result);
    } catch (reject) {
        console.log(reject);
    }
}

execute();