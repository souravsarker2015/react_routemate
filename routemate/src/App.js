import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"
// import {Home} from "./pages/Home";
// import {ProductList} from "./pages/ProductList";
// import {ProductDetail} from "./pages/ProductDetail";
// import {Contact} from "./pages/contact/Contact";
import {Header, Footer} from "./components/index";
// import {Admin, Home, PageNotFound, ProductDetail, ProductList, Contact, ContactIn, ContactUs, ContactEu} from "./pages/index";
import {AllRoutes} from "./Routes/AllRoutes";
// import {Footer} from "./components/Footer";
// import {Admin} from "./pages/Admin";
// import {PageNotFound} from "./pages/PageNotFound";
// import {ContactIn} from "./pages/contact/ContactIn";
// import {ContactEu} from "./pages/contact/ContactEu";
// import {ContactUs} from "./pages/contact/ContactUs";

function App() {


    return (
        <div className="App">
            <Header/>

            <AllRoutes/>


            <Footer/>

        </div>
    );
}

export default App;
