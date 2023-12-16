// Facade

class Conveyor {
	setBody() {
		console.log('Body set!')
	}

	getEngine() {
		console.log('Dismantle Engine!')
	}

	setEngine() {
		console.log('Engine set!')
	}

	getInterior() {
		console.log('Update interior!')
	}

	setInterior() {
		console.log('Interior added!')
	}

	setExterior() {
		console.log('Added exterior!')
	}

	setWheels() {
		console.log('Wheels!!!')
	}

	addElectronic() {
		console.log('Added electronics!')
	}
	print() {
		console.log('Car painted!')
	}
}

class ConveyorFacade {
	constructor(car) {
		this.car = car
	}

	assembleCar() {
		this.car.setBody()
		this.car.getEngine()
		this.car.setEngine()
		this.car.getInterior()
		this.car.setInterior()
		this.car.setExterior()
		this.car.setWheels()
		this.car.addElectronic()
		this.car.print()
	}

	changeEngine() {
		this.car.getEngine()
		this.car.setEngine()
	}
	changeInterior() {
		this.car.getInterior()
		this.car.setInterior()
	}
}

const conveyor = new ConveyorFacade(new Conveyor())
let car = conveyor.assembleCar()
car = conveyor.changeEngine()
car = conveyor.changeInterior()

console.log(car)
/*
Body set!
Dismantle Engine!
Engine set!
Update interior!
Interior added!
Added exterior!
Wheels!!!
Added electronics!
Car painted!
Dismantle Engine!
Engine set!
Update interior!
Interior added!
*/
