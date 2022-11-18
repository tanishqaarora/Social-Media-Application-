exports.requireLogin = (req, res, next)=>{
    if(req.sessions && req.sessions.user) {
        return next();
    }
    else {
        return res.redirect('/login');
    }
}