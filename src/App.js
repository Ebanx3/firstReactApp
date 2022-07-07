import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
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
            <Footer />
        </BrowserRouter>
    )
};

export default App;