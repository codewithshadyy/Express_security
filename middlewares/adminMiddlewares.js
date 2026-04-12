const adminOnly = async (req,res) => {

    if(req.user && req.user.role === "Admin"){
        next()
    }else{
        return res.status(403).json({"message":"Access denied"})
    }
    
}

module.exports = adminOnly