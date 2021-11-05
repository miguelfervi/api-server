const issueRoutes = require('./issues');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    issueRoutes(app, fs);
};

module.exports = appRouter;