import '../../../styles/ComponentsStyles.scss'
import './Card.scss'
import cartIcon from '../../../assets/Cart.png'
import { useState } from 'react'

export const Cards = ({ articles, onAddToCart }) => {
    const [count, setCount] = useState({})

    const handleDecrement = (id) => {
        setCount(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0)
        }))
    }

    const handleIncrement = (id) => {
        setCount(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }))
    }

    const handleAdd = (item) => {
        const quantity = count[item.id] || 0
        if (quantity > 0) {
            onAddToCart(item, quantity)
            setCount(prev => ({ ...prev, [item.id]: 0 }))
        }
    }

    return (
        <>
            {articles.map((item) => (
                <div className="card-container" key={item.id}>
                    <img src={item.image} />
                    <div className="card-description">

                        <div className="article-n-count">
                            
                            <div className="name-n-weight">
                                <span className="name">{item.name.split("-")[0]}</span>
                                <span className="weight">{item.name.split("-")[1]?.toLowerCase()}</span>
                            </div>

                            <div className="count">
                                <button onClick={() => handleDecrement(item.id)}>&minus;</button>
                                <span className="number">{count[item.id] || 0}</span>
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                            </div>

                        </div>
                        <div className="price-n-add">
                            <div className="price">$ {item.price}</div>
                            <div className="button" onClick={() => handleAdd(item)}>
                                <span className="value">Add to cart</span>
                                <img src={cartIcon} alt="cart" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
