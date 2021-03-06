const randomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min
const capitalize = name => name[0].toUpperCase() + name.slice(1)

export const generateName = (prefixes, suffixes, numSuffixes = 3) => {
  const suffixLength = randomNumber(numSuffixes,1)
  let name = prefixes[randomNumber(prefixes.length)]
  for (let i = 0; i < suffixLength; i++) {
    name += suffixes[randomNumber(suffixes.length)]
  }
  return capitalize(name)
}

export const chooseRandomName = (names) => capitalize(names[randomNumber(names.length)])

export const generateFirstAndLastName = (prefixGenerator, suffixGenerator) => {
  return capitalize(prefixGenerator()) + " " + capitalize(suffixGenerator())
}
