import "./App.css";
import Background from "./components/Background";
import Weather from "./components/weather";
import BookMarkButton from "./components/bookmark/BookMarkButton";

function App() {
  return (
    <section className="relative w-full h-screen">
      <Background />
      <BookMarkButton />
      <Weather />
    </section>
  );
}

export default App;
