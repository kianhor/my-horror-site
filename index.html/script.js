const movies = [
  { id: "molchanie-yagnyat", film: "Молчание ягнят", rkp: "8,3", myRating: "93", fear: 2, genre: "ТРИЛЛЕР" },
  { id: "psiho", film: "Психо", rkp: "8,1", myRating: "90", fear: 2, genre: "ТРИЛЛЕР" },
  { id: "chuzhoi", film: "Чужой", rkp: "8,1", myRating: "87", fear: 2, genre: "ФАНТАСТИКА" },
  { id: "nechto", film: "Нечто", rkp: "7,9", myRating: "68", fear: 2, genre: "ФАНТАСТИКА" },
  { id: "siyanie", film: "Сияние", rkp: "7,8", myRating: "96", fear: 4, genre: "ТРИЛЛЕР" },
  { id: "kosmar-vyazov", film: "Кошмар на улице Вязов", rkp: "7,7", myRating: "72", fear: 3, genre: "СЛЕШЕР" },
  { id: "izgonyayushii-dyavola", film: "Изгоняющий дьявола", rkp: "7,7", myRating: "71", fear: 3, genre: "Демонический" },
  { id: "rebenok-rozmary", film: "Ребёнок Розмари", rkp: "7,6", myRating: "84", fear: 1, genre: "ДРАМА" },
  { id: "28-dnei-spustya", film: "28 дней спустя", rkp: "7,4", myRating: "64", fear: 2, genre: "УЖАСЫ ЗОМБИ" },
  { id: "zombi-po-imeni-shon", film: "Зомби по имени Шон", rkp: "7,3", myRating: "65", fear: 1, genre: "Комедия" },
  { id: "ono", film: "Оно", rkp: "7,3", myRating: "82", fear: 3, genre: "Демонический" },
  { id: "zaklyatie", film: "Заклятие", rkp: "7,3", myRating: "74", fear: 3, genre: "Демонический" },
  { id: "noch-zhivykh-mertvecov", film: "Ночь живых мертвецов", rkp: "7,2", myRating: "33", fear: 1, genre: "УЖАСЫ ЗОМБИ" },
  { id: "proch", film: "Прочь", rkp: "7,2", myRating: "79", fear: 2, genre: "ТРИЛЛЕР" },
  { id: "kerri", film: "Кэрри", rkp: "7,2", myRating: "66", fear: 2, genre: "УЖАСЫ РЕЛИГИЯ" },
  { id: "rassvet-mertvecov", film: "Рассвет мертвецов", rkp: "7,1", myRating: "42", fear: 1, genre: "УЖАСЫ ЗОМБИ" },
  { id: "hellouin", film: "Хэллоуин", rkp: "7", myRating: "35", fear: 2, genre: "СЛЕШЕР" },
  { id: "vosstavshii-iz-ada", film: "Восставший из ада", rkp: "7", myRating: "61", fear: 3, genre: "Демонический" },
  { id: "zvonok", film: "Звонок", rkp: "7", myRating: "58", fear: 1, genre: "Демонический" },
  { id: "tihoe-mesto", film: "Тихое место", rkp: "6,8", myRating: "49", fear: 1, genre: "ФАНТАСТИКА" },
  { id: "astral", film: "Астрал", rkp: "6,8", myRating: "70", fear: 4, genre: "Демонический" },
  { id: "sinister", film: "Синистер", rkp: "6,7", myRating: "67", fear: 3, genre: "Демонический" },
  { id: "vedma", film: "Ведьма", rkp: "6,6", myRating: "60", fear: 1, genre: "УЖАСЫ РЕЛИГИЯ" },
  { id: "texasskaya-reznya", film: "Техасская резня бензопилой", rkp: "6,6", myRating: "54", fear: 2, genre: "СЛЕШЕР" },
  { id: "paranormalnoe-yavlenie", film: "Паранормальное явление", rkp: "6,6", myRating: "57", fear: 3, genre: "Демонический" },
  { id: "pyatnitsa-13", film: "Пятница 13-е", rkp: "6,3", myRating: "11", fear: 1, genre: "СЛЕШЕР" },
  { id: "babaduk", film: "Бабадук", rkp: "5,7", myRating: "77", fear: 4, genre: "Демонический" },

  { id: "substancia", film: "Субстанция", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "varvar", film: "Варвар", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "ulybka", film: "Улыбка", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "m3gan", film: "М3ГАН", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "legenda-o-zelenom-rycare", film: "Легенда о Зелёном Рыцаре", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "mayak", film: "Маяк", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "solnczestoyanie", film: "Солнцестояние", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "reinkarnacziya", film: "Реинкарнация", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "annigilyacziya", film: "Аннигиляция", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "ne-dyshi", film: "Не дыши", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "personalnyj-pokupatel", film: "Персональный покупатель", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "poezd-v-pusan", film: "Поезд в Пусан", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "syroe", film: "Сырое", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "bagrovyi-pik", film: "Багровый пик", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "fevral", film: "Февраль", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "zelenaya-komnata", film: "Зелёная комната", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "ono-prihodit-za-toboj", film: "Оно приходит за тобой", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "spokoinoi-nochi-mamochka", film: "Спокойной ночи, мамочка", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "devushka-vozvrashchaetsya-odna-nochyu-domoi", film: "Девушка возвращается одна ночью домой", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "realnye-upyri", film: "Реальные упыри", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "sudnaya-noch", film: "Судная ночь", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "pobud-v-moei-shkure", film: "Побудь в моей шкуре", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "hizhina-v-lesu", film: "Хижина в лесу", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "tebe-konec", film: "Тебе конец!", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "ya-videl-dyavola", film: "Я видел дьявола", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "piranji-3d", film: "Пираньи 3D", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "dom-dyavola", film: "Дом дьявола", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "antihrist", film: "Антихрист", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "zatasi-me-menya-v-ad", film: "Затащи меня в ад", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "vputi-menya", film: "Впусти меня", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "monstro", film: "Монстро", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "muchenicy", film: "Мученицы", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "reportazh", film: "Репортаж", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "priyut", film: "Приют", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "vtorzhenie-dinozavra", film: "Вторжение динозавра", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "hostel", film: "Хостел", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "spusk", film: "Спуск", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "pila", film: "Пила", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "povorot-ne-tuda", film: "Поворот не туда", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "istoriya-dvuh-sester", film: "История двух сестёр", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "drugie", film: "Другие", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "chto-ni-den-to-nepriyatnosti", film: "Что ни день, то неприятности", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "puls", film: "Пульс", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "devyataya-sessiya", film: "Девятая сессия", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "proklyatie", film: "Проклятие", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "punkt-naznacheniya", film: "Пункт назначения", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "amerikanskii-psihopat", film: "Американский психопат", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "vedma-iz-bler", film: "Ведьма из Блэр: Курсовая с того света", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "ekzistenciya", film: "Экзистенция", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "zabavnye-igry", film: "Забавные игры", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "armiya-tmy", film: "Армия тьмы", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "zloveshchie-mertvecy-2", film: "Зловещие мертвецы 2", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "muha", film: "Муха", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "videodrom", film: "Видеодром", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "oderzhimaya", film: "Одержимая", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "zloveshchie-mertvecy", film: "Зловещие мертвецы", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "u-holmov-est-glaza", film: "У холмов есть глаза", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "dom", film: "Дом", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "suspiriya", film: "Суспирия", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "krovavo-krasnyi", film: "Кроваво-красный", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "a-teper-ne-smotri", film: "А теперь не смотри", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "poslednii-dom-sleva", film: "Последний дом слева", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "ptica-s-hrustalnym-opereniem", film: "Птица с хрустальным оперением", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "glaza-bez-lica", film: "Глаза без лица", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "dom-voskovyh-figur", film: "Дом восковых фигур", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "chelovek-volk", film: "Человек-волк", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "nevesta-frankenshteina", film: "Невеста Франкенштейна", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "chernaya-koshka", film: "Чёрная кошка", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "mumiya", film: "Мумия", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "frankenshtein", film: "Франкенштейн", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "drakula", film: "Дракула", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "nosferatu", film: "Носферату, симфония ужаса", rkp: "", myRating: "", fear: 0, genre: "" },
  { id: "kabinet-doktora-kaligari", film: "Кабинет доктора Калигари", rkp: "", myRating: "", fear: 0, genre: "" }
];

