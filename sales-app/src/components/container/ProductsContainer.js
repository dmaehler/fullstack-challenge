import React from 'react'
import { connect } from 'react-redux'

import { addItem, removeItem } from '../../store/actions/cart'

import ProductList from '../presentational/ProductList'

const ProductsContainer = ({ products, addItem, removeItem, isLoading = true }) => (
  <ProductList
    products={products}
    onAddItem={addItem}
    onRemoveItem={removeItem}
    isLoading={isLoading}
  />
)

const mapStateToProps = ({ products = {}, cart = {}, loadingBar }) => {
  const cartItems = Object.values(cart.items).map(item => item.id)
  const isLoading = loadingBar.default > 0

  const productsList = Object.values(products).map(prod => ({
    ...prod,
    isOnCart: cartItems.indexOf(prod.id) !== -1,
  }))

  return {
    products: productsList,
    isLoading,
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item.id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
