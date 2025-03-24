import ReactDOM from "react-dom/client";

function App() {
  return (
    <section>
      <h1>Rick and Morty API</h1>
    </section>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
