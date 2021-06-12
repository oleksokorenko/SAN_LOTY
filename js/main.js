// ////////////Burger///////////////////////
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
    
});
// //////////****Cookies*****///
const cookieElement = document.querySelector('.cookie_block');
const okElement = document.querySelector('.btn_cookies');

okElement.addEventListener('click',() => {
cookieElement.style.display = 'none';
});

let cookies = () => {
    if (!Cookies.get('hide-cookie')){
        setTimeout(() => {
           cookieElement.style.display = 'block' ;
        }, 1000);
    }

Cookies.set ('hide-cookie', 'true',{
    expires: 30
});
}




// ////////////******DATE and TIME******///////////////////
function zero_first_format(value){
    if (value < 10){
        value='0'+value;
        }
        return value;
}
// Funkcja akt.daty i czasy///////
function data_time(){
    var current_datatime = new Date();
    var day = zero_first_format(current_datatime.getDate());
    var month = zero_first_format(current_datatime.getMonth()+1);
    var year = zero_first_format(current_datatime.getFullYear());
    var hours = zero_first_format(current_datatime.getHours());
    var minutes = zero_first_format(current_datatime.getMinutes());
    var seconds = zero_first_format(current_datatime.getSeconds());

    return day+"."+month+"."+year+"."+hours+"."+minutes+"."+seconds;

}
setInterval(function(){
    document.getElementById('current_date_time_block').innerHTML = data_time();
},1000);



// ////////////////***Weather***///////////////////
document.getElementById("city_weather").addEventListener("change", function(e){
    console.log(e)
    const currentCity = e.target.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=2b3c4a7f2862b9544856cdec24a1d051`)
        .then( (resp) => resp.json())
        .then( (data) => {
            console.log(data);
            document.getElementById("showTemp").innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        })
})
// ///////////////////****DARK LIGHT THEME**/////////////////////////////////////////////
// function changeMode(){
//     var elemement = document.body;
//     element.classList.toggle("dark-mode"):
// }



