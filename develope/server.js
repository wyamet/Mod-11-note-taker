const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./db/Routes/routesAPI');
const htmlRoutes = require('./db/Routes/routesHTML');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
