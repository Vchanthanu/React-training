function login(){
    window.location="./product.html"; 
}
function signup(){
    window.location="./product.html"; 
}
function updatepdt(){
    window.location="./addproduct.html"
}
function deletepdt(){
    window.location="./addproduct.html"
}
function addproduct(){
    window.location="./product.html"; 
}
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Overall sale rate"
        },
        axisX:{
            title: "Day"
        },
        axisY:{
            title: "Number of Products"
        },
        data: [{        
            type: "line",
              indexLabelFontSize: 16,
            dataPoints: [
                
                { x:1,y: 414},
                { x:2,y: 520},
                { x:3,y: 460 },
                { x:4,y: 450 },
                { x:5,y: 560 },
                { x:6,y: 450 },
            ]
        }]
    });
    chart.render();
    
    var chart = new CanvasJS.Chart("chartperproduct", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Product sale rate"
        },
        axisX:{
            title: "Number of weeks"
        },
        axisY:{
            title: "Number of Products"
        },
        data: [{        
            type: "line",
              indexLabelFontSize: 16,
            dataPoints: [
                
                { x:1,y: 3},
                { x:2,y: 4},
                { x:3,y: 7 },
                { x:4,y: 6 },
                { x:5,y: 7 },
            ]
        }]
    });
    chart.render();
    }