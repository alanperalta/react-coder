import React from 'react';

type ItemListContainerProps = {
  greetings: string;
}

const containerStyle = {
  color: 'red'
}

const ItemListContainer = ({greetings}: ItemListContainerProps) => {
  return (
    <div style={containerStyle}>
      <h1>{greetings}</h1>
    </div>
  )
}

export default ItemListContainer
