//Singleton

//  {}==={} false

// let instance

class Counter {
	constructor() {
		if (typeof Counter.instance === 'object') {
			return Counter.instance
		}

		this.count = 0
		Counter.instance = this
		return this
	}

	getCounter() {
		return this.count
	}

	increaseCount() {
		return this.count++
	}
}

const myCount1 = new Counter()
const myCount2 = new Counter()

myCount1.increaseCount()
myCount1.increaseCount()
myCount2.increaseCount()

console.log(myCount1.getCounter()) //3
console.log(myCount2.getCounter()) //3
