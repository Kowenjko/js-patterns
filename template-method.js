//Template method

class Builder {
	build() {
		this.addEngine()
		this.installChassis()
		this.addElectronic()
		this.collectAccessories()
	}
}

class TeslaBuild extends Builder {
	addEngine() {
		console.log('Add Engine')
	}
	installChassis() {
		console.log('Install Tesla chassis')
	}
	addElectronic() {
		console.log('Add special electric')
	}
	collectAccessories() {
		console.log('Collect Accessories')
	}
}

class BmwBuild extends Builder {
	addEngine() {
		console.log('Add Bmw Engine')
	}
	installChassis() {
		console.log('Install Bmw chassis')
	}
	addElectronic() {
		console.log('Add special electric')
	}
	collectAccessories() {
		console.log('Collect Accessories')
	}
}

const teslaBuilder = new TeslaBuild()
const bmwBuilder = new BmwBuild()
teslaBuilder.build()

/* 
Add Engine
Install Tesla chassis
Add special electric
Collect Accessories
*/

bmwBuilder.build()

/* 
Add Bmw Engine
Install Bmw chassis
Add special electric
Collect Accessories
*/
