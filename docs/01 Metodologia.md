✅ Metodologia

## Etapa 1 – Compreensão da Metodologia

## Etapa 2 – Planejamento: Produção do PDR (Plano de Desenvolvimento do Requisito)

## Etapa 3 – Lista de Funcionalidades priorizada com Testes de Aceitação (Backlog)

## Etapa 4 – Ciclos Iterativos de Desenvolvimento

    Incremento 01: Configurar o ambiente de desenvolvimento e documentar
    Incremento 02: Criação, execução, documentação e validação da MVP
    Incremento 03: ciclo de códificação
    Cada ciclo (incremento) segue o seguinte fluxo:
    - F1: Seleção das funcionalidades a serem desenvolvidas (a partir da lista TODO).
    - F2: Implementação inicial com liberdade criativa (estilo vibe coding).
    - F3: Execute a aplicação e entenda o que está acontecendo (estude o código)
    - F4: Se achar necessário, corrija erros, ajuste as funcionalidades, reveja o design da aplicação.
    - F5: Documentação do incremento: atualize a documentação da funcionalidade com informações úteis.
    - F6: Criação de testes de aceitação (automatizados (ex: Jest, Cypress)).
    - F7: Refatore o código orientada à engenharia de software (Aplicação dos princípios SOLID, design patterns, modularização, boas práticas).
    - F8: Revisão de código (pair programming, revisão em PR).
    - F9: Versionamento (Commit semântico e push para o repositório com Git)
    - F10: Criação de testes de usabilidade

    Exemplo de Incrementos Sugeridos:
    Incremento 01: Configuração do ambiente de desenvolvimento (tools, dependências, Git, linter, formatter).
    Incremento 02: Construção e validação do MVP (mínimo produto viável).
    Incremento 03 em diante: Implementação de funcionalidades priorizadas conforme a lista de funcionalidades priorizadas (Backlog).

# Elaboração das etapas

## Etapa 1 Compreensão da Metodologia

    - Leia a etapa 1, 2, 3 e 4

## Etapa 2 Planejamento

    - Vá ao chatgpt e crie o documento PDR utilizando o prompt abaixo:

### Prompt 01: Produção do PDR (Plano de Desenvolvimento do Requisito)

---

Preciso da sua ajuda para escrever uma especificação de software clara e organizada. A ideia é desenvolver um aplicativo web para gerenciamento de tarefas, utilizando TypeScript com Vite e React.

O objetivo do app é oferecer uma ferramenta simples, rápida e eficiente para organizar tarefas pessoais ou profissionais, ajudando o usuário a visualizar, priorizar e concluir atividades, aumentando a produtividade e reduzindo o estresse.

Quero que o aplicativo funcione como uma lista de tarefas pendentes (to-do list), com uma interface limpa e amigável. O usuário poderá criar tarefas, marcar como concluídas e visualizar seu progresso.

Funcionalidades desejadas
Aqui estão os recursos que imagino incluir:
Adicionar tarefas com título, descrição opcional e data limite.
Marcar tarefas como concluídas, com visualização separada ou riscada.
Exibir estatísticas simples: número total de tarefas, concluídas e pendentes.

A saída deve ser formatada como Markdown.
Faça perguntas complementares se algo não estiver claro ANTES de começar a gerar.

---

A LLM ira solictar perguntas.
Responda as perguntas:

### Prompt 02:

---

## 1- app terá login 2-LocalStorage 3- interface será responsiva 4- filtrar tarefas ordenar por data limite ou prioridade 5- categorias 6- não haverá notificação 7- Context API e TailwindCSS

---

Reposta com o PDR

Diante da resposta você poderá revê-lo e ajustar de acordo com seus desejos e conhecimentos.

Armazenado as informações no projeto:
Dentro do cursor crie a pasta docs e o arquivo EspecificaçãodeSoftware.md e cole as informaçẽos para registramos o estamos criando.

## Etapa 3

    - Vá ao chatgpt e crie a lista de funcionalidades (backlog):

### Prompt 01:

---

Pegue esta especificação e crie uma lista de tarefas com caixas de seleção para ajudar a implementar um recurso por vez. Ordene os recursos em fases, do mais fácil ao mais difícil. Para cada item da lista, defina também os critérios de aceitação. A saída deve ser no formato Markdown. “Copie e cole seu conteúdo”

---

Priorização com base em valor de negócio e viabilidade técnica.
Defina Critérios de Aceitação para cada funcionalidade (orientando os testes e validações).
Procure refinar ao máximo sua lista para que ele seja uma lista totalmente personalizada com as funcionalidades que você realmente deseja neste software.

### Prompt 02:

---

Separe esta lista em mais incrementos para que possa construir o software dentro da ide cursor e facilitar o desenvolvimento.

---

Dentro do cursor, crie o arquivo TODO.md e cole a resposta.

Você poderá também utilizar ferramentas como Trello, GitHub Projects ou outra de sua preferência para acompanhar o seu projeto. Nós usaremos o próprio documento no cursor.

## Etapa 4

    Incremento 01: Configuração do ambiente de desenvolvimento

Crie o ambiente de desenvolvimento da aplicação e rode a aplicação.
A aplicação será desenvolvida com **TypeScript**, **React** com **Vite**, estilizada com **TailwindCSS**

No prompt do cursor digite:

Crie somente o ambiente de configuração do projeto no diretório atual. Crie o ambiente de desenvolvimento da aplicação e rode a aplicação.
A aplicação será desenvolvida com **TypeScript**, **React** com **Vite**, estilizada com **TailwindCSS**

---

Dentro do cursor, crie o arquivo AmbienteDesenvolvimento.md e cole este conteúdo.
Dê o título: # MVP – Primeira Funcionalidade

Boas práticas da engeneharia de Software:

-   Reveja tudo que foi adicionado
-   Atualize a documentação do projeto nos arquivos .md
-   Teste a aplicação
-   refatore o código
-   Inicialize o controle de versão

Inicialize o controle de versão: Adicionado git ao projeto:
No prompt do cursor digite: Adicione o git a este projeto

    Incremento 02: Construção e validação do MVP (mínimo produto viável).

### Prompt 02:

---

Com o ambiente de desenvolvimento implementado, preciso criar uma mvp para inciar a programaçao. Assim identifique na lista de funcionalidades existente a funcionalidade mais fácil para implementar o front com localstorage e crie um prompt para solicitar a criação desta funcionalidade. Segue a lista: "..."

---

a lista consta no arquivo

Dentro do cursor, crie o arquivo MVP.md e cole o conteúdo gerado.

No prompt do cursor digite: Use o arquivo docs/05 MVP.md para criação da primeira funcionalidade do aplicativo no diretório atual

Depis rode o projeto

Incremento 03 em diante: Implementação de funcionalidades priorizadas conforme a lista de funcionalidades priorizadas (Backlog).

Use os requisitos de software (specification.md) e a lista de tarefas (TODO.md) para concluir a Fase 1 do projeto no diretório atual. Marque os itens como concluídos na lista de tarefas somente após verificar se os critérios de aceitação foram atendidos.

    - Implementar de forma livre e criativa (vibe coding no início)
    - Refatorar aplicando engenharia (SOLID, patterns, modularização)
    - Criar testes de aceitação (automatizados se possível)
    - Documentar o que foi feito (README, comentários, changelog)
    - Revisar o código e subir com Git
