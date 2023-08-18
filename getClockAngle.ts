function getClockAngle(hh_mm:string):number {
    let time = hh_mm.split(":")

    let hourAngle = parseInt(time[0])
    let minuteAngle = parseInt(time[1])
    hourAngle %= 12; 
    hourAngle  = (hourAngle*30) + (minuteAngle/2);
    minuteAngle *= 6 ;

    let clockAngle = Math.abs(hourAngle-minuteAngle);

    // console.log(hourAngle)
    // console.log(minuteAngle)
    // console.log(clockAngle)

    if (clockAngle > 180){
        return 360-clockAngle
    }
    else{
        return clockAngle
    }
    }

    console.log(getClockAngle("12:00") );   
    console.log(getClockAngle("03:45") );   
    console.log(getClockAngle("06:15") );  
    console.log(getClockAngle("01:30") );   
    console.log(getClockAngle("10:10") );    
