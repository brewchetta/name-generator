const randomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min
const capitalize = name => name[0].toUpperCase() + name.slice(1)

export const generateName = (prefixes, suffixes) => {
  const suffixLength = randomNumber(3,1)
  let name = prefixes[randomNumber(prefixes.length)]
  for (let i = 0; i < suffixLength; i++) {
    name += suffixes[randomNumber(suffixes.length)]
  }
  return capitalize(name)
}
