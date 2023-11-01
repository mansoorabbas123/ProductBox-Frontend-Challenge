import { Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import classes from './Header.module.css';
import { links } from '../../navlinks.cjs';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <NavLink to={link.link}
            key={link.label}
            className={classes.link}
        >
            {console.log(link.link)}
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
                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                        visibleFrom="xs"
                    />
                </Group>
            </div>
        </header>
    );
}