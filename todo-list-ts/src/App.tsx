import { TaskList } from './components/TaskList';
import imgLogo from './assets/logo.svg';

function App() {
  return (
    <div>
      <header>
        <img src={imgLogo} alt="logomarca" />
      </header>
      <TaskList />
      <footer>
        <small>Feito com 💜 © {new Date().getFullYear()}</small>
      </footer>
    </div>
  )
}

export default App