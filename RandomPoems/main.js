"use strict";
var randompoem;
(function (randompoem) {
    let subjects = ["Light", "L", "Near", "Misa", "Mello", "Ryuk"];
    let verbs = ["siegt über", "liebt", "isst", "hasst", "benutzt", "hintergeht"];
    let objects = ["das Death Note", "L", "Light", "Äpfel", "Kira", "die Shinigami"];
    function getShortestLength(subjects, verbs, objects) {
        if (subjects.length <= verbs.length) {
            if (objects.length < subjects.length) {
                return objects.length;
            }
            else {
                if (subjects.length <= objects.length) {
                    return subjects.length;
                }
                else {
                    return objects.length;
                }
            }
        }
        else {
            if (verbs.length < objects.length) {
                return verbs.length;
            }
            else {
                return objects.length;
            }
        }
    }
    let length = getShortestLength(subjects, verbs, objects);
    let index = [[-1, -1], [-1, -1]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < length; j++) {
            let indexTemp;
            while (true) {
                indexTemp = Math.floor(Math.random() * index[i].length);
                let contain = false;
                for (let k = 0; k < index[i].length; k++) {
                    if (index[i][k] == indexTemp) {
                        contain = true;
                    }
                    else {
                        contain = false;
                    }
                }
                if (contain == false) {
                    break;
                }
            }
            indexTemp = index[i][j];
        }
    }
    let i = 0;
    while (i < length) {
        console.log(subjects[index[1][i]] + "" + verbs[index[2][i]] + "" + objects[index[3][i]]);
        i = i + 1;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=main.js.map