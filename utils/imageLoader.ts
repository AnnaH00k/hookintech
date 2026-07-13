export default function imageLoader({
  src,
}: {
  src: string
  width?: number
  quality?: number
}) {
  const isProduction = process.env.NODE_ENV === 'production'
  const repoName = 'hookintech'
  const basePath = isProduction ? `/${repoName}` : ''

  if (!src) return src

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  const normalizedPath = src.startsWith('/') ? src : `/${src}`
  return `${basePath}${normalizedPath}`
}