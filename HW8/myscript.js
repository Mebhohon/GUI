document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault();
},false);



$(document).ready(function() {
    slider();
    validate();
    valid();
    $.validator.addMethod("greaterThan", function(value, element, param) {
        var $otherElement = $(param);
        return parseInt(value, 10) > parseInt($otherElement.val(), 10);
    });

});

function valid(){
    if($("#enter").valid()){
        $("#enter").submit();
    }else{
        return;
    }
}

function validate(){
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
        
        submitHandler: function(event) {
            createTable();
            return false;
        },

        invalidHandler: function() {
            $("#div1").empty();
        }
        
    });
    

}

function slider(){
    $("#slide1").slider({
        min: 0,
        max: 50,
        slide: function(event, ui) {
            $("#HorizontalStart").val(ui.value);
            valid();
        }
    });
    $("#HorizontalStart").change(function(){
        $("slide1").slider("value", this.value);
        valid();
    })

    $("#slide2").slider({
        min: 0,
        max: 50,
        slide: function(event, ui) {
            $("#HorizontalEnd").val(ui.value);
            valid();
        }
    });
    $("#HorizontalEnd").change(function(){
        $("slide2").slider("value", this.value);
        valid();
    })

    $("#slide3").slider({
        min: 0,
        max: 50,
        slide: function(event, ui) {
            $("#VerticalStart").val(ui.value);
            valid();
        }
    });
    $("#VerticalStart").change(function(){
        $("slide3").slider("value", this.value);
        valid();
    })

    $("#slide4").slider({
        min: 0,
        max: 50,
        slide: function(event, ui) {
            $("#VerticalEnd").val(ui.value);
            valid();
        }
    });
    $("#VerticalEnd").change(function(){
        $("slide4").slider("value", this.value);
        valid();
    })

}

var numlist = 1;

function tabs() {
    var Horfirst = Number(document.getElementById("HorizontalStart").value);
    var Horlast = Number(document.getElementById("HorizontalEnd").value);
    var Verfirst = Number(document.getElementById("VerticalStart").value);
    var Verlast = Number(document.getElementById("VerticalEnd").value);
    
    var count = $("#tabs li").length + 1;

    if(count > 5) {
        return false;
    }

    $("#tabs").tabs();

    numlist++;

    var title = "<li class='tab'><a href='#tab-" + numlist + "'>" + "("+ Horfirst +
    "," + Horlast + "," + Verfirst + "," + Verlast + ")" + "</a>" +
    "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";
    $( "div#tabs ul" ).append( title );

    $( "div#tabs" ).append('<div id=tab-' + numlist + '>'+'<table class="table table-bordered table-hover"' + $("#div1").html() +'</table>'+ '</div>');

    $( "div#tabs" ).append(createTable());
    $( "#tabs" ).tabs("refresh");

    $( "#tabs" ).tabs("option", "active", -1);

    $( "#tabs" ).delegate( "span.ui-icon-close", "click", function() {
        var num_li = $( this ).closest( "li" ).remove().attr( "aria-controls" );
        $( "#" + num_li).remove();
    });

}

function createTable(){

    var Horfirst = Number(document.getElementById("HorizontalStart").value);
    var Horlast = Number(document.getElementById("HorizontalEnd").value);
    var Verfirst = Number(document.getElementById("VerticalStart").value);
    var Verlast = Number(document.getElementById("VerticalEnd").value);

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
