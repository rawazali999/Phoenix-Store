import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-fuchsia-500 text-center"> Hello World</div>

      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </>
  );
}

export default App;
