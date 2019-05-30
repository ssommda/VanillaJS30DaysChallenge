
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));


class ShowList {
  constructor(array, value) {
    this.cityList = array;
    this.inputText = value;
  }

  static formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, ',');
  }

  regexCheck() {
    return new RegExp(this.inputText, 'gi');
  }

  filterMatchList = () => {
    const matchList = this.cityList.filter((item) => {
      return item.city.match(this.regexCheck()) || item.state.match(this.regexCheck())
    });

    return matchList
  }

  returnMatchList() {
    const matchList = this.filterMatchList();
    const newList = matchList.map((item) => {
      const population = ShowList.formatNumber(item.population);
      const matchCity = item.city.replace(this.regexCheck(), `<span class="hl">${this.inputText}</span>`);
      const matchState = item.state.replace(this.regexCheck(), `<span class="hl">${this.inputText}</span>`);

      return `
      <li>
        <span>${matchCity}, ${matchState}</span>
        <span>${population}</span>
      </li>
    `;
    }).join('');
    return newList
  }

  render() {
    const list = document.querySelector('.suggestions');
    list.innerHTML = this.returnMatchList();
  }
}

const handleInputText = (e) => {
  const inputText = e.target.value;
  const showList = new ShowList(cities, inputText);
  showList.render();
};

const input = document.querySelector('.search');
input.addEventListener('input', handleInputText);
