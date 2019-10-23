const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const isNumber = val => {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  if (regPos.test(val)) {
    return true
  }
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regNeg.test(val)) {
    return true
  }
  return false
}

const isMobile = val => {
  var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
  return reg.test(val)
}

module.exports = {
  formatTime: formatTime,
  isNumber: isNumber,
  isMobile: isMobile
}