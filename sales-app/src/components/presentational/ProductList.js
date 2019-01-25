import React from 'react'
import { Col, Button } from 'reactstrap'
import styled from 'styled-components'

import FlatCard from './FlatCard'
import Icon from './Icon'

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CardContainer = styled(FlatCard)`
  display: flex;
  flex-direction: row;
  min-height: 250px;
  max-height: 250px;
  box-shadow: 2px 2px 7px 0px ${props => props.theme.shadow};
  margin: 20px;
`

const CardBackground = styled(FlatCard)`
  background-color: ${props => props.theme.cardBackground};
  flex-grow: 2;
  padding: 10px;
`

const CardPrimary = styled(FlatCard)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  box-shadow: 2px 0px 5px 0px ${props => props.theme.shadow};
  z-index: 1;
  background-color: ${props => props.theme.primary};
  position: relative;
`

const Image = styled.img`
  width: auto;
  max-height: 90%;
  position: absolute;
`

const Name = styled.h5`
  color: ${props => props.theme.primary};
`

const Description = styled.p`
  color: ${props => props.theme.darkText};
`

const Price = styled.h5`
  color: ${props => props.theme.darkText};
  margin-top: auto;
  font-weight: bold;

  &::before {
    content: 'R$ ';
  }
`

const AddButton = styled(Button)`
  border: none;
  background: transparent;
  color: ${props => props.theme.success};
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const ProductList = ({ products = [] }) => (
  <ProductsContainer>
    {products.map(product => (
      <Col key={product.id} xs="12" md="6" lg="4">
        <CardContainer>
          <CardPrimary>
            <Image src={product.imageURL} alt={product.name} />
          </CardPrimary>
          <CardBackground>
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <Price>{Number(product.price).toFixed(2)}</Price>
            <AddButton size="sm" color="success" outline>
              <Icon name="faPlus" size="2x" />
            </AddButton>
          </CardBackground>
        </CardContainer>
      </Col>
    ))}
  </ProductsContainer>
)

export default ProductList
