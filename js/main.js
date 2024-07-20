function incrementString (str) {
    let lastArr = []
    let arr = str.split('')
    let i = arr.length - 1
    while(i >= 0 && !isNaN(Number(arr[i]))){
      arr[i] = +(arr[i])
      i--
    }
    if (isNaN(arr[arr.length - 1])){
      let answer = arr.concat('1')
      return answer.join('')
    }
    let numsAtEnd = arr.splice(i+1)
    let j = numsAtEnd.length
    let plusOne = (+numsAtEnd.join('') + 1).toString().split('')
    let pads = j - plusOne.length
    if (pads > 0){
      let newArr = []
        newArr = arr.concat('0'.repeat(pads))
      lastArr = newArr.concat(plusOne)
    }else{
      lastArr = arr.concat(plusOne)
    }
    return lastArr.join('')
  }