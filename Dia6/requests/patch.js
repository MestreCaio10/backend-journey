async function patch(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(url, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify ({
                title: "Atualização do titulo com PATCH"
            })
        })

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        console.log(`Status: ${response.status}`)
    } catch (error) {
        throw error;
    }
}

patch(5);