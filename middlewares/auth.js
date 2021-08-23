const verifyUser = (req, res, next) =>{
    if(req.session.user){
        next();
    } else{
        res.render("login", {message: "Inicia sesión para acceder."})
    }
}
const verifyAdmin = (req, res, next) =>{
    if(req.session.admin == 1){
        next();
    } else{
        res.render("desautorizado")
    }
}

module.exports = {verifyUser, verifyAdmin};