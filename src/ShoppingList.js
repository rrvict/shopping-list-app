import React from 'react';
import ShoppingItem from './ShoppingItem';
import styled from 'styled-components';

const ListContainer = styled.div`
    margin: 20px 0;
`;

function ShoppingList({ items, onDelete }) {
    return (
        <ListContainer>
            {items.map((item, index) => (
            <ShoppingItem key={index} item={item} onDelete={() => onDelete(index)} />
            ))}
        </ListContainer>
    );
}

export default ShoppingList;
