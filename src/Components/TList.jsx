import React from 'react';
import {List, ListItem, ListItemText, Typography, Divider} from '@mui/material';

const TList = ({transactions}) => (
    <div>
        <Typography variant="h6" gutterBottom>
            Transactions
        </Typography>
        <List>
            {transactions.map((transaction, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText
                            primary={`${transaction.description} - $${transaction.amount}`}
                            secondary={`Type: ${transaction.type}, Category: ${transaction.category}, Date: ${transaction.date.toLocaleDateString()}`}
                        />
                    </ListItem>
                    <Divider/>
                </div>
            ))}
        </List>
    </div>
);

export default TList;
