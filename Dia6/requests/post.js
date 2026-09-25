async function post() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify ({
                title: "Learning HTTP",
                body: "Day 06 of my backend journey",
                userId: 1
            })
        })

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Status: ${response.status}`);
        console.log("Resposta do servidor:", data);
    }catch (error) {
        throw error;
    }
}

post();