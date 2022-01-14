const user = (req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.role_id = req.session.role_id;
  if (req.session) {
    res.locals.userName = req.session.userName;
  }
  next();
}

// const checkUser = (req, res, next) => {
//   // res.locals.userId = req.session?.userId
//   if (req.session.userId) {
//     next()
//   }
//   else {
//   return res.redirect(`/`)
//   }
//   next()

// }

const hellomideleware = (req, res, next) => {
  res.locals.username = req.session?.name;
  next();
};



module.exports = { user };
