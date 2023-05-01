
let navAll = document.querySelector('.navigation');

let navListList = navAll.querySelector('.navigation__list')
let navToggle = navAll.querySelector('.navigation__toggle');

navAll.classList.remove('navigation--no-js');

navToggle.onclick = function() {
  navToggle.classList.toggle('navigation__toggle--is-open');
  navListList.classList.toggle('navigation__list--visible');
}
