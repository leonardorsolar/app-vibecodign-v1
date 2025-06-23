
# Lista de Tarefas Incremental para Desenvolvimento no IDE

## Fase 1 – Setup e Estado Inicial

* [ ] Configurar projeto Vite + React + TypeScript
  *Critério:* Projeto inicial cria app React básico rodando localmente.

* [ ] Configurar TailwindCSS no projeto
  *Critério:* Tailwind está configurado e pode ser usado nas classes CSS.

* [ ] Criar Context API para estado global de tarefas (estado vazio)
  *Critério:* Contexto criado, exportado, e usado em app para prover estado.

* [ ] Criar modelo TypeScript da tarefa (id, título, descrição, status)
  *Critério:* Interface ou type da tarefa definido.

* [ ] Criar componente para listar tarefas (lista vazia inicialmente)
  *Critério:* Componente renderiza um container para as tarefas.

---

## Fase 2 – CRUD Básico de Tarefas

* [ ] Criar componente/formulário para adicionar nova tarefa com título
  *Critério:* Usuário consegue digitar título e enviar; tarefa aparece na lista.

* [ ] Implementar estado e função para adicionar tarefa no contexto
  *Critério:* Nova tarefa é adicionada ao estado e aparece listada.

* [ ] Implementar salvar tarefas no LocalStorage após adicionar
  *Critério:* Recarregar página mantém as tarefas criadas.

* [ ] Criar botão para marcar tarefa como concluída
  *Critério:* Ao clicar, tarefa muda status no estado.

* [ ] Mostrar tarefas concluídas com estilo riscado no texto
  *Critério:* Tarefas concluídas aparecem com linha riscada.

---

## Fase 3 – Melhorias no Formulário e Listagem

* [ ] Adicionar descrição opcional no formulário de tarefa
  *Critério:* Descrição pode ser preenchida e exibida na lista.

* [ ] Adicionar campo data limite no formulário
  *Critério:* Data pode ser escolhida e exibida junto à tarefa.

* [ ] Criar componente para editar tarefas (título, descrição, data)
  *Critério:* Usuário consegue abrir tarefa, editar e salvar alterações.

* [ ] Permitir excluir tarefas com botão na lista
  *Critério:* Tarefa é removida da lista e do LocalStorage.

---

## Fase 4 – Filtros e Ordenação

* [ ] Criar filtro para mostrar só tarefas pendentes
  *Critério:* Lista atualiza para mostrar apenas pendentes.

* [ ] Criar filtro para mostrar só tarefas concluídas
  *Critério:* Lista atualiza para mostrar apenas concluídas.

* [ ] Criar filtro por categoria (incluir categorias simples primeiro)
  *Critério:* Usuário seleciona categoria; lista filtra corretamente.

* [ ] Implementar ordenação por data limite (asc/desc)
  *Critério:* Usuário altera ordenação; lista se reorganiza.

* [ ] Implementar ordenação por prioridade (asc/desc)
  *Critério:* Usuário pode ordenar pela prioridade definida.

---

## Fase 5 – Categorias e Prioridades

* [ ] Adicionar campo categoria na criação/edição de tarefa
  *Critério:* Categoria pode ser selecionada e aparece na lista.

* [ ] Adicionar campo prioridade (baixa, média, alta) no formulário
  *Critério:* Prioridade salva e exibida na tarefa.

* [ ] Ajustar filtros para categoria e prioridade juntos
  *Critério:* Filtros combinam e lista atualiza corretamente.

---

## Fase 6 – Autenticação Local

* [ ] Criar tela simples de cadastro (email e senha)
  *Critério:* Usuário preenche formulário, dados são salvos localmente.

* [ ] Criar tela de login usando email e senha cadastrados
  *Critério:* Usuário pode logar com credenciais locais.

* [ ] Isolar estado de tarefas por usuário no LocalStorage
  *Critério:* Tarefas são separadas por usuário logado.

* [ ] Criar botão logout que limpa estado e volta para tela de login
  *Critério:* Logout remove acesso à lista e volta para login.

---

## Fase 7 – Polimento e Refino Final

* [ ] Melhorar feedback visual (botões, carregamento, mensagens)
  *Critério:* Interface responde e avisa usuário em ações.

* [ ] Testar responsividade em diferentes tamanhos de tela
  *Critério:* Interface funciona bem em mobile, tablet e desktop.

* [ ] Modularizar componentes para facilitar manutenção
  *Critério:* Código limpo, componentes pequenos e reutilizáveis.


