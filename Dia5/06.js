async function getPost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?utm_source=chatgpt.com"
    )
    const data = await response.json();
    const list = [];
    for (let index = 0; index < 10; index++) {
    list.push({
      id: data[index].id,
      title: data[index].title
    });
  }
    console.log(list)
}

getPost();