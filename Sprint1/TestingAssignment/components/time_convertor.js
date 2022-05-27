const time_convertor=(milliseconds)=>{
    // const time_convertor=(milliseconds)=>{
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
      
        seconds = seconds % 60;
        minutes = minutes % 60;
        hours=hours% 24
    // return{second:seconds,minutes:minutes,hours:hours}
    // }
    

    return {second:seconds,minut:minutes,hour:hours}

}



module.exports=time_convertor