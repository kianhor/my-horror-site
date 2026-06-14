const movies = [
  { id:"m1", film:"Чужой", genre:"Фантастический хоррор", kinopoisk:8.1, myRating:10, horrorRate:5, quote:"Космос здесь не спасает — он только усиливает страх.", poster:"https://image.tmdb.org/t/p/w500/4s6YwJhzuHVMbI9Bz5q8pN8iZxG.jpg" },
  { id:"m2", film:"Сияние", genre:"Психологический хоррор", kinopoisk:8.4, myRating:10, horrorRate:5, quote:"Иногда самый страшный враг — это тишина и стены вокруг.", poster:"https://image.tmdb.org/t/p/w500/gbwQrQae7j3S9k9YQkKfN2mZ0Yw.jpg" },
  { id:"m3", film:"Изгоняющий дьявола", genre:"Сверхъестественный хоррор", kinopoisk:7.7, myRating:10, horrorRate:5, quote:"Фильм, после которого воздух в комнате кажется тяжелее.", poster:"https://image.tmdb.org/t/p/w500/yzErKXJ1hM3nqkQWzJm1W3n5xgL.jpg" },
  { id:"m4", film:"Психо", genre:"Психологический хоррор", kinopoisk:8.1, myRating:10, horrorRate:5, quote:"Классика, где страх вырастает из детали.", poster:"https://image.tmdb.org/t/p/w500/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg" },
  { id:"m5", film:"Нечто", genre:"Фантастический хоррор", kinopoisk:8.2, myRating:10, horrorRate:5, quote:"Паранойя здесь работает лучше любого монстра.", poster:"https://image.tmdb.org/t/p/w500/tz5T0qX75EfTzP8J9hS4dJ0N3fN.jpg" },
  { id:"m6", film:"Чужие", genre:"Фантастический хоррор", kinopoisk:8.1, myRating:10, horrorRate:5, quote:"Больше шума, больше огня, но страх никуда не уходит.", poster:"https://image.tmdb.org/t/p/w500/rhIRbceoE9lR4veEXuwCC2wARtG.jpg" },
  { id:"m7", film:"Пила", genre:"Психологический хоррор", kinopoisk:7.3, myRating:9, horrorRate:4, quote:"Игра начинается не с крика, а с выбора.", poster:"https://image.tmdb.org/t/p/w500/9wV5t8qv3Hf4qvJj4qT2WQeGvHf.jpg" },
  { id:"m8", film:"Звонок", genre:"Сверхъестественный хоррор", kinopoisk:7.0, myRating:9, horrorRate:4, quote:"Один звонок — и неделя становится длиннее.", poster:"https://image.tmdb.org/t/p/w500/3j6I5xM9cQJf7W7mVvFq2Yd3k9M.jpg" },
  { id:"m9", film:"Крик", genre:"Слэшер", kinopoisk:7.0, myRating:9, horrorRate:4, quote:"Ужас, который знает правила жанра и смеётся над ними.", poster:"https://image.tmdb.org/t/p/w500/1VqoV8v7L8F9vYh1Qn0qg1Q7jQv.jpg" },
  { id:"m10", film:"Зловещие мертвецы", genre:"Сверхъестественный хоррор", kinopoisk:7.5, myRating:10, horrorRate:5, quote:"Грязный, шумный и очень живой кошмар.", poster:"https://image.tmdb.org/t/p/w500/4h4qVYf0Hq3bF1H8l3Z8j4K9aQ2.jpg" },
  { id:"m11", film:"Хэллоуин", genre:"Слэшер", kinopoisk:7.0, myRating:10, horrorRate:5, quote:"Лицо без эмоций, которое стало символом страха.", poster:"https://image.tmdb.org/t/p/w500/vt6Es0zq29y4G0qD0fY7wR2c1Tq.jpg" },
  { id:"m12", film:"Техасская резня бензопилой", genre:"Слэшер", kinopoisk:6.6, myRating:10, horrorRate:5, quote:"Фильм, который будто пахнет жарой и металлом.", poster:"https://image.tmdb.org/t/p/w500/9V3QH4QjR3cQ6f0Y3f3q4K1pQ2g.jpg" },
  { id:"m13", film:"Кошмар на улице Вязов", genre:"Сверхъестественный хоррор", kinopoisk:7.3, myRating:10, horrorRate:5, quote:"Сон здесь — не отдых, а ловушка.", poster:"https://image.tmdb.org/t/p/w500/9iQWsXWq5N4G7Y1e3J6zJQ0QK7.jpg" },
  { id:"m14", film:"Пятница 13-е", genre:"Слэшер", kinopoisk:6.4, myRating:9, horrorRate:4, quote:"Легенда лагерного страха, которая не стареет.", poster:"https://image.tmdb.org/t/p/w500/5KZc1z3Q1q3ZtP9m0J4xY3L1n7.jpg" },
  { id:"m15", film:"Кэрри", genre:"Психологический хоррор", kinopoisk:7.4, myRating:10, horrorRate:5, quote:"Когда унижение становится оружием, становится по-настоящему жутко.", poster:"https://image.tmdb.org/t/p/w500/1q2W3e4r5t6y7u8i9o0pQWERTY.jpg" }
];

