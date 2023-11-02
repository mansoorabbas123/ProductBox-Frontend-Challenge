import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { CartContext } from '../../context/cart_context';
import { useContext } from 'react';

export function Item({ item }) {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    console.log("cart====", cart)
    const isAdded = cart?.find(cItem => cItem.id === item.id) ? true : false;
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={item.img}
                    radius="md"
                    w="100%"
                    h={200}
                    fit="cover"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
            </Group>

            <Text size="sm" c="dimmed">
                {item.name}
            </Text>
            <Text size="md" my="md">
                ${item.price}
            </Text>
            {!isAdded ? <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => addToCart(item)}>
                Add Item
            </Button> : <Button variant="light" color="red" fullWidth mt="md" radius="md" onClick={() => removeFromCart(item.id)}>
                Remove Item
            </Button>}
        </Card>
    );
}