const casual = require('casual');

module.exports = () => {
	casual.define('person', function() {
					return {
									name: casual.first_name,
									surname: casual.last_name,
									address: casual.street,
									phone: casual.phone,
									email: casual.email,
									postalCode: casual.zip,
									city: casual.city,
									number: casual.building_number,
									id: casual.uuid,
					}
	})

	const data = {
					person: {},
	}

	data.person = { ...casual.person };
	return data
}