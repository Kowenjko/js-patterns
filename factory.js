// Factory method

class Bmv {
	constructor(model, price, maxSpeed) {
		this.model = model
		this.price = price
		this.maxSpeed = maxSpeed
	}
}

class BmvFactory {
	create(type) {
		if (type === 'X5') return new Bmv(type, 10800, 300)
		if (type === 'X6') return new Bmv(type, 11100, 320)
	}
}

const factory = new BmvFactory()

const x5 = factory.create('X5')
const x6 = factory.create('X6')

// console.log(x5)

// {
//     "model": "X5",
//     "price": 10800,
//     "maxSpeed": 300
// }

// console.log(x6)

// {
//     "model": "X6",
//     "price": 11100,
//     "maxSpeed": 320
// }
