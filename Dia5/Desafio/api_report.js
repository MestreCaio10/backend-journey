async function fetchUsers() {
    try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
        )   

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
}

function formatReport(users) {
    return users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email, 
        city: user.address?.city ?? "Não informada",
        company: user.company?.name ?? "Não informada",
    }));
}

async function report() {
    console.log("Gerando o relatório de usuários.")
    try {
        
        const rawUsers = await fetchUsers();
        const data = formatReport(rawUsers);
        console.log('\n=== RELATÓRIO DE USUÁRIOS ===');
        console.log(data);
        console.log(`\nSucesso! Relatório gerado com ${data.length} usuários.`);
    } catch (error) {
        console.error(`\n[ERRO NA OPERAÇÃO]: ${error.message}`);
    }       
}

report();