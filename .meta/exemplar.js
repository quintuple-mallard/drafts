function randomShipRegistryNumber() {
  return `NCC-${Math.floor(1000 + Math.random()*8000)}`
}
function randomStardate() {
  return 41000 + Math.random() * 1000
}
function randomPlanetClass() {
  const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  return [Math.floor(Math.random() * 10)]
}
