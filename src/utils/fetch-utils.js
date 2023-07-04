export async function useFetch(resource, options=null) {
    try {
        document.body.classList.add('waiting')
        const res = await fetch(resource, options)

        if (!res.ok) {
            throw {
                message: `Failed to fetch data from "${resource}"`,
                statusText: res.statusText,
                status: res.status
            }
        }

        const data = await res.json()
        return data
    }

    catch (err) {
        return err
    }

    finally {
        document.body.classList.remove('waiting')
    }
}