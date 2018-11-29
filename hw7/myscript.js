document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault();
},false);



$(document).ready(function() {
    $.validator.addMethod("greaterThan", function(value, element, param) {
        var $otherElement = $(param);
        return parseInt(value, 10) > parseInt($otherElement.val(), 10);
    });
    
    $("#button").click( function(){    
        var Horfirst = Number(document.getElementById("HorizontalStart").value);
        var Horlast = Number(document.getElementById("HorizontalEnd").value);
        var Verfirst = Number(document.getElementById("VerticalStart").value);
        var Verlast = Number(document.getElementById("VerticalEnd").value);

        $("#enter").validate({
            rules: {
                HorizontalStart: {
                    required: true,
                    number: true ,

                },
                
                HorizontalEnd: {
                    required: true,
                    number: true,
                    greaterThan: "#HorizontalStart"
                },
                
                VerticalStart: {
                    required: true,
                    number: true,
                },
                
                VerticalEnd: {
                    required: true,
                    number: true,
                    greaterThan: "#VerticalStart"
                }

            },
            messages: {
                HorizontalStart: {
                    required: "Please enter a number 1-25",
                    number: "Must be non decimal integer."
                },
                HorizontalEnd: {
                    required: "Please enter a number 1-25",
                    number: "Must be non decimal integer.",
                    greaterThan: "Must be greater than HorizontalStart"
                },
                VerticalStart: {
                    required: "Please enter a number 1-25",
                    number: "Must be non decimal integer."
                },
                VerticalEnd: {
                    required: "Please enter a number 1-25",
                    number: "Must be non decimal integer.",
                    greaterThan: "Mustbe greater than VerticalStart"
                },
            },
            

        });

        if($("#enter").valid()){
            createTable(Horfirst,Horlast, Verfirst, Verlast );
        }else{
            return;
        }
        
    
    });


});


    


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
