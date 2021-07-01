import Ajax from './../unit/ajax'

export default {
  login () {
    return Ajax.get('http://www.liulongbin.top:3005/api/getprodlist', {})
  }

}
