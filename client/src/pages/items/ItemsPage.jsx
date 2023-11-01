import React from 'react'
import { Item } from '../../components/item/Item'
import { Grid } from '@mantine/core'

const ItemsPage = () => {
    return (
        <Grid mt="lg">
            <Grid.Col span={{ base: 12, sm: 6, md: 3, lg: 4 }}><Item /></Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 3, lg: 4 }}><Item /></Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 3, lg: 4 }}><Item /></Grid.Col>
        </Grid>
    )
}

export default ItemsPage