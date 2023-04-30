export const getProducts = async (base_url: string, enPoint: string, limit: string | null = null, sort: string | null = null) => {
    const products = await fetch(`${base_url}${enPoint}?limit=${limit}&sort=${sort}`)
    .then((res) => res.json())
    .then((data) => data)

    return (
        products
    )
}