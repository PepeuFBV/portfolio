function loadPage(link: string): string {
    let url: string = ''
    if (process.env.NODE_ENV === 'production') {
        if (!process.env.NEXT_PUBLIC_BASE_PRODUCTION_URL) return link
        url = process.env.NEXT_PUBLIC_BASE_PRODUCTION_URL.concat(link)
        return url
    }
    return link
}

export default loadPage
