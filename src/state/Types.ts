export interface productPropsTypes {
  product: {
    filter(arg0: (product: productPropsTypes['product']) => boolean): unknown
    id: number
    title: string
    price: number
    rating: number
    thumbnail: string
    description: string
    images: []
    index: number
    brand: string
    quantity: number
    discountPercentage: number
    reviews: []
    review: {
      rating: number
      comment: string
      reviewerName: string
      date: string
    }
    dimensions: { width: number; depth: number; height: number }
    minimumOrderQuantity: number
    warrantyInformation: string
    weight: number
    sku: string
    category: string
  }
}

export interface categoryPropsTypes {
  category: string
}

export interface User {
  username: string
  password: string
}

export interface AuthState {
  accessToken: string | null
}

export interface ModalState {
  isOpen: boolean
}

export interface SwiperProps {
  slides: Array<{
    id: number
    image: string
    title: string
    description: string
  }>
}
