
export default store => next => action  => {
  console.log('Need to check user is on which step')
  return next(action)
}