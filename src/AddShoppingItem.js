import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
`;

function AddShoppingItem({ onAdd }) {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.trim()) {
            onAdd(item);
            setItem('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Add a new item"
            />
            <Button type="submit">Add</Button>
        </Form>
    );
}

export default AddShoppingItem;
