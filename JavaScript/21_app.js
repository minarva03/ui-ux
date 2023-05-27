function indiaClock(){
        let timeBox=new Date().toLocaleTimeString('en-us','Asia/Kolkata');
        let dateBox=new Date().toLocaleDateString('en-us','Asia/Kolkata');
        document.querySelector('#time').innerText=timeBox;
        document.querySelector('#date').innerText=dateBox;
};
setInterval(indiaClock,1000);


function usaClock(){
        let timeBox=new Date().toLocaleString("en-US", {
                      timeZone: 'America/New_york',
                      timeStyle: "medium",
                      hourCycle: 'h12'
                  });
        let dateBox=new Date().toLocaleDateString('en-us','America/New_york');

        document.querySelector('#utime').innerText=timeBox;
        document.querySelector('#udate').innerText=dateBox;
};

setInterval(usaClock,1000);