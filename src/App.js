import "./App.css";
import Weather from "./main/Weather";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Weather />
    </div>
  );
}

export default App;
