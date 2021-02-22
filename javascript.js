function calculator() {
    var skill = document.getElementsByClassName('skill');
    var age = document.getElementsByClassName('age');
    var rep = document.getElementsByClassName('rep');
    var education = document.getElementById("education");
    var family = document.getElementById("family");
    var btnShow = document.querySelector("button");
    var temp = 500;
    for (i = 0; i <= 3; i++) {
        if (skill[i].checked === true) {
            temp = temp + parseInt(skills[i].value);
        }
    }
    for (i = 0; i <= 2; i++) {
        if (age[i].checked === true) {
            temp = temp * Number(age[i].value);
        }
    }
    for (i = 0; i <= 2; i++) {
        if (rep[i].checked === true) {
            if (rep[i].value != 200) {
                temp = temp * Number(rep[i].value);
            } else {
                temp = temp - Number(rep[i].value);
            }
        }
    }
    temp = temp * education.value;
    temp = temp * family.value;
    alert("Qalyn total: $" + temp);
};
