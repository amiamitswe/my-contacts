const limitTitle = (fName, lName = '', value = 20) => {
  const result = []
  const text = fName + ' ' + lName
  if (text.length > value) {
    text.split('').reduce((acc, cur) => {
      if (acc + cur.length <= value) {
        result.push(cur)
      }
      return acc += cur.length
    }, 0)

    return (result.join('') + '...')

  }
  return (text + '...')
}

export default limitTitle