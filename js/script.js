// this is your custom javascript code

let link = "http://www.w3.org/2000/svg"

let svg = document.createElementNS(link,"svg");
svg.setAttribute("viewbox","0 0 720 360");
svg.setAttribute("width", "720");
svg.setAttribute("height", "360");

function addCircle(cy,cx){
    let cirkel = document. createElementNS(link, "circle");
    cirkel.setAttribute("cx", cx);
    cirkel.setAttribute("cy", cy);
    cirkel.setAttribute("r", 1);
    cirkel.setAttribute("fill", "black");
    return cirkel;
}
function coordToPos(waarde,longitude){
    let positie
    if (longitude) {
        // var positieX = (~~longitude + 180)*2
        positie = (waarde + 180)*2;
    }
    else{
        // var positieY = (90-~~latitude)*2
        positie = (90-waarde)*2;
    }
    return positie
}
for (let i = 0; i < cities.length; i=i+1) {
    svg.appendChild(addCircle(coordToPos(cities[i].latitude,false),coordToPos(cities[i].longitude,true)))
}
document.body.appendChild(svg)