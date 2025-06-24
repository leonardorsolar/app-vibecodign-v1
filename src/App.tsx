import './App.css'
import { TarefasProvider } from './TarefasContext'
import FormularioTarefa from './components/FormularioTarefa'
import ListaTarefas from './components/ListaTarefas'

function App() {
  return (
    <TarefasProvider>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 drop-shadow">Lista de Tarefas do Leonardo</h1>
        <div className="max-w-md w-full p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Minhas Tarefas</h2>
          <FormularioTarefa />
          <ListaTarefas />
        </div>
      </div>
    </TarefasProvider>
  )
}

export default App
