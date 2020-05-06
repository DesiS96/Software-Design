namespace randompoem {

let subjects: string[] = ["Light", "L", "Near", "Misa", "Mello", "Ryuk"];
let verbs: string[] = ["siegt über", "liebt", "isst", "hasst", "benutzt", "hintergeht"];
let objects: string[] = ["das Death Note", "L", "Light", "Äpfel", "Kira", "die Shinigami"];

function getShortestLength (subjects: string[], verbs: String[], objects: string[]): number {

    if (subjects.length <= verbs.length) {
        if (objects.length < subjects.length) {
             return objects.length;

        }
        else {
         if (subjects.length <= objects.length) {
             return subjects.length;

         } else {

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

let length: number = getShortestLength(subjects, verbs, objects);
let index: number[][] = [[-1], [-1], [-1]];

for (let i: number = 0; i < 3; i++) {
    
    for (let j: number = 0; j < length; j++) {
        let indexTemp: number;

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

            let contain: boolean = false;

            for (let k: number = 0; k < length; k++) {
               
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

for (let i: number = 0; i < length; i++) {

    console.log(subjects[index[0][i]] + " " + verbs[index[1][i]] + " " + objects[index[2][i]]);

}

}