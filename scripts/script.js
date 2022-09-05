(function(){
    //variables que determinan la fecha y hora final de la cuenta atras
    let toYear=2022;
    let toMonth=9;
    let toDay=10;
    let toHour=21;
    let toMinute=0;
    let toSecond=0;

    const fillZero = i => i.toString().length==1 ? "0"+i : i;

    // document.getElementById('countdown1').innerHTML=`Te invito a mi cumpleaños el ${fillZero(toDay)} de${fillZero(toMonth)}-${toYear} ${fillZero(toHour)}:${fillZero(toMinute)}:${fillZero(toSecond)}`;
    function countDown()
    {
        const actual_date=new Date();

        let new_second=toSecond-actual_date.getSeconds();
        let new_minute=toMinute-actual_date.getMinutes();
        let new_hour=toHour-actual_date.getHours();
        let new_day=toDay-actual_date.getDate();
        let new_month=toMonth-(1+actual_date.getMonth());
        let new_year=toYear-actual_date.getFullYear();

        if (new_second<0) {
            new_second=60+new_second;
            new_minute--;
        }
        if (new_minute<0) {
            new_minute=60+new_minute;
            new_hour--;
        }
        if (new_hour<0) {
            new_hour=24+new_hour;
            new_day--;
        }
        if (new_day<0) {
            new_month--;
            let m=actual_date.getMonth();
            if (m in [0, 2, 4, 6, 7, 9, 11]) {
                new_day=31+new_day;
            }
            if (m in [3, 5, 8, 10]) {
                new_day=30+new_day;
            }
            if (m==1) { //febrero
                //comprobamos si es un año bisiesto...
                if (actual_date.getYear()/4-Math.floor(actual_date.getYear()/4)==0) {
                    actual_date=29+actual_date;
                } else {
                    actual_date=28+actual_date;
                }
            }
        }
        if (new_month<0) {
            new_month=12+new_month;
            new_year--;
        }
        if (new_year<0) {
            clearInterval(interval);
            return;
        }

        document.getElementById('horas').innerHTML=`${fillZero(new_hour)}:${fillZero(new_minute)}:${fillZero(new_second)} horas.`;
        document.getElementById('dias').innerHTML=`${new_day} dias, `;
        // document.getElementById('meses').innerHTML=`${new_month} mes, `;
        form.year.value=new_year;
    }

    let interval=setInterval(countDown, 1000);
})();
