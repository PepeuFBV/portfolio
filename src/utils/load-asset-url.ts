function loadAssetUrl(originalUrl: string): string {
    let url: string = ''
    if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
        if (!process.env.NEXT_PUBLIC_BASE_PRODUCTION_URL) throw new Error('NEXT_PUBLIC_BASE_PRODUCTION_URL is not defined')
        url = url.concat(process.env.NEXT_PUBLIC_BASE_PRODUCTION_URL, originalUrl)
        return url
    }
    return originalUrl
}

export default loadAssetUrl