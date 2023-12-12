// 헤더영역의 검색창
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){ //.search를 click 하면 실행되는 핸들러(함수)
  searchInputEl.focus(); //input요소에 강제적으로 포커스를 적용하는 함수
})

searchInputEl.addEventListener('focus', function(){ //input 요소에 focus 되면 실행되는 핸들러(함수)
  searchEl.classList.add('focused'); // .search 요소에 .focused 라는 클래스를 추가하고
  searchInputEl.setAttribute('placeholder','통합검색'); // input 속성인 placeholder='통합검색'으로변경
})

searchInputEl.addEventListener('blur', function(){ // input 요소에 focus가 해제되면(↔︎blur) 실행되는 핸들러(함수)
  searchEl.classList.remove('focused'); // .search 요소에 .focused 라는 클래스를 제거
  searchInputEl.setAttribute('placeholder',''); // input 요소의 placeholder='' 공백으로 변경
})


// Footer영역 올해연도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //Date(현재날짜를 뽑아내는 객체)라는 생성자 함수 생성 getFullYear: 현재 연도를 숫자데이터로 반환함