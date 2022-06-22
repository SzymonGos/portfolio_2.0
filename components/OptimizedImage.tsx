import Image, { ImageProps } from 'next/image'

export default function OptimizedImage(props: ImageProps) {
  return <Image {...props} />
}
