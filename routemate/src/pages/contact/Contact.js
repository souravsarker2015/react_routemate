// import {Redirect} from "react-router-dom";

import {Link, Outlet} from "react-router-dom";

import {useNavigate} from "react-router-dom"

export const Contact = () => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        // const history=useHistory()
        // return <Redirect to="/"/>;
        // window.location.href = '/';
        // window.location.replace('/');
        return navigate('/')
    }

    return (
        <main>

            <div className={'component'}>Contact</div>
            <button onClick={handleSubmit}>Back to home</button>
            <Outlet/>

        </main>

    )
}
