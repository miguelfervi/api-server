const issueRoutes = (app, fs) => {
  const dataPath = "./data/issues.json";
  const helper = require("../helpers/parseIssues.js");

  app.get("/issues", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      let allIssuesFiltered = helper.parseIssues(JSON.parse(data));
      res.send(allIssuesFiltered);
    });
  });

  app.get("/issues/:id", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      var itemId = req.params.id;

      const dataSelected = JSON.parse(data);
      const item = dataSelected.filter((item) => item.id == itemId);
      if (item.length > 0) {
        res.send(item);
      } else {
        res.status(404).send('Not found issue');
        return;
      }
    });
  });

  app.get("*", function (req, res) {
    res.status(404).send('Not found page');
  });
};

module.exports = issueRoutes;
