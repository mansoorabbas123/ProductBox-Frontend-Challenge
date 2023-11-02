import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import hero_image from './../../assets/hero_image.svg'
import classes from './Hero.module.css';
import { useNavigate } from 'react-router-dom';

export function Hero() {
    const navigate = useNavigate();
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>Random</span> Shop <br />Ecommerce Store
                    </Title>
                    <Text c="dimmed" mt="md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet, alias quis non odio tempora doloremque? Voluptates, ipsa ea dolores ipsum magnam rerum sequi eveniet dolorem eos ab molestias quo!
                    </Text>
                    <Group mt={30}>
                        <Button radius="xl" size="md" className={classes.control} onClick={() => navigate('/create-item')}>
                            Put Items Up For Sale
                        </Button>
                        <Button variant="default" radius="xl" size="md" className={classes.control} onClick={() => navigate('/items')}>
                            Browser Our Items
                        </Button>
                    </Group>
                </div>
                <Image src={hero_image} className={classes.image} />
            </div>
        </Container>
    );
}