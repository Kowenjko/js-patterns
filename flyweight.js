//Flyweight

class Auto {
	constructor(model) {
		this.model = model
	}
}

class AutoFactory {
	constructor(name) {
		this.models = {}
	}
	create(name) {
		let model = this.models[name]
		if (model) return model
		console.count('model')

		this.models[name] = new Auto(name)

		return this.models[name]
	}

	getModels() {
		console.log(this.models)
		console.table(this.models)
	}
}

const factory = new AutoFactory()

const bmw = factory.create('BMW')
const audi = factory.create('Audi')
const tesla = factory.create('Tesla')
const blackTesla = factory.create('Tesla')
/* 
model: 1
model: 2
model: 3
*/
factory.getModels()

/* 
{
    "BMW": {"model": "BMW" },
    "Audi": {"model": "Audi" },
    "Tesla": { "model": "Tesla" }
}
*/
