import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className="errorpage">
            <h2>
                Oops !! Something went down the flames  !
            </h2>
            <h4> Whyyyyyyy ?????</h4>
            <h4> Because</h4>
            <h3> {error.data}</h3>
         </div>
    )

}

export default Error;