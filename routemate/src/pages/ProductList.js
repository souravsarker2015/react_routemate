import {useLocation, useSearchParams} from "react-router-dom";

export const ProductList = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    console.log(location)
    // console.log(searchParams.get('keyword'))
    // console.log(searchParams.get('instock'))
    // console.log(searchParams.get('rating'))

    return (
        <main>
            <div className={'component'}>ProductList</div>

        </main>
    )
}
