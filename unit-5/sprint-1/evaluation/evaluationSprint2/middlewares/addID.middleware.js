const fs=require('fs');

const addID = (req, res, next) => {
  let data = fs.readFileSync('./db.json','utf-8')
  const parseData = JSON.parse(data);
  // const lastId = parseData.heroes.length>0?parseData.heroes[parseData.heroes.length-1].id : 0;
  let lastId;
  if(parseData.heroes.length>0){
    lastId=parseData.heroes[parseData.heroes.length-1].id 
  }else{
    lastId=0;
  }
  console.log(lastId);
  req.body.id = lastId+1;
  console.log(lastId);
  next();
};

module.exports = {
  addID,
};

//+1
