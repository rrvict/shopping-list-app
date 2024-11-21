import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f8f8f8;
    margin: 5px 0;
    border-radius: 5px;
`;

const DeleteButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px;
`;

function ShoppingItem({ item, onDelete }) {
    return (
        <ItemContainer>
            <span>{item}</span>
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
            </ItemContainer>
        );
}

export default ShoppingItem;
