// ==드롭다운메뉴(장바구니)==
const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

basketStarterEl.addEventListener('click', function(event){

  event.stopPropagation() //장바구니를 클릭했을때 그 클릭이벤트가 윈도우까지 전파되는것을 막음
  //basketEl.classList.contains('show') : basketEl에 show라는 클래스가 있는지 없는지 판단해줘 ➜ false & true 반환
  if(basketEl.classList.contains('show')) {
    // show클래스 있음 : hide
    hideBasket()
  }else{
    // show클래스 없음 : show
    showBasket()
  }
})
//장바구니 드롭다운메뉴영역을 클릭했을때 이벤트 전파를 막음
basketEl.addEventListener('click', function(event){
  event.stopPropagation()
})
//윈도우를 클릭하면 show클래스 제거
window.addEventListener('click', function(){
  hideBasket()
})

// 추상적인 코드를 함수에 이름을 붙여서 이해하기 쉽게 만듦
function showBasket() {
  basketEl.classList.add('show')
}
function hideBasket() {
  basketEl.classList.remove('show')
}

// ==검색==
const headerEl = document.querySelector('header')
//li태그를 순차적으로 나오는 애니메니션을 만들기 위해 찾음
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')] //전개연산자를 통해 해체된 내용을 대괄호로 묶어줌(얕은복사)
//[]:배열데이터 ...:전개연산자(해체)
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')] //li들을 배열로 얕은복사를 함

//검색을 클릭했을때 검색바 보임
searchStarterEl.addEventListener('click', showSearch)
//닫기 버튼 클릭했을때 검색바 닫음
searchCloserEl.addEventListener('click', hideSearch)
//검은 그림자영역을 클릭했을때 검색바 닫음
searchShadowEl.addEventListener('click', hideSearch)


function showSearch() { // .searching 있는 경우 검색바 보임 + 메뉴목록(li) 사라짐(오른쪽부터 사라짐)
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed') //documentElement
  // document.body ➜ body태그 찾을때 , document.head ➜ head태그 찾을 때

  // reverse():반대로, forEach(요소,인덱스): 배열의 각각의 요소
  headerMenuEls.reverse().forEach(function(el, index) { //el(내가지은이름)=각각의 li를 의미함
    el.style.transitionDelay = index * 0.4 / headerMenuEls.length + 's'
    // index*0.4/12(headerMenuEls.length)초 뒤 애니메니션이 시작됨
  })
  // console.log(headerMenuEls.reverse())
  searchDelayEls.forEach(function(el, index) {
    el.style.transitionDelay = index * 0.4 / searchDelayEls.length + 's'
  })

  //검색바로 자동포커스
  setTimeout(function() {
    searchInputEl.focus()
  }, 600) //600 = 0.6s (main.css 상에서 지정한 값 transition: 0.6s;)
}

function hideSearch() {  // .searching 없는 경우 검색바 숨김 +메뉴목록(li) 나타남(왼쪽부터 나타남)
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed')

  headerMenuEls.reverse().forEach(function(liEl, index) { //순서가 뒤집어진상태에서 다시 뒤집으니까
    liEl.style.transitionDelay = index * 0.4 / headerMenuEls.length + 's'
  })
  searchDelayEls.reverse().forEach(function(el, index) {
    el.style.transitionDelay = index * 0.4 / searchDelayEls.length + 's'
  })
  //뒤집어진 상태로 애니메이션이 종료되면 다시 뒤집어서 원상태로 만듦
  searchDelayEls.reverse()

 //검색바 초기화
  searchInputEl.value ='' 
}