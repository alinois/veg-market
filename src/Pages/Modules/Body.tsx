import { useEffect, useState } from 'react'
import { fetchArticles } from './../../api/getArticles'
import { Cards } from './Components/Cards'
import './Body.scss'
import { Popup } from './Components/Popup'

export const Body = ({ isPopupOpen, cartItems, onAddToCart, onUpdateQuantity }) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then(json => setArticles(json))
    }, [])

    return (
        <>
        <Popup articles={cartItems} isOpen={isPopupOpen} onUpdateQuantity={onUpdateQuantity} />
        <div className='container'>
            <h2>Catalog</h2>
            <div className='articles-container'>
                <Cards articles={articles} onAddToCart={onAddToCart} />
            </div>
        </div>
        </>
    )
}
