import React, {useState} from 'react';
import {TextField, MenuItem, Button, Box, Typography} from '@mui/material';

const TForm = ({addTransaction}) => {
    const [type, setType] = useState('income');
    const [category, setCategory] = useState('salary');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({type, category, amount: parseFloat(amount), description, date: new Date()});
        setType('income');
        setCategory('salary');
        setAmount('');
        setDescription('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{mt: 2, mb: 2}}>
            <Typography variant="h6" gutterBottom>
                Add Transaction
            </Typography>
            <TextField
                select
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                fullWidth
                sx={{mb: 2}}
            >
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
            </TextField>
            <TextField
                select
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
                sx={{mb: 2}}
            >
                <MenuItem value="salary">Salary</MenuItem>
                <MenuItem value="leisure">Leisure</MenuItem>
                <MenuItem value="shopping">Shopping</MenuItem>
                <MenuItem value="rent">Rent</MenuItem>
            </TextField>
            <TextField
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
                required
                sx={{mb: 2}}
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
                sx={{mb: 2}}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Transaction
            </Button>
        </Box>
    );
};

export default TForm;
