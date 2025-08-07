import './Popup.scss'
import '../../../../styles/ComponentsStyles.scss'
import emptyCart from '../../../../assets/cart_empty.png'
import { useState, useEffect } from 'react'
import type { PopupProps } from '../../../../types'

export const Popup: React.FC<PopupProps> = ({ articles, isOpen, onUpdateQuantity }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
  function countTotal() {
    return articles.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }
    setTotal(countTotal())
  }, [articles])

  return (
    <div className={`popup-container ${isOpen ? '' : 'hidden'} ${articles.length === 0 ? 'empty' : ''}`}>
      {articles.length === 0 ? (
        <div className="emptyCart">
          <img src={emptyCart} alt="Empty Cart" />
          <p>Your cart is empty!</p>
        </div>
      ) : (
        <>
          <ul>
            {articles.map(item => (
              <li className="cartElement" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cartElement-description">
                  <div className="name-n-weight">
                    <span className="name">{item.name.split('-')[0]}</span>
                    <span className="weight">{item.name.split('-')[1]?.toLowerCase()}</span>
                  </div>

                  <div className="price-n-quality">
                    <span className="price">き{item.price}</span>
                    <div className="count">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>&minus;</button>
                      <span className="number">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="totalPrice">
            <span className="totalPrice-title">Total:</span>
            <span className="totalPrice-price">${total}</span>
          </div>
        </>
      )}
    </div>
  )
}
