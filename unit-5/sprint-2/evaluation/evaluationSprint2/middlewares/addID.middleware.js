const fs = require("fs");
// let data = JSON.parse(fs.readFileSync('db.json','utf-8'))

const addID = (req, res, next) => {
  let data = fs.readFileSync('./db.json','utf-8')
  const parseData = JSON.parse(data);
  const lastId = parseData.heroes.length>0?parseData.heroes[parseData.heroes.length-1].id : 0;
  req.body.id = lastId+1;
  next();
};

module.exports = {
  addID,
};