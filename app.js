const express = require('express');
const router = require('./router');

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
