const adminAuthCheck = (req,res, next)=>{
    const token = "xyz";

    const isAuthenticated = token === "xyz";
    if(!isAuthenticated){
        res.status(401).send("unauthenticated for admin check")
    }else {
        next()
    }
}

const userAuthCheck = (req,res,next)=>{
    const token ="abc";
    const isAuthenticated = token === "absc";

    if(!isAuthenticated){
        res.status(401).send("you are not authenticated")
    } else{
        next();
    }
}

module.exports={
    adminAuthCheck,
    userAuthCheck
}