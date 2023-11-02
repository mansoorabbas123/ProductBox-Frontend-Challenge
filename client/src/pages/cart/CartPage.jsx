import React, { useContext, useState } from 'react';
import { Container, Paper, Text, Button, Image } from '@mantine/core';
import { CartContext } from '../../context/cart_context';


function CartPage() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart?.reduce((total, item) => total + Number(item.price), 0);
    };

    return (
        <Container size="md" mt='md'>
            <Paper padding="md" shadow="xs" p='md'>
                <Text size="xl" weight={700} align="center" style={{ marginBottom: 16 }}>
                    Shopping Cart
                </Text>
                {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <Image
                            src={item.img}
                            alt={item.name}
                            style={{ width: 80, height: 80, marginRight: 16 }}
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
                    </div>
                ))}
                {cart.length === 0 ? (
                    <Text size="lg" align="center" style={{ marginTop: 16 }}>
                        Your cart is empty.
                    </Text>
                ) : (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: { xs: 'column', sm: 'row' },
                            }}
                        >
                            <Text size="lg" weight={700}>
                                Total:
                            </Text>
                            <Text size="lg" weight={700}>
                                ${calculateTotal()}
                            </Text>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                            <Button
                                variant="outline-red"
                                onClick={clearCart}
                                size={'normal'}
                            >
                                Empty Cart
                            </Button>
                            <Button
                                variant="red"
                                style={{ marginLeft: 16 }}
                                size={'normal'}
                            >
                                Checkout
                            </Button>
                        </div>
                    </>
                )}
            </Paper>
        </Container>
    );
}

export default CartPage;
