export default function ded(array) {
  array[0] = array[0].split(' ')
  const [[tagName, ...classes], ...args] = array
  const element = document.createElement(tagName)
  element.classList.add(...classes)
  args.forEach(value => {

    ;[
      () => element.appendChild(ded(value)),
      () => element.innerHTML += value,
      () => {
        Object.keys(value).forEach(key => {
          if (key === 'listeners')
            Object.keys(value.listeners).forEach(v => element.addEventListener(v, value.listeners[v]))
          else if (key === 'with') value.with(element)
          else element.setAttribute(key, value[key])
        })
      }
    ][getType(value)]()
  })

  return element
}
function getType(thing) {
  try {
    if (Array.isArray(thing)) return 0
    if (typeof thing === 'string') return 1
    if (thing.constructor.name === 'Object') return 2
    else throw true
  } catch (e) {
    throw new Error('Arguments can only be array, string, or object literal')
  }
}
