function parseIssues(rawIssues) {
    let allIssuesFiltered = [];
    rawIssues.map(issue => {
      let dataObj = {
        'name': issue.name,
        'id': issue.id,
        'cover_image': issue.cover_image,
        'description': issue.description,
      };

      allIssuesFiltered.push(dataObj);
    });
    return allIssuesFiltered;
  }

module.exports = { parseIssues };