export interface Article {
  id: string
  name: string
  price: number
  image: string
}

export interface CartItem extends Article {
  quantity: number
}

export interface CardsProps {
  articles: Article[]
  onAddToCart: (item: Article, quantity: number) => void
  isLoading?: boolean
}

export interface PopupProps {
  articles: CartItem[]
  isOpen: boolean
  onUpdateQuantity: (id: string, newQuantity: number) => void
}

export interface BodyProps {
  isPopupOpen: boolean
  cartItems: CartItem[]
  onAddToCart: (item: Article, quantity: number) => void
  onUpdateQuantity: (id: string, newQuantity: number) => void
}

export interface HeaderProps {
  onCartClick: () => void
  totalItems: number
}
