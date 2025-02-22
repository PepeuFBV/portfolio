function loadAssetUrl(originalUrl: string): string {
    let url: string = ''
    if (process.env.NODE_ENV === 'production') {
        if (!process.env.NEXT_PUBLIC_BASE_PRODUCTION_URL) return url
        url = process.env.NEXT_PUBLIC_BASE_PRODUCTION_URL.concat(originalUrl)
        return url
    }
    return originalUrl
}

export default loadAssetUrl
