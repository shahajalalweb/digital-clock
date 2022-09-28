 let section = document.querySelector("section"), 
 icons = document.querySelector(".icons");

 icons.onclick = () => {
    section.classList.toggle("dark");
 }


 setInterval(() => {
    var asiaDhaka = new Date().toLocaleString([], { timeZone: "Asia/Dhaka" });
    let date = new Date(asiaDhaka),
    hours = date.getHours(),
    second = date.getSeconds(),
    minutes = date.getMinutes();

    let d; 
    d = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours == 0 ? hours = 12 : hours;

        //adding 0 to all the value if they will less then 10 

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        second = second < 10 ? "0" + second : second; 

    document.querySelector(".hour_num").innerText = hours;
    document.querySelector(".min_num").innerText = minutes;
    document.querySelector(".sec_num").innerText = second;
    document.querySelector(".am_pm").innerText = d;





 }, 1000); //1000 millseconds = 1second