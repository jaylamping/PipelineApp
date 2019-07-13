/**
 * Allows for cleaner syntax and better error handling using async/await
 * instead of traditional promise syntax.
 * @param {*} fn - function to route via async/await call
 */
const asyncHandler = fn => 
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next)
};

module.exports = asyncHandler;