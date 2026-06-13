const movies = [
  { film: "Молчание ягнят", rkp: "8,3", myr: "93", genre: "ТРИЛЛЕР", year: 1990, plot: "", fear: 2, imdb: "" },
  { film: "Психо", rkp: "8,1", myr: "90", genre: "ТРИЛЛЕР", year: 1960, plot: "", fear: 2, imdb: "" },
  { film: "Чужой", rkp: "8,1", myr: "87", genre: "ФАНТАСТИКА", year: 1979, plot: "", fear: 2, imdb: "" },
  { film: "Нечто", rkp: "7,9", myr: "68", genre: "ФАНТАСТИКА", year: 1982, plot: "", fear: 2, imdb: "" },
  { film: "Сияние", rkp: "7,8", myr: "96", genre: "ТРИЛЛЕР", year: 1980, plot: "", fear: 4, imdb: "" },
  { film: "Кошмар на улице Вязов", rkp: "7,7", myr: "72", genre: "СЛЕШЕР", year: 1984, plot: "", fear: 3, imdb: "" },
  { film: "Изгоняющий дьявола", rkp: "7,7", myr: "71", genre: "Демонический", year: 1973, plot: "", fear: 3, imdb: "" },
  { film: "Ребёнок Розмари", rkp: "7,6", myr: "84", genre: "ДРАМА", year: 1968, plot: "", fear: 1, imdb: "" },
  { film: "28 дней спустя", rkp: "7,4", myr: "64", genre: "УЖАСЫ ЗОМБИ", year: 2002, plot: "", fear: 2, imdb: "" },
  { film: "Зомби по имени Шон", rkp: "7,3", myr: "65", genre: "Комедия", year: 2004, plot: "", fear: 1, imdb: "" },
  { film: "Оно", rkp: "7,3", myr: "82", genre: "Демонический", year: 2017, plot: "", fear: 3, imdb: "" },
  { film: "Заклятие", rkp: "7,3", myr: "74", genre: "Демонический", year: 2013, plot: "", fear: 3, imdb: "" },
  { film: "Ночь живых мертвецов", rkp: "7,2", myr: "33", genre: "УЖАСЫ ЗОМБИ", year: 1968, plot: "", fear: 1, imdb: "" },
  { film: "Прочь", rkp: "7,2", myr: "79", genre: "ТРИЛЛЕР", year: 2017, plot: "", fear: 2, imdb: "" },
  { film: "Кэрри", rkp: "7,2", myr: "66", genre: "УЖАСЫ РЕЛИГИЯ", year: 1976, plot: "", fear: 2, imdb: "" },
  { film: "Рассвет мертвецов", rkp: "7,1", myr: "42", genre: "УЖАСЫ ЗОМБИ", year: 1978, plot: "", fear: 1, imdb: "" },
  { film: "Хэллоуин", rkp: "7", myr: "35", genre: "СЛЕШЕР", year: 1978, plot: "", fear: 2, imdb: "" },
  { film: "Восставший из ада", rkp: "7", myr: "61", genre: "Демонический", year: 1987, plot: "", fear: 3, imdb: "" },
  { film: "Звонок", rkp: "7", myr: "", genre: "демонический", year: 1998, plot: "", fear: 0, imdb: "" },
  { film: "Тихое место", rkp: "6,8", myr: "49", genre: "ФАНТАСТИКА", year: 2018, plot: "", fear: 1, imdb: "" },
  { film: "Астрал", rkp: "6,8", myr: "70", genre: "Демонический", year: 2010, plot: "", fear: 4, imdb: "" },
  { film: "Синистер", rkp: "6,7", myr: "67", genre: "Демонический", year: 2012, plot: "", fear: 3, imdb: "" },
  { film: "Ведьма", rkp: "6,6", myr: "60", genre: "УЖАСЫ РЕЛИГИЯ", year: 2015, plot: "", fear: 1, imdb: "" },
  { film: "Техасская резня бензопилой", rkp: "6,6", myr: "54", genre: "СЛЕШЕР", year: 1974, plot: "", fear: 2, imdb: "" },
  { film: "Паранормальное явление", rkp: "6,6", myr: "57", genre: "Демонический", year: 2007, plot: "", fear: 3, imdb: "" },
  { film: "Пятница 13-е", rkp: "6,3", myr: "11", genre: "СЛЕШЕР", year: 1980, plot: "", fear: 1, imdb: "" },
  { film: "Бабадук", rkp: "5,7", myr: "77", genre: "Демонический", year: 2014, plot: "", fear: 4, imdb: "" },
  { film: "Субстанция", rkp: "", myr: "", genre: "", year: 2024, plot: "", fear: 0, imdb: "" },
  { film: "Варвар", rkp: "", myr: "", genre: "", year: 2022, plot: "", fear: 0, imdb: "" },
  { film: "Улыбка", rkp: "", myr: "", genre: "", year: 2022, plot: "", fear: 0, imdb: "" },
  { film: "М3ГАН", rkp: "", myr: "", genre: "", year: 2022, plot: "", fear: 0, imdb: "" },
  { film: "Легенда о Зелёном Рыцаре", rkp: "", myr: "", genre: "", year: 2021, plot: "", fear: 0, imdb: "" },
  { film: "Маяк", rkp: "", myr: "", genre: "", year: 2019, plot: "", fear: 0, imdb: "" },
  { film: "Солнцестояние", rkp: "", myr: "", genre: "", year: 2019, plot: "", fear: 0, imdb: "" },
  { film: "Реинкарнация", rkp: "", myr: "", genre: "", year: 2018, plot: "", fear: 0, imdb: "" },
  { film: "Аннигиляция", rkp: "", myr: "", genre: "", year: 2018, plot: "", fear: 0, imdb: "" },
  { film: "Не дыши", rkp: "", myr: "", genre: "", year: 2016, plot: "", fear: 0, imdb: "" },
  { film: "Персональный покупатель", rkp: "", myr: "", genre: "", year: 2016, plot: "", fear: 0, imdb: "" },
  { film: "Поезд в Пусан", rkp: "", myr: "", genre: "", year: 2016, plot: "", fear: 0, imdb: "" },
  { film: "Сырое", rkp: "", myr: "", genre: "", year: 2016, plot: "", fear: 0, imdb: "" },
  { film: "Багровый пик", rkp: "", myr: "", genre: "", year: 2015, plot: "", fear: 0, imdb: "" },
  { film: "Февраль", rkp: "", myr: "", genre: "", year: 2015, plot: "", fear: 0, imdb: "" },
  { film: "Зелёная комната", rkp: "", myr: "", genre: "", year: 2015, plot: "", fear: 0, imdb: "" },
  { film: "Оно приходит за тобой", rkp: "", myr: "", genre: "", year: 2014, plot: "", fear: 0, imdb: "" },
  { film: "Спокойной ночи, мамочка", rkp: "", myr: "", genre: "", year: 2014, plot: "", fear: 0, imdb: "" },
  { film: "Девушка возвращается одна ночью домой", rkp: "", myr: "", genre: "", year: 2014, plot: "", fear: 0, imdb: "" },
  { film: "Реальные упыри", rkp: "", myr: "", genre: "", year: 2014, plot: "", fear: 0, imdb: "" },
  { film: "Судная ночь", rkp: "", myr: "", genre: "", year: 2013, plot: "", fear: 0, imdb: "" },
  { film: "Побудь в моей шкуре", rkp: "", myr: "", genre: "", year: 2013, plot: "", fear: 0, imdb: "" },
  { film: "Хижина в лесу", rkp: "", myr: "", genre: "", year: 2011, plot: "", fear: 0, imdb: "" },
  { film: "Тебе конец!", rkp: "", myr: "", genre: "", year: 2011, plot: "", fear: 0, imdb: "" },
  { film: "Я видел дьявола", rkp: "", myr: "", genre: "", year: 2010, plot: "", fear: 0, imdb: "" },
  { film: "Пираньи 3D", rkp: "", myr: "", genre: "", year: 2010, plot: "", fear: 0, imdb: "" },
  { film: "Дом дьявола", rkp: "", myr: "", genre: "", year: 2009, plot: "", fear: 0, imdb: "" },
  { film: "Антихрист", rkp: "", myr: "", genre: "", year: 2009, plot: "", fear: 0, imdb: "" },
  { film: "Затащи меня в ад", rkp: "", myr: "", genre: "", year: 2009, plot: "", fear: 0, imdb: "" },
  { film: "Впусти меня", rkp: "", myr: "", genre: "", year: 2008, plot: "", fear: 0, imdb: "" },
  { film: "Монстро", rkp: "", myr: "", genre: "", year: 2008, plot: "", fear: 0, imdb: "" },
  { film: "Мученицы", rkp: "", myr: "", genre: "", year: 2008, plot: "", fear: 0, imdb: "" },
  { film: "Репортаж", rkp: "", myr: "", genre: "", year: 2007, plot: "", fear: 0, imdb: "" },
  { film: "Приют", rkp: "", myr: "", genre: "", year: 2007, plot: "", fear: 0, imdb: "" },
  { film: "Вторжение динозавра", rkp: "", myr: "", genre: "", year: 2006, plot: "", fear: 0, imdb: "" },
  { film: "Хостел", rkp: "", myr: "", genre: "", year: 2005, plot: "", fear: 0, imdb: "" },
  { film: "Спуск", rkp: "", myr: "", genre: "", year: 2005, plot: "", fear: 0, imdb: "" },
  { film: "Пила", rkp: "", myr: "", genre: "", year: 2004, plot: "", fear: 0, imdb: "" },
  { film: "Поворот не туда", rkp: "", myr: "", genre: "", year: 2003, plot: "", fear: 0, imdb: "" },
  { film: "История двух сестёр", rkp: "", myr: "", genre: "", year: 2003, plot: "", fear: 0, imdb: "" },
  { film: "Другие", rkp: "", myr: "", genre: "", year: 2001, plot: "", fear: 0, imdb: "" },
  { film: "Что ни день, то неприятности", rkp: "", myr: "", genre: "", year: 2001, plot: "", fear: 0, imdb: "" },
  { film: "Пульс", rkp: "", myr: "", genre: "", year: 2001, plot: "", fear: 0, imdb: "" },
  { film: "Девятая сессия", rkp: "", myr: "", genre: "", year: 2001, plot: "", fear: 0, imdb: "" },
  { film: "Проклятие", rkp: "", myr: "", genre: "", year: 2000, plot: "", fear: 0, imdb: "" },
  { film: "Пункт назначения", rkp: "", myr: "", genre: "", year: 2000, plot: "", fear: 0, imdb: "" },
  { film: "Американский психопат", rkp: "", myr: "", genre: "", year: 2000, plot: "", fear: 0, imdb: "" },
  { film: "Ведьма из Блэр: Курсовая с того света", rkp: "", myr: "", genre: "", year: 1999, plot: "", fear: 0, imdb: "" },
  { film: "Экзистенция", rkp: "", myr: "", genre: "", year: 1999, plot: "", fear: 0, imdb: "" },
  { film: "Забавные игры", rkp: "", myr: "", genre: "", year: 1997, plot: "", fear: 0, imdb: "" },
  { film: "Армия тьмы", rkp: "", myr: "", genre: "", year: 1992, plot: "", fear: 0, imdb: "" },
  { film: "Зловещие мертвецы 2", rkp: "", myr: "", genre: "", year: 1987, plot: "", fear: 0, imdb: "" },
  { film: "Муха", rkp: "", myr: "", genre: "", year: 1986, plot: "", fear: 0, imdb: "" },
  { film: "Видеодром", rkp: "", myr: "", genre: "", year: 1983, plot: "", fear: 0, imdb: "" },
  { film: "Одержимая", rkp: "", myr: "", genre: "", year: 1981, plot: "", fear: 0, imdb: "" },
  { film: "Зловещие мертвецы", rkp: "", myr: "", genre: "", year: 1981, plot: "", fear: 0, imdb: "" },
  { film: "У холмов есть глаза", rkp: "", myr: "", genre: "", year: 1977, plot: "", fear: 0, imdb: "" },
  { film: "Дом", rkp: "", myr: "", genre: "", year: 1977, plot: "", fear: 0, imdb: "" },
  { film: "Суспирия", rkp: "", myr: "", genre: "", year: 1977, plot: "", fear: 0, imdb: "" },
  { film: "Кроваво-красный", rkp: "", myr: "", genre: "", year: 1975, plot: "", fear: 0, imdb: "" },
  { film: "А теперь не смотри", rkp: "", myr: "", genre: "", year: 1973, plot: "", fear: 0, imdb: "" },
  { film: "Последний дом слева", rkp: "", myr: "", genre: "", year: 1972, plot: "", fear: 0, imdb: "" },
  { film: "Птица с хрустальным оперением", rkp: "", myr: "", genre: "", year: 1970, plot: "", fear: 0, imdb: "" },
  { film: "Глаза без лица", rkp: "", myr: "", genre: "", year: 1960, plot: "", fear: 0, imdb: "" },
  { film: "Дом восковых фигур", rkp: "", myr: "", genre: "", year: 1953, plot: "", fear: 0, imdb: "" },
  { film: "Человек-волк", rkp: "", myr: "", genre: "", year: 1941, plot: "", fear: 0, imdb: "" },
  { film: "Невеста Франкенштейна", rkp: "", myr: "", genre: "", year: 1935, plot: "", fear: 0, imdb: "" },
  { film: "Чёрная кошка", rkp: "", myr: "", genre: "", year: 1934, plot: "", fear: 0, imdb: "" },
  { film: "Мумия", rkp: "", myr: "", genre: "", year: 1932, plot: "", fear: 0, imdb: "" },
  { film: "Франкенштейн", rkp: "", myr: "", genre: "", year: 1931, plot: "", fear: 0, imdb: "" },
  { film: "Дракула", rkp: "", myr: "", genre: "", year: 1931, plot: "", fear: 0, imdb: "" },
  { film: "Носферату, симфония ужаса", rkp: "", myr: "", genre: "", year: 1922, plot: "", fear: 0, imdb: "" },
  { film: "Кабинет доктора Калигари", rkp: "", myr: "", genre: "", year: 1920, plot: "", fear: 0, imdb: "" }
];

const tableBody = document.getElementById("movieTableBody");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

function stars(n) {
  return n > 0 ? "★".repeat(n) : "";
}

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(movie => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="movie-name">${movie.film}</td>
      <td>${movie.rkp || "-"}</td>
      <td>${movie.myr || "-"}</td>
      <td><span class="badge">${movie.genre || "-"}</span></td>
      <td>${movie.year || "-"}</td>
      <td>${movie.plot || "-"}</td>
      <td class="stars">${stars(movie.fear)}</td>
      <td>${movie.imdb || "-"}</td>
    `;
    tableBody.appendChild(row);
  });
}

function applyFilters() {
  const search = searchInput.value.trim().toLowerCase();
  const genre = genreFilter.value;

  const filtered = movies.filter(movie => {
    const matchSearch = movie.film.toLowerCase().includes(search);
    const matchGenre = genre === "all" || movie.genre === genre;
    return matchSearch && matchGenre;
  });

  renderTable(filtered);
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

searchInput.addEventListener("input", applyFilters);
genreFilter.addEventListener("change", applyFilters);

renderTable(movies);