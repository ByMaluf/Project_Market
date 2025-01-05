import AppRoutes from "./routes/Routes";
import { Context } from "./context/context";
import "./App.css";

function App() {
  return (
    <Context>
      <AppRoutes />;
    </Context>
  );
}

export default App;
