// Iterator

class Iterator {
	constructor(el) {
		this.index = 0

		this.elements = el
	}

	next() {
		return this.elements[this.index++]
	}

	hasNext() {
		return this.index < this.elements.length
	}
}

const collection = new Iterator(['Audi', 'BMW', 'Tesla', 'Mercedes'])

while (collection.hasNext()) {
	console.log(collection.next())
}

// 'Audi', 'BMW', 'Tesla', 'Mercedes'
class IteratorObj {
	constructor(el) {
		this.index = 0
		this.keys = Object.keys(el)
		this.elements = el
	}

	next() {
		return this.elements[this.keys[this.index++]]
	}

	hasNext() {
		return this.index < this.keys.length
	}
}

const autos = {
	audi: { model: 'Audi', color: 'black' },
	bmw: { model: 'Bmw', color: 'black' },
	tesla: { model: 'Tesla', color: 'black' },
}

const collectionObj = new IteratorObj(autos)

while (collectionObj.hasNext()) {
	console.log(collectionObj.next())
}

/* 
{ model: 'Audi', color: 'black' }
{ model: 'Bmw', color: 'black' }
{ model: 'Tesla', color: 'black' }
*/
