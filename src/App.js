import Header from "./components/header";
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import { CartContext } from "./context";


const App = () => {

    return (
        <BrowserRouter>
            <CartContext>
                <Header />
                <Main />
            </ CartContext>
        </BrowserRouter>
    )
};

export default App;