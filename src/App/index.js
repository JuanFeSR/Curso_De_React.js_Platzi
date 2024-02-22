import { AppUI } from "./AppUI";
import { TodoProvider } from "../Context";

function App() {
  /* console.log("Log 1"); */

  /*  React.useEffect(() => {
    console.log("Looooooog 2");
  }); */

  /* React.useEffect(() => {
    console.log("Looooooog 2");
  }, []); */

  /*  React.useEffect(() => {
    console.log("Looooooog 2");
  }, [totalTodos]); */

  /* console.log("Log 3"); */

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
