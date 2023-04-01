import {Route, Routes} from "react-router-dom";
import {Admin, Contact, ContactEu, ContactIn, ContactUs, Home, PageNotFound, ProductDetail, ProductList} from "../pages";

export const AllRoutes = () => {
    const user = true;
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'products'} element={<ProductList/>}></Route>
                <Route path={'products/:id'} element={<ProductDetail/>}></Route>
                {/*<Route path={'products/:name/:id'} element={<ProductDetail/>}></Route>*/}
                {/*//<Route path={'contacts'} element={<Contact/>}></Route>*/}
                {/*// we can also use*/}
                <Route path={'contacts'} element={<Contact/>}>
                    <Route path={'in'} element={<ContactIn/>}/>
                    <Route path={'eu'} element={<ContactEu/>}/>
                    <Route path={'us'} element={<ContactUs/>}/>
                    <Route path={'*'} element={<ContactUs/>}/>
                </Route>

                {/*<Route path={'admin'} element={user ? <Admin/> : <Navigate to={'/'}/>}/>*/}
                <Route path={'admin'} element={user ? <Admin/> : <PageNotFound/>}/>
                {/*<Route path={'admin'} element={<Navigate to={'/'}/>}/>*/}
                <Route path={'*'} element={<PageNotFound title={'404'}/>}/>
            </Routes>
        </>
    );
};