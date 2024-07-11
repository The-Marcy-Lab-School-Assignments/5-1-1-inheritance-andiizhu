class Quadrilateral {
	constructor(side1, side2, side3, side4) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		this.side4 = side4;
	}
	getPerimeter() {
		return this.side1 + this.side2 + this.side3 + this.side4;
	}
}

class Rectangle extends Quadrilateral {
	constructor(side1, side2) {
		super(side1, side2, side1, side2);
	}
	getArea() {
		return this.side1 * this.side2;
	}
}

class Square extends Rectangle {
	constructor(side1) {
		super(side1, side1, side1, side1);
	}
	getDiagonal() {
		return Math.sqrt(2) * this.side1;
	}
}

/* Be creative with this one! */
class Person {
	static #allPeople = [];
	constructor(firstName, lastName, age, favFood) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.favFood = [favFood];
		Person.#allPeople.push(this);
	}
	introduction() {
		return `Hi! My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`;
	}
	celebrateBirthday() {
		this.age++;
		return `I am now ${this.age} years old!`;
	}
	addFavFood() {
		if (!this.favFood.includes(favFood)) {
			this.favFood.push(favFood);
			return `${favFood} has been added to your favorite foods.`;
		} else {
			return `${favFood} is already one of your favorite foods.`;
		}
	}
	static list() {
		return [...Person.#allPeople];
	}
	static find(firstName) {
		return Person.#allPeople.find((person) => person.firstName === firstName);
	}
}

module.exports = {
	Quadrilateral,
	Rectangle,
	Square,
	Person,
};
