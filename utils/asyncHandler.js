// asyncHandler for cleaner error handling in routes
const asyncHandler = fn => 
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next)
};

module.exports = asyncHandler;