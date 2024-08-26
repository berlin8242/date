// const a = 1
// let b = 4
// var c = 6
// b = a+b+c
// console.log(b)

// import { maths } from "./math.mjs";

// const myFunction = (param1, param2) => {
//     let d = 0
//     for (let index = 0; index < 100; index++) {
//         d = param1*param2*index
//     }
//     return d
// }

// // b = myFunction(6,7)
// console.log(b);

// const array1 = [1,2,3,4,5,6,7,8,9];

// for (const element of array1) {
//     console.log(myFunction(element, 9));
// }

// var increment = 1

// while (increment <= 10) {
//     console.log(increment)
//     increment++
// }

// function estBissextile(annee) {
//     if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function estBissextile(annee) {
//     if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let annee = 2023;
// if (estBissextile(annee)) {
//     console.log(`L'année ${annee} est bissextile.`);
// } else {
//     console.log(`L'année ${annee} n'est pas bissextile.`);
// }

// let animal = ["chien","chat"]
// animal.push("chameau")
// console.log(animal)

// let animaux = ["corbeau", "renard","chouette"]
// let result = animal.concat(animaux)
// console.log(result)
// delete animaux[0]
// console.log(animaux)

// alert("coucou")

// Créer le titre h1
// var titre = document.createElement("h1");
// titre.innerText = "Ceci est un titre h1";

// // Créer le paragraphe
// var paragraphe = document.createElement("p");
// paragraphe.innerText = "Ceci est un paragraphe.";

// // Ajouter le titre et le paragraphe au body
// document.body.appendChild(titre);
// document.body.appendChild(paragraphe);

// // Changer la couleur du titre et du paragraphe
// titre.style.color = "blue";
// paragraphe.style.color = "green";

// document.write("On va afficher un message d'alerte")

// function afficher()
// {
// alert("Vous venez de cliquer sur le bouton!")
// }

// // Fonction pour ajouter une classe de bordure rouge lorsque l'utilisateur commence à taper
// function ajouterBordureRouge(event) {
//     event.target.style.border = '2px solid red';
// }

// function retirerBordureRouge(event) {
//     if (event.target.value.trim() === '') {
//         event.target.style.border = '2px solid #ccc'; // Bordure initiale
//     }
// }

// // Sélectionner tous les éléments input
// const inputs = document.querySelectorAll('input');

// // Ajouter un gestionnaire d'événement pour chaque input
// inputs.forEach(input => {
//     input.addEventListener('input', ajouterBordureRouge);
// });

//  // Sélectionner le paragraphe
//  const paragraphe = document.getElementById('mon-paragraphe');

//  // Fonction pour changer la couleur du texte en bleu au survol
//  function survolerParagraphe() {
//     paragraphe.style.color = 'blue';
// }

// // Fonction pour réinitialiser la couleur du texte lorsqu'on ne survole plus
// function reinitialiserCouleur() {
//     paragraphe.style.color = 'black';
// }

//  // Ajouter les gestionnaires d'événements pour le survol et le départ du survol
//  paragraphe.addEventListener('mouseover', survolerParagraphe);
//  paragraphe.addEventListener('mouseout', reinitialiserCouleur);

// let age = 11;
// if (age > 18) {
//     result = 'Vous etes majeur';
// } else {
//     result = 'Vous etes mineur';
// }

// document.getElementById("sortie").innerHTML = result;


// const select = document.querySelector("select");
// const para = document.querySelector('p');

// select.addEventListener("change", setgenres);
// function setgenres() {
//     let choice = select.value;

//     switch (choice) {
//         case 'homme':
//             para.textContent = 'Vous etes un homme';
//             break;
//         case 'femme':
//             para.textContent = 'Vous etes une femme';
//             break;
//         case 'non binaire':
//             para.textContent = 'Vous etes non binaire';
//             break;
//         default:
//             para.textContent = "";
//     }
// }

// script.mjs
// import { calculate } from './math.js';

// // Example usage
// const num1 = 10;
// const num2 = 5;

