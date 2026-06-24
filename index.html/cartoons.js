document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('cartoonsGrid');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  if (!grid) return;

  const cartoons = [
    {
      id: 'LoveDeathRobots',
      title: 'Любовь. Смерть. Роботы',
      originalTitle: 'Love, Death & Robots',
      year: '2019–...',
      director: 'Габриэле Пенначиоле',
      localRating: 8.227,
      localVotes: 333483,
      genres: ['мультфильм', 'фантастика', 'комедия']
    },
    {
      id: 'ChainsawMan',
      title: 'Человек-бензопила',
      originalTitle: 'Chainsaw Man',
      year: '2022',
      director: 'Рю Накаяма',
      localRating: 8.484,
      localVotes: 278494,
      genres: ['аниме', 'мультфильм', 'боевик']
    },
    {
      id: 'KiseijuuSeinoKakuritsu',
      title: 'Паразит: Учение о жизни',
      originalTitle: 'Kiseijuu: Sei no Kakuritsu',
      year: '2014–2015',
      director: 'Кэнъити Симидзу',
      localRating: 8.185,
      localVotes: 188217,
      genres: ['аниме', 'мультфильм', 'ужасы']
    },
    {
      id: 'TheAddamsFamily',
      title: 'Семейка Аддамс',
      originalTitle: 'The Addams Family',
      year: '2019',
      director: 'Грег Тирнан',
      localRating: 6.603,
      localVotes: 161931,
      genres: ['мультфильм', 'ужасы', 'фэнтези']
    },
     {
    id: "TheAddamsFamily",
    title: "Семейка Аддамс",
    originalTitle: "The Addams Family",
    year: "2019",
    director: "Грег Тирнан",
    localRating: 6.603,
    localVotes: 161931,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Dororo",
    title: "Дороро",
    originalTitle: "Dororo",
    year: "2019",
    director: "Кадзухиро Фурухаси",
    localRating: 8.342,
    localVotes: 141636,
    genres: ["аниме", "мультфильм", "боевик"]
  },
  {
    id: "JujutsuKaisen",
    title: "Магическая битва",
    originalTitle: "Jujutsu Kaisen",
    year: "2020–...",
    director: "Пак Сон‑ху",
    localRating: 8.189,
    localVotes: 131988,
    genres: ["аниме", "мультфильм", "боевик"]
  },
  {
    id: "RedIronRoad",
    title: "Антология русского хоррора: Красный состав",
    originalTitle: "Red Iron Road",
    year: "2022",
    director: "Алексей Климов",
    localRating: 7.324,
    localVotes: 114483,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "TokyoGhoul",
    title: "Токийский гуль",
    originalTitle: "Tokyo Ghoul",
    year: "2014–2018",
    director: "Сюхэй Морита",
    localRating: 7.110,
    localVotes: 110983,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "HappyFamily",
    title: "Мы — монстры",
    originalTitle: "Happy Family",
    year: "2017",
    director: "Хольгер Таппе",
    localRating: 6.425,
    localVotes: 93779,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Frankenweenie",
    title: "Франкенвини",
    originalTitle: "Frankenweenie",
    year: "2012",
    director: "Тим Бёртон",
    localRating: 7.135,
    localVotes: 74736,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "The AddamsFamily2",
    title: "Семейка Аддамс: Горящий тур",
    originalTitle: "The Addams Family 2",
    year: "2021",
    director: "Конрад Вернон",
    localRating: 6.744,
    localVotes: 67788,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Gakuenmokushiroku:HIGHSCHOOLOFTHEDEAD",
    title: "Школа мертвецов",
    originalTitle: "Gakuen mokushiroku: HIGHSCHOOL OF THE DEAD",
    year: "2010",
    director: "Тэцуро Араки",
    localRating: 7.761,
    localVotes: 59014,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Mr.Pickles",
    title: "Мистер Пиклз",
    originalTitle: "Mr. Pickles",
    year: "2013–2019",
    director: "Уилл Карсола",
    localRating: 7.732,
    localVotes: 46455,
    genres: ["мультфильм", "ужасы", "комедия"]
  },
  {
    id: "TheLittleVampire3D",
    title: "Маленький вампир",
    originalTitle: "The Little Vampire 3D",
    year: "2017",
    director: "Рихард Клаус",
    localRating: 6.405,
    localVotes: 45529,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "YakusokunoNeverland",
    title: "Обещанный Неверленд",
    originalTitle: "Yakusoku no Neverland",
    year: "2019–2021",
    director: "Мамору Канбэ",
    localRating: 7.744,
    localVotes: 45117,
    genres: ["аниме", "мультфильм", "детектив"]
  },
  {
    id: "HelluvaBoss",
    title: "Аццкий босс",
    originalTitle: "Helluva Boss",
    year: "2019–...",
    director: "Вивьенн Медрано",
    localRating: 7.904,
    localVotes: 34450,
    genres: ["мультфильм", "мюзикл", "ужасы"]
  },
  {
    id: "HellsingUltimate",
    title: "Хеллсинг Ultimate",
    originalTitle: "Hellsing Ultimate",
    year: "2006",
    director: "Томокадзу Токоро",
    localRating: 7.981,
    localVotes: 31823,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Castlevania",
    title: "Кастлвания",
    originalTitle: "Castlevania",
    year: "2017–2021",
    director: "Сэм Дитс",
    localRating: 7.616,
    localVotes: 29644,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Herushingu",
    title: "Хеллсинг: Война с нечистью",
    originalTitle: "Herushingu",
    year: "2001–2002",
    director: "Уманосукэ Иида",
    localRating: 7.792,
    localVotes: 28666,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Kaijuu8‑gou",
    title: "Кайдзю № 8",
    originalTitle: "Kaijuu 8‑gou",
    year: "2024–...",
    director: "Томоми Камия",
    localRating: 8.021,
    localVotes: 25648,
    genres: ["аниме", "мультфильм", "боевик"]
  },
  {
    id: "Scooby‑Doo!MysteryIncorporated",
    title: "Скуби‑Ду! Корпорация «Загадка»",
    originalTitle: "Scooby‑Doo! Mystery Incorporated",
    year: "2010–2013",
    director: "Виктор Кук",
    localRating: 7.480,
    localVotes: 25519,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "HappyTreeFriends",
    title: "Счастливые лесные друзья",
    originalTitle: "Happy Tree Friends",
    year: "2000–2016",
    director: "Кенн Наварро",
    localRating: 6.763,
    localVotes: 24395,
    genres: ["мультфильм", "ужасы", "комедия"]
  },
  {
    id: "Another",
    title: "Иная",
    originalTitle: "Another",
    year: "2012",
    director: "Цутому Мидзусима",
    localRating: 7.474,
    localVotes: 24193,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Predator:KillerofKillers",
    title: "Хищник: Убийца убийц",
    originalTitle: "Predator: Killer of Killers",
    year: "2025",
    director: "Дэн Трахтенберг",
    localRating: 7.126,
    localVotes: 22527,
    genres: ["мультфильм", "фантастика", "боевик"]
  },
  {
    id: "Nosferatu.TheVampyre",
    title: "Носферату. Ужас ночи",
    originalTitle: "Nosferatu. The Vampyre",
    year: "2010",
    director: "Владимир Мариничев",
    localRating: 2.658,
    localVotes: 21878,
    genres: ["мультфильм", "ужасы", "комедия"]
  },
  {
    id: "RegularShow",
    title: "Обычный мультик",
    originalTitle: "Regular Show",
    year: "2009–2017",
    director: "Джон Инфантино",
    localRating: 7.739,
    localVotes: 20132,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "Baiohazâdo:Dijenerêshon",
    title: "Обитель зла: Вырождение",
    originalTitle: "Baiohazâdo: Dijenerêshon",
    year: "2008",
    director: "Макото Камия",
    localRating: 6.753,
    localVotes: 19126,
    genres: ["аниме", "мультфильм", "боевик"]
  },
  {
    id: "Higurashinonakukoroni",
    title: "Когда плачут цикады",
    originalTitle: "Higurashi no naku koro ni",
    year: "2006",
    director: "Тиаки Кон",
    localRating: 7.709,
    localVotes: 18429,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Dante'sInferno:AnAnimatedEpic",
    title: "Ад Данте: Анимированный эпос",
    originalTitle: "Dante's Inferno: An Animated Epic",
    year: "2010",
    director: "Виктор Кук",
    localRating: 7.008,
    localVotes: 17854,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "DEVILMAN:crybaby",
    title: "Человек‑дьявол: Плакса",
    originalTitle: "DEVILMAN: crybaby",
    year: "2018",
    director: "Масааки Юаса",
    localRating: 7.366,
    localVotes: 17618,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "DevilMayCry:Debirumeikurai",
    title: "Демон против демонов",
    originalTitle: "Devil May Cry: Debiru mei kurai",
    year: "2007",
    director: "Син Итагаки",
    localRating: 7.511,
    localVotes: 17601,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "ItouJunji:Collection",
    title: "Дзюндзи Ито: Коллекция",
    originalTitle: "Itou Junji: Collection",
    year: "2018",
    director: "Синобу Тагасира",
    localRating: 7.324,
    localVotes: 16155,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "ExtremeGhostbusters",
    title: "Экстремальные охотники за привидениями",
    originalTitle: "Extreme Ghostbusters",
    year: "1997",
    director: "Тим Элдред",
    localRating: 6.911,
    localVotes: 13726,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "TheShiveringTruth",
    title: "Жуткая правда",
    originalTitle: "The Shivering Truth",
    year: "2018–2020",
    director: "Вернон Чатман",
    localRating: 7.326,
    localVotes: 13210,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "Hilda",
    title: "Хильда",
    originalTitle: "Hilda",
    year: "2018–2023",
    director: "Энди Койл",
    localRating: 8.315,
    localVotes: 12992,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "BaiohazâdoDamunêshon",
    title: "Обитель зла: Проклятие",
    originalTitle: "Baiohazâdo Damunêshon",
    year: "2012",
    director: "Макото Камия",
    localRating: 6.675,
    localVotes: 12445,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "KoutetsujounoKabaneri",
    title: "Кабанэри железной крепости",
    originalTitle: "Koutetsujou no Kabaneri",
    year: "2016",
    director: "Хироюки Танака",
    localRating: 6.760,
    localVotes: 12324,
    genres: ["аниме", "мультфильм", "боевик"]
  },
  {
    id: "Aaahh!!!RealMonsters",
    title: "ААА!!! Настоящие монстры",
    originalTitle: "Aaahh!!! Real Monsters",
    year: "1994–1997",
    director: "Джим Даффи",
    localRating: 5.704,
    localVotes: 11873,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "VampireHunterD",
    title: "D: Охотник на вампиров",
    originalTitle: "Vampire Hunter D",
    year: "1985",
    director: "Тоё Асида",
    localRating: 6.929,
    localVotes: 11756,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Baiohazâdo:Vendetta",
    title: "Обитель зла: Вендетта",
    originalTitle: "Baiohazâdo: Vendetta",
    year: "2017",
    director: "Таканори Цудзимото",
    localRating: 6.323,
    localVotes: 11691,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Beetlejuice",
    title: "Битлджюс",
    originalTitle: "Beetlejuice",
    year: "1989–1991",
    director: "Джон Халфпенни",
    localRating: 7.062,
    localVotes: 11578,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "DeadmanWonderland",
    title: "Страна чудес смертников",
    originalTitle: "Deadman Wonderland",
    year: "2011",
    director: "Коити Хацуми",
    localRating: 7.047,
    localVotes: 11525,
    genres: ["аниме", "мультфильм", "боевик"]
  },
  {
    id: "DeadSpace:Downfall",
    title: "Космос: Территория смерти",
    originalTitle: "Dead Space: Downfall",
    year: "2008",
    director: "Чак Паттон",
    localRating: 6.754,
    localVotes: 11261,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "PlanetDinosaur",
    title: "Планета динозавров",
    originalTitle: "Planet Dinosaur",
    year: "2011",
    director: "Найджел Патерсон",
    localRating: 8.529,
    localVotes: 11169,
    genres: ["мультфильм", "документальный", "ужасы"]
  },
  {
    id: "Igor",
    title: "Игорь",
    originalTitle: "Igor",
    year: "2008",
    director: "Энтони Леондис",
    localRating: 5.944,
    localVotes: 10982,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "Seoulyeok",
    title: "Станция «Сеул»",
    originalTitle: "Seoulyeok",
    year: "2016",
    director: "Ён Сан‑хо",
    localRating: 6.035,
    localVotes: 10962,
    genres: ["мультфильм", "ужасы", "драма"]
  },
  {
    id: "TheAdventuresofIchabodandMr.Toad",
    title: "Приключения Икабода и мистера Тоада",
    originalTitle: "The Adventures of Ichabod and Mr. Toad",
    year: "1949",
    director: "Джеймс Элгар",
    localRating: 7.159,
    localVotes: 10955,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "CouragetheCowardlyDog",
    title: "Кураж — трусливый пёс",
    originalTitle: "Courage the Cowardly Dog",
    year: "1999–2002",
    director: "Джон Дилворт",
    localRating: 7.051,
    localVotes: 10953,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Gantz:O",
    title: "Ганц: О — Миссия Осака",
    originalTitle: "Gantz: O",
    year: "2016",
    director: "Ясуси Кавамура",
    localRating: 7.123,
    localVotes: 10910,
    genres: ["аниме", "мультфильм", "боевик"]
  },
  {
    id: "HikarugaShindaNatsu",
    title: "Лето, когда умер Хикару",
    originalTitle: "Hikaru ga Shinda Natsu",
    year: "2025–...",
    director: "Рёхэй Такэсита",
    localRating: 7.588,
    localVotes: 10570,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Supernatural:TheAnime",
    title: "Сверхъестественное: Анимация",
    originalTitle: "Supernatural: The Anime",
    year: "2011",
    director: "Сигэюки Мия",
    localRating: 7.168,
    localVotes: 9894,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Shiki",
    title: "Усопшие",
    originalTitle: "Shiki",
    year: "2010",
    director: "Тэцуро Амино",
    localRating: 7.640,
    localVotes: 9821,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Scooby‑Doo!CampScare",
    title: "Скуби‑Ду! Истории летнего лагеря",
    originalTitle: "Scooby‑Doo! Camp Scare",
    year: "2010",
    director: "Этан Сполдинг",
    localRating: 7.111,
    localVotes: 9762,
    genres: ["мультфильм", "ужасы", "комедия"]
  },
  {
    id: "Mushishi",
    title: "Мастер Муси",
    originalTitle: "Mushishi",
    year: "2005–2006",
    director: "Хироси Нагахама",
    localRating: 8.309,
    localVotes: 9706,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "ResidentEvil:DeathIsland",
    title: "Обитель зла: Остров смерти",
    originalTitle: "Resident Evil: Death Island",
    year: "2023",
    director: "Эйитиро Хасуми",
    localRating: 5.817,
    localVotes: 9044,
    genres: ["аниме", "мультфильм", "боевик"]
  },
  {
    id: "Mieruko‑chan",
    title: "Девочка, которая видит",
    originalTitle: "Mieruko‑chan",
    year: "2021",
    director: "Юки Огава",
    localRating: 7.028,
    localVotes: 8574,
    genres: ["аниме", "мультфильм", "комедия"]
  },
  {
    id: "JusticeLeagueDark",
    title: "Тёмная лига справедливости",
    originalTitle: "Justice League Dark",
    year: "2017",
    director: "Джей Олива",
    localRating: 6.808,
    localVotes: 8453,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "Zom 100:BucketListoftheDead",
    title: "Зомби‑апокалипсис и список из 100 дел, что я выполню перед смертью",
    originalTitle: "Zom 100: Bucket List of the Dead",
    year: "2023",
    director: "Кадзуки Кавагоэ",
    localRating: 7.539,
    localVotes: 8346,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "UglyAmericans",
    title: "Гадкие американцы",
    originalTitle: "Ugly Americans",
    year: "2010–2012",
    director: "Девин Кларк",
    localRating: 7.722,
    localVotes: 7682,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "MonkeyDust",
    title: "38 обезьян",
    originalTitle: "Monkey Dust",
    year: "2003–2005",
    director: "Люк Карпентер",
    localRating: 7.811,
    localVotes: 7569,
    genres: ["мультфильм", "ужасы", "комедия"]
  },
  {
    id: "Superjail!",
    title: "Тюряга",
    originalTitle: "Superjail!",
    year: "2007–2014",
    director: "Кристи Каракас",
    localRating: 7.607,
    localVotes: 7476,
    genres: ["мультфильм", "ужасы", "боевик"]
  },
  {
    id: "HotelTransylvania",
    title: "Отель Трансильвания",
    originalTitle: "Hotel Transylvania",
    year: "2017–2020",
    director: "Робин Бадд",
    localRating: 5.912,
    localVotes: 7243,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Uzumaki",
    title: "Спираль",
    originalTitle: "Uzumaki",
    year: "2024",
    director: "Хироси Нагахама",
    localRating: 6.341,
    localVotes: 7086,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "MarvelZombies",
    title: "Зомби Marvel",
    originalTitle: "Marvel Zombies",
    year: "2025",
    director: "Брайан Эндрюс",
    localRating: 6.334,
    localVotes: 7056,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "Resident Evil:Infinite Darkness",
    title: "Обитель зла: Бесконечная тьма",
    originalTitle: "Resident Evil: Infinite Darkness",
    year: "2021",
    director: "Эйитиро Хасуми",
    localRating: 5.766,
    localVotes: 6975,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "DieSchulederkleinenVampire",
    title: "Школа вампиров",
    originalTitle: "Die Schule der kleinen Vampire",
    year: "2006–2010",
    director: "Роберт Арквайт",
    localRating: 7.838,
    localVotes: 6627,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Blood‑C",
    title: "Кровь‑С",
    originalTitle: "Blood‑C",
    year: "2011",
    director: "Цутому Мидзусима",
    localRating: 6.042,
    localVotes: 6473,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Mononoke",
    title: "Мононокэ",
    originalTitle: "Mononoke",
    year: "2007",
    director: "Кэндзи Накамура",
    localRating: 8.172,
    localVotes: 6446,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Gantz",
    title: "Ганц",
    originalTitle: "Gantz",
    year: "2004",
    director: "Итиро Итано",
    localRating: 7.194,
    localVotes: 6220,
    genres: ["аниме", "мультфильм", "фантастика"]
  },
  {
    id: "Calls",
    title: "Тревожный звонок",
    originalTitle: "Calls",
    year: "2021",
    director: "Феде Альварес",
    localRating: 7.761,
    localVotes: 6116,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "CorpseParty:TorturedSouls",
    title: "Вечеринка мёртвых: Истязаемые души",
    originalTitle: "Corpse Party: Tortured Souls",
    year: "2013",
    director: "Акира Иванага",
    localRating: 6.201,
    localVotes: 6029,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "MadGod",
    title: "Безумный Бог",
    originalTitle: "Mad God",
    year: "2021",
    director: "Фил Типпетт",
    localRating: 6.921,
    localVotes: 5956,
    genres: ["мультфильм", "фэнтези", "ужасы"]
  },
  {
    id: "PetshopofHorrors",
    title: "Магазинчик ужасов",
    originalTitle: "Petshop of Horrors",
    year: "1999",
    director: "Тосио Хирата",
    localRating: 7.818,
    localVotes: 5652,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "ChronoCrusade",
    title: "Крестовый поход Хроно",
    originalTitle: "Chrono Crusade",
    year: "2003–2004",
    director: "Сигэру Морикава",
    localRating: 7.868,
    localVotes: 5625,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "TheBatmanvs.Dracula",
    title: "Бэтмен против Дракулы",
    originalTitle: "The Batman vs. Dracula",
    year: "2005",
    director: "Майкл Гогуэн",
    localRating: 6.490,
    localVotes: 5581,
    genres: ["мультфильм", "ужасы", "боевик"]
  },
  {
    id: "HauntedHotel",
    title: "Отель с привидениями",
    originalTitle: "Haunted Hotel",
    year: "2025–...",
    director: "Эрика Хэйес",
    localRating: 7.631,
    localVotes: 5567,
    genres: ["мультфильм", "ужасы", "комедия"]
  },
  {
    id: "Blood+",
    title: "Кровь+",
    originalTitle: "Blood+",
    year: "2005–2006",
    director: "Дзюнъити Фудзисаку",
    localRating: 7.591,
    localVotes: 5233,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Yojutoshi",
    title: "Город чудищ",
    originalTitle: "Yoju toshi",
    year: "1987",
    director: "Ёсиаки Кавадзири",
    localRating: 6.708,
    localVotes: 5138,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "TrinityBlood",
    title: "Кровь триединства",
    originalTitle: "Trinity Blood",
    year: "2005",
    director: "Томохиро Хирата",
    localRating: 7.263,
    localVotes: 5129,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Ajin",
    title: "Полулюди",
    originalTitle: "Ajin",
    year: "2016–2017",
    director: "Хироаки Андо",
    localRating: 7.066,
    localVotes: 4918,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Lenore:TheCuteLittleDeadGirl",
    title: "Ленор: Маленькая мёртвая девочка",
    originalTitle: "Lenore: The Cute Little Dead Girl",
    year: "2002",
    director: "Роман Дердж",
    localRating: 7.642,
    localVotes: 4758,
    genres: ["мультфильм", "комедия", "фэнтези"]
  },
  {
    id: "Higurashinonakukoroni:Kai",
    title: "Когда плачут цикады: Разгадки",
    originalTitle: "Higurashi no naku koro ni: Kai",
    year: "2007",
    director: "Тиаки Кон",
    localRating: 7.797,
    localVotes: 4750,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "GekijobanKaranokyokai:Daiissho—Fukanfukei",
    title: "Граница пустоты: Сад грешников. Фильм первый",
    originalTitle: "Gekijo ban Kara no kyokai: Dai issho — Fukan fukei",
    year: "2007",
    director: "Эи Аоки",
    localRating: 7.324,
    localVotes: 4717,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "DeadSpace:Aftermath",
    title: "Dead Space: Последствия",
    originalTitle: "Dead Space: Aftermath",
    year: "2011",
    director: "Майкл Д’Иса‑Хоган",
    localRating: 5.731,
    localVotes: 4687,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "Scooby‑Doo!andtheCurseofthe13thGhost",
    title: "Скуби‑Ду и проклятье тринадцатого призрака",
    originalTitle: "Scooby‑Doo! and the Curse of the 13th Ghost",
    year: "2019",
    director: "Сесилия Аранович",
    localRating: 6.036,
    localVotes: 4631,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "MahouShoujoSite",
    title: "Сайт волшебниц",
    originalTitle: "Mahou Shoujo Site",
    year: "2018",
    director: "Тадахито Мацубаяси",
    localRating: 6.347,
    localVotes: 4623,
    genres: ["аниме", "мультфильм", "драма"]
  },
  {
    id: "HammerandBolter",
    title: "Молот и болтер",
    originalTitle: "Hammer and Bolter",
    year: "2021",
    director: "Дилан Шипли",
    localRating: 7.227,
    localVotes: 4528,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "Jigokushôjo",
    title: "Адская девочка",
    originalTitle: "Jigoku shôjo",
    year: "2005–2006",
    director: "Такахиро Омори",
    localRating: 7.380,
    localVotes: 4245,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Castlevania:Nocturne",
    title: "Кастлвания: Ноктюрн",
    originalTitle: "Castlevania: Nocturne",
    year: "2023–...",
    director: "Сэм Дитс",
    localRating: 6.598,
    localVotes: 4223,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Papá,soyunazombi",
    title: "Как приручить зомби",
    originalTitle: "Papá, soy una zombi",
    year: "2010",
    director: "Хоан Эспинач",
    localRating: 4.316,
    localVotes: 4204,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "OApóstolo",
    title: "Апостол",
    originalTitle: "O Apóstolo",
    year: "2012",
    director: "Фернандо Кортисо",
    localRating: 6.608,
    localVotes: 4046,
    genres: ["мультфильм", "ужасы"]
  },
  {
    id: "Casper:ASpiritedBeginning",
    title: "Каспер: Начало",
    originalTitle: "Casper: A Spirited Beginning",
    year: "1997",
    director: "Шон Макнамара",
    localRating: 5.833,
    localVotes: 4014,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Gyo",
    title: "Рыба",
    originalTitle: "Gyo",
    year: "2012",
    director: "Такаюки Хирао",
    localRating: 6.091,
    localVotes: 3998,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "TheMummy:TheAnimatedSeries",
    title: "Мумия",
    originalTitle: "The Mummy: The Animated Series",
    year: "2001–2003",
    director: "Эдди Хочинс",
    localRating: 6.065,
    localVotes: 3952,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Constantine:CityofDemons",
    title: "Константин: Город демонов",
    originalTitle: "Constantine: City of Demons",
    year: "2018",
    director: "Даг Мерфи",
    localRating: 7.024,
    localVotes: 3728,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "StrangerThings:Talesfrom'85",
    title: "Очень странные дела: Истории из 85‑го",
    originalTitle: "Stranger Things: Tales from '85",
    year: "2026–...",
    director: "Sarah Partington",
    localRating: 6.620,
    localVotes: 3722,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "Turok:SonofStone",
    title: "Турок. Затерянный мир",
    originalTitle: "Turok: Son of Stone",
    year: "2008",
    director: "Курт Геда",
    localRating: 6.385,
    localVotes: 3458,
    genres: ["мультфильм", "ужасы", "фантастика"]
  },
  {
    id: "GekijôbanKaranokyôkai:Daigoshô—Mujun rasen",
    title: "Граница пустоты: Сад грешников. Фильм пятый",
    originalTitle: "Gekijô ban Kara no kyôkai: Dai go shô — Mujun rasen",
    year: "2008",
    director: "Такаюки Хирао",
    localRating: 7.655,
    localVotes: 3446,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Scooby‑Doo!MeetstheBooBrothers",
    title: "Скуби‑Ду! встречает братьев Бу",
    originalTitle: "Scooby‑Doo! Meets the Boo Brothers",
    year: "1987",
    director: "Пол Соммер",
    localRating: 6.357,
    localVotes: 3327,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Yamishibai",
    title: "Театр тьмы",
    originalTitle: "Yami shibai",
    year: "2013–...",
    director: "Томоя Такасима",
    localRating: 7.026,
    localVotes: 3294,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "GekijôbanKaranokyôkai:Daisanshô—Tsukakûzanryû",
    title: "Граница пустоты: Сад грешников. Фильм третий",
    originalTitle: "Gekijô ban Kara no kyôkai: Dai san shô — Tsukakû zanryû",
    year: "2008",
    director: "Мицуру Обунаи",
    localRating: 7.384,
    localVotes: 3268,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Blood:TheLastVampire",
    title: "Кровь: Последний вампир",
    originalTitle: "Blood: The Last Vampire",
    year: "2000",
    director: "Хироюки Китакубо",
    localRating: 6.531,
    localVotes: 3205,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "Scooby‑Doo!ReturntoZombieIsland",
    title: "Скуби‑Ду: Возвращение на остров зомби",
    originalTitle: "Scooby‑Doo! Return to Zombie Island",
    year: "2019",
    director: "Сесилия Аранович",
    localRating: 5.809,
    localVotes: 3173,
    genres: ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    id: "Tomie",
    title: "Томиэ",
    originalTitle: "Tomie",
    year: "2018",
    director: "-",
    localRating: 6.524,
    localVotes: 3107,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    id: "GekijôbanKaranokyôkai:Dainishô—Satsujinkôsatsu(zen)",
    title: "Граница пустоты: Сад грешников. Фильм второй",
    originalTitle: "Gekijô ban Kara no kyôkai: Dai ni shô — Satsujin kôsatsu (zen)",
    year: "2007",
    director: "Такуя Нонака",
    localRating: 7.328,
    localVotes: 2970,
    genres: ["аниме", "мультфильм", "ужасы"]
  },
  {
    "id": "Uminekononakukoroni",
    "title": "Когда плачут чайки",
    "originalTitle": "Umineko no naku koro ni",
    "year": "2009",
    "director": "Тиаки Кон",
    "localRating": 6.917,
    "localVotes": 2878,
    "genres": ["аниме", "мультфильм", "ужасы"]
  },
  {
    "id": "HappyHalloween,Scooby‑Doo!",
    "title": "Счастливого Хэллоуина, Скуби‑Ду!",
    "originalTitle": "Happy Halloween, Scooby‑Doo!",
    "year": "2020",
    "director": "Максвелл Атомс",
    "localRating": 5.908,
    "localVotes": 2877,
    "genres": ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    "id": "Linglong",
    "title": "Клетка духа: Воплощение",
    "originalTitle": "Ling long",
    "year": "2019–2021",
    "director": "Дун Сянбо",
    "localRating": 8.194,
    "localVotes": 2871,
    "genres": ["мультфильм", "фантастика", "фэнтези"]
  },
  {
    "id": "Meikyûmonogatari",
    "title": "Лабиринт сновидений",
    "originalTitle": "Meikyû monogatari",
    "year": "1986",
    "director": "Ёсиаки Кавадзири",
    "localRating": 6.819,
    "localVotes": 2816,
    "genres": ["аниме", "мультфильм", "ужасы"]
  },
  {
    "id": "JigokuSenseiNube",
    "title": "Адский учитель Нубэ",
    "originalTitle": "Jigoku Sensei Nube",
    "year": "2025–...",
    "director": "Ясуюки Оиси",
    "localRating": 7.491,
    "localVotes": 2751,
    "genres": ["аниме", "мультфильм", "ужасы"]
  },
  {
    "id": "Peur(s)dunoir",
    "title": "Страх[и] темноты",
    "originalTitle": "Peur(s) du noir",
    "year": "2007",
    "director": "Блатч",
    "localRating": 6.782,
    "localVotes": 2581,
    "genres": ["мультфильм", "ужасы", "детектив"]
  },
  {
    "id": "Scooby‑Doo!Frankencreepy",
    "title": "Скуби‑Ду и Монстр Франкенштейна",
    "originalTitle": "Scooby‑Doo! Frankencreepy",
    "year": "2014",
    "director": "Пол МакЭвой",
    "localRating": 6.046,
    "localVotes": 2555,
    "genres": ["мультфильм", "ужасы", "фантастика"]
  },
  {
    "id": "ParanoiaAgent",
    "title": "Агент паранойи",
    "originalTitle": "Mousou Dairinin",
    "year": "2004",
    "director": "Сатоси Кон",
    "localRating": 7.843,
    "localVotes": 2548,
    "genres": ["аниме", "мультфильм", "триллер"]
  },
  {
    "id": "TokyoMewMewNew",
    "title": "Токио Мяу Мяу: Новое",
    "originalTitle": "Tokyo Mew Mew New",
    "year": "2022–2023",
    "director": "Такахиро Икэдзоэ",
    "localRating": 6.982,
    "localVotes": 2539,
    "genres": ["аниме", "мультфильм", "фэнтези"]
  },
  {
    "id": "TheHauntedWorldofElSuperbeasto",
    "title": "Призрачный мир Эль Супербисто",
    "originalTitle": "The Haunted World of El Superbeasto",
    "year": "2009",
    "director": "Роб Зомби",
    "localRating": 5.973,
    "localVotes": 2527,
    "genres": ["мультфильм", "ужасы", "комедия"]
  },
  {
    "id": "BoogiepopPhantom",
    "title": "Бугипоп никогда не смеётся",
    "originalTitle": "Boogiepop Phantom",
    "year": "2000",
    "director": "Такаси Ватанабэ",
    "localRating": 7.654,
    "localVotes": 2518,
    "genres": ["аниме", "мультфильм", "ужасы"]
  },
  {
    "id": "TheWolfHouse",
    "title": "Волчий дом",
    "originalTitle": "La Casa Lobo",
    "year": "2018",
    "director": "Хоакин Косинья, Кристобаль Леон",
    "localRating": 7.102,
    "localVotes": 2509,
    "genres": ["мультфильм", "ужасы", "драма"]
  },
  {
    "id": "DeadLeaves",
    "title": "Мёртвые листья",
    "originalTitle": "Dead Leaves",
    "year": "2004",
    "director": "Хироюки Имаиси",
    "localRating": 7.321,
    "localVotes": 2497,
    "genres": ["аниме", "мультфильм", "фантастика"]
  },
  {
    "id": "TheNightmareBeforeChristmas",
    "title": "Кошмар перед Рождеством",
    "originalTitle": "The Nightmare Before Christmas",
    "year": "1993",
    "director": "Генри Селик",
    "localRating": 8.089,
    "localVotes": 2486,
    "genres": ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    "id": "ErgoProxy",
    "title": "Эрго Прокси",
    "originalTitle": "Ergo Proxy",
    "year": "2006",
    "director": "Сюко Мурасэ",
    "localRating": 7.987,
    "localVotes": 2475,
    "genres": ["аниме", "мультфильм", "фантастика"]
  },
  {
    "id": "TheAddamsFamilyMournsaMourner",
    "title": "Семейка Аддамс: Оплакивание плакальщика",
    "originalTitle": "The Addams Family Mourns a Mourner",
    "year": "1965",
    "director": "Сидней Лэнфилд",
    "localRating": 7.214,
    "localVotes": 2463,
    "genres": ["мультфильм", "ужасы", "комедия"]
  },
  {
    "id": "PerfectBlue",
    "title": "Истинная грусть",
    "originalTitle": "Perfect Blue",
    "year": "1997",
    "director": "Сатоси Кон",
    "localRating": 7.891,
    "localVotes": 2452,
    "genres": ["аниме", "мультфильм", "триллер"]
  },
  {
    "id": "TheWolfman",
    "title": "Человек‑волк",
    "originalTitle": "The Wolfman",
    "year": "2010",
    "director": "Джо Джонстон",
    "localRating": 6.123,
    "localVotes": 2441,
    "genres": ["мультфильм", "ужасы", "фэнтези"]
  },
  {
    "id": "GhostStories",
    "title": "Истории о привидениях",
    "originalTitle": "Ghost Stories",
    "year": "2000",
    "director": "Акиюки Синбо",
    "localRating": 7.012,
    "localVotes": 2430,
    "genres": ["аниме", "мультфильм", "ужасы"]
  },
  {
    "id": "TheAddamsFamilyFunHouse",
    "title": "Семейка Аддамс: Весёлый дом",
    "originalTitle": "The Addams Family Fun House",
    "year": "1973",
    "director": "Чарльз С. Дубин",
    "localRating": 6.876,
    "localVotes": 2419,
    "genres": ["мультфильм", "ужасы", "комедия"]
  }
];

  const normalize = value => String(value ?? '').toLowerCase().trim();

  const yearToNumber = year => {
    const m = String(year).match(/d{4}/);
    return m ? Number(m[0]) : 0;
  };

  function render(list) {
    if (!list.length) {
      grid.innerHTML = '<p>Ничего не найдено.</p>';
      return;
    }

    grid.innerHTML = list.map(item => `
      <a class="movie-card" href="#">
        <div class="movie-poster">
          <img src="./images/poster-placeholder.jpg" alt="${item.title}" loading="lazy">
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${item.title}</h3>
          <p class="movie-original">${item.originalTitle}</p>
          <p class="movie-year">${item.year}</p>
          <p class="movie-director">Режиссёр: ${item.director}</p>
          <p class="movie-rating">Рейтинг: ${item.localRating}</p>
          <p class="movie-year">Оценок: ${item.localVotes}</p>
          <p class="movie-original">${item.genres.join(', ')}</p>
        </div>
      </a>
    `).join('');
  }

  function applyFilters() {
    const term = normalize(searchInput?.value);
    const sortBy = sortSelect?.value || '';

    let list = cartoons.filter(item => normalize(item.title).includes(term));

    if (sortBy === 'localRating') {
      list = [...list].sort((a, b) => b.localRating - a.localRating);
    } else if (sortBy === 'localVotes') {
      list = [...list].sort((a, b) => b.localVotes - a.localVotes);
    } else if (sortBy === 'year') {
      list = [...list].sort((a, b) => yearToNumber(b.year) - yearToNumber(a.year));
    } else if (sortBy === 'genres') {
      list = [...list].sort((a, b) => (a.genres.join(', ') || '').localeCompare(b.genres.join(', ') || ''));
    }

    render(list);
  }

  searchInput?.addEventListener('input', applyFilters);
  sortSelect?.addEventListener('change', applyFilters);

  applyFilters();
});