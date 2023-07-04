import { useRouteError } from "react-router-dom"

export default function ErrorOccurred() {
    const err = useRouteError()
    return <h1>Error {err.statusCode} - {err.statusText} ({err.message})</h1>
}