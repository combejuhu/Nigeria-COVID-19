$.get("http://localhost/github/Nigeria-COVID-19/getCities.php", function (data) {
    console.log(data)
    var juhu = data.replace("\n", "");
    var juhu = data.split("\n");

    array = juhu.filter(function (str) {
        return /\S/.test(str);
    });

    console.log(juhu)


    array.splice(0, 5);
    array.splice(140, 5);
    array.splice(-1, 5)
    console.log(array)

    /*
        var i = data.length;

         
            while (i--) {
                (i - 1) % 5 === 0 && array.splice(i, 1);
                (i - 1) % 4 === 0 && array.splice(i, 1);
            } */

    //--------------------------------

    for (var i = 0; i < array.length; i++) {
        console.log("Ime grada" + array[i]);
        console.log("Broj zarazenih" + array[i + 1])

        i += 4;
    }


    /* console.log(array); */



});