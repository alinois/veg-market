import './Header.scss'
import whiteCartIcon from '../../assets/WhiteCart.png'

export const Header = ({ onCartClick, totalItems }) => {
    return (
        <>
           <div className="fixed-header">
                <div className="logoName">
                    <div className="vegText">Vegetable</div>
                    <div className="shopText">SHOP</div>
                </div>

                <div className="cartButton"  onClick={onCartClick}>
                    {totalItems > 0 && (
                        <span className="cart-indicator">{totalItems}</span>
                    )}
                    <span className='cartButton-title'>Cart</span>
                    <img src={whiteCartIcon} />
                </div>
           </div>
        </>
    )
}