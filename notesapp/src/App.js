import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {

  return (
    <ThemeProvider>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
