/**
 * Características

single threaded
Executa uma coisa por vez.

no-blocking
Não trava o contexto da execução.

asynchronous
Por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas.

concurrent
As tarefas que executam assincronamente concorrem uma com as outras pelo processamento.

Concorrência e Event Loop

O JavaScript possui um modelo de concorrência baseado em um event loop responsável por gerenciar a execução de código assíncrono e eventos em um único thread, permitindo que o JavaScript seja não bloqueante.

Micro e Macro Tasks

Existem dois tipos principais de tarefas na fila de callback.

Microtasks:
São tarefas de alta prioridade que são executadas antes das Macrotasks (temporizadores e promises)

Macrotasks:
São tarefas de menor prioridade, como callbacks de eventos, setTimeout e setInterval.

O texto presente na imagem é:

---

**Resumo**

**1 Execução de Código:** O código síncrono é executado de cima para baixo, empilhando e desempilhando funções conforme necessário.

**2 Eventos Assíncronos:** Quando ocorrem eventos assíncronos, como uma requisição concluída, o callback correspondente é enfileirado na fila de callback.

**3 Verificação do Event Loop:** O Event Loop verifica a pilha de chamadas e a fila de callback. Se a pilha estiver vazia, ele move um callback da fila de callback para a pilha de chamadas.

**4 Microtasks:** Antes de verificar novamente a fila de callback, o Event Loop executa todas as microtasks pendentes.

*/
