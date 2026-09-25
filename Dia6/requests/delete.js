async function apagar(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(url, {
            method: "DELETE"
        })

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        console.log(`Status: ${response.status}`);

    } catch (error) {
        throw error;
    }
}

apagar(5)