import { useTarefas } from '../TarefasContext'

export default function ListaTarefas() {
  const { tarefas } = useTarefas()

  if (tarefas.length === 0) {
    return <p className="text-gray-500">Nenhuma tarefa cadastrada.</p>
  }

  return (
    <ul className="space-y-2">
      {tarefas.map(tarefa => (
        <li key={tarefa.id} className="flex items-center gap-2 p-2 border rounded" data-testid="item-tarefa">
          <span
            className={tarefa.status === 'concluída' ? 'line-through text-gray-400' : ''}
            data-testid="titulo-tarefa"
          >
            {tarefa.titulo}
          </span>
          <span className="ml-auto text-xs px-2 py-0.5 rounded bg-gray-200">
            {tarefa.status}
          </span>
        </li>
      ))}
    </ul>
  )
} 