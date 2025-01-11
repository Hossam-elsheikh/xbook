const { logEvent } = require("./logger");

// if we give the middleware a starting err parameter
// it'll replace the default express error handler func

const errorHandler = (err, req, res, next) => {
  logEvent(
    `${err.name}:${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  );
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500 
  res.status(status)
  res.json({message:err.message})

};

module.exports = errorHandler
