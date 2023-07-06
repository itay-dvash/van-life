import { useFetch } from "./fetch-utils";

export async function loader(apiURL) {
    console.log("loader executed")
    return useFetch(apiURL)
}