import CartActionTypes from './cart.types'
import cartIconComponent from '../../components/cart-icon/cart-icon.component'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})