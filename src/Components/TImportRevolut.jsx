import React from 'react';
import * as XLSX from 'xlsx';
import {Box, Button, Typography} from '@mui/material';

const TImportRevolut = ({addTransaction}) => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                const sheetName = workbook.SheetNames[0];
                const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1});

                const transactions = worksheet.slice(1).map((row) => ({
                    type: row[0],
                    product: row[1],
                    startedDate: new Date(row[2]),
                    completedDate: new Date(row[3]),
                    description: row[4],
                    amount: parseFloat(row[5]),
                    fee: parseFloat(row[6]),
                    currency: row[7],
                    state: row[8],
                    balance: parseFloat(row[9]),
                }));

                transactions.forEach((transaction) => addTransaction(transaction));
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <Box sx={{mt: 4, mb: 4}}>
            <Typography variant="h6" gutterBottom>
                Import Transactions from Excel
            </Typography>
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    hidden
                    onChange={handleFileUpload}
                />
            </Button>
        </Box>
    );
};

export default TImportRevolut;
