# 01. JavaScript Drum Kit

## 분석
* 키보드의 A, S, D, F, G, H, J, K, L 키를 누르면 해당하는 버튼에 css 애니메이션을 동작시키고 해당 사운드 파일이 재생되어야 한다.
* 기본 HTML 파일의 각 data-key에 keyCode는 'keydown' 이벤트의 keyCode와 일치한다.
* 기본 CSS 파일에 `.playing` 이라는 클래스에 스타일과 애니메이션이 정의되어 있다.


## 설계
1. 입력된 keyCode와 같은 숫자를 가지고 있는 버튼에 'playing' 클래스네임을 추가하고 애니메이션 시간이 끝날 때 다시 삭제한다.
2. 입력된 keyCode와 같은 data-key 속성을 가지고 있는 audio를 play 한다.

## 개선방안
* 절차형이 아닌 함수형 프로그래밍으로 리팩토링 => update complete
* ES6의 class 문법을 사용해 리팩토링 => update complete
