import React, { useContext } from 'react';
import { Container, Paper, Text, Button, Image, Flex } from '@mantine/core';
import { CartContext } from '../../context/cart_context';


function CartPage() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart?.reduce((total, item) => total + Number(item.price), 0);
    };

    return (
        <Container size="md" mt='md'>
            <Paper padding="md" shadow="xs" p='md'>
                <Text size="xl" weight={700} align="center" mb={16} >
                    Shopping Cart
                </Text>
                {cart.map((item) => (
                    <Flex key={item.id} mb={16} align={"center"} >
                        <Image
                            src={item.img}
                            alt={item.name}
                            miw={80}
                            mih={80}
                            mr={16}
                            size={{ xs: '50px', sm: '80px', md: '80px' }}
                        />
                        <div style={{ flex: 1 }}>
                            <Text size="lg" weight={700}>
                                {item.name}
                            </Text>
                            <Text size="sm">${item.price}</Text>
                        </div>
                        <Button variant="light" color="red" onClick={() => removeFromCart(item.id)}>
                            Remove
                        </Button>
                    </Flex>
                ))}
                {cart.length === 0 ? (
                    <Text size="lg" align="center" mt={16}>
                        Your cart is empty.
                    </Text>
                ) : (
                    <>
                        <Flex
                            justify="space-between"
                            align="center"
                        >
                            <Text size="lg" weight={700}>
                                Total:
                            </Text>
                            <Text size="lg" weight={700}>
                                ${calculateTotal()}
                            </Text>
                        </Flex>
                        <Flex justify={"flex-end"} mt={16} >
                            <Button
                                variant="outline-red"
                                onClick={clearCart}
                                size={'normal'}
                            >
                                Empty Cart
                            </Button>
                            <Button
                                variant="red"
                                ml={16}
                                size={'normal'}
                            >
                                Checkout
                            </Button>
                        </Flex>
                    </>
                )}
            </Paper>
        </Container>
    );
}

export default CartPage;
