1-O que é uma requisição HTTP e o que é uma resposta HTTP?
    Requisição é quando eu passo uma url no meu código e ela manda para a api e faz o que eu pedindo os dados e açoes que eu quero, já a resposta é o que retorna da api.

2-Para que serve GET?
     Para buscar determinado dado na api.
3-Qual a diferença conceitual entre POST e PUT?
    Post coloca uma nova informação/objeto nos dados da api, enquando o put faz uma atualização total de um dado/objeto já existente.
4-Qual a diferença entre PUT e PATCH?
    Put atualiza todo o dado/objeto =, enquanto o patch apena atualiza uma determinada informação daquele dado/objeto.
5-Para que serve DELETE?
    Para deletar um dado/objeto
6-Qual a diferença entre status 200, 201 e 204?
    200 = Ok
    201 = Created
    204 = No content
7-Qual a diferença entre 400, 404 e 500?
    400 = bad request
    404 = Not found
    500 = Internal server error
8-O que são HTTP headers? Dê um exemplo.
    Acredito que seja a forma de identificar a forma que os dados estão sendo enviados como "Content-Type":"application/json".
9-Por que usamos JSON.stringify() ao enviar um objeto JavaScript como JSON?
    Pois no código os dados estão em código js e para que possamos enviar para a api é preciso tornar ele em js textual, o mesmo vale para dado da api que precisamos passar pasa js código com response.json().
10-Qual a diferença entre return e throw?
    return retorna o resultado da função e se usamos isso para erros a função pode assumir que aquele return faz parte da função, já o throw interrompe o código e lança o erro demonstrando que algo não está correto.