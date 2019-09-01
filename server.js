const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Mina', lastName:    'Sato'},
        {id: 2, firstName: 'Eko', lastName:    'Nugroho'},
        {id: 3, firstName: 'Rose', lastName:    'Nugroho Sato'}
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));