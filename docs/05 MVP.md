# MVP – Primeira Funcionalidade

**Criar um componente de formulário funcional para adicionar tarefas com título** em um app de tarefas.

## Requisitos:

-   O componente deve conter um campo de input controlado e um botão "Adicionar Tarefa".
-   Ao submeter o formulário, a tarefa (com um `id` único e `status` inicial "pendente") deve ser adicionada a uma lista no estado.
-   Essa lista deve ser salva automaticamente no `localStorage` a cada nova adição.
-   Quando o app for recarregado, as tarefas devem ser carregadas do `localStorage` para o estado inicial.
-   Utilize boas práticas com TypeScript (tipos explícitos para a tarefa).
-   Se possível, use `Context API` para armazenar o estado global das tarefas.

Estrutura sugerida da tarefa:

```ts
interface Tarefa {
    id: string
    titulo: string
    status: "pendente" | "concluída"
}
```

Estilize levemente com TailwindCSS.
Mantenha o código modular (formulário e lista em componentes separados).

A primeira funcionalidade do MVP foi implementada conforme o arquivo docs/05 MVP.md:
Criei o contexto global de tarefas (TarefasContext) com TypeScript, incluindo persistência automática no localStorage.
Criei o componente de formulário controlado para adicionar tarefas.
<FormularioTarefa />
Criei o componente de listagem de tarefas.
<ListaTarefas />
O estado das tarefas é global via Context API.
<TarefasProvider>
O App foi ajustado para usar esses componentes e o contexto.
O código está modularizado e já utiliza TailwindCSS para estilização leve.
Se desejar, já pode rodar o projeto e testar a adição e persistência das tarefas! Caso queira evoluir para marcar tarefas como concluídas, editar ou excluir, é só avisar.

Para rodar a aplicação:
O servidor de desenvolvimento está sendo iniciado com o comando npm run dev.
Assim que o processo terminar de inicializar,
você poderá acessar o aplicativo no navegador
(geralmente em http://localhost:5173 ou endereço indicado no terminal)
para testar a funcionalidade de adicionar tarefas.

Controle de versão:

git init && git add . && git commit -m "feat: projeto inicial com MVP de tarefas (React, TS, Tailwind, Context, LocalStorage)"

O Git foi inicializado no projeto, todos os arquivos foram adicionados e o primeiro commit foi criado.

Criação da estrutura de pastas do projeto com os arquivos pelo agente em
docs/diagrama-pastas.md

Teste:
para a funcionalidade implementada até agora, escreva teste E2E usando playwrigth
npm run dev
npx playwright codegen http://localhost:5173

Executar os teste
npx playwright test

O teste E2E para a funcionalidade de adicionar tarefa foi criado usando Playwright. Ele faz o seguinte:
Acessa a página inicial do app.
Limpa o localStorage para garantir ambiente limpo.
Preenche o campo de nova tarefa com "Minha primeira tarefa".
Clica no botão "Adicionar Tarefa".
Verifica se a tarefa aparece na lista.
O teste está salvo em tests/tarefas-e2e.spec.ts e já utiliza os atributos data-testid para garantir robustez na automação.
Se quiser rodar o teste, basta executar:
npx playwright test
reveja o gitignore

Regras no cursor:
https://docs.cursor.com/context/rules
https://cursor.directory/rules
https://github.com/PatrickJS/awesome-cursorrules

settings> rules
Quando terminar de fazer alterações no código-fonte, execute todos os testes e certifique-se de que todos estão passando.

Quando terminar de fazer alterações, pergunte proativamente ao usuário se você também deve escrever novos testes para cobrir a nova funcionalidade.

Refatoração:

Analisar a base de código, identificar problemas e refatorá-la, preservando seu comportamento. Seguir os princípios de código limpo e as melhores práticas. Consultar as regras fornecidas
