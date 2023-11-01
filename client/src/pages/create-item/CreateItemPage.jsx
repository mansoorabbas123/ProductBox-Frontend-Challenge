import { TextInput, Checkbox, Button, Group, Box, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './CreateItem.module.css';

export function CreateItemPage() {
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
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Put Item Up For Sale</h2>
            <Box maw={340} mx="auto">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        </div>
    );
}