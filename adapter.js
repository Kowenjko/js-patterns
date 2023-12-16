//Adapter

class Engine2 {
	simpleInterface() {
		console.log('Engine 2.0 - tr-tr')
	}
}

class EngineV8 {
	complicatedInterface() {
		console.log('Engine V8! - wroom!')
	}
}

class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine
	}

	simpleInterface() {
		this.engine.complicatedInterface()
	}
}

class Auto {
	startEngine(engine) {
		engine.simpleInterface()
	}
}

const myCar = new Auto()
const oldEngine = new Engine2()

myCar.startEngine(oldEngine) //Engine 2.0 - tr-tr

const newCar = new Auto()
const engineAdapter = new EngineV8Adapter(new EngineV8())

newCar.startEngine(engineAdapter) //Engine V8! - wroom!

const errCar = new Auto()
const engineV8 = new EngineV8()

errCar.startEngine(engineV8) //Error
