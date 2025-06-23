import './App.css'
import { TarefasProvider } from './TarefasContext'
import FormularioTarefa from './components/FormularioTarefa'
import ListaTarefas from './components/ListaTarefas'

function App() {
  return (
    <TarefasProvider>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
        <FormularioTarefa />
        <ListaTarefas />
      </div>
    </TarefasProvider>
  )
}

export default App
