var Friends = /** @class */ (function () {
    function Friends() {
        this.characterList = [];
    }
    Friends.prototype.addCharacter = function (newCharacterList) {
        this.characterList = newCharacterList;
        console.log(characterList);
    };
    return Friends;
}());
var show = new Friends();
var characterList = ["Chandler", "Monica", "Joe", "Rachel", "Ross"];
show.addCharacter(characterList);
var show2 = new Friends();
var seasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
show2.addCharacter(seasons);
