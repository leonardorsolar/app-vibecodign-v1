import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export interface Tarefa {
  id: string
  titulo: string
  status: 'pendente' | 'concluída'
}

interface TarefasContextType {
  tarefas: Tarefa[]
  adicionarTarefa: (titulo: string) => void
}

const TarefasContext = createContext<TarefasContextType | undefined>(undefined)

export function useTarefas() {
  const context = useContext(TarefasContext)
  if (!context) throw new Error('useTarefas deve ser usado dentro do TarefasProvider')
  return context
}

export function TarefasProvider({ children }: { children: ReactNode }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  useEffect(() => {
    const salvas = localStorage.getItem('tarefas')
    if (salvas) setTarefas(JSON.parse(salvas))
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  function adicionarTarefa(titulo: string) {
    const nova: Tarefa = {
      id: crypto.randomUUID(),
      titulo,
      status: 'pendente',
    }
    setTarefas((prev) => [...prev, nova])
  }

  return (
    <TarefasContext.Provider value={{ tarefas, adicionarTarefa }}>
      {children}
    </TarefasContext.Provider>
  )
} 