const tableBody = document.getElementById("movieTableBody");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const table = document.querySelector("table");

let sortState = { column: null, asc: true };

function stars(n) {
  return n > 0 ? "★".repeat(n) : "";
}

function compareValues(a, b, type) {
  if (type === "number") return Number(a) - Number(b);
  return String(a).localeCompare(String(b), "ru");
}

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(movie => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><a href="movie.html?id=${encodeURIComponent(movie.id)}">${movie.film}</a></td>
      <td>${movie.rkp || "-"}</td>
      <td>${movie.myRating || "-"}</td>
      <td>${stars(movie.fear)}</td>
    `;
    tableBody.appendChild(row);
  });
}

function applyFilters() {
  const search = searchInput.value.trim().toLowerCase();
  const genre = genreFilter.value;

  let filtered = movies.filter(movie => {
    const matchSearch = movie.film.toLowerCase().includes(search);
    const matchGenre = genre === "all" || movie.genre === genre;
    return matchSearch && matchGenre;
  });

  if (sortState.column !== null) {
    const keys = ["film", "rkp", "myRating", "fear"];
    const key = keys[sortState.column];
    const type = sortState.column === 2 || sortState.column === 3 ? "number" : "text";

    filtered.sort((a, b) => {
      const av = a[key] ?? "";
      const bv = b[key] ?? "";
      const result = compareValues(av, bv, type);
      return sortState.asc ? result : -result;
    });
  }

  renderTable(filtered);
}

table.querySelectorAll("thead th").forEach((th, index) => {
  th.style.cursor = "pointer";
  th.addEventListener("click", () => {
    if (sortState.column === index) {
      sortState.asc = !sortState.asc;
    } else {
      sortState.column = index;
      sortState.asc = true;
    }
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);
genreFilter.addEventListener("change", applyFilters);
applyFilters();
const audio = new Audio("https://www.soundjay.com/misc/sounds/creepy-ambient-01.mp3");
audio.loop = true;
audio.volume = 0.25;

const btn = document.getElementById("soundBtn");

if (btn) {
  btn.addEventListener("click", async () => {
    try {
      await audio.play();
      btn.textContent = "Звук включён";
      btn.disabled = true;
    } catch (e) {
      btn.textContent = "Не удалось включить";
    }
  });
}
document.addEventListener('DOMContentLoaded', async () => {
  const res = await 
  fetch('movies-with-posters.json');
  const movies = await res.json();

  const container = document.getElementById('movies');
  if (!container) return;

  const html = movies.map(movie => `
    <div class="movie-card">
      <img src="${movie.poster}" alt="${movie.film}">
      <div class="movie-title">${movie.film}</div>
    </div>
  `).join('');
  container.innerHTML = html;
});