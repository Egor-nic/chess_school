const user = (req, res, next) => {
  res.locals.userId = req.session?.userId;
  if (req.session) {
    res.locals.userName = req.session.userName;
  }
  next()

}

// const checkUser = (req, res, next) => {
//   // res.locals.userId = req.session?.userId
//   if (req.session.userId) {
//     next()
//   }
//   else {
//   return res.redirect(`/`)
//   }
// }



module.exports = { checkUser };
