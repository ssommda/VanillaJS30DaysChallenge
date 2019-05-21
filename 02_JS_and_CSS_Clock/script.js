const setDegreeStyle = (type, degree) => {
  const targetHand = document.querySelector(`.${type}-hand`);
  targetHand.style.transform = `rotate(${degree}deg)`;
  targetHand.style.transformOrigin = 'right center';
};

(function getTimeNow() {
  // 현재 시간
  const current = new Date();
  const hour = current.getHours();
  const min = current.getMinutes();
  const second = current.getSeconds();

  // 각도 계산
  const initDegree = 90;
  const secondDegree = second/60 * 360 + initDegree;
  const minDegree = (min/60 * 360) + (second/60 * 360/60) + initDegree;
  const hourDegree = (hour/12 * 360) + (min/60 * 360/12) + initDegree;

  const timeDegreeList = [
    {type: 'hour', value: hourDegree},
    {type: 'min', value: minDegree},
    {type: 'second', value: secondDegree},
  ];

  // 스타일 적용
  timeDegreeList.map( item => {
    setDegreeStyle(item.type, item.value);
  });

  setTimeout(getTimeNow,1000);
})();

