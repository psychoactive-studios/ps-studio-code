export default orderNews = () => {
  //news order number in the footer
  var h1Number = document.querySelectorAll('.footer-news')
  h1Number.forEach((num, i) => {
    if (num.innerHTML.length <= 3) {
      num.innerHTML = String('0' + Number(i + 1) + '.')
    } else {
      num.innerHTML = String(Number(i + 1) + '.')
    }
  })
}
