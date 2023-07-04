import { useFetch } from "./fetch-utils";

export async function loader(apiURL) {
    return useFetch(apiURL)
}