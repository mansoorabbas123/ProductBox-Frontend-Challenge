import React, { useState, useEffect } from 'react';
import { Container, Input, Text } from '@mantine/core';

// Dummy data for search
const dummyData = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape',
    'Lemon',
    'Mango',
    'Orange',
    'Peach',
    'Pear',
    'Pineapple',
    'Strawberry',
    'Watermelon',
];

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
