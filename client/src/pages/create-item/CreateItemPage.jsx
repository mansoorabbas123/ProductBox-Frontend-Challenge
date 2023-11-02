import { TextInput, Checkbox, Button, Group, Box, NumberInput, Loader } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './CreateItem.module.css';
import ApiService from '../../services/api.cjs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function CreateItemPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const api = new ApiService();

    const form = useForm({
        initialValues: {
            name: '',
            price: null,
            imageUrl: '',
        },

        validate: {
            name: (value) => (/^.{5,80}$/.test(value) ? null : 'max 80 and min 5 characters allowed'),
            price: (value) => (/^\d*$/g.test(value) ? null : 'price should between 1 and 10,000,000'),
            imageUrl: (value) => (!value ? 'image url is required' : null)
        },
    });

    const submitHandler = (values) => {
        setLoading(true);
        api.post('/items', { img: values.imageUrl, ...values }).then(data => {
            setLoading(true);
            navigate('/items')
        }).catch(err => {
            setLoading(false)
        })
    }
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Put Item Up For Sale</h2>
            <Box maw={340} mx="auto">
                <form onSubmit={form.onSubmit(submitHandler)}>
                    <Box my="md">
                        <TextInput
                            withAsterisk
                            label="Item Name"
                            {...form.getInputProps('name')}
                        />
                    </Box>
                    <Box my="md">
                        <NumberInput
                            withAsterisk
                            label="Price"
                            {...form.getInputProps('price')}
                        />
                    </Box>
                    <Box my="md">
                        <TextInput
                            withAsterisk
                            label="Image Url"
                            {...form.getInputProps('imageUrl')}
                        />
                    </Box>
                    <Group justify="flex-end" my="md">
                        {loading ? <Loader color="blue" /> : <Button type="submit">Submit</Button>}
                    </Group>
                </form>
            </Box>
        </div>
    );
}