const glossary = [
  { title:"Психологический хоррор", desc:"Пугает через тревогу, давление, безумие и страх внутри героя." },
  { title:"Слэшер", desc:"Фильм, где убийца преследует жертв по одной." },
  { title:"Сверхъестественный хоррор", desc:"Истории о демонах, призраках, проклятиях и потусторонних силах." },
  { title:"Зомби-хоррор", desc:"Фильмы про заражение, мертвецов и выживание после катастрофы." },
  { title:"Фантастический хоррор", desc:"Ужасы с инопланетянами, космосом и чужими мирами." }
];

function stars(n) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

let sortState = { col: 2, asc: false };

function renderTable() {
  const body = document.getElementById("movieTableBody");
  if (!body) return;

  const search = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  const genre = document.getElementById("genreFilter")?.value || "";
  const cols = ["film", "genre", "kinopoisk", "myRating", "horrorRate"];
  const col = cols[sortState.col];

  let rows = movies.filter(m => {
    const byName = !search || m.film.toLowerCase().includes(search);
    const byGenre = !genre || m.genre === genre;
    return byName && byGenre;
  });

  rows.sort((a, b) => {
    const av = a[col];
    const bv = b[col];
    if (typeof av === "string") return sortState.asc ? av.localeCompare(bv, "ru") : bv.localeCompare(av, "ru");
    return sortState.asc ? av - bv : bv - av;
  });

  body.innerHTML = rows.map(m => `
    <tr class="movie-row" data-id="${m.id}">
      <td>${m.film}</td>
      <td>${m.genre}</td>
      <td>${m.kinopoisk.toFixed(1)}</td>
      <td>${m.myRating}</td>
      <td class="star">${stars(m.horrorRate)}</td>
    </tr>
  `).join("");
}

function randomMovie() {
  return movies[Math.floor(Math.random() * movies.length)];
}

function pickWeekMovie() {
  return movies.slice().sort((a, b) => b.myRating - a.myRating)[0];
}

function renderHome() {
  const week = pickWeekMovie();
  const weekTitle = document.getElementById("weekTitle");
  const weekQuote = document.getElementById("weekQuote");
  const weekPoster = document.getElementById("weekPoster");
  const weekLink = document.getElementById("weekLink");
  const top3 = document.getElementById("top3");
  const glossaryRandom = document.getElementById("glossaryRandom");

  if (weekTitle) weekTitle.textContent = week.film;
  if (weekQuote) weekQuote.textContent = `«${week.quote || "Лучший способ испугаться — включить хороший хоррор ночью."}»`;
  if (weekPoster) weekPoster.src = week.poster;
  if (weekLink) weekLink.href = `movie.html?id=${week.id}`;

  if (top3) {
    const top = [...movies].sort((a, b) => b.myRating - a.myRating).slice(0, 3);
    top3.innerHTML = top.map(m => `
      <a class="mini-card" href="movie.html?id=${m.id}">
        <img src="${m.poster}" alt="${m.film}">
        <h4>${m.film}</h4>
        <p>${m.genre} · ${m.kinopoisk.toFixed(1)} · ${stars(m.horrorRate)}</p>
      </a>
    `).join("");
  }

  if (glossaryRandom) {
    const item = glossary[Math.floor(Math.random() * glossary.length)];
    glossaryRandom.innerHTML = `<h4>${item.title}</h4><p>${item.desc}</p>`;
  }
}

function renderDetails() {
  const box = document.getElementById("movieDetails");
  if (!box) return;
  const id = new URLSearchParams(location.search).get("id");
  const movie = movies.find(m => m.id === id);
  box.innerHTML = movie ? `
    <h2>${movie.film}</h2>
    <p><strong>Жанр:</strong> ${movie.genre}</p>
    <p><strong>Рейтинг КиноПоиск:</strong> ${movie.kinopoisk.toFixed(1)}</p>
    <p><strong>Мой рейтинг:</strong> ${movie.myRating}</p>
    <p><strong>Рейтинг ужаса:</strong> ${stars(movie.horrorRate)}</p>
    <p><strong>Цитата:</strong> ${movie.quote || ""}</p>
  ` : "<p>Фильм не найден</p>";
}

function renderGlossary() {
  const box = document.getElementById("glossaryList");
  if (!box) return;
  box.innerHTML = glossary.map(item => `
    <div class="glossary-item">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderTable();
  renderDetails();
  renderGlossary();

  document.getElementById("pollForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = document.querySelector('input[name="poll"]:checked')?.value;
    const out = document.getElementById("pollResult");
    if (out) out.textContent = value ? `Вы выбрали: ${value}` : "Сначала выбери жанр.";
  });

  document.getElementById("rouletteBtn")?.addEventListener("click", () => {
    const m = randomMovie();
    alert(`Рулетка страха: ${m.film} — ${m.genre}`);
  });

  document.getElementById("searchInput")?.addEventListener("input", renderTable);
  document.getElementById("genreFilter")?.addEventListener("change", renderTable);

  document.querySelectorAll("#ratingTable th").forEach((th, index) => {
    th.addEventListener("click", () => {
      if (sortState.col === index) sortState.asc = !sortState.asc;
      else {
        sortState.col = index;
        sortState.asc = false;
      }
      renderTable();
    });
  });
});