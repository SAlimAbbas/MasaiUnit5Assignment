const sum=(one,two,three)=>{
    if(typeof one=="string" || typeof two=="string" || typeof three=="string"){
        return undefined
    }
    return one+two+three
}

// exporting sumssss



module.exports=sum