//ci-dessous on demande de saisir un numero por choisir une figure
//1:triangle 2:cercle 3:carre 4:rectangle

var figure = Number(Prompt("entrez un numero de figure"));

//variable utiliser pour les calculs:

//triangle
var base = Number(Prompt("entrez un numero de figure"));
var hauteur = Number(Prompt("entrez un numero de figure"));

//cercle
var base = Number(Prompt("entrez un numero de figure"));
var pie = Math.PI;

//carre
var cote = Number(Prompt("entrez un numero de figure"));

//rectangle
var base = Number(Prompt("entrez un numero de figure"));
var hauteur = Number(Prompt("entrez un numero de figure"));


//ci-dessous les conditions qui permettront de differencier les figures et le calculs qui en decouleront


if(figure = 1 ){
 var resultat = base * hauteur
 console.log(resultat + "m2")
}
/*else if(figure = 2){
	var resultat =
}
else if(figure = 3){
	
}
else if(figure = 4){
	
}*/