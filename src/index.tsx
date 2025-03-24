import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";

const container = document.getElementById("root");
if(container) {
    const root = ReactDOM.createRoot(container);
    root.render(<AppRouter/>);
}

