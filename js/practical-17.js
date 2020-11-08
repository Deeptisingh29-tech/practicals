//Selectors
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.querySelector("#name");
const date = document.getElementById('date');


//Event Handlers
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

//Functions
function showtime()
{
    let today = new Date();
    //console.log(today);
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString();

    //AM and PM
    const amPm = hour > 12 ? 'PM' : 'AM';
    //12 Hours format
    hour = hour%12 || 12;

    //Output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;  //the clock here is shown as string by the use of tilted "``" quotes..
   
   date.innerHTML = `${todaydate}`;
    // for showing seconds changing.
    setTimeout(showtime,1000);
}

function addZero(n){
    return ((parseInt(n,10)<10 ? '0' : '')+n);
}

//setGreeting
function setGreeting() 
{
   let today = new Date();
   let hour = today.getHours();
   if(hour < 12)
   {
       document.body.style.backgroundImage = 'url("https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.wallpapermania.eu%2Fdownload%2F9048_Good-morning-nature-wonderful-summer-time.jpg&imgrefurl=http%3A%2F%2Fwww.wallpapermania.eu%2Fwallpaper%2Fgood-morning-nature-wonderful-summer-time&tbnid=NdffhqQCaMknmM&vet=12ahUKEwiLja7eqPPsAhWDdisKHUApAnYQMygXegUIARDtAQ..i&docid=4ezePFPbSt4n1M&w=1920&h=1200&q=morning%20images&ved=2ahUKEwiLja7eqPPsAhWDdisKHUApAnYQMygXegUIARDtAQ")';
       greeting.innerHTML = "Good Morning";
   }
   else if(hour < 18)
   {
    document.body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT74HHk9DmUYzZOgJr9a5nqDZA-g907xyRmxg&usqp=CAU")';
    greeting.innerHTML = "Good Afternoon";
   }
   else 
   {
    document.body.style.backgroundImage = 'url("https://imgcp.aacdn.jp/img-a/1200/900/global-aaj-front/article/2017/11/5a1d7439a6113_5a1d719b34e07_1546787088.jpg")';
    greeting.innerHTML = "Good Evening";
    document.body.style.color = "white";
   }
}

//for storing the name in the local storage
function getName()
{
    if(localStorage.getItem('name') === null)
    {
        name.innerHTML = "[Enter Name]";
    }
    else
    {
        name.innerHTML = localStorage.getItem('name');
    }
}

function setName(e)
{
    if(e.type === "keyPress")
    {
        if(e.keyCode == 13)  //Enter key pressed
        {
            localStorage.setItem('name', e.target.innerHTML);
            name.blur();
        }
    }
    else   // Blur event
    {
        localStorage.setItem('name', e.target.innerHTML);
        
    }
}

//Function call
showtime();
setGreeting();
getName();
setName();