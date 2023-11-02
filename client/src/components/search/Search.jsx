import React from 'react';
import { Container, Input, Text } from '@mantine/core';

function Search({ searchValue, searchHandler }) {

    return (
        <Container size="sm" my={30}>
            <Input
                value={searchValue}
                onChange={searchHandler}
                placeholder="Search Item"
                size="md"
            />
        </Container>
    );
}

export default Search;
