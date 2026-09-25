async function put(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify ({
                id: id,
                title: "Atualização com put",
                body: "Fazendo um aatualização com put no meu dia 6 de exercícios.",
                userId: 10
            })
        })

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

         console.log(`Status: ${response.status}`);
    }catch (error) {
        throw error;
    }
}

put(5);