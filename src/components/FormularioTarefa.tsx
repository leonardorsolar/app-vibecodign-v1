import { useState } from 'react'
import { useTarefas } from '../TarefasContext'

export default function FormularioTarefa() {
  const [titulo, setTitulo] = useState('')
  const { adicionarTarefa } = useTarefas()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!titulo.trim()) return
    adicionarTarefa(titulo.trim())
    setTitulo('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border rounded px-2 py-1 flex-1"
        type="text"
        placeholder="Nova tarefa"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        data-testid="input-tarefa"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        data-testid="btn-adicionar"
      >
        Adicionar Tarefa
      </button>
    </form>
  )
} 