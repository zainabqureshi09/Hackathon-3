import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import type React from "react"

interface ImageGalleryProps {
  images: any[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>No images available</div>
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          <Image
            src={urlForImage(image).url() || "/placeholder.svg"}
            alt={`Product image ${index + 1}`}
            fill
            className="rounded-lg object-cover"
            width={200} height={200}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery

