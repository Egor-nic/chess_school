// const user = (req, res, next) => {
//   res.locals.userId = req.session?.userId;
//   if (req.session) {
//     res.locals.userName = req.session.userName;
//   }
//   next()

// }

const hellomideleware = (req, res, next) => {
  res.locals.username = req.session?.name;
  next();
};



module.exports = { hellomideleware };
