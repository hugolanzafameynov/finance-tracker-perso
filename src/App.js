import React, {useState} from 'react';
import {Container, CssBaseline, Box} from '@mui/material';
import TChart from './Components/TChart';
import TForm from './Components/TForm';
import TImportRevolut from "./Components/TImportRevolut";
import TList from './Components/TList';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    return (
        <Container component="main">
            <CssBaseline/>
            <Box sx={{mt: 4}}>
                <h1>Finance Tracker</h1>
                <TForm addTransaction={addTransaction}/>
                <TImportRevolut addTransaction={addTransaction} />
                <TList transactions={transactions}/>
                <TChart transactions={transactions}/>
            </Box>
        </Container>
    );
};

export default App;

