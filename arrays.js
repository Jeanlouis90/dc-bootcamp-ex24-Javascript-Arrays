var ajpw = ["Baba", "Hansen", "Tenryu", "Tsuruta"];
ajpw
ajpw.push("Hara"); //adds Hara
ajpw.pop(); //removes the last item (which is Hara)
ajpw.unshift("Choshu"); //adds Choshu to the beginning
var allRemove = ajpw.shift(); //calling allRemove will delete Choshu from the array altogether
var midEighties = ajpw.slice(1, 4); //copies and adds Hansen, Tenryu, and Tsuruta to a new variable
var entireEighties = ajpw.slice(); //copies and adds ALL of them to a new variable
var puro = [
    ["Baba", "Hansen", "Tenryu", "Tsuruta"]
    ["Inoki", "Hogan", "Vader", "Tiger Mask"]
];
puro[1]; //["Inoki", "Hogan", "Vader", "Tiger Mask"];
puro[1][0]; //"Inoki"