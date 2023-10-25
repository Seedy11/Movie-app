import React from 'react'
import { FooterContainer } from './Footer.element'
import Text from '../Text/Text'

function Footer() {
  return (
    <FooterContainer>
       <Text textType='h2' text='Product' />
       <Text textType='h2' text='Useful links' />
       <Text textType='h2' text='Contact' />
    </FooterContainer>
  )
}

export default Footer