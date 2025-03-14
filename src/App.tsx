import "./App.css";
import Background from "./components/Background";
import Weather from "./components/weather";

function App() {
  return (
    <section className="relative w-full h-screen">
      <Background />
      <Weather />
    </section>
  );
}

export default App;
