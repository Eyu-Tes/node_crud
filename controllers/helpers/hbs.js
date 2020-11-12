// handlebars helpers

const moment = require('moment')

module.exports = {
    // date format
    formatDate: (date, format) =>  moment(date).utc().format(format),
    // set the selected item in a radio button group in handlebars template
    setChecked: (value, currentValue) => value === currentValue ? "checked" : ''
}
