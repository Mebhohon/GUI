document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault();
},false);


//get input
function input(){
    var Horfirst = Number(document.getElementById("HorizontalStart").value);
    var Horlast = Number(document.getElementById("HorizontalEnd").value);
    var Verfirst = Number(document.getElementById("VerticalStart").value);
    var Verlast = Number(document.getElementById("VerticalEnd").value);
    var error;
    var check = 0;

    if(isNaN(Horfirst) || Horfirst > Horlast){
        error = "Invalid entry for HorizontalFirst"
        error = error.bold();
        error = error.fontcolor("red")
        HorizontalStart.style.backgroundColor="lightgreen";
        document.getElementById("demo").innerHTML = error;
        check += 1;
    }
    else{
        error = "";
        HorizontalStart.style.backgroundColor="white";
        document.getElementById("demo").innerHTML = error;
    }

    if(isNaN(Horlast) || Horfirst > Horlast){
        error1 = "Invalid entry for HorizontalLast"
        error1 = error1.bold();
        error1 = error1.fontcolor("red")
        HorizontalEnd.style.backgroundColor="lightgreen";
        document.getElementById("demo1").innerHTML = error1;
        check += 1;
    }
    else{
        error1 = "";
        HorizontalEnd.style.backgroundColor="white";
        document.getElementById("demo1").innerHTML = error1;
    }

    if(isNaN(Verfirst) || Verfirst > Verlast){
        error2 = "Invalid entry for VerticalFirst"
        error2 = error2.bold();
        error2 = error2.fontcolor("red")
        VerticalStart.style.backgroundColor="lightgreen";
        document.getElementById("demo2").innerHTML = error2;
        check += 1;
    }
    else{
        error2 = "";
        VerticalStart.style.backgroundColor="white";
        document.getElementById("demo2").innerHTML = error2;
    }

    if(isNaN(Verlast) || Verfirst > Verlast){
        error3 = "Invalid entry for VerticalEnd"
        error3 = error3.bold();
        error3 = error3.fontcolor("red")
        VerticalEnd.style.backgroundColor="lightgreen";
        document.getElementById("demo3").innerHTML = error3;
        check += 1;
    
    }
    else{
        error3 = "";
        VerticalEnd.style.backgroundColor="white";
        document.getElementById("demo3").innerHTML = error3;
    }

    if(check != 0){
        return;
    }
    else{
        createTable(Horfirst,Horlast, Verfirst, Verlast );
    }
    
}

function createTable(Horfirst,Horlast,Verfirst,Verlast){

    const div1 = document.getElementById("div1");
    const tb1 = document.createElement("table");
    const tbo = document.createElement("tbody");

    var row = document.createElement("tr");
    row.appendChild(document.createElement("th"));

    for(let i = Horfirst; i<= Horlast; ++i){
        const th = document.createElement("th");
        th.innerText = i;
        row.appendChild(th);
    }
    tbo.appendChild(row);

    for(let i = Verfirst; i <= Verlast; i++){ 
        var row = document.createElement("tr");
        let x = document.createElement("th");
        let xt = document.createTextNode(i);
        x.appendChild(xt);
        row.appendChild(x);

        for(let j = Horfirst;j <= Horlast; j++){
            var cell = document.createElement("td");
            var cellText = document.createTextNode(i * j);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tbo.appendChild(row);
    }
    tb1.appendChild(tbo);
    div1.appendChild(tb1);
    div1.replaceChild(tb1, div1.childNodes[0]);
}