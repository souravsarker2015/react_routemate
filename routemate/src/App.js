import './App.css';
import {Route, Routes} from "react-router-dom"
import {Home} from "./components/Home";
import {ProductList} from "./components/ProductList";
import {ProductDetail} from "./components/ProductDetail";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'products'} element={<ProductList/>}></Route>
                <Route path={'products/1001'} element={<ProductDetail/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
