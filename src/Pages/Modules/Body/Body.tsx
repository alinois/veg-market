import { useEffect, useState } from 'react'
import { fetchArticles } from '../../../api/getArticles'
import { Cards } from '../Components/Card/Cards'
import { Popup } from '../Components/Popup/Popup'
import './Body.scss'
import type { BodyProps, Article} from '../../../types'

export const Body: React.FC<BodyProps> = ({
  isPopupOpen,
  cartItems,
  onAddToCart,
  onUpdateQuantity,
}) => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
    .then(json => setArticles(json))
    .catch(() => setArticles([]))
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Popup articles={cartItems} isOpen={isPopupOpen} onUpdateQuantity={onUpdateQuantity} />
      <div className="container">
        <h2>Catalog</h2>
        <div className="articles-container">
          <Cards articles={articles} onAddToCart={onAddToCart} isLoading={loading}/>
        </div>
      </div>
    </>
  )
}
