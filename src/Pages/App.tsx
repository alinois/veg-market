import { useState } from 'react'
import { Header } from './Modules/Header'
import { Body } from './Modules/Body'
import type { CartItem, Article } from '../types'

export const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const togglePopup = () => setIsPopupOpen(prev => !prev)

  const handleAddToCart = (item: Article, quantity: number) => {
    if (quantity <= 0) return

    setCartItems(prev => {
      const existing = prev.find(el => el.id === item.id)
      if (existing) {
        return prev.map(el =>
          el.id === item.id ? { ...el, quantity: el.quantity + quantity } : el
        )
      } else {
        return [...prev, { ...item, quantity }]
      }
    })
  }

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id))
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Header onCartClick={togglePopup} totalItems={totalItems} />
      <Body
        isPopupOpen={isPopupOpen}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </>
  )
}

export default App
