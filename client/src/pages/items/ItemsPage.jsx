import React, { useEffect, useState } from 'react'
import { Item } from '../../components/item/Item'
import { Flex, Grid, Loader } from '@mantine/core'
import ApiService from '../../services/api.cjs';
import Search from '../../components/search/Search';

const ItemsPage = () => {
    const [data, setData] = useState([]);
    const [items, setitems] = useState([])
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(searchValue);

    const api = new ApiService();

    useEffect(() => {
        setLoading(true);
        api.get('/items')
            .then((data) => {
                setData(data);
                setitems(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error('GET Error:', error);
            });
    }, [])

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setDebouncedValue(searchValue);
        }, 300);

        return () => clearTimeout(debounceTimeout);
    }, [searchValue]);

    useEffect(() => {
        const filteredResults = data.filter((item) =>
            item.name.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setitems(filteredResults);

    }, [debouncedValue]);

    const searchHandler = (event) => {
        setSearchValue(event.target.value)
    }

    return (<> {!loading && <Search searchValue={searchValue} searchHandler={searchHandler} />}
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
    </>
    )
}

export default ItemsPage