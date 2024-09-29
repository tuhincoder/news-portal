export const getCategoryList = async () => {
    const res = await fetch('https://the-news-portal-server.vercel.app/categories')
    const data = res.json()
    return data;
}