import { TodoBody } from "./sections";
import { TodoProvider } from "./TodoContext";


const App = () =>{

  return(
    <TodoProvider >
      <main className="max-container min-h-screen font-josefin">
        <TodoBody />
      </main>
    </TodoProvider>
  );
}

export default App