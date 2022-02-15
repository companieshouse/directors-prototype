var titles = [
  'Mr',
  'Mrs',
  'Miss',
  'Ms',
  'Mx',
  'Misc',
  'Ind'
]
var element = document.querySelector('#title')
var id = 'autocomplete-default'
accessibleAutocomplete({element: element, id: id, source: titles, name: "titleAppoint"})
