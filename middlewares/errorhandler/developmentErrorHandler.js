module.exports = function (err, req, res, next)
{
    res.status(err.status || 500);
    res.json({
        'messsage': err.message,
        'error': err
    });
};