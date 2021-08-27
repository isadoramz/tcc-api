const express = require('express');
const mongoose = require('mongoose');

const router = require('./router');

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.srfrz.mongodb.net/${database}?retryWrites=true&w=majority`, {useNewUrlParser: true}, function(err) {
    if (err) console.log('error');
});

const app = express();
app.use(express.json());

const apiRouter = express.Router();
apiRouter.use('/pets', router.petsRouter);
apiRouter.use('/cases', router.casesRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`successfully running on port ${port}`);
});