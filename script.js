

function makeGrid(v){ 
var e = document.getElementById('screen');
    for(var i = 0; i < v; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            cell.addEventListener('mouseover', 
                e => e.target.classList.add('change')
                )
            row.appendChild(cell); 
        } 
        e.appendChild(row); 
    } 
}
