import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { connect } from'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    console.log('render cart icon')
    return  (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('need to update')
    return (
        {
            itemCount: selectCartItemsCount(state),
        }
    )
}

// const mapStateToProps = ({cart: {cartItems}}) => {
//     console.log('need to update')
//     return ({
//         itemCount: cartItems.reduce(
//             (accumlatedQuantity, carItem) => 
//                 accumlatedQuantity + carItem.quantity, 
//             0
//         )
//     })
// }

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)