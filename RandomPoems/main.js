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
    let index = [[-1], [-1], [-1]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < length; j++) {
            let indexTemp;
            //indexTemp = Math.floor(Math.random() * index[i].length);
            while (true) {
                switch (i) {
                    case 0:
                        indexTemp = Math.floor(Math.random() * subjects.length);
                        break;
                    case 1:
                        indexTemp = Math.floor(Math.random() * verbs.length);
                        break;
                    case 2:
                        indexTemp = Math.floor(Math.random() * objects.length);
                        break;
                }
                let contain = false;
                for (let k = 0; k < length; k++) {
                    if (index[i][k] == indexTemp) {
                        contain = true;
                    }
                }
                if (contain == false) {
                    break;
                }
            }
            index[i][j] = indexTemp;
        }
    }
    console.log(index);
    for (let i = 0; i < length; i++) {
        console.log(subjects[index[0][i]] + " " + verbs[index[1][i]] + " " + objects[index[2][i]]);
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=main.js.map