/**
 * Allows for cleaner syntax and error handling. Using async/await
 * instead of dumb promises.
 * @param {*} fn - function to route via async/await call
 */
const asyncHandler = fn => 
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next)
};

module.exports = asyncHandler;