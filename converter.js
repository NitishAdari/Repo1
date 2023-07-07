// document.querySelector("#type1").addEventListener('change', function(){
//     var o1 = document.querySelector("#type1").value;
//     console.log(o1);
//     // if(o1 == 'F')
//     // var rest = parseFloat(o1)*1.8 + 32;
//     // document.querySelector("#resc").textContent = rest;
//     // document.querySelector("#huc").textContent = "Fahrenhiet:";
// });

let ele = document.querySelectorAll(".box");

for(let i=0 ; i<ele.length ; i++){
    ele[i].addEventListener('change', function(){
        var o2 = document.querySelector("#type2").value;
        var o1 = document.querySelector("#type1").value;
        console.log(o1);
        console.log(o2);

        if(o1 == 'C' && o2 == 'F'){
            var get = document.querySelector("#data1").value;
            document.querySelector("#resc").textContent = ((get*1.8)+32).toFixed(2);
            console.log(document.querySelector("#resc").textContent);
        }
        if(o1 == 'F' && o2 == 'C'){
            var get = document.querySelector("#data1").value;
            document.querySelector("#resc").textContent = ((get-32)/1.8).toFixed(2);
        }
        if(o1 == 'K' && o2 == 'C'){
            var get = document.querySelector("#data1").value;
            document.querySelector("#resc").textContent = (get-273.16).toFixed(2);
        }
        if(o1 == 'C' && o2 == 'K'){
            var get = document.querySelector("#data1").value;
            document.querySelector("#resc").textContent = (parseFloat(get) + 273.16).toFixed(2);
        }
        if(o1 == 'K' && o2 == 'F'){
            var get = document.querySelector("#data1").value;
            document.querySelector("#resc").textContent = ((get-273.16-32)/1.8).toFixed(2);;
        }
        if(o1 == 'F' && o2 == 'K'){
            var get = document.querySelector("#data1").value;
            document.querySelector("#resc").textContent = (get-32)/1.8 + 273.16;
        }
        else if(o1 == 'F' && o2 == 'F' || o1 == 'C' && o2 == 'C' || o1 == 'K' && o2 == 'K'){
            var get = document.querySelector("#data1").value;
            document.querySelector("#resc").textContent = get;
        }
    });
}

    // var o2 = document.querySelector("#type2").value;
    // var o1 = document.querySelector("#type1").value;
    // console.log(o1);
    // console.log(o2);

    // if(o1 == 'C' && o2 == 'F'){
    //     var get = document.querySelector("#data1").value;
    //     document.querySelector("#resc").textContent = (get*1.8) + 32;
    // }
    // if(o1 == 'F' && o2 == 'C'){
    //     var get = document.querySelector("#data1").value;
    //     document.querySelector("#resc").textContent = (get-32)/1.8;
    // }
    // else{
    //     var get = document.querySelector("#data1").value;
    //     console.log(get);
    //     document.querySelector("#resc").textContent = get;
    // }



// document.querySelector("#donef").addEventListener('click', function(){
//     var o1 = document.querySelector("#fah").value;
//     var rest = (parseFloat(o1)-32)/1.8;
//     document.querySelector("#resf").textContent = rest;
//     document.querySelector("#huf").textContent = "Celsius:";
// });

// document.querySelector("#donek").addEventListener('click', function(){
//     var o1 = document.querySelector("#kel").value;
//     var rest = parseFloat(o1)-273.16;
//     document.querySelector("#resk").textContent = rest;
//     document.querySelector("#huk").textContent = "Celcius:";
// });