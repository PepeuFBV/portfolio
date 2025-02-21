function loadPage(link: string): string {
    let url: string = ''
    if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
        if (!process.env.NEXT_PUBLIC_BASE_PRODUCTION_URL) throw new Error('NEXT_PUBLIC_BASE_PRODUCTION_URL is not defined')
        url = process.env.NEXT_PUBLIC_BASE_PRODUCTION_URL.concat(link)
        return url
    }
    return link
}

export default loadPage
