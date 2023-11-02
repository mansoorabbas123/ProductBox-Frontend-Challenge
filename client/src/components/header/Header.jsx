import { Autocomplete, Group, Burger, rem, Box, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';
import classes from './Header.module.css';
import { links } from '../../navlinks.cjs';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const navigate = useNavigate();
    const items = links.map((link) => (
        <NavLink to={link.link}
            key={link.label}
            className={classes.link}
        >
            {link.label}
        </NavLink>
    ));

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    <h2>PRODUCTBOX</h2>
                </Group>
                <Group>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>
                    <Button onClick={() => navigate('/cart')}>
                        <IconShoppingCart />
                    </Button>
                </Group>
            </div>
        </header>
    );
}