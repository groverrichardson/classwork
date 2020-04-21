function createCharacter(name, nickname, race, origin, attack, defense, weapon){
    return {
        name, 
        nickname,
        race,
        origin,
        attack,
        defense,
        weapon, 
        describe() {
            console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`);
        },
        evaluateFight(opponent) {
            let x = this.attack - opponent.defense;
            let y = opponent.attack - this.defense;
            if (x < 0){
                x = 0;
            }
            if (y < 0){
                y = 0;
            }
        }

    }
}

let characters = [
    (createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff')), 
    (createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the ring')), 
    (createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'a String and Barrow Blade')), 
    (createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'an Anduril')), 
    (createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'a Bow and Arrow')),
    (createCharacter('Arwen Undomiel', 'arwen', 'Man', 'The Shire', '10', '10', 'a Hadhafang'))]

characters.find(character => character.nickname === 'aragorn').describe();

const hobbits = characters.filter(character => character.race === 'Hobbit');

const strongCharacters = characters.filter(character => character.attack > 5);

console.log(strongCharacters);