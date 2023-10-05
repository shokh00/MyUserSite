import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import "./style/css/globalCss.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);