//Visitor

class Auto {
	accent(visitor) {
		visitor(this)
	}
}

class Tesla extends Auto {
	info() {
		return 'It is a Tesla car!'
	}
}

class Audi extends Auto {
	info() {
		return 'It is a Audi car!'
	}
}

function exportVisitor(auto) {
	if (auto instanceof Tesla)
		auto.export = console.log(`Export data: ${auto.info()}`)

	if (auto instanceof Audi)
		auto.export = console.log(`Export data: ${auto.info()}`)
}

const tesla = new Tesla()
const audi = new Audi()

tesla.accent(exportVisitor) // Export data: It is a Tesla car!
audi.accent(exportVisitor) //Export data: It is a Audi car!
