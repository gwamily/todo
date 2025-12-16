import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoContextProvider } from './components/TodoContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
)
