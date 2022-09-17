import React from 'react'
import { Containter, Item, Title } from './styles'

interface Props {
  title: string
  elements: React.ReactNode[]
}

function List({ title, elements }: Props) {
  return (
    <Containter>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Containter>
  )
}

export default List
