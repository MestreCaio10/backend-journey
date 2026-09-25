async function get(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(url);

        console.log(`Status: ${response.status}`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(`ID: ${data.id}`);
        console.log(`Title: ${data.title}`);

    }catch (error) {
        throw error;
    }
}

get(5);