// const addResult = calculate(num1, num2, '+');
// const subResult = calculate(num1, num2, '-');
// const mulResult = calculate(num1, num2, '*');
// const divResult = calculate(num1, num2, '/');
// const modResult = calculate(num1, num2, '%');

// console.log(`Addition: ${num1} + ${num2} = ${addResult}`);
// console.log(`Subtraction: ${num1} - ${num2} = ${subResult}`);
// console.log(`Multiplication: ${num1} * ${num2} = ${mulResult}`);
// console.log(`Division: ${num1} / ${num2} = ${divResult}`);
// console.log(`Modulo: ${num1} % ${num2} = ${modResult}`);

// script.js

// Importation de la fonction calculer depuis math.js
// import { calculer } from './math.js';

// Fonction pour gérer la soumission du formulaire
// function handleFormSubmit(event) {
//     event.preventDefault(); // Empêche la soumission du formulaire et le rechargement de la page

//     // Récupération des valeurs du formulaire
//     const nombre1 = parseFloat(document.getElementById('nombre1').value);
//     const nombre2 = parseFloat(document.getElementById('nombre2').value);
//     const operateur = document.getElementById('operateur').value;

//     // Calcul du résultat
//     const resultat = calculer(nombre1, nombre2, operateur);

//     // Affichage du résultat
//     document.getElementById('resultat').textContent = `Résultat : ${resultat}`;
// }

// // Ajout de l'événement de soumission du formulaire
// document.getElementById('calculForm').addEventListener('submit', handleFormSubmit);
// ;

// // Créer un objet Date représentant la date du jour
// const today = new Date();

// // Afficher la date complète (avec l'heure) dans la console
// console.log("Date complète : " + today);

// // Afficher l'année dans la console
// console.log("Année : " + today.getFullYear());

// // Afficher le mois dans la console (les mois commencent à 0, donc on ajoute 1 pour avoir le mois correct)
// console.log("Mois : " + (today.getMonth() + 1));

// // Afficher le jour dans la console
// console.log("Jour : " + today.getDate());


// Créer un objet Date représentant la date du jour
// const today = new Date();

// // Créer un objet Date représentant une date spécifique (par exemple, le 25 décembre 2024)
// const specificDate = new Date('2024-12-25');

// Fonction pour comparer les deux dates et afficher le résultat dans la console
// function compareDates(date1, date2) {
//   if (date1 < date2) {
//     console.log("La date du jour est avant la date spécifique.");
//   } else if (date1 > date2) {
//     console.log("La date du jour est après la date spécifique.");
//   } else {
//     console.log("La date du jour est la même que la date spécifique.");
//   }
// }

// // Appeler la fonction de comparaison
// compareDates(today, specificDate);

// Créer un objet Date représentant la date du jour
// const today = new Date();

// // Créer un objet Date représentant une date spécifique (par exemple, le 25 décembre 2024)
// const specificDate = new Date('2024-12-25');

// // Fonction pour calculer et afficher le nombre de jours entre les deux dates
// function calculateDaysBetween(date1, date2) {
//   // Convertir les deux dates en millisecondes
//   const timeDiff = Math.abs(date2.getTime() - date1.getTime());

//   // Convertir la différence de millisecondes en jours
//   const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

//   console.log("Nombre de jours entre les deux dates : " + diffDays);
// }

// // Appeler la fonction de calcul
// calculateDaysBetween(today, specificDate);


document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Ajustement de l'âge si l'anniversaire n'est pas encore passé cette année
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Condition spéciale pour les personnes nées cette année
    if (age === 0) {
        const months = today.getMonth() - birthDate.getMonth();
        const days = today.getDate() - birthDate.getDate();
        if (months === 0) {
            document.getElementById('ageResult').textContent = `Vous avez ${days} jours.`;
        } else {
            document.getElementById('ageResult').textContent = `Vous avez ${months} mois et ${days} jours.`;
        }
    } else {
        document.getElementById('ageResult').textContent = `Vous avez ${age} ans.`;
    }
});


