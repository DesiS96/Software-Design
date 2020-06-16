"use strict";
var GenericsandContainers;
(function (GenericsandContainers) {
    let feltpen = new GenericsandContainers.Feltpen("blue");
    let scribblePaper = new GenericsandContainers.Paper(841, 1189, "yellow");
    let theContainer = new GenericsandContainers.MyContainer([feltpen, scribblePaper], 2);
    let myNewContainer = new GenericsandContainers.MyContainer([feltpen, scribblePaper], 2);
    console.log(theContainer);
    let sentence = "Hallo";
    myNewContainer.Add(sentence);
    console.log(myNewContainer);
    console.log(myNewContainer.getAt(2));
    console.log(myNewContainer.count());
    let aGeneric = new GenericsandContainers.MyGeneric([1, 2, 3], 3);
    let bGeneric = new GenericsandContainers.MyGeneric(["Das", "ist", "ein", "Generic"], 4);
    console.log(aGeneric);
    console.log(bGeneric);
    console.log(bGeneric.getAt(2));
})(GenericsandContainers || (GenericsandContainers = {}));
//# sourceMappingURL=main.js.map