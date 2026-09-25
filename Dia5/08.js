async function fetchPostById(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!response.ok) {
    throw new Error(`Erro ao buscar o post: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  
  return data;
}

async function executar() {
  try {
    const post = await fetchPostById(1);
    console.log("Post carregado com sucesso:", post);
  } catch (error) {
    console.error("Tratamento do erro:", error.message);
  }
}

executar();