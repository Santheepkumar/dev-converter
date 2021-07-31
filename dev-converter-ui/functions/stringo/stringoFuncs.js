function allStringFunctions() {}

allStringFunctions.prototype.toCapitalize = str => {
  return str.toUpperCase()
}

allStringFunctions.prototype.toSmallCase = str => {
  return str.toLowerCase()
}

allStringFunctions.prototype.toCamelCase = string => {
  function camalize(str) {
    const s =
      str &&
      str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
        .join("")
    return str.slice(0, 1).toLowerCase() + s.slice(1)
  }

  const multy = string.split(" ")
  if (!multy.length) {
    return camalize(string)
  }

  const result = multy.map(x => camalize(x)).join(" ")
  return result
}

allStringFunctions.prototype.toTitleCase = string => {
  function Titleize(str) {
    return (
      str &&
      str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join(" ")
    )
  }

  const multy = string.split(" ")
  if (!multy.length) {
    return Titleize(string)
  }
  const result = multy.map(x => Titleize(x)).join(" ")
  return result
}

allStringFunctions.prototype.toSnakeCase = string => {
  function Snakeize(str) {
    return (
      str &&
      str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join("_")
    )
  }
  const multy = string.split(" ")
  if (!multy.length) {
    return Snakeize(string)
  }
  const result = multy.map(x => Snakeize(x)).join(" ")
  return result
}

allStringFunctions.prototype.toKebabCase = string => {
  function kebabize(str) {
    return (
      str &&
      str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join("-")
    )
  }
  const multy = string.split(" ")
  if (!multy.length) {
    return kebabize(string)
  }
  const result = multy.map(x => kebabize(x)).join(" ")
  return result
}

allStringFunctions.prototype.toSwapCase = string => {
  function swap(str) {
    return [...str]
      .map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
      .join("")
  }
  const multy = string.split(" ")
  if (!multy.length) {
    return swap(string)
  }
  const result = multy.map(x => swap(x)).join(" ")
  return result
}
const ASF = new allStringFunctions()

export default ASF
