//Mediator

class OfficialDealer {
	constructor() {
		this.customers = []
	}

	orderAuto(customer, auto, info) {
		const name = customer.getName()

		console.log(`Order name ${name}. Order auto is ${auto}`)
		console.log(`Additional info: ${info}`)
		this.addCustomerList(name)
	}

	addCustomerList(name) {
		this.customers.push(name)
	}

	getCustomerList() {
		return this.customers
	}
}

class Customer {
	constructor(name, dealerMediator) {
		this.name = name
		this.dealerMediator = dealerMediator
	}

	getName() {
		return this.name
	}

	makeOrder(auto, info) {
		this.dealerMediator.orderAuto(this, auto, info)
	}
}

const mediator = new OfficialDealer()

const yauhen = new Customer('Yauhen', mediator)

const valera = new Customer('Valera', mediator)

yauhen.makeOrder('Tesla', 'With autopilot!')
//Order name Yauhen. Order auto is Tesla
//Additional info: With autopilot!

valera.makeOrder('Tesla', 'With parktronik!')
// Order name Valera. Order auto is Tesla
// Additional info: With parktronik!

console.log(mediator.getCustomerList())
// [    "Yauhen",    "Valera"]
