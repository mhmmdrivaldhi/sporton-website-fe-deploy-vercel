export async function fetchAPI<T>(
    endpoint: string,
    option?: RequestInit,
): Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...option,
        cache: option?.cache || "no-store",
    })

    if (!res.ok) {
        let errorMessage = `Failed to fetch data from ${endpoint}`
        try {
            const errorData = await res.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
            console.log(e)
        }

        throw new Error(errorMessage)
    }
    return res.json()
}

export function getImageUrl(path: string) {
    if (path.startsWith("http")) return path;
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`
}