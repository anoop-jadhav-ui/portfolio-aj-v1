import { createRoot } from 'react-dom/client';
import App from "./components/App/App";
import Store from "./components/Store/Store";
import { Provider } from "react-redux";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);
