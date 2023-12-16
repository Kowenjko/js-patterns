//Command

class Driver {
	constructor(command) {
		this.command = command
	}

	execude() {
		this.command.execude()
	}
}

class Engine {
	constructor() {
		this.state = false
	}

	on() {
		this.state = true
	}

	off() {
		this.state = false
	}
}

class OnStartCommand {
	constructor(engine) {
		this.engine = engine
	}

	execude() {
		this.engine.on()
	}
}

class OnSwitchOffCommand {
	constructor(engine) {
		this.engine = engine
	}

	execude() {
		this.engine.off()
	}
}

const engine = new Engine()

console.log(engine) //{ "state": false}

const onStartCommand = new OnStartCommand(engine)
const drive = new Driver(onStartCommand)

drive.execude()

console.log(engine) //{ "state": true}
