namespace GenericsandContainers {

    let feltpen: Feltpen = new Feltpen("blue");
    let scribblePaper: Paper = new Paper(841, 1189, "yellow");

    let theContainer: MyContainer = new MyContainer([feltpen, scribblePaper], 2);
    let myNewContainer: MyContainer = new MyContainer([feltpen, scribblePaper], 2);

    console.log(theContainer);

    let sentence: string = "Hallo";

    myNewContainer.Add(sentence);

    console.log(myNewContainer);
    console.log(myNewContainer.getAt(2));
    console.log(myNewContainer.count());

    let aGeneric: MyGeneric<number> = new MyGeneric<number>([1, 2, 3], 3);
    let bGeneric: MyGeneric<string> = new MyGeneric<string>(["Das", "ist", "ein", "Generic"], 4);

    console.log(aGeneric);
    console.log(bGeneric);

    console.log(bGeneric.getAt(2));
}