import React, { useEffect, useState } from 'react'
import { Item } from '../../components/item/Item'
import { Flex, Grid, Loader } from '@mantine/core'
import ApiService from '../../services/api.cjs';

const ItemsPage = () => {
    const [items, setitems] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = new ApiService();

    useEffect(() => {
        setLoading(true);
        api.get('/items')
            .then((data) => {
                setitems(data)
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error('GET Error:', error);
            });
    }, [])

    return (
        <Grid mt="lg">
            {loading && <Flex justify="center" align="center" miw={"100%"} mih={"85vh"}
                direction="row"
            >
                <Loader color="blue" />
            </Flex>}
            {!loading && items?.map(item => <Grid.Col key={item.id} span={{ base: 12, sm: 6, md: 3 }}>
                <Item item={item} />
            </Grid.Col>)}
        </Grid>
    )
}

export default ItemsPage