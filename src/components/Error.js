import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops! an error encountered...</h1>
            <h2>{error.status} <i>{error.statusText}</i></h2>
        </div>
    )
}

export default Error;