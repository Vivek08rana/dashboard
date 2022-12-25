// JavaScript source code
var item1Pressed = 0;
var item2Pressed = 0;
var item3Pressed = 0;
var item4Pressed = 0;
var item5Pressed = 0;
var item6Pressed = 0;
var item7Pressed = 0;
var item8Pressed = 0;
var item9Pressed = 0;
var item10Pressed = 0;

function updateClock() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = yyyy + '/' + mm + '/' + dd;

    // Modify the html of the time tag to update the time
    //document.getElementById("current_Time").innerHTML = ([date, time].join(' / '));

    window.onload = (event)=>{
        document.getElementById("current_Date").innerHTML = (today);
    }

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // Repeat

function itemDetails(id)  {
    //Item Descriptions
    var itemDesc1 = "Every closet craves this edgy bomber styled with handy side pockets and comfy ribbed trim.";
    var itemDesc2 = "You can look good while being environmentally conscious. The men's premium organic t-shirt is made up of 100% organic cotton, making it green and comfy. Plus, the shirt promises the best-possible print results, making it an excellent choice for those looking to customize.";
    var itemDesc3 = "The lightweight, buttery smooth fabric is super soft and non-see-through, has 4-way stretchy, comfy just like your second skin. The stretchy lounge palazzo pants with high waisted design wrap your belly well.";
    var itemDesc4 = "Cut and sewn oversized crewneck sweatshirt in heavyweight 100% cotton french terry.";
    var itemDesc5 = "Medium weight black cotton gabardine. Screenprinted graphic on front.\nLarge compartment. Single strap construction.\nMade and screen printed by hand in New York City.";
    var itemDesc6 = "Rough Simmons Cage Cargo Pants in Black.\nOptional hand-printed metal badges and drawstrings.\nWide leg pants in medium weight 100% cotton twill.\nDetachable cargo pocket cage snaps on at the waist. Side seam pockets at the waist and single welt pocket on back right leg.\nMade in New York City.";
    var itemDesc7 = "Rough Simmons A/W 2021 Patched Scarf in Black and White.\nLarge lightweight keffiyeh scarf.\nScreen printed graphic patches applied throughout.\nScreen printed by hand and finished in New York City.";
    var itemDesc8 = "Rough Simmons Spring/Summer 2021 Graphic Metal Belt.\nCotton webbing military belt with black hardware.\nHand printed and laser cut metal badges on both sides.\nBelt size is adjustable. Selected size will determine badge placement and the size the belt is pre-adjusted to.\nHand printed and constructed in New York City.";
    var itemDesc9 = "Just your everyday smooth, comfy tee, a wardrobe staple.\nSlim fit, so size up if you prefer a looser fit, or check out the Classic T-Shirt.";
    var itemDesc10 = "VETEMEMES x ROUGH SIMMONS Hooded Bomber Jacket in Black.\nBlack polyester bomber jacket with hood in heavyweight 100% cotton fleece.";
    var itemDescInv = "Failed to load item description.";
    //Item Prices
    var itemPrice1 = "<b>Price: $650</b>";
    var itemPrice2 = "<b>Price: $65</b>";
    var itemPrice3 = "<b>Price: $180</b>";
    var itemPrice4 = "<b>Price: $250</b>";
    var itemPrice5 = "<b>Price: $60</b>";
    var itemPrice6 = "<b>Price: $400</b>";
    var itemPrice7 = "<b>Price: $125</b>";
    var itemPrice8 = "<b>Price: $120</b>";
    var itemPrice9 = "<b>Price: $75</b>";
    var itemPrice10 = "<b>Price: $380</b>";
    var itemPriceInv = "Price: Failed to load price.";

    console.log("THE ID IS " + id);
    if(id === Number(1)){
        document.getElementById("itemDescription").innerHTML = (itemDesc1);
        document.getElementById("itemPrice").innerHTML = (itemPrice1);
        item1Pressed++;
    }
    else if (id === Number(2)){
        document.getElementById("itemDescription").innerHTML = (itemDesc2);
        document.getElementById("itemPrice").innerHTML = (itemPrice2);
        item2Pressed++;
    }
    else if (id === Number(3)){
        document.getElementById("itemDescription").innerHTML = (itemDesc3);
        document.getElementById("itemPrice").innerHTML = (itemPrice3);
        item3Pressed++;
    }
    else if (id === Number(4)){
        document.getElementById("itemDescription").innerHTML = (itemDesc4);
        document.getElementById("itemPrice").innerHTML = (itemPrice4);
        item4Pressed++;
    }
    else if (id === Number(5)){
        document.getElementById("itemDescription").innerHTML = (itemDesc5);
        document.getElementById("itemPrice").innerHTML = (itemPrice5);
        item5Pressed++;
    }
    else if (id === Number(6)){
        document.getElementById("itemDescription").innerHTML = (itemDesc6);
        document.getElementById("itemPrice").innerHTML = (itemPrice6);
        item6Pressed++;
    }
    else if (id === Number(7)){
        document.getElementById("itemDescription").innerHTML = (itemDesc7);
        document.getElementById("itemPrice").innerHTML = (itemPrice7);
        item7Pressed++;
    }
    else if (id === Number(8)){
        document.getElementById("itemDescription").innerHTML = (itemDesc8);
        document.getElementById("itemPrice").innerHTML = (itemPrice8);
        item8Pressed++;
    }
    else if (id === Number(9)){
        document.getElementById("itemDescription").innerHTML = (itemDesc9);
        document.getElementById("itemPrice").innerHTML = (itemPrice9);
        item9Pressed++;
    }
    else if (id === Number(10)){
        document.getElementById("itemDescription").innerHTML = (itemDesc10);
        document.getElementById("itemPrice").innerHTML = (itemPrice10);
        item10Pressed++;
    }
    else{
        document.getElementById("itemDescription").innerHTML = (itemDescInv);
        document.getElementById("itemPrice").innerHTML = (itemPriceInv);  
    }
}

function topItems(){
    //Stores the 1st most clicked value/button
    const mostPressed = [-1,item1Pressed, item2Pressed, item3Pressed, item4Pressed, item5Pressed, item6Pressed, item7Pressed, item8Pressed, item9Pressed, item10Pressed];
    var maxVal = Math.max.apply(null, mostPressed);
    console.log("Most Pressed Button is " + mostPressed.indexOf(maxVal));
    //Stores the 2nd most clicked value/button
    const mostPressed2 = [-1,item1Pressed, item2Pressed, item3Pressed, item4Pressed, item5Pressed, item6Pressed, item7Pressed, item8Pressed, item9Pressed, item10Pressed];
    mostPressed2[mostPressed2.indexOf(maxVal)] = 0; //so we do not return the same max value
    var maxVal2 = Math.max.apply(null, mostPressed2);
    console.log("Second Most Pressed Button is " + mostPressed2.indexOf(maxVal2));
    //Stores the 3rd most clicked value/button
    const mostPressed3 = [-1,item1Pressed, item2Pressed, item3Pressed, item4Pressed, item5Pressed, item6Pressed, item7Pressed, item8Pressed, item9Pressed, item10Pressed];
    mostPressed3[mostPressed3.indexOf(maxVal)] = 0; //so we do not return the previous 2 max values
    mostPressed3[mostPressed3.indexOf(maxVal2)] = 0;
    var maxVal3 = Math.max.apply(null, mostPressed3);
    console.log("Third Most Pressed Button is " + mostPressed3.indexOf(maxVal3));

    return [mostPressed.indexOf(maxVal),mostPressed2.indexOf(maxVal2),mostPressed3.indexOf(maxVal3)];
}