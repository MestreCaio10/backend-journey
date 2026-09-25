async function getPost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1?utm_source=chatgpt.com"
    );

    const data = await response.json();

    console.log(data.id);
    console.log(data.title);
    console.log(data.body);
};

getPost();