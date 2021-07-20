setInterval(() =>{
    // console.log("harry bhai is good");
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    hrotation = 30*h + m/2;
    mrotation = 3*m + s/10;
    srotation = 6*s;

    hourhand.style.transform = `rotate(${hrotation}deg)`;
    minutehand.style.transform = `rotate(${mrotation}deg)`;
    secondhand.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);
