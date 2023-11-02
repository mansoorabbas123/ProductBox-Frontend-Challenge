import React, { useContext, useEffect, useState } from 'react'
import { Item } from '../../components/item/Item'
import { Grid } from '@mantine/core'
import ApiService from '../../services/api.cjs';
import { CartContext } from '../../context/cart_context';

const ItemsPage = () => {
    const [items, setitems] = useState([]);
    const api = new ApiService();

    useEffect(() => {
        api.get('/items')
            .then((data) => {
                setitems(data)
            })
            .catch((error) => {
                console.error('GET Error:', error);
            });
    }, [])

    return (
        <Grid mt="lg">
            {items?.map(item => <Grid.Col key={item.id} span={{ base: 12, sm: 6, md: 3 }}>
                <Item item={item} />
            </Grid.Col>)}
        </Grid>
    )
}

export default ItemsPage