import { useFetch } from "./fetch-utils";

export async function loader(apiURL) {
    print("loader executed")
    return useFetch(apiURL)
}