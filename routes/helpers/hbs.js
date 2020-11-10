// handlebars helpers

module.exports = {
    // set the selected item in a radio button group in handlebars template
    setChecked: (value, currentValue) => value === currentValue ? "checked" : ''
}
