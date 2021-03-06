// Fonction de désactivation de l'affichage des "tooltips" de connexion
function deactivateTooltips() {

    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++) {
        tooltips[i].style.display = 'none';
    }

};

// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input connexion

function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }

    return false;

}

// Pour respecter la spécification HTML5
var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var mdpFormat = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$/;


// Fonctions de vérification du formulaire, elles renvoient "true" si tout est ok

var check = {}; // On met toutes nos fonctions dans un objet littéral

//chec page connexion
check['login'] = function() {

    var login = document.getElementById('login'),
        tooltipStyle = getTooltip(login).style;

    if (login.value.length >= emailRegExp) {
        login.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        login.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};
check['pwd'] = function() {

    var pwd = document.getElementById('pwd'),
        tooltipStyle = getTooltip(pwd).style;

    if (pwd.value.length >= mdpFormat) {
        pwd.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        pwd1.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

// Mise en place des événements

    var button = document.getElementById('button');
    var inputs = document.querySelectorAll('input[type=email], input[type=password]');
    var inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
        });
    };

    button.addEventListener('click', function(e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
           //mettre lienvers profil
        }

        e.preventDefault();
    });


// Maintenant que tout est initialisé, on peut désactiver les "tooltips"

deactivateTooltips();
