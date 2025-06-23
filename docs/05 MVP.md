# MVP – Primeira Funcionalidade

**Criar um componente de formulário funcional para adicionar tarefas com título** em um app de tarefas.

## Requisitos:

-   O componente deve conter um campo de input controlado e um botão “Adicionar Tarefa”.
-   Ao submeter o formulário, a tarefa (com um `id` único e `status` inicial “pendente”) deve ser adicionada a uma lista no estado.
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
