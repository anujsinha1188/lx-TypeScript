class Friends<T>{
    characterList: Array<T> = [];
    addCharacter(newCharacterList: Array<T>): void {
        this.characterList = newCharacterList;
        console.log(characterList);
    }

}
let show = new Friends<string>();
let characterList: Array<string> = ["Chandler", "Monica", "Joe", "Rachel", "Ross"];
show.addCharacter(characterList);

let show2 = new Friends<number>();
let seasons: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
show2.addCharacter(seasons);