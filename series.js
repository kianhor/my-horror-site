document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('seriesGrid');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  if (!grid) return;

  const series = [
    
  {
    id: "Typewriter",
    title: "Печатная машинка",
    originalTitle: "Typewriter",
    year: "2019",
    director: "Суджой Гхош",
    localRating: 6.161,
    localVotes: 2538,
    genres: ["ужасы", "детектив"]
  },
  {
    id: "TruthSeekers",
    title: "Искатели правды",
    originalTitle: "Truth Seekers",
    year: "2020",
    director: "Джим Филд Смит",
    localRating: 6.334,
    localVotes: 2539,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "BrightFalls",
    title: "Брайт Фоллс",
    originalTitle: "Bright Falls",
    year: "2010",
    director: "Филлип Ван",
    localRating: 6.985,
    localVotes: 2563,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "Glitch",
    title: "Сбой",
    originalTitle: "Glitch",
    year: "2015–2019",
    director: "Эмма Фриман",
    localRating: 6.279,
    localVotes: 2581,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "WolfCreek",
    title: "Волчья яма",
    originalTitle: "Wolf Creek",
    year: "2016–2017",
    director: "Тони Тилс",
    localRating: 6.405,
    localVotes: 2594,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "GhostWars",
    title: "Призрачные войны",
    originalTitle: "Ghost Wars",
    year: "2017–2018",
    director: "Саймон Бэрри",
    localRating: 5.583,
    localVotes: 2627,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "FirstKill",
    title: "Первое убийство",
    originalTitle: "First Kill",
    year: "2022",
    director: "Эрик Ла Салль",
    localRating: 5.965,
    localVotes: 2635,
    genres: ["ужасы", "драма", "мелодрама"]
  },
  {
    id: "TheCrowStairwayToHeaven",
    title: "Ворон",
    originalTitle: "The Crow: Stairway to Heaven",
    year: "1998–1999",
    director: "Алан Симмондс",
    localRating: 7.079,
    localVotes: 2665,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "LaZona",
    title: "Зона",
    originalTitle: "La zona",
    year: "2017–2018",
    director: "Хорхе Санчес‑Кабесудо",
    localRating: 6.333,
    localVotes: 2665,
    genres: ["ужасы", "боевик", "триллер"]
  },
  {
    id: "TheFades",
    title: "Призраки",
    originalTitle: "The Fades",
    year: "2011",
    director: "Фэррен Блэкберн",
    localRating: 6.934,
    localVotes: 2666,
    genres: ["ужасы", "фэнтези", "детектив"]
  },
  {
    id: "Goosebumps2023",
    title: "Ужастики",
    originalTitle: "Goosebumps",
    year: "2023–2025",
    director: "Роб Леттерман",
    localRating: 6.358,
    localVotes: 2709,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "TheTwilightZone1985",
    title: "Сумеречная зона",
    originalTitle: "The Twilight Zone",
    year: "1985–1989",
    director: "Робин Уорд, Чарльз Эйдмен",
    localRating: 7.505,
    localVotes: 2712,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "ElJardinDeBronce",
    title: "Бронзовый сад",
    originalTitle: "El Jardín de Bronce",
    year: "2017",
    director: "Эрнан А. Голфрид",
    localRating: 6.886,
    localVotes: 2714,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "Day5",
    title: "Пятый день",
    originalTitle: "Day 5",
    year: "2016–2017",
    director: "Дж. Диллон Флэнеган",
    localRating: 6.648,
    localVotes: 2721,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "Room104",
    title: "Комната 104",
    originalTitle: "Room 104",
    year: "2017–2020",
    director: "Патрик Брайс",
    localRating: 6.160,
    localVotes: 2817,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "ADropOfTrueBlood",
    title: "Капля настоящей крови",
    originalTitle: "A Drop of True Blood",
    year: "2010",
    director: "Барбара Топсеэ-Ротенборг",
    localRating: 7.816,
    localVotes: 2912,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "MyBabysittersAVampire",
    title: "Моя няня – вампир",
    originalTitle: "My Babysitter's a Vampire",
    year: "2011–2012",
    director: "Тибор Такач",
    localRating: 6.751,
    localVotes: 2957,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "BigWolfOnCampus",
    title: "Томми‑оборотень",
    originalTitle: "Big Wolf on Campus",
    year: "1999–2002",
    director: "Эрик Канюэль",
    localRating: 6.918,
    localVotes: 3085,
    genres: ["ужасы", "боевик", "комедия"]
  },
  {
    id: "TheBox2021",
    title: "Зло на допросе",
    originalTitle: "The Box",
    year: "2021",
    director: "Стив Шилл",
    localRating: 5.663,
    localVotes: 3086,
    genres: ["ужасы", "триллер", "криминал"]
  },
  {
    id: "TheBurningGirls",
    title: "Сожжённые девочки",
    originalTitle: "The Burning Girls",
    year: "2023",
    director: "Кирон Хоукс",
    localRating: 6.829,
    localVotes: 3095,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "Room207",
    title: "Комната 207",
    originalTitle: "Room 207",
    year: "2022",
    director: "Тамер Ашри",
    localRating: 6.731,
    localVotes: 3113,
    genres: ["триллер", "ужасы", "драма"]
  },
  {
    id: "AreYouAfraidOfTheDark2019",
    title: "Боишься ли ты темноты?",
    originalTitle: "Are You Afraid of the Dark?",
    year: "2019–2022",
    director: "Дин Израэлайт",
    localRating: 6.245,
    localVotes: 3191,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "TheEnfieldHaunting",
    title: "Призраки Энфилда",
    originalTitle: "The Enfield Haunting",
    year: "2015",
    director: "Кристоффер Нюхольм",
    localRating: 6.281,
    localVotes: 3193,
    genres: ["детектив", "ужасы"]
  },
  {
    id: "ShiningVale",
    title: "Сияющая долина",
    originalTitle: "Shining Vale",
    year: "2022–2023",
    director: "Лиз Фридлендер",
    localRating: 6.576,
    localVotes: 3279,
    genres: ["ужасы", "фэнтези", "комедия"]
  },
  {
    id: "ZoneBlanche",
    title: "Мёртвая зона",
    originalTitle: "Zone blanche",
    year: "2017–2019",
    director: "Жюльен Деспо",
    localRating: 6.561,
    localVotes: 3439,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "TheBaby",
    title: "Малыш",
    originalTitle: "The Baby",
    year: "2022",
    director: "Фараз Шариат",
    localRating: 6.380,
    localVotes: 3479,
    genres: ["ужасы", "комедия", "детектив"]
  },
  {
    id: "DevilInOhio",
    title: "Дьявол в Огайо",
    originalTitle: "Devil in Ohio",
    year: "2022",
    director: "Стивен А. Эделсон",
    localRating: 6.126,
    localVotes: 3505,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "MisticheskieIstorii",
    title: "Мистические истории",
    originalTitle: "",
    year: "2010–...",
    director: "Евгений Синельников",
    localRating: 5.765,
    localVotes: 3543,
    genres: ["драма", "детектив", "ужасы"]
  },
  {
    id: "TheTommyknockers1993",
    title: "Томминокеры",
    originalTitle: "The Tommyknockers",
    year: "1993",
    director: "Джон Пауэр",
    localRating: 5.686,
    localVotes: 3548,
    genres: ["ужасы", "фантастика"]
  },
  {
    id: "Damien",
    title: "Дэмиен",
    originalTitle: "Damien",
    year: "2016",
    director: "Ник Копус",
    localRating: 6.378,
    localVotes: 3572,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "NeBoysya",
    title: "Не бойся",
    originalTitle: "",
    year: "2020–2021",
    director: "Анна Васильева-Абрамович, Ксения Дементьева",
    localRating: 7.157,
    localVotes: 3581,
    genres: ["ужасы", "триллер"]
  },
  {
    id: "BladeTheSeries",
    title: "Блэйд",
    originalTitle: "Blade: The Series",
    year: "2006",
    director: "Алекс Чаппл",
    localRating: 5.284,
    localVotes: 3583,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "SalemsLot1979",
    title: "Салемские вампиры",
    originalTitle: "Salem's Lot",
    year: "1979",
    director: "Тоуб Хупер",
    localRating: 6.202,
    localVotes: 3782,
    genres: ["ужасы"]
  },
  {
    id: "Girigo",
    title: "Загадай свою смерть",
    originalTitle: "Girigo",
    year: "2026",
    director: "Пак Юн‑со",
    localRating: 7.025,
    localVotes: 3790,
    genres: ["ужасы"]
  },
  {
    id: "HunterStreet",
    title: "Хантер Стрит",
    originalTitle: "Hunter Street",
    year: "2017–2021",
    director: "Кайра Исако Смит, Даан Крейгтон",
    localRating: 7.603,
    localVotes: 3793,
    genres: ["ужасы", "боевик", "триллер"]
  },
  {
    id: "Millennium",
    title: "Тысячелетие",
    originalTitle: "Millennium",
    year: "1996–1999",
    director: "Лэнс Хенриксен, Меган Галлагер",
    localRating: 7.457,
    localVotes: 3800,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "PoltergeistTheLegacy",
    title: "Полтергейст: Наследие",
    originalTitle: "Poltergeist: The Legacy",
    year: "1996–1999",
    director: "Дерек де Линт, Мартин Камминс",
    localRating: 7.517,
    localVotes: 3921,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "Nightflyers",
    title: "Летящие сквозь ночь",
    originalTitle: "Nightflyers",
    year: "2018",
    director: "Эндрю Маккарти",
    localRating: 5.757,
    localVotes: 3933,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "TheChangeling",
    title: "Подменыш",
    originalTitle: "The Changeling",
    year: "2023",
    director: "Джонатан ван Тюллекен",
    localRating: 5.458,
    localVotes: 4099,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "RosemarysBaby2014",
    title: "Ребёнок Розмари",
    originalTitle: "Rosemary's Baby",
    year: "2014",
    director: "Агнешка Холланд",
    localRating: 6.050,
    localVotes: 4102,
    genres: ["триллер", "драма", "ужасы"]
  },
  {
    id: "TheTwilightZone2002",
    title: "Сумеречная зона",
    originalTitle: "The Twilight Zone",
    year: "2002–2003",
    director: "Форест Уитакер, Джун Б. Уайлд",
    localRating: 7.308,
    localVotes: 4117,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "FearItself",
    title: "Воплощение страха",
    originalTitle: "Fear Itself",
    year: "2008–2009",
    director: "Брэд Андерсон",
    localRating: 6.864,
    localVotes: 4294,
    genres: ["ужасы"]
  },
  {
    id: "LhommeQuiRit",
    title: "Человек, который смеётся",
    originalTitle: "L’homme qui rit",
    year: "1971",
    director: "Жан Кершброн",
    localRating: 7.753,
    localVotes: 4308,
    genres: ["ужасы", "драма", "история"]
  },
  {
    id: "LightAsAFeather",
    title: "Лёгкий как пёрышко",
    originalTitle: "Light as a Feather",
    year: "2018–2019",
    director: "Джиари МакЛеод",
    localRating: 6.365,
    localVotes: 4378,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "TheMidwichCuckoos",
    title: "Кукушки Мидвича",
    originalTitle: "The Midwich Cuckoos",
    year: "2022",
    director: "Дженнифер Перротт",
    localRating: 6.486,
    localVotes: 4412,
    genres: ["ужасы", "фантастика", "драма"]
  },
  {
    id: "HeirsOfTheNight",
    title: "Наследники ночи",
    originalTitle: "Heirs of the Night",
    year: "2019–...",
    director: "Дидерик Ван Ружен",
    localRating: 6.324,
    localVotes: 4476,
    genres: ["ужасы", "фэнтези"]
  },
  {
    id: "KingdomHospital",
    title: "Королевский госпиталь",
    originalTitle: "Kingdom Hospital",
    year: "2004",
    director: "Крэйг Р. Бэксли",
    localRating: 6.935,
    localVotes: 4485,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "TheMandelaCatalogue",
    title: "Каталог Манделы",
    originalTitle: "The Mandela Catalogue",
    year: "2021",
    director: "Торн Бэйкер, Алекс Кистер",
    localRating: 7.351,
    localVotes: 4544,
    genres: ["ужасы", "фэнтези", "детектив"]
  },
  {
    id: "NightmaresDreamscapes",
    title: "Ночные кошмары и фантастические видения: По рассказам Стивена Кинга",
    originalTitle: "Nightmares & Dreamscapes: From the Stories of Stephen King",
    year: "2006",
    director: "Роб Боумен",
    localRating: 6.722,
    localVotes: 4569,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "LiseysStory",
    title: "История Лизи",
    originalTitle: "Lisey's Story",
    year: "2021",
    director: "Пабло Ларраин",
    localRating: 6.057,
    localVotes: 4691,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "BrandNewCherryFlavor",
    title: "Новый вишнёвый вкус",
    originalTitle: "Brand New Cherry Flavor",
    year: "2021",
    director: "Ганджа Монтейру",
    localRating: 6.649,
    localVotes: 4707,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "Slasher",
    title: "Слэшер",
    originalTitle: "Slasher",
    year: "2016–2023",
    director: "Адам Макдональд",
    localRating: 6.125,
    localVotes: 4853,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "ThePassage",
    title: "Перерождение",
    originalTitle: "The Passage",
    year: "2019",
    director: "Джейсон Энслер",
    localRating: 6.384,
    localVotes: 4939,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "Ravenswood",
    title: "Рейвенсвуд",
    originalTitle: "Ravenswood",
    year: "2013–2014",
    director: "Рон Лагомарсино",
    localRating: 6.262,
    localVotes: 4956,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "TheOuterLimits",
    title: "За гранью возможного",
    originalTitle: "The Outer Limits",
    year: "1995–2002",
    director: "Марио Аццопарди",
    localRating: 7.667,
    localVotes: 5074,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "BloodTies",
    title: "Кровавые связи",
    originalTitle: "Blood Ties",
    year: "2007",
    director: "Джеймс Даннисон",
    localRating: 7.732,
    localVotes: 5164,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "DeathValley",
    title: "Долина смерти",
    originalTitle: "Death Valley",
    year: "2011",
    director: "Тексас Бэттл, Брайс Джонсон",
    localRating: 7.482,
    localVotes: 5166,
    genres: ["ужасы", "комедия"]
  },
  {
    id: "LunaElMisterioDeCalenda",
    title: "Полнолуние",
    originalTitle: "Luna, el misterio de Calenda",
    year: "2012–2013",
    director: "Хесус Родриго",
    localRating: 7.789,
    localVotes: 5235,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "HistoryOfHorror",
    title: "История хоррора с Элаем Ротом",
    originalTitle: "History of Horror",
    year: "2018",
    director: "Курт Сайенга",
    localRating: 7.811,
    localVotes: 5299,
    genres: ["документальный", "ужасы", "история"]
  },
  {
    id: "TheNewAddamsFamily",
    title: "Новая семейка Аддамс",
    originalTitle: "The New Addams Family",
    year: "1998–1999",
    director: "Джордж Эршбэймер",
    localRating: 6.820,
    localVotes: 5324,
    genres: ["ужасы", "комедия", "семейный"]
  },
  {
    id: "Bitten",
    title: "Укушенная",
    originalTitle: "Bitten",
    year: "2014–2016",
    director: "Джеймс Даннисон",
    localRating: 6.181,
    localVotes: 5342,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "DarkWeb",
    title: "Дарк/Веб",
    originalTitle: "Dark/Web",
    year: "2019",
    director: "Рокси Ших",
    localRating: 6.280,
    localVotes: 5394,
    genres: ["ужасы", "триллер", "детектив"]
  },
  {
    id: "TheDeadLands",
    title: "Мёртвые земли",
    originalTitle: "The Dead Lands",
    year: "2020",
    director: "Питер Бюргер",
    localRating: 6.194,
    localVotes: 5473,
    genres: ["ужасы", "боевик"]
  },
  {
    id: "TheWalkingDeadWebisodes",
    title: "Ходячие мертвецы: Вэб-эпизоды",
    originalTitle: "The Walking Dead: Webisodes",
    year: "2011–2018",
    director: "Анаис Лилит, Рик Отто",
    localRating: 7.189,
    localVotes: 5575,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "WynonnaEarp",
    title: "Вайнона Эрп",
    originalTitle: "Wynonna Earp",
    year: "2016–2021",
    director: "Паоло Барзмен",
    localRating: 6.502,
    localVotes: 5600,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "TheTwilightZone1959",
    title: "Сумеречная зона",
    originalTitle: "The Twilight Zone",
    year: "1959–1964",
    director: "Джон Брам",
    localRating: 8.313,
    localVotes: 5620,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "PosledniyRejv",
    title: "Последний рейв",
    originalTitle: "",
    year: "2019",
    director: "Никита Тамаров",
    localRating: 6.910,
    localVotes: 5673,
    genres: ["комедия", "триллер", "драма"]
  },
  {
    id: "Dimension404",
    title: "Измерение 404",
    originalTitle: "Dimension 404",
    year: "2017",
    director: "Мэттью Арнольд",
    localRating: 6.596,
    localVotes: 5697,
    genres: ["ужасы", "фантастика", "драма"]
  },
  {
    id: "Akgwi",
    title: "Злой дух",
    originalTitle: "Akgwi",
    year: "2023",
    director: "Ли Джон-ним",
    localRating: 7.848,
    localVotes: 5737,
    genres: ["ужасы", "детектив"]
  },
  {
    id: "Backrooms",
    title: "Закулисье",
    originalTitle: "Backrooms",
    year: "2022–...",
    director: "Кейн Парсонс, Aakash",
    localRating: 7.512,
    localVotes: 5804,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "ThePurge",
    title: "Судная ночь",
    originalTitle: "The Purge",
    year: "2018–2019",
    director: "Тара Николь Вейр",
    localRating: 6.274,
    localVotes: 5830,
    genres: ["ужасы", "фантастика", "боевик"]
  },
  {
    id: "Goosebumps1995",
    title: "Мурашки",
    originalTitle: "Goosebumps",
    year: "1995–1998",
    director: "Уильям Фрюит",
    localRating: 7.698,
    localVotes: 5886,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "BeingHuman2008",
    title: "Быть человеком",
    originalTitle: "Being Human",
    year: "2008–2013",
    director: "Ленора Кричлоу, Рассел Тови",
    localRating: 7.404,
    localVotes: 5903,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "SalemsLot2004",
    title: "Участь Салема",
    originalTitle: "Salem's Lot",
    year: "2004",
    director: "Микаэл Саломон",
    localRating: 6.589,
    localVotes: 5959,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "50StatesOfFright",
    title: "50 штатов страха",
    originalTitle: "50 States of Fright",
    year: "2020",
    director: "Скотт Бек",
    localRating: 6.009,
    localVotes: 6051,
    genres: ["ужасы"]
  },
  {
    id: "Them",
    title: "Они",
    originalTitle: "Them",
    year: "2021–...",
    director: "Крэйг Уильям Макнейлл",
    localRating: 6.489,
    localVotes: 6305,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "TheBondsman",
    title: "Охотник за головами",
    originalTitle: "The Bondsman",
    year: "2025",
    director: "Тор Фройденталь",
    localRating: 6.423,
    localVotes: 6396,
    genres: ["ужасы", "боевик", "криминал"]
  },
  {
    id: "666ParkAvenue",
    title: "Парк Авеню, 666",
    originalTitle: "666 Park Avenue",
    year: "2012",
    director: "Роберт Данкан МакНил",
    localRating: 6.711,
    localVotes: 6436,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "PennyDreadfulCityOfAngels",
    title: "Страшные сказки: Город ангелов",
    originalTitle: "Penny Dreadful: City of Angels",
    year: "2020",
    director: "Пако Кабесас",
    localRating: 6.458,
    localVotes: 6443,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "Monsterland",
    title: "Земля монстров",
    originalTitle: "Monsterland",
    year: "2020",
    director: "Дезире Акхаван",
    localRating: 5.978,
    localVotes: 6599,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "NOS4A2",
    title: "Страна Рождества",
    originalTitle: "NOS4A2",
    year: "2019–2020",
    director: "Джон Шибан",
    localRating: 6.761,
    localVotes: 6999,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "Outcast",
    title: "Изгой",
    originalTitle: "Outcast",
    year: "2016–2017",
    director: "Ховард Дойч",
    localRating: 6.562,
    localVotes: 7237,
    genres: ["ужасы", "драма"]
  },
  {
    id: "Dominion",
    title: "Доминион",
    originalTitle: "Dominion",
    year: "2014–2015",
    director: "Деран Сарафян",
    localRating: 6.208,
    localVotes: 7281,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "TheWhispers",
    title: "Шёпот",
    originalTitle: "The Whispers",
    year: "2015",
    director: "Чарльз Бисон",
    localRating: 6.693,
    localVotes: 7291,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "TheRiver",
    title: "Река",
    originalTitle: "The River",
    year: "2012",
    director: "Жауме Кольет-Серра",
    localRating: 6.784,
    localVotes: 7326,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "Teacup",
    title: "Чайная чашка",
    originalTitle: "Teacup",
    year: "2024",
    director: "Джон Хайамс",
    localRating: 5.994,
    localVotes: 7451,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "BeingHuman2011",
    title: "Быть человеком",
    originalTitle: "Being Human",
    year: "2011–2014",
    director: "Сэм Уитвер, Миган Рат",
    localRating: 7.450,
    localVotes: 7709,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "TheBoroughs",
    title: "Бороуз",
    originalTitle: "The Boroughs",
    year: "2026–...",
    director: "Альфред Молина, Элфри Вудард",
    localRating: 7.155,
    localVotes: 7867,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "SantaClaritaDiet",
    title: "Диета из Санта-Клариты",
    originalTitle: "Santa Clarita Diet",
    year: "2017–2019",
    director: "Дрю Бэрримор, Тимоти Олифант",
    localRating: 7.164,
    localVotes: 7900,
    genres: ["ужасы", "комедия", "драма"]
  },

  {
    id: "WidowsBay",
    title: "Бухта вдов",
    originalTitle: "Widow's Bay",
    year: "2026–...",
    director: "Мэттью Риз, Кингстон Руми Сауфвик",
    localRating: 7.571,
    localVotes: 7910,
    genres: ["ужасы", "драма", "комедия"]
  },
  {
    id: "InsideNo9",
    title: "Внутри девятого номера",
    originalTitle: "Inside No. 9",
    year: "2014–2024",
    director: "Рис Шерсмит, Стив Пембертон",
    localRating: 7.620,
    localVotes: 8002,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "BanggwaHuJeonjaenghwaldong",
    title: "Школа; Фронт",
    originalTitle: "Banggwa hu jeonjaenghwaldong",
    year: "2023",
    director: "Ким Ги-хэ, Квон Ын-бин",
    localRating: 7.597,
    localVotes: 8019,
    genres: ["фантастика", "драма", "боевик"]
  },
  {
    id: "WolfPack",
    title: "Волчья стая",
    originalTitle: "Wolf Pack",
    year: "2023",
    director: "Джозеф П. Женьер",
    localRating: 6.282,
    localVotes: 8128,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "Cryptid",
    title: "Крипота",
    originalTitle: "Cryptid",
    year: "2020",
    director: "Давид Беррон",
    localRating: 6.117,
    localVotes: 8164,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "AreYouAfraidOfTheDark1990",
    title: "Боишься ли ты темноты?",
    originalTitle: "Are You Afraid of the Dark?",
    year: "1990–2000",
    director: "Д.Дж. МакХейл",
    localRating: 7.890,
    localVotes: 8279,
    genres: ["ужасы", "фэнтези", "фантастика"]
  },
  {
    id: "GisaengsuDeoGeurei",
    title: "Паразит: Серый",
    originalTitle: "Gisaengsu: deo geurei",
    year: "2024",
    director: "Ён Сан-хо",
    localRating: 6.794,
    localVotes: 8293,
    genres: ["фантастика", "боевик", "ужасы"]
  },
  {
    id: "BagOfBones",
    title: "Мешок с костями",
    originalTitle: "Bag of Bones",
    year: "2011",
    director: "Мик Гэррис",
    localRating: 6.103,
    localVotes: 8339,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "VWars",
    title: "Вампирские войны",
    originalTitle: "V-Wars",
    year: "2019",
    director: "Брэд Тернер",
    localRating: 5.877,
    localVotes: 8402,
    genres: ["ужасы", "фантастика", "драма"]
  },
  {
    id: "TheStand1994",
    title: "Противостояние",
    originalTitle: "The Stand",
    year: "1994",
    director: "Мик Гэррис",
    localRating: 6.781,
    localVotes: 8435,
    genres: ["ужасы", "фантастика", "драма"]
  },
  {
    id: "Cassandra",
    title: "Кассандра",
    originalTitle: "Cassandra",
    year: "2025",
    director: "Беньямин Гуче",
    localRating: 6.844,
    localVotes: 8729,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "Helix",
    title: "Геном",
    originalTitle: "Helix",
    year: "2014–2015",
    director: "Стивен А. Эделсон",
    localRating: 6.603,
    localVotes: 8734,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "TheShining1997",
    title: "Сияние",
    originalTitle: "The Shining",
    year: "1997",
    director: "Ребекка Де Морнэй, Стивен Уэбер",
    localRating: 7.316,
    localVotes: 8996,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "HouseOfAnubis",
    title: "Обитель Анубиса",
    originalTitle: "House of Anubis",
    year: "2011–2013",
    director: "Брэд Кэвэна, Джейд Рэмси",
    localRating: 7.252,
    localVotes: 9020,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "BloodDrive",
    title: "Кровавая езда",
    originalTitle: "Blood Drive",
    year: "2017",
    director: "Алан Ричсон, Кристина Очоа",
    localRating: 7.144,
    localVotes: 9297,
    genres: ["ужасы", "фантастика", "боевик"]
  },
  {
    id: "TalesFromTheVoid",
    title: "Паранормальные истории",
    originalTitle: "Tales from the Void",
    year: "2024",
    director: "Франческо Лоскьяво",
    localRating: 5.833,
    localVotes: 9512,
    genres: ["ужасы"]
  },
  {
    id: "Zombety",
    title: "Зомбеты",
    originalTitle: "",
    year: "2021–...",
    director: "Назар Бердигулов, Арсен Исмоилов",
    localRating: 7.609,
    localVotes: 9536,
    genres: ["комедия", "ужасы", "драма"]
  },
  {
    id: "Origin",
    title: "Происхождение",
    originalTitle: "Origin",
    year: "2018",
    director: "Пол У. С. Андерсон",
    localRating: 6.779,
    localVotes: 9557,
    genres: ["ужасы", "фантастика", "детектив"]
  },
  {
    id: "Grotesquerie",
    title: "Гротеск",
    originalTitle: "Grotesquerie",
    year: "2024–...",
    director: "Макс Уинклер",
    localRating: 6.368,
    localVotes: 9673,
    genres: ["ужасы", "драма", "криминал"]
  },
  {
    id: "ChannelZero",
    title: "Нулевой канал",
    originalTitle: "Channel Zero",
    year: "2016–2018",
    director: "Крэйг Уильям Макнейлл",
    localRating: 6.408,
    localVotes: 9751,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "EyeCandy",
    title: "Приманка",
    originalTitle: "Eye Candy",
    year: "2015",
    director: "Нэйтан Хоуп",
    localRating: 6.982,
    localVotes: 9796,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "GyeongseongKeuricheo",
    title: "Кёнсонское существо",
    originalTitle: "Gyeongseong keuricheo",
    year: "2023–2024",
    director: "Пак Со-джун, Хан Со-хи",
    localRating: 7.465,
    localVotes: 9829,
    genres: ["ужасы", "мелодрама", "боевик"]
  },
  {
    id: "TheWalkingDeadWorldBeyond",
    title: "Ходячие мертвецы: Мир за пределами",
    originalTitle: "The Walking Dead: World Beyond",
    year: "2020–2021",
    director: "Лорен С. Яконелли",
    localRating: 4.805,
    localVotes: 9956,
    genres: ["ужасы", "фантастика", "драма"]
  },
  {
    id: "Riget",
    title: "Королевство",
    originalTitle: "Riget",
    year: "1994–2022",
    director: "Сёрен Пильмарк, Гита Нёрбю",
    localRating: 7.408,
    localVotes: 10207,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "DeadSet",
    title: "Тупик",
    originalTitle: "Dead Set",
    year: "2008",
    director: "Джейми Уинстон, Энди Найман",
    localRating: 7.279,
    localVotes: 10324,
    genres: ["ужасы", "драма"]
  },
  {
    id: "FromDuskTillDawnTheSeries",
    title: "От заката до рассвета",
    originalTitle: "From Dusk Till Dawn: The Series",
    year: "2014–2016",
    director: "Роберт Родригес",
    localRating: 6.214,
    localVotes: 10436,
    genres: ["боевик", "ужасы", "криминал"]
  },
  {
    id: "TheMidnightClub",
    title: "Клуб полуночников",
    originalTitle: "The Midnight Club",
    year: "2022",
    director: "Аксель Кэролин",
    localRating: 6.444,
    localVotes: 10466,
    genres: ["драма", "ужасы"]
  },
  {
    id: "TheBite",
    title: "Кусь",
    originalTitle: "The Bite",
    year: "2021",
    director: "Одра МакДональд, Стивен Паскуале",
    localRating: 7.208,
    localVotes: 10565,
    genres: ["ужасы", "комедия"]
  },
  {
    id: "30Monedas",
    title: "30 сребреников",
    originalTitle: "30 Monedas",
    year: "2020–2023",
    director: "Алекс де ла Иглесиа",
    localRating: 6.921,
    localVotes: 10673,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "TheMist",
    title: "Мгла",
    originalTitle: "The Mist",
    year: "2017",
    director: "Гай Ферленд",
    localRating: 5.190,
    localVotes: 10887,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "InTheFlesh",
    title: "Во плоти",
    originalTitle: "In the Flesh",
    year: "2013–2014",
    director: "Джонни Кэмпбелл",
    localRating: 7.677,
    localVotes: 10908,
    genres: ["ужасы", "драма", "комедия"]
  },
  {
    id: "TheDayOfTheTriffids",
    title: "День Триффидов",
    originalTitle: "The Day of the Triffids",
    year: "2009",
    director: "Ник Копус",
    localRating: 6.262,
    localVotes: 11035,
    genres: ["ужасы", "фантастика", "боевик"]
  },
  {
    id: "Daybreak",
    title: "Рассвет апокалипсиса",
    originalTitle: "Daybreak",
    year: "2019",
    director: "Майкл Патрик Джэнн",
    localRating: 6.186,
    localVotes: 11155,
    genres: ["комедия", "ужасы", "фантастика"]
  },
  {
    id: "Moonlight",
    title: "Лунный свет",
    originalTitle: "Moonlight",
    year: "2007–2008",
    director: "Фред Туа",
    localRating: 7.850,
    localVotes: 11576,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "TheOrder",
    title: "Тайный орден",
    originalTitle: "The Order",
    year: "2019–2020",
    director: "Матиас Хендл",
    localRating: 6.438,
    localVotes: 11664,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "IntoTheDark",
    title: "Навстречу тьме",
    originalTitle: "Into the Dark",
    year: "2018–2021",
    director: "Пол Дэвис",
    localRating: 6.646,
    localVotes: 11720,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "TheAddamsFamily1964",
    title: "Семейка Аддамс",
    originalTitle: "The Addams Family",
    year: "1964–1966",
    director: "Сидней Лэнфилд",
    localRating: 7.817,
    localVotes: 11860,
    genres: ["ужасы", "комедия", "семейный"]
  },
  {
    id: "MastersOfHorror",
    title: "Мастера ужасов",
    originalTitle: "Masters of Horror",
    year: "2005–2007",
    director: "Стюарт Гордон",
    localRating: 7.025,
    localVotes: 12193,
    genres: ["ужасы"]
  },
  {
    id: "Nyutopia",
    title: "Ньютопия",
    originalTitle: "Nyutopia",
    year: "2025",
    director: "Юн Сон-хён",
    localRating: 6.884,
    localVotes: 12345,
    genres: ["ужасы", "комедия", "боевик"]
  },
  {
    id: "Helstrom",
    title: "Хелстром",
    originalTitle: "Helstrom",
    year: "2020",
    director: "Сэнфорд Букставер",
    localRating: 6.431,
    localVotes: 12704,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "TheExorcist",
    title: "Изгоняющий дьявола",
    originalTitle: "The Exorcist",
    year: "2016–2018",
    director: "Альфонсо Эррера, Бен Дэниелс",
    localRating: 7.422,
    localVotes: 13094,
    genres: ["ужасы"]
  },
  {
    id: "DayOfTheDead",
    title: "День мертвецов",
    originalTitle: "Day of the Dead",
    year: "2021",
    director: "Стивен Костански",
    localRating: 5.939,
    localVotes: 13219,
    genres: ["ужасы", "боевик"]
  },
  {
    id: "BlackSummer",
    title: "Чёрное лето",
    originalTitle: "Black Summer",
    year: "2019–...",
    director: "Джон Хайамс",
    localRating: 6.467,
    localVotes: 13351,
    genres: ["ужасы", "боевик", "триллер"]
  },
  {
    id: "DeadOfSummer",
    title: "Мёртвое лето",
    originalTitle: "Dead of Summer",
    year: "2016",
    director: "Мик Гэррис",
    localRating: 5.915,
    localVotes: 13589,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "WitchesOfEastEnd",
    title: "Ведьмы Ист‑Энда",
    originalTitle: "Witches of East End",
    year: "2013–2014",
    director: "Аллан Аркуш",
    localRating: 7.078,
    localVotes: 13859,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "AmericanHorrorStories",
    title: "Американские истории ужасов",
    originalTitle: "American Horror Stories",
    year: "2021–...",
    director: "Макс Уинклер",
    localRating: 6.510,
    localVotes: 13896,
    genres: ["ужасы", "драма", "фэнтези"]
  },
  {
    id: "LockwoodAndCo",
    title: "Агентство «Локвуд и компания»",
    originalTitle: "Lockwood & Co.",
    year: "2023",
    director: "Руби Стоукс, Камерон Чепмен",
    localRating: 7.367,
    localVotes: 13984,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "TheInstitute",
    title: "Институт",
    originalTitle: "The Institute",
    year: "2025–...",
    director: "Джек Бендер",
    localRating: 6.621,
    localVotes: 14300,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "DekMai",
    title: "Девушка из ниоткуда",
    originalTitle: "Dek Mai",
    year: "2018–2021",
    director: "Комгрит Тривимон",
    localRating: 7.666,
    localVotes: 14341,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "Dakeuhol",
    title: "Тёмная дыра",
    originalTitle: "Dakeuhol",
    year: "2021",
    director: "Ким Ок-пин, Ли Джун-хёк",
    localRating: 7.189,
    localVotes: 14411,
    genres: ["ужасы", "боевик"]
  },
  {
    id: "Scream",
    title: "Крик",
    originalTitle: "Scream",
    year: "2015–2019",
    director: "Джеми Трэвис",
    localRating: 6.703,
    localVotes: 14453,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "TheThirdDay",
    title: "Третий день",
    originalTitle: "The Third Day",
    year: "2020",
    director: "Филиппа Лоуторп",
    localRating: 6.170,
    localVotes: 14762,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "ResidentEvil",
    title: "Обитель зла",
    originalTitle: "Resident Evil",
    year: "2022",
    director: "Рэйчел Голдберг",
    localRating: 4.360,
    localVotes: 14799,
    genres: ["ужасы", "фантастика", "боевик"]
  },
  {
    id: "StormOfTheCentury",
    title: "Буря столетия",
    originalTitle: "Storm of the Century",
    year: "1999",
    director: "Тим Дейли, Колм Фиор",
    localRating: 7.605,
    localVotes: 15042,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "HarpersIsland",
    title: "Остров Харпера",
    originalTitle: "Harper's Island",
    year: "2009",
    director: "Элейн Кэссиди, Кристофер Горам",
    localRating: 7.372,
    localVotes: 15355,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "LesRevenants",
    title: "На зов скорби",
    originalTitle: "Les revenants",
    year: "2012–2015",
    director: "Анн Косиньи, Клотильда Эм",
    localRating: 7.366,
    localVotes: 15412,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "TalesOfTheWalkingDead",
    title: "Истории ходячих мертвецов",
    originalTitle: "Tales of the Walking Dead",
    year: "2022",
    director: "Майкл Е. Сатраземис",
    localRating: 6.186,
    localVotes: 15431,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "SleepyHollow",
    title: "Сонная Лощина",
    originalTitle: "Sleepy Hollow",
    year: "2013–2017",
    director: "Рассел Ли Файн",
    localRating: 6.782,
    localVotes: 16126,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "OneuluiTamjeong",
    title: "Призрачный детектив",
    originalTitle: "Oneului tamjeong",
    year: "2018",
    director: "Чхве Даниель, Ли Джи-а",
    localRating: 7.428,
    localVotes: 16731,
    genres: ["детектив", "триллер", "ужасы"]
  },
  {
    id: "Marianne",
    title: "Марианна",
    originalTitle: "Marianne",
    year: "2019",
    director: "Сэмюэл Бодин",
    localRating: 6.740,
    localVotes: 16750,
    genres: ["ужасы", "драма"]
  },
  {
    id: "LovecraftCountry",
    title: "Страна Лавкрафта",
    originalTitle: "Lovecraft Country",
    year: "2020",
    director: "Дэниэл Сакхайм",
    localRating: 6.012,
    localVotes: 17232,
    genres: ["фантастика", "фэнтези", "детектив"]
  },
  {
    id: "TheReturned",
    title: "Возвращённые",
    originalTitle: "The Returned",
    year: "2015",
    director: "Дженнифер Гетцингер",
    localRating: 6.869,
    localVotes: 17297,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "Salem",
    title: "Салем",
    originalTitle: "Salem",
    year: "2014–2017",
    director: "Ник Копус",
    localRating: 6.869,
    localVotes: 19313,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "Dracula2013",
    title: "Дракула",
    originalTitle: "Dracula",
    year: "2013–2014",
    director: "Джонатан Риз Майерс, Джессика Де Гау",
    localRating: 7.132,
    localVotes: 19348,
    genres: ["ужасы", "драма", "мелодрама"]
  },
  {
    id: "SonTheGuest",
    title: "Гость",
    originalTitle: "Son: The Guest",
    year: "2018",
    director: "Ким Хон-сон",
    localRating: 7.884,
    localVotes: 19401,
    genres: ["ужасы", "детектив"]
  },
  {
    id: "Torchwood",
    title: "Торчвуд",
    originalTitle: "Torchwood",
    year: "2006–2011",
    director: "Энди Годдард",
    localRating: 7.865,
    localVotes: 19485,
    genres: ["ужасы", "фантастика", "боевик"]
  },
  {
    id: "Jiok",
    title: "Зов ада",
    originalTitle: "Jiok",
    year: "2021–2024",
    director: "Ён Сан‑хо",
    localRating: 6.156,
    localVotes: 19974,
    genres: ["фэнтези", "драма", "триллер"]
  },
  {
    id: "TheFollowing",
    title: "Последователи",
    originalTitle: "The Following",
    year: "2013–2015",
    director: "Кевин Бейкон, Шон Эшмор",
    localRating: 7.171,
    localVotes: 20228,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "Kingdom",
    title: "Королевство зомби",
    originalTitle: "Kingdom",
    year: "2019–2020",
    director: "Ким Сон-хун",
    localRating: 7.715,
    localVotes: 20508,
    genres: ["ужасы", "боевик", "триллер"]
  },
  {
    id: "RoseRed",
    title: "Особняк «Красная роза»",
    originalTitle: "Rose Red",
    year: "2002",
    director: "Нэнси Трэвис, Мэтт Кислар",
    localRating: 7.114,
    localVotes: 21184,
    genres: ["ужасы", "триллер", "детектив"]
  },
  {
    id: "WellingtonParanormal",
    title: "Паранормальный Веллингтон",
    originalTitle: "Wellington Paranormal",
    year: "2018–...",
    director: "Майк Миноуг, Карен О’Лири",
    localRating: 7.476,
    localVotes: 21612,
    genres: ["комедия", "ужасы", "детектив"]
  },
  {
    id: "SomethingVeryBadIsGoingToHappen",
    title: "У меня очень плохое предчувствие",
    originalTitle: "Something Very Bad Is Going to Happen",
    year: "2026",
    director: "Лиза Брюльманн",
    localRating: 7.015,
    localVotes: 21718,
    genres: ["ужасы", "драма"]
  },
  {
    id: "Archive81",
    title: "Архив 81",
    originalTitle: "Archive 81",
    year: "2022",
    director: "Ребекка Томас",
    localRating: 7.056,
    localVotes: 22396,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "Zomboat",
    title: "Зомболодка!",
    originalTitle: "Zomboat!",
    year: "2019",
    director: "Леа Брадехед, Райан Маккен",
    localRating: 7.276,
    localVotes: 22537,
    genres: ["ужасы", "фантастика", "комедия"]
  },
  {
    id: "Fortitude",
    title: "Фортитьюд",
    originalTitle: "Fortitude",
    year: "2015–2018",
    director: "Кирон Хоукс",
    localRating: 7.082,
    localVotes: 22589,
    genres: ["драма", "ужасы", "триллер"]
  },
  {
    id: "TheBeauty",
    title: "Красота",
    originalTitle: "The Beauty",
    year: "2026",
    director: "Майкл Аппендаль",
    localRating: 7.025,
    localVotes: 22643,
    genres: ["ужасы", "фантастика", "драма"]
  },
  {
    id: "Chapelwaite",
    title: "Чепелуэйт",
    originalTitle: "Chapelwaite",
    year: "2021",
    director: "Дэвид Фрэйзи",
    localRating: 6.753,
    localVotes: 22744,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "TheSecretCircle",
    title: "Тайный круг",
    originalTitle: "The Secret Circle",
    year: "2011–2012",
    director: "Лиз Фридлендер",
    localRating: 7.057,
    localVotes: 22976,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "ZNation",
    title: "Нация Z",
    originalTitle: "Z Nation",
    year: "2014–2018",
    director: "Абрам Кокс",
    localRating: 6.839,
    localVotes: 23204,
    genres: ["ужасы", "фантастика", "боевик"]
  },
  {
    id: "TheTwilightZone2019",
    title: "Сумеречная зона",
    originalTitle: "The Twilight Zone",
    year: "2019–2020",
    director: "Ана Лили Амирпур",
    localRating: 6.649,
    localVotes: 23381,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "Haven",
    title: "Тайны Хейвена",
    originalTitle: "Haven",
    year: "2010–2015",
    director: "Эмили Роуз, Лукас Брайант",
    localRating: 7.416,
    localVotes: 23560,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "Dracula2020",
    title: "Дракула",
    originalTitle: "Dracula",
    year: "2020",
    director: "Джонни Кэмпбелл",
    localRating: 6.600,
    localVotes: 24270,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "TalesFromTheCrypt",
    title: "Байки из склепа",
    originalTitle: "Tales from the Crypt",
    year: "1989–1996",
    director: "Рассел Малкэй",
    localRating: 7.681,
    localVotes: 27020,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "TheHauntingOfBlyManor",
    title: "Призраки усадьбы Блай",
    originalTitle: "The Haunting of Bly Manor",
    year: "2020",
    director: "Виктория Педретти, Бенджамин Эван Эйнсуорт",
    localRating: 7.302,
    localVotes: 29112,
    genres: ["драма", "мелодрама", "ужасы"]
  },
  {
    id: "LockeAndKey",
    title: "Лок и ключ",
    originalTitle: "Locke & Key",
    year: "2020–2022",
    director: "Марк Тондерай",
    localRating: 7.105,
    localVotes: 30125,
    genres: ["фэнтези", "триллер", "драма"]
  },
  {
    id: "InterviewWithTheVampire",
    title: "Интервью с вампиром",
    originalTitle: "Interview with the Vampire",
    year: "2022–...",
    director: "Джейкоб Андерсон, Сэм Рид",
    localRating: 7.578,
    localVotes: 31508,
    genres: ["фэнтези", "драма", "ужасы"]
  },
  {
    id: "SwampThing",
    title: "Болотная тварь",
    originalTitle: "Swamp Thing",
    year: "2019",
    director: "Деран Сарафян",
    localRating: 6.631,
    localVotes: 31729,
    genres: ["ужасы", "фантастика"]
  },
  {
    id: "MidnightMass",
    title: "Полуночная месса",
    originalTitle: "Midnight Mass",
    year: "2021",
    director: "Зак Гилфорд, Хеймиш Линклейтер",
    localRating: 7.166,
    localVotes: 32980,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "PrettyLittleLiarsOriginalSin",
    title: "Милые обманщицы: Первородный грех",
    originalTitle: "Pretty Little Liars: Original Sin",
    year: "2022–2024",
    director: "Бэйли Мэдисон, Чандлер Кинни",
    localRating: 7.151,
    localVotes: 34647,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "CabinetOfCuriosities",
    title: "Кабинет редкостей Гильермо дель Торо",
    originalTitle: "Guillermo del Toro's Cabinet of Curiosities",
    year: "2022",
    director: "Гильермо Наварро",
    localRating: 6.674,
    localVotes: 36041,
    genres: ["ужасы", "фэнтези", "фантастика"]
  },
  {
    id: "Chucky",
    title: "Чаки",
    originalTitle: "Chucky",
    year: "2021–2024",
    director: "Самир Реэм",
    localRating: 6.717,
    localVotes: 37566,
    genres: ["ужасы"]
  },
  {
    id: "WaywardPines",
    title: "Сосны",
    originalTitle: "Wayward Pines",
    year: "2015–2016",
    director: "Джефф Т. Томас",
    localRating: 6.943,
    localVotes: 37665,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "TheFallOfTheHouseOfUsher",
    title: "Падение дома Ашеров",
    originalTitle: "The Fall of the House of Usher",
    year: "2023",
    director: "Брюс Гринвуд, Карл Ламбли",
    localRating: 7.455,
    localVotes: 38332,
    genres: ["драма", "фэнтези", "ужасы"]
  },
  {
    id: "AlienEarth",
    title: "Чужой: Земля",
    originalTitle: "Alien: Earth",
    year: "2025",
    director: "Дана Гонсалес",
    localRating: 6.350,
    localVotes: 38395,
    genres: ["ужасы", "фантастика"]
  },
  {
    id: "TheTerror",
    title: "Террор",
    originalTitle: "The Terror",
    year: "2018–...",
    director: "Джаред Харрис, Дерек Мио",
    localRating: 7.198,
    localVotes: 39055,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "AshVsEvilDead",
    title: "Эш против Зловещих мертвецов",
    originalTitle: "Ash vs Evil Dead",
    year: "2015–2018",
    director: "Марк Бисли",
    localRating: 7.884,
    localVotes: 42540,
    genres: ["ужасы", "комедия", "фэнтези"]
  },
  {
    id: "Seuwiteuhom",
    title: "Милый дом",
    originalTitle: "Seuwiteuhom",
    year: "2020–2024",
    director: "Сон Ган, Ли Джин-ук",
    localRating: 7.409,
    localVotes: 44094,
    genres: ["ужасы", "боевик", "фантастика"]
  },
  {
    id: "TheLangoliers",
    title: "Лангольеры",
    originalTitle: "The Langoliers",
    year: "1995",
    director: "Патриша Уэттиг, Дин Стокуэлл",
    localRating: 7.504,
    localVotes: 44323,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "SergiyProtivNechisti",
    title: "Сергий против нечисти",
    originalTitle: "",
    year: "2022–...",
    director: "Кирилл Кузин",
    localRating: 6.861,
    localVotes: 44784,
    genres: ["комедия", "ужасы", "фэнтези"]
  },
  {
    id: "TheStand2020",
    title: "Противостояние",
    originalTitle: "The Stand",
    year: "2020",
    director: "Джош Бун",
    localRating: 6.406,
    localVotes: 45200,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "Siren",
    title: "Сирена",
    originalTitle: "Siren",
    year: "2018–2020",
    director: "Алекс Роу, Элин Пауэлл",
    localRating: 7.376,
    localVotes: 45885,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "BuffyTheVampireSlayer",
    title: "Баффи — истребительница вампиров",
    originalTitle: "Buffy the Vampire Slayer",
    year: "1997–2003",
    director: "Сара Мишель Геллар, Николас Брендон",
    localRating: 7.186,
    localVotes: 45907,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "Constantine",
    title: "Константин",
    originalTitle: "Constantine",
    year: "2014–2015",
    director: "Ромео Тироне",
    localRating: 6.971,
    localVotes: 46468,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "VanHelsing",
    title: "Ван Хельсинг",
    originalTitle: "Van Helsing",
    year: "2016–2021",
    director: "Джонатан Скарф",
    localRating: 7.040,
    localVotes: 50077,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "TheStrain",
    title: "Штамм",
    originalTitle: "The Strain",
    year: "2014–2017",
    director: "Дж. Майлз Дэйл",
    localRating: 6.898,
    localVotes: 53219,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "TheSandman",
    title: "Песочный человек",
    originalTitle: "The Sandman",
    year: "2022–2025",
    director: "Джейми Чайлдс",
    localRating: 7.060,
    localVotes: 55166,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "BatesMotel",
    title: "Мотель Бейтса",
    originalTitle: "Bates Motel",
    year: "2013–2017",
    director: "Вера Фармига, Фредди Хаймор",
    localRating: 7.623,
    localVotes: 57138,
    genres: ["триллер", "детектив", "ужасы"]
  },
  {
    id: "StanAgainstEvil",
    title: "Стэн против сил зла",
    originalTitle: "Stan Against Evil",
    year: "2016–2018",
    director: "Джон К. Макгинли, Джанет Вэрни",
    localRating: 7.309,
    localVotes: 57595,
    genres: ["ужасы", "фэнтези", "комедия"]
  },
  {
    id: "Creepshow",
    title: "Калейдоскоп ужасов",
    originalTitle: "Creepshow",
    year: "2019–...",
    director: "Кэри Джонс, Ханна Файрман",
    localRating: 7.163,
    localVotes: 58226,
    genres: ["ужасы", "фэнтези", "комедия"]
  },
  {
    id: "HemlockGrove",
    title: "Хемлок Гроув",
    originalTitle: "Hemlock Grove",
    year: "2013–2015",
    director: "Дэвид Стрейтон",
    localRating: 6.983,
    localVotes: 59219,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "It1990",
    title: "Оно",
    originalTitle: "It",
    year: "1990",
    director: "Томми Ли Уоллес",
    localRating: 7.024,
    localVotes: 61673,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "PennyDreadful",
    title: "Страшные сказки",
    originalTitle: "Penny Dreadful",
    year: "2014–2016",
    director: "Ева Грин, Тимоти Далтон",
    localRating: 7.436,
    localVotes: 66016,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "NancyDrew",
    title: "Нэнси Дрю",
    originalTitle: "Nancy Drew",
    year: "2019–2023",
    director: "Кеннеди Макманн, Леа Льюис",
    localRating: 7.428,
    localVotes: 66442,
    genres: ["ужасы", "драма", "детектив"]
  },
  {
    id: "FearTheWalkingDead",
    title: "Бойтесь ходячих мертвецов",
    originalTitle: "Fear the Walking Dead",
    year: "2015–2023",
    director: "Майкл Е. Сатраземис",
    localRating: 6.890,
    localVotes: 66744,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "ScreamQueens",
    title: "Королевы крика",
    originalTitle: "Scream Queens",
    year: "2015–2016",
    director: "Барбара Браун",
    localRating: 7.073,
    localVotes: 69972,
    genres: ["ужасы", "комедия", "детектив"]
  },
  {
    id: "ITWelcomeToDerry",
    title: "Оно: Добро пожаловать в Дерри",
    originalTitle: "IT: Welcome to Derry",
    year: "2025–...",
    director: "Тейлор Пейдж, Джован Адепо",
    localRating: 7.414,
    localVotes: 73992,
    genres: ["ужасы", "фэнтези"]
  },
  {
    id: "iZombie",
    title: "Я – зомби",
    originalTitle: "iZombie",
    year: "2015–2019",
    director: "Роуз Макайвер, Малкольм Гудвин",
    localRating: 7.611,
    localVotes: 80749,
    genres: ["детектив", "комедия", "криминал"]
  },
  {
    id: "CastleRock",
    title: "Касл-Рок",
    originalTitle: "Castle Rock",
    year: "2018–2019",
    director: "Билл Скарсгард, Андре Холланд",
    localRating: 7.193,
    localVotes: 82113,
    genres: ["триллер", "ужасы", "фэнтези"]
  },
  {
    id: "Preacher",
    title: "Проповедник",
    originalTitle: "Preacher",
    year: "2016–2019",
    director: "Доминик Купер, Джозеф Гилган",
    localRating: 7.473,
    localVotes: 85242,
    genres: ["ужасы", "фэнтези", "боевик"]
  },
  {
    id: "TheWalkingDeadDeadCity",
    title: "Ходячие мертвецы: Мертвый город",
    originalTitle: "The Walking Dead: Dead City",
    year: "2023–...",
    director: "Лорен Кохэн, Джеффри Дин Морган",
    localRating: 7.537,
    localVotes: 85809,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "AllOfUsAreDead",
    title: "Мы все мертвы",
    originalTitle: "Jigeum uri hakgyoneun",
    year: "2022–...",
    director: "Пак Чи-ху, Юн Чхан-ён",
    localRating: 7.235,
    localVotes: 87939,
    genres: ["ужасы", "боевик", "драма"]
  },
  {
    id: "TheHauntingOfHillHouse",
    title: "Призрак дома на холме",
    originalTitle: "The Haunting of Hill House",
    year: "2018",
    director: "Майк Флэнаган",
    localRating: 7.925,
    localVotes: 89847,
    genres: ["драма", "ужасы"]
  },
  {
    id: "ChillingAdventuresOfSabrina",
    title: "Леденящие душу приключения Сабрины",
    originalTitle: "Chilling Adventures of Sabrina",
    year: "2018–2020",
    director: "Кирнан Шипка, Росс Линч",
    localRating: 7.241,
    localVotes: 90296,
    genres: ["ужасы", "фэнтези", "триллер"]
  },
  {
    id: "Evil",
    title: "Зло",
    originalTitle: "Evil",
    year: "2019–2024",
    director: "Катя Херберс, Майк Колтер",
    localRating: 7.659,
    localVotes: 93795,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "TheWalkingDeadTheOnesWhoLive",
    title: "Ходячие мертвецы: Выжившие",
    originalTitle: "The Walking Dead: The Ones Who Live",
    year: "2024",
    director: "Эндрю Линкольн, Данай Гурира",
    localRating: 7.547,
    localVotes: 96741,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "WhatWeDoInTheShadows",
    title: "Чем мы заняты в тени",
    originalTitle: "What We Do in the Shadows",
    year: "2019–2024",
    director: "Яна Горская",
    localRating: 8.118,
    localVotes: 103521,
    genres: ["комедия", "ужасы"]
  },
  {
    id: "Yellowjackets",
    title: "Шершни",
    originalTitle: "Yellowjackets",
    year: "2021–...",
    director: "Мелани Лински, Тони Сайпресс",
    localRating: 7.454,
    localVotes: 105907,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "TheShannaraChronicles",
    title: "Хроники Шаннары",
    originalTitle: "The Shannara Chronicles",
    year: "2016–2017",
    director: "Остин Батлер, Ивана Бакеро",
    localRating: 7.217,
    localVotes: 111754,
    genres: ["ужасы", "фэнтези", "драма"]
  },
  {
    id: "TheWalkingDeadDarylDixon",
    title: "Ходячие мертвецы: Дэрил Диксон",
    originalTitle: "The Walking Dead: Daryl Dixon",
    year: "2023–...",
    director: "Дэниэл Персивал",
    localRating: 7.943,
    localVotes: 119959,
    genres: ["ужасы", "драма"]
  },
  {
    id: "TheOriginals",
    title: "Древние",
    originalTitle: "The Originals",
    year: "2013–2018",
    director: "Мэттью Хатингс",
    localRating: 8.064,
    localVotes: 177046,
    genres: ["фэнтези", "драма", "детектив"]
  },
  {
    id: "TheXFiles",
    title: "Секретные материалы",
    originalTitle: "The X Files",
    year: "1993–2018",
    director: "Ким Мэннерс",
    localRating: 8.232,
    localVotes: 189930,
    genres: ["фантастика", "детектив", "ужасы"]
  },
  {
    id: "Grimm",
    title: "Гримм",
    originalTitle: "Grimm",
    year: "2011–2017",
    director: "Норберто Барба",
    localRating: 7.891,
    localVotes: 225674,
    genres: ["фэнтези", "ужасы", "драма"]
  },
  {
    id: "Legacies",
    title: "Наследие",
    originalTitle: "Legacies",
    year: "2018–2022",
    director: "Даниэль Роуз Расселл, Мэттью Дэвис",
    localRating: 7.601,
    localVotes: 231002,
    genres: ["фэнтези", "драма", "детектив"]
  },
  {
    id: "TheLastOfUs",
    title: "Одни из нас",
    originalTitle: "The Last of Us",
    year: "2023–...",
    director: "Нил Дракманн",
    localRating: 7.711,
    localVotes: 259217,
    genres: ["фантастика", "драма", "ужасы"]
  },
  {
    id: "Haepiniseu",
    title: "Счастье",
    originalTitle: "Haepiniseu",
    year: "2021",
    director: "Ан Гиль-хо",
    localRating: 8.212,
    localVotes: 270119,
    genres: ["фантастика", "драма", "ужасы"]
  },
  {
    id: "AmericanHorrorStory",
    title: "Американская история ужасов",
    originalTitle: "American Horror Story",
    year: "2011–...",
    director: "Брэдли Букер",
    localRating: 7.914,
    localVotes: 285571,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "From",
    title: "Извне",
    originalTitle: "From",
    year: "2022–...",
    director: "Хэролд Перрино, Каталина Сандино Морено",
    localRating: 7.619,
    localVotes: 300055,
    genres: ["ужасы", "фантастика", "триллер"]
  },
  {
    id: "Hannibal",
    title: "Ганнибал",
    originalTitle: "Hannibal",
    year: "2013–2015",
    director: "Майкл Раймер",
    localRating: 8.072,
    localVotes: 322729,
    genres: ["детектив", "триллер", "криминал"]
  },
  {
    id: "TheVampireDiaries",
    title: "Дневники вампира",
    originalTitle: "The Vampire Diaries",
    year: "2009–2017",
    director: "Крис Грисмер",
    localRating: 7.968,
    localVotes: 343873,
    genres: ["драма", "фэнтези", "ужасы"]
  },
  {
    id: "BlackMirror",
    title: "Чёрное зеркало",
    originalTitle: "Black Mirror",
    year: "2011–...",
    director: "Тоби Хэйнс",
    localRating: 8.460,
    localVotes: 425530,
    genres: ["фантастика", "триллер", "драма"]
  },
  {
    id: "TheWitcher",
    title: "Ведьмак",
    originalTitle: "The Witcher",
    year: "2019–...",
    director: "Стивен Серджик",
    localRating: 7.073,
    localVotes: 498455,
    genres: ["фэнтези", "приключения", "драма"]
  },
  {
    id: "TheWalkingDead",
    title: "Ходячие мертвецы",
    originalTitle: "The Walking Dead",
    year: "2010–2022",
    director: "Грег Никотеро",
    localRating: 8.034,
    localVotes: 636984,
    genres: ["ужасы", "триллер", "драма"]
  },
  {
    id: "Supernatural",
    title: "Сверхъестественное",
    originalTitle: "Supernatural",
    year: "2005–2020",
    director: "Роберт Сингер",
    localRating: 8.246,
    localVotes: 638756,
    genres: ["фэнтези", "ужасы", "триллер"]
  },
  {
    id: "StrangerThings",
    title: "Очень странные дела",
    originalTitle: "Stranger Things",
    year: "2016–2025",
    director: "Мэтт Даффер",
    localRating: 8.357,
    localVotes: 843513,
    genres: ["ужасы", "фантастика", "фэнтези"]
  },
  {
    id: "Safehaven",
    title: "Сейфхэвен",
    originalTitle: "Safehaven",
    year: "2025–...",
    director: "Кааре Эндрюс",
    localRating: null,
    localVotes: null,
    genres: ["ужасы", "триллер"]
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

    let list = series.filter(item =>
      normalize(item.title).includes(term)
    );

    if (sortBy === 'localRating') {
      list = [...list].sort((a, b) => b.localRating - a.localRating);
    } else if (sortBy === 'localVotes') {
      list = [...list].sort((a, b) => b.localVotes - a.localVotes);
    } else if (sortBy === 'year') {
      list = [...list].sort((a, b) => yearToNumber(b.year) - yearToNumber(a.year));
    } else if (sortBy === 'genres') {
      list = [...list].sort((a, b) => (a.genres[0] || '').localeCompare(b.genres[0] || ''));
    }

    render(list);
  }

  searchInput?.addEventListener('input', applyFilters);
  sortSelect?.addEventListener('change', applyFilters);

  applyFilters();
});