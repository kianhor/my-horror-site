document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('kinoGrid');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  if (!grid) return;

  const kino = 
  [
  {
    id: 'TheShining',
    title: 'Сияние',
    originalTitle: 'The Shining',
    year: 1980,
    director: 'Стэнли Кубрик',
    localRating: 7.787,
    localVotes: 311092,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheSilenceOfTheLambs',
    title: 'Молчание ягнят',
    originalTitle: 'The Silence of the Lambs',
    year: 1990,
    director: 'Джонатан Демме',
    localRating: 8.332,
    localVotes: 594343,
    genres: ['триллер', 'детектив', 'криминал']
  },
  {
    id: 'Alien',
    title: 'Чужой',
    originalTitle: 'Alien',
    year: 1979,
    director: 'Ридли Скотт',
    localRating: 8.079,
    localVotes: 351949,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Psycho',
    title: 'Психо',
    originalTitle: 'Psycho',
    year: 1960,
    director: 'Альфред Хичкок',
    localRating: 8.078,
    localVotes: 149649,
    genres: ['триллер', 'ужасы', 'детектив']
  },
  {
    id: 'Aliens',
    title: 'Чужие',
    originalTitle: 'Aliens',
    year: 1986,
    director: 'Джеймс Кэмерон',
    localRating: 8.063,
    localVotes: 287417,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'InterviewWithTheVampire',
    title: 'Интервью с вампиром',
    originalTitle: 'Interview with the Vampire: The Vampire Chronicles',
    year: 1994,
    director: 'Нил Джордан',
    localRating: 7.948,
    localVotes: 253029,
    genres: ['драма', 'ужасы', 'фэнтези']
  },
  {
    id: 'TheThing1982',
    title: 'Нечто',
    originalTitle: 'The Thing',
    year: 1982,
    director: 'Джон Карпентер',
    localRating: 7.940,
    localVotes: 172042,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'SleepyHollow',
    title: 'Сонная лощина',
    originalTitle: 'Sleepy Hollow',
    year: 1999,
    director: 'Тим Бёртон',
    localRating: 7.929,
    localVotes: 344080,
    genres: ['триллер', 'фэнтези', 'ужасы']
  },
  {
    id: 'TheOthers',
    title: 'Другие',
    originalTitle: 'The Others',
    year: 2001,
    director: 'Алехандро Аменабар',
    localRating: 7.920,
    localVotes: 326237,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Viy',
    title: 'Вий',
    originalTitle: 'Вий',
    year: 1967,
    director: 'Георгий Кропачев',
    localRating: 7.919,
    localVotes: 159660,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'Predator',
    title: 'Хищник',
    originalTitle: 'Predator',
    year: 1987,
    director: 'Джон Мактирнан',
    localRating: 7.899,
    localVotes: 260908,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'Constantine',
    title: 'Константин Повелитель тьмы',
    originalTitle: 'Constantine',
    year: 2005,
    director: 'Фрэнсис Лоуренс',
    localRating: 7.880,
    localVotes: 605773,
    genres: ['фэнтези', 'ужасы', 'боевик']
  },
  {
    id: 'IAmLegend',
    title: 'Я легенда',
    originalTitle: 'I Am Legend',
    year: 2007,
    director: 'Фрэнсис Лоуренс',
    localRating: 7.874,
    localVotes: 568945,
    genres: ['ужасы', 'драма', 'боевик']
  },
  {
    id: 'Saw',
    title: 'Пила Игра на выживание',
    originalTitle: 'Saw',
    year: 2004,
    director: 'Джеймс Ван',
    localRating: 7.835,
    localVotes: 207191,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'CabinetOfDrCaligari',
    title: 'Кабинет доктора Калигари',
    originalTitle: 'Das Cabinet des Dr. Caligari',
    year: 1920,
    director: 'Роберт Вине',
    localRating: 7.801,
    localVotes: 16742,
    genres: ['триллер', 'ужасы', 'детектив']
  },
  {
    id: 'Freaks',
    title: 'Уродцы',
    originalTitle: 'Freaks',
    year: 1932,
    director: 'Тод Браунинг',
    localRating: 7.798,
    localVotes: 18832,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'FromDuskTillDawn',
    title: 'От заката до рассвета',
    originalTitle: 'From Dusk Till Dawn',
    year: 1995,
    director: 'Роберт Родригес',
    localRating: 7.796,
    localVotes: 317303,
    genres: ['криминал', 'ужасы', 'боевик']
  },
  {
    id: 'BramStokersDracula',
    title: 'Дракула',
    originalTitle: 'Bram Stoker\'s Dracula',
    year: 1992,
    director: 'Фрэнсис Форд Коппола',
    localRating: 7.782,
    localVotes: 152755,
    genres: ['ужасы', 'фэнтези', 'мелодрама']
  },
  {
    id: 'Misery',
    title: 'Мизери',
    originalTitle: 'Misery',
    year: 1990,
    director: 'Роб Райнер',
    localRating: 7.746,
    localVotes: 99491,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: '1408',
    title: '1408',
    originalTitle: '1408',
    year: 2007,
    director: 'Микаэль Хофстрём',
    localRating: 7.703,
    localVotes: 263424,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'SweeneyTodd',
    title: 'Свини Тодд Демон парикмахер с Флит-стрит',
    originalTitle: 'Sweeney Todd: The Demon Barber of Fleet Street',
    year: 2007,
    director: 'Тим Бёртон',
    localRating: 7.699,
    localVotes: 193918,
    genres: ['мюзикл', 'ужасы', 'триллер']
  },
  {
    id: 'TheExorcist',
    title: 'Изгоняющий дьявола',
    originalTitle: 'The Exorcist',
    year: 1973,
    director: 'Уильям Фридкин',
    localRating: 7.689,
    localVotes: 76464,
    genres: ['ужасы']
  },
  {
    id: 'Possession',
    title: 'Одержимая',
    originalTitle: 'Possession',
    year: 1981,
    director: 'Анджей Жулавский',
    localRating: 7.687,
    localVotes: 19566,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'ANightmareOnElmStreet',
    title: 'Кошмар на улице Вязов',
    originalTitle: 'A Nightmare on Elm Street',
    year: 1984,
    director: 'Уэс Крэйвен',
    localRating: 7.673,
    localVotes: 123634,
    genres: ['ужасы']
  },
  {
    id: 'RosemarysBaby',
    title: 'Ребёнок Розмари',
    originalTitle: 'Rosemary\'s Baby',
    year: 1968,
    director: 'Роман Полански',
    localRating: 7.650,
    localVotes: 52791,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheFrighteners',
    title: 'Страшилы',
    originalTitle: 'The Frighteners',
    year: 1996,
    director: 'Питер Джексон',
    localRating: 7.637,
    localVotes: 49087,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'TheOmen',
    title: 'Омен',
    originalTitle: 'The Omen',
    year: 1976,
    director: 'Ричард Доннер',
    localRating: 7.635,
    localVotes: 43341,
    genres: ['ужасы']
  },
  {
    id: 'ArmyOfDarkness',
    title: 'Зловещие мертвецы 3 Армия тьмы',
    originalTitle: 'Army of Darkness',
    year: 1992,
    director: 'Сэм Рэйми',
    localRating: 7.633,
    localVotes: 61104,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'EvilDeadII',
    title: 'Зловещие мертвецы 2',
    originalTitle: 'Evil Dead II',
    year: 1987,
    director: 'Сэм Рэйми',
    localRating: 7.631,
    localVotes: 57967,
    genres: ['ужасы', 'комедия', 'фэнтези']
  },
  {
    id: 'UnheimlichPerfekteFreunde',
    title: 'Волшебное зеркало или двойные неприятности',
    originalTitle: 'Unheimlich perfekte Freunde',
    year: 2019,
    director: 'Маркус Розенмюллер',
    localRating: 7.616,
    localVotes: 32916,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'TheMist',
    title: 'Мгла',
    originalTitle: 'The Mist',
    year: 2007,
    director: 'Фрэнк Дарабонт',
    localRating: 7.604,
    localVotes: 267057,
    genres: ['ужасы', 'триллер', 'фантастика']
  },
  {
    id: 'Nosferatu1922',
    title: 'Насферату Симфония ужаса',
    originalTitle: 'Nosferatu, eine Symphonie des Grauens',
    year: 1922,
    director: 'Фридрих Вильгельм Мурнау',
    localRating: 7.602,
    localVotes: 27613,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'Repulsion',
    title: 'Отвращения',
    originalTitle: 'Repulsion',
    year: 1965,
    director: 'Роман Полански',
    localRating: 7.595,
    localVotes: 18825,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'PitchBlack',
    title: 'Чёрная дыра',
    originalTitle: 'Pitch Black',
    year: 1999,
    director: 'Дэвид Туи',
    localRating: 7.586,
    localVotes: 159911,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'AnAmericanCrime',
    title: 'Американское преступление',
    originalTitle: 'An American Crime',
    year: 2007,
    director: 'Томми О’Хейвер',
    localRating: 7.571,
    localVotes: 20943,
    genres: ['ужасы', 'драма', 'криминал']
  },
  {
    id: 'ResidentEvil',
    title: 'Обитель зла',
    originalTitle: 'Resident Evil',
    year: 2002,
    director: 'Пол У. С. Андерсон',
    localRating: 7.562,
    localVotes: 300226,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'DanceOfTheVampires',
    title: 'Бал вампиров',
    originalTitle: 'Dance of the Vampires',
    year: 1967,
    director: 'Роман Полански',
    localRating: 7.562,
    localVotes: 14336,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'Orca',
    title: 'Смерть среди айсбергов',
    originalTitle: 'Orca, the Killer Whale',
    year: 1977,
    director: 'Майкл Андерсон',
    localRating: 7.544,
    localVotes: 16210,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Mindhunters',
    title: 'Охотники за разумом',
    originalTitle: 'Mindhunters',
    year: 2004,
    director: 'Ренни Харлин',
    localRating: 7.543,
    localVotes: 202260,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'TheBirds',
    title: 'Птицы',
    originalTitle: 'The Birds',
    year: 1963,
    director: 'Альфред Хичкок',
    localRating: 7.540,
    localVotes: 46192,
    genres: ['ужасы', 'драма', 'мелодрама']
  },
  {
    id: 'JacobsLadder',
    title: 'Лестница Иакова',
    originalTitle: 'Jacob\'s Ladder',
    year: 1990,
    director: 'Эдриан Лайн',
    localRating: 7.540,
    localVotes: 43141,
    genres: ['драма', 'ужасы', 'детектив']
  },
  {
    id: 'Pi',
    title: 'ПИ',
    originalTitle: 'Pi',
    year: 1997,
    director: 'Даррен Аронофски',
    localRating: 7.513,
    localVotes: 44673,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'FromHell',
    title: 'Из ада',
    originalTitle: 'From Hell',
    year: 2001,
    director: 'Альберт Хьюз',
    localRating: 7.491,
    localVotes: 92382,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'FinalDestination',
    title: 'Пункт назначения',
    originalTitle: 'Final Destination',
    year: 2000,
    director: 'Джеймс Вон',
    localRating: 7.469,
    localVotes: 197873,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'WhatWeDoInTheShadows',
    title: 'Реальные упыри',
    originalTitle: 'What We Do in the Shadows',
    year: 2014,
    director: 'Джемейн Клемент',
    localRating: 7.455,
    localVotes: 469733,
    genres: ['комедия', 'ужасы']
  },
  {
    id: '28DaysLater',
    title: '28 дней спустя',
    originalTitle: '28 Days Later...',
    year: 2002,
    director: 'Дэнни Бойл',
    localRating: 7.423,
    localVotes: 292931,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Zombieland',
    title: 'Добро пожаловать в Зомбилэнд',
    originalTitle: 'Zombieland',
    year: 2009,
    director: 'Рубен Фляйшер',
    localRating: 7.420,
    localVotes: 405023,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'AngelHeart',
    title: 'Сердце ангела',
    originalTitle: 'Angel Heart',
    year: 1987,
    director: 'Алан Паркер',
    localRating: 7.382,
    localVotes: 97113,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Obsession2025',
    title: 'Обсессия',
    originalTitle: 'Obsession',
    year: 2025,
    director: 'Карри Баркер',
    localRating: 7.364,
    localVotes: 45532,
    genres: ['ужасы']
  },
  {
    id: 'Gremlins',
    title: 'Гремлины',
    originalTitle: 'Gremlins',
    year: 1984,
    director: 'Джо Данте',
    localRating: 7.361,
    localVotes: 85398,
    genres: ['ужасы', 'комедия', 'фантастика']
  },
  {
    id: 'SawII',
    title: 'Пила 2',
    originalTitle: 'Saw II',
    year: 2005,
    director: 'Даррен Линн Боусман',
    localRating: 7.359,
    localVotes: 121413,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Frankenstein1931',
    title: 'Франкенштейн',
    originalTitle: 'Frankenstein',
    year: 1931,
    director: 'Джеймс Уэйл',
    localRating: 7.352,
    localVotes: 10323,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'TheFly',
    title: 'Муха',
    originalTitle: 'The Fly',
    year: 1986,
    director: 'Дэвид Кроненберг',
    localRating: 7.342,
    localVotes: 62012,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'LePacteDesLoups',
    title: 'Братство волка',
    originalTitle: 'Le Pacte des loups',
    year: 2001,
    director: 'Кристоф Ган',
    localRating: 7.341,
    localVotes: 61907,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'TheConjuring',
    title: 'Заклятие',
    originalTitle: 'The Conjuring',
    year: 2013,
    director: 'Джеймс Ван',
    localRating: 7.334,
    localVotes: 286299,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'TheSkeletonKey',
    title: 'Ключ от всех дверей',
    originalTitle: 'The Skeleton Key',
    year: 2005,
    director: 'Иэн Софтли',
    localRating: 7.328,
    localVotes: 226671,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Jaws',
    title: 'Челюсти',
    originalTitle: 'Jaws',
    year: 1975,
    director: 'Стивен Спилберг',
    localRating: 7.324,
    localVotes: 113501,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TwinPeaksFireWalkWithMe',
    title: 'Твин Пикс Сквозь огонь',
    originalTitle: 'Twin Peaks: Fire Walk with Me',
    year: 1992,
    director: 'Дэвид Линч',
    localRating: 7.306,
    localVotes: 60994,
    genres: ['детектив', 'триллер', 'ужасы']
  },
  {
    id: 'It2017',
    title: 'Оно',
    originalTitle: 'It',
    year: 2017,
    director: 'Андрес Мускетти',
    localRating: 7.301,
    localVotes: 557960,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'TheFaculty',
    title: 'Факультет',
    originalTitle: 'The Faculty',
    year: 1998,
    director: 'Роберт Родригес',
    localRating: 7.296,
    localVotes: 173049,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'ShaunOfTheDead',
    title: 'Зомби по имени Шон',
    originalTitle: 'Shaun of the Dead',
    year: 2004,
    director: 'Эдгар Райт',
    localRating: 7.295,
    localVotes: 200617,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Blade',
    title: 'Блэйд',
    originalTitle: 'Blade',
    year: 1998,
    director: 'Стивен Норрингтон',
    localRating: 7.292,
    localVotes: 163041,
    genres: ['боевик', 'ужасы', 'фэнтези']
  },
  {
    id: '1114',
    title: '11,14',
    originalTitle: '11:14',
    year: 2011,
    director: 'Грег Маркс',
    localRating: 7.284,
    localVotes: 154970,
    genres: ['триллер', 'детектив', 'криминал']
  },
  {
    id: 'Eraserhead',
    title: 'Голова-ластик',
    originalTitle: 'Eraserhead',
    year: 1977,
    director: 'Дэвид Линч',
    localRating: 7.284,
    localVotes: 43336,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Scream',
    title: 'Крик',
    originalTitle: 'Scream',
    year: 1996,
    director: 'Уэс Крэйвен',
    localRating: 7.278,
    localVotes: 141865,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Tremors',
    title: 'Дрожь земли',
    originalTitle: 'Tremors',
    year: 1989,
    director: 'Рон Андервуд',
    localRating: 7.273,
    localVotes: 76359,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'RepoTheGeneticOpera',
    title: 'Генетическая опера',
    originalTitle: 'Repo! The Genetic Opera',
    year: 2008,
    director: 'Даррен Линн Боусман',
    localRating: 7.268,
    localVotes: 14525,
    genres: ['мюзикл', 'ужасы', 'фантастика']
  },
  {
    id: 'DoctorSleep',
    title: 'Доктор Сон',
    originalTitle: 'Doctor Sleep',
    year: 2019,
    director: 'Майк Флэнаган',
    localRating: 7.265,
    localVotes: 156156,
    genres: ['триллер', 'драма', 'фэнтези']
  },
  {
    id: 'DawnOfTheDead2004',
    title: 'Рассвет мертвецов',
    originalTitle: 'Dawn of the Dead',
    year: 2004,
    director: 'Зак Снайдер',
    localRating: 7.262,
    localVotes: 111475,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Braindead',
    title: 'Живая мертвечина',
    originalTitle: 'Braindead',
    year: 1992,
    director: 'Питер Джексон',
    localRating: 7.257,
    localVotes: 28947,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'TheRing',
    title: 'Звонок',
    originalTitle: 'The Ring',
    year: 2002,
    director: 'Гор Вербински',
    localRating: 7.249,
    localVotes: 179671,
    genres: ['ужасы']
  },
  {
    id: 'Wolf',
    title: 'Волк',
    originalTitle: 'Wolf',
    year: 1994,
    director: 'Майк Николс',
    localRating: 7.248,
    localVotes: 29271,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Busanhaeng',
    title: 'Поезд в Пусан',
    originalTitle: 'Busanhaeng',
    year: 2016,
    director: 'Ён Сан-хо',
    localRating: 7.236,
    localVotes: 854669,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Otesánek',
    title: 'Полено',
    originalTitle: 'Otesánek',
    year: 2000,
    director: 'Ян Шванкмайер',
    localRating: 7.226,
    localVotes: 10150,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Cube',
    title: 'Куб',
    originalTitle: 'Cube',
    year: 1997,
    director: 'Винченцо Натали',
    localRating: 7.218,
    localVotes: 130243,
    genres: ['фантастика', 'триллер', 'ужасы']
  },
  {
    id: 'Delicatessen',
    title: 'Деликатесы',
    originalTitle: 'Delicatessen',
    year: 1990,
    director: 'Марк Каро',
    localRating: 7.208,
    localVotes: 12590,
    genres: ['комедия', 'криминал', 'драма']
  },
  {
    id: 'TheReturnOfTheLivingDead',
    title: 'Возвращение живых мертвецов',
    originalTitle: 'The Return of the Living Dead',
    year: 1984,
    director: 'Дэн О’Бэннон',
    localRating: 7.199,
    localVotes: 16622,
    genres: ['ужасы', 'комедия', 'фантастика']
  },
  {
    id: 'TheEvilDead',
    title: 'Господин оформитель',
    originalTitle: 'The Evil Dead',
    year: 1988,
    director: 'Сэм Рэйми',
    localRating: 7.196,
    localVotes: 62374,
    genres: ['ужасы']
  },
  {
    id: 'GospodinOformitel',
    title: 'Зловещие мертвецы',
    originalTitle: 'Господин оформитель',
    year: 1981,
    director: 'Олег Тепцов',
    localRating: 7.191,
    localVotes: 16593,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'Carrie',
    title: 'Кэрри',
    originalTitle: 'Carrie',
    year: 1976,
    director: 'Брайан Де Пальма',
    localRating: 7.182,
    localVotes: 45395,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'SilentHill',
    title: 'Сайлент Хилл',
    originalTitle: 'Silent Hill',
    year: 2006,
    director: 'Кристоф Ган',
    localRating: 7.180,
    localVotes: 265054,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'TheExorcismOfEmilyRose',
    title: '6 демонов Эмили Роуз',
    originalTitle: 'The Exorcism of Emily Rose',
    year: 2005,
    director: 'Скотт Дерриксон',
    localRating: 7.176,
    localVotes: 100579,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'CEstArrivePresDeChezVous',
    title: 'Человек кусает собаку',
    originalTitle: 'C\'est arrivé près de chez vous',
    year: 1992,
    director: 'Реми Бельво',
    localRating: 7.175,
    localVotes: 10296,
    genres: ['криминал', 'драма', 'комедия']
  },
  {
    id: 'MaryShelleysFrankenstein',
    title: 'Франкенштейн',
    originalTitle: 'Mary Shelley\'s Frankenstein',
    year: 1994,
    director: 'Кеннет Брана',
    localRating: 7.174,
    localVotes: 17731,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'NightOfTheLivingDead1968',
    title: 'Ночь живых мертвецов',
    originalTitle: 'Night of the Living Dead',
    year: 1968,
    director: 'Джордж А. Ромеро',
    localRating: 7.172,
    localVotes: 26335,
    genres: ['ужасы']
  },
  {
    id: 'Christine',
    title: 'Кристина',
    originalTitle: 'Christine',
    year: 1983,
    director: 'Джон Карпентер',
    localRating: 7.158,
    localVotes: 31277,
    genres: ['ужасы']
  },
  {
    id: 'TheLighthouse',
    title: 'Маяк',
    originalTitle: 'The Lighthouse',
    year: 2019,
    director: 'Роберт Эггерс',
    localRating: 7.157,
    localVotes: 125304,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'CatsEye',
    title: 'Кошачий глаз',
    originalTitle: 'Cat\'s Eye',
    year: 1985,
    director: 'Льюис Тиг',
    localRating: 7.155,
    localVotes: 11146,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Flatliners',
    title: 'Коматозники',
    originalTitle: 'Flatliners',
    year: 1990,
    director: 'Джоэл Шумахер',
    localRating: 7.152,
    localVotes: 25866,
    genres: ['фантастика', 'ужасы']
  },
  {
    id: 'TheDeadZone',
    title: 'Мёртвая зона',
    originalTitle: 'The Dead Zone',
    year: 1983,
    director: 'Дэвид Кроненберг',
    localRating: 7.152,
    localVotes: 19556,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'GetOut',
    title: 'Прочь',
    originalTitle: 'Get Out',
    year: 2017,
    director: 'Джордан Пил',
    localRating: 7.150,
    localVotes: 316801,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Dracula1931',
    title: 'Дракула',
    originalTitle: 'Dracula',
    year: 1931,
    director: 'Тод Браунинг',
    localRating: 7.143,
    localVotes: 14847,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'KingKong1976',
    title: 'Кинг-Конг',
    originalTitle: 'King Kong',
    year: 1976,
    director: 'Джон Гиллермин',
    localRating: 7.135,
    localVotes: 24823,
    genres: ['ужасы', 'приключения']
  },
  {
    id: 'Marrowbone',
    title: 'Роковое число 23',
    originalTitle: 'Marrowbone',
    year: 2006,
    director: 'Серхио Х. Санчес',
    localRating: 7.124,
    localVotes: 217212,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheNumber23',
    title: 'Обитель теней',
    originalTitle: 'The Number 23',
    year: 2017,
    director: 'Джоэл Шумахер',
    localRating: 7.124,
    localVotes: 148960,
    genres: ['триллер', 'детектив', 'ужасы']
  },
  {
    id: 'TheWickerMan',
    title: 'Плетёный человек',
    originalTitle: 'The Wicker Man',
    year: 1973,
    director: 'Робин Харди',
    localRating: 7.115,
    localVotes: 16082,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'FinalDestination2',
    title: 'Пункт назначения 2',
    originalTitle: 'Final Destination 2',
    year: 2003,
    director: 'Дэвид Р. Эллис',
    localRating: 7.114,
    localVotes: 119345,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ANightmareOnElmStreet3',
    title: 'Кошмар на улице Вязов 3 Воины сна',
    originalTitle: 'A Nightmare on Elm Street 3: Dream Warriors',
    year: 1988,
    director: 'Чак Рассел',
    localRating: 7.113,
    localVotes: 32547,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'TheyLive',
    title: 'Чужие среди нас',
    originalTitle: 'They Live',
    year: 1988,
    director: 'Джон Карпентер',
    localRating: 7.098,
    localVotes: 47964,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'ElEspinazoDelDiablo',
    title: 'Хребет дьявола',
    originalTitle: 'El espinazo del diablo',
    year: 2001,
    director: 'Гильермо дель Торо',
    localRating: 7.097,
    localVotes: 115818,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TalesFromTheCryptDemonKnight',
    title: 'Байки из склепа Демон ночи',
    originalTitle: 'Tales from the Crypt: Demon Knight',
    year: 1995,
    director: 'Эрнест Р. Дикерсон',
    localRating: 7.096,
    localVotes: 13325,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'ElOrfanato',
    title: 'Приют',
    originalTitle: 'El orfanato',
    year: 2007,
    director: 'Хуан Антонио Байона',
    localRating: 7.091,
    localVotes: 104263,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'KingKong1933',
    title: 'Кинг-Конг',
    originalTitle: 'King Kong',
    year: 1933,
    director: 'Мериан К. Купер',
    localRating: 7.091,
    localVotes: 14911,
    genres: ['ужасы', 'приключения']
  },
  {
    id: 'BaladaTristeDeTrompeta',
    title: 'Печальная баллада для трубы',
    originalTitle: 'Balada triste de trompeta',
    year: 2010,
    director: 'Алекс де ла Иглесиа',
    localRating: 7.090,
    localVotes: 10157,
    genres: ['ужасы', 'драма', 'комедия']
  },
  {
    id: 'Grindhouse',
    title: 'Грайндхаус',
    originalTitle: 'Grindhouse',
    year: 2007,
    director: 'Роберт Родригес',
    localRating: 7.083,
    localVotes: 59323,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Dastur',
    title: 'Дастур',
    originalTitle: 'Дәстүр',
    year: 2023,
    director: 'Куаныш Бейсек',
    localRating: 7.079,
    localVotes: 192333,
    genres: ['ужасы']
  },
  {
    id: 'TheConjuring2',
    title: 'Заклятие 2',
    originalTitle: 'The Conjuring 2',
    year: 2016,
    director: 'Джеймс Ван',
    localRating: 7.075,
    localVotes: 131507,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Gothika',
    title: 'Готика',
    originalTitle: 'Gothika',
    year: 2003,
    director: 'Матьё Кассовиц',
    localRating: 7.072,
    localVotes: 131425,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'DawnOfTheDead1978',
    title: 'Рассвет мертвецов',
    originalTitle: 'Dawn of the Dead',
    year: 1978,
    director: 'Джордж А. Ромеро',
    localRating: 7.068,
    localVotes: 17462,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'HellboyII',
    title: 'Хеллбой 2: Золотая армия',
    originalTitle: 'Hellboy II: The Golden Army',
    year: 2008,
    director: 'Гильермо дель Торо',
    localRating: 7.062,
    localVotes: 114254,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'PetSematary',
    title: 'Кладбище домашних животных',
    originalTitle: 'Pet Sematary',
    year: 1989,
    director: 'Мэри Ламберт',
    localRating: 7.060,
    localVotes: 59417,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Screamers',
    title: 'Крикуны',
    originalTitle: 'Screamers',
    year: 1995,
    director: 'Кристиан Дюге',
    localRating: 7.060,
    localVotes: 35011,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Mirrors',
    title: 'Зеркала',
    originalTitle: 'Mirrors',
    year: 2008,
    director: 'Александр Ажа',
    localRating: 7.057,
    localVotes: 196106,
    genres: ['ужасы']
  },
  {
    id: 'Pandorum',
    title: 'Пандорум',
    originalTitle: 'Pandorum',
    year: 2009,
    director: 'Кристиан Альварт',
    localRating: 7.057,
    localVotes: 123079,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Ravenous',
    title: 'Людоед',
    originalTitle: 'Ravenous',
    year: 1999,
    director: 'Антония Бёрд',
    localRating: 7.056,
    localVotes: 19744,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'BuriedAlive',
    title: 'Похороненные заживо',
    originalTitle: 'Buried Alive',
    year: 1990,
    director: 'Фрэнк Дарабонт',
    localRating: 7.054,
    localVotes: 11358,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheCell',
    title: 'Клетка',
    originalTitle: 'The Cell',
    year: 2000,
    director: 'Тарсем Сингх',
    localRating: 7.052,
    localVotes: 56086,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'HideAndSeek',
    title: 'Игра в прятки',
    originalTitle: 'Hide and Seek',
    year: 2005,
    director: 'Джон Полсон',
    localRating: 7.045,
    localVotes: 59535,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Hellraiser',
    title: 'Восставший из ада',
    originalTitle: 'Hellraiser',
    year: 1987,
    director: 'Клайв Баркер',
    localRating: 7.041,
    localVotes: 43433,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'SawIII',
    title: 'Пила 3',
    originalTitle: 'Saw III',
    year: 2006,
    director: 'Даррен Линн Боусман',
    localRating: 7.038,
    localVotes: 98008,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'WhatLiesBeneath',
    title: 'Что скрывает ложь',
    originalTitle: 'What Lies Beneath',
    year: 2000,
    director: 'Роберт Земекис',
    localRating: 7.033,
    localVotes: 55731,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Weapons',
    title: 'Орудия',
    originalTitle: 'Weapons',
    year: 2025,
    director: 'Зак Креггер',
    localRating: 7.032,
    localVotes: 124856,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Hellboy',
    title: 'Хэллбой Герой из пекла',
    originalTitle: 'Hellboy',
    year: 2004,
    director: 'Гильермо дель Торо',
    localRating: 7.029,
    localVotes: 126958,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'Warlock',
    title: 'Чернокнижник',
    originalTitle: 'Warlock',
    year: 1988,
    director: 'Стив Майнер',
    localRating: 7.028,
    localVotes: 18721,
    genres: ['фэнтези', 'ужасы', 'приключения']
  },
  {
    id: 'Prometheus',
    title: 'Прометей',
    originalTitle: 'Prometheus',
    year: 2012,
    director: 'Ридли Скотт',
    localRating: 7.022,
    localVotes: 370663,
    genres: ['фантастика', 'ужасы']
  },
  {
    id: 'ReAnimator',
    title: 'Реаниматор',
    originalTitle: 'Re-Animator',
    year: 1985,
    director: 'Стюарт Гордон',
    localRating: 7.022,
    localVotes: 20117,
    genres: ['ужасы', 'фантастика', 'комедия']
  },
  {
    id: 'WorldWarZ',
    title: 'Война миров Z',
    originalTitle: 'World War Z',
    year: 2013,
    director: 'Марк Форстер',
    localRating: 7.019,
    localVotes: 463511,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheHouseThatJackBuilt',
    title: 'Дом, который построил Джек',
    originalTitle: 'The House That Jack Built',
    year: 2018,
    director: 'Ларс фон Триер',
    localRating: 7.017,
    localVotes: 316249,
    genres: ['триллер', 'драма', 'криминал']
  },
  {
    id: 'TheWitches',
    title: 'Ведьмы',
    originalTitle: 'The Witches',
    year: 1989,
    director: 'Николас Роуг',
    localRating: 7.017,
    localVotes: 15518,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'QueenOfTheDamned',
    title: 'Королева проклятых',
    originalTitle: 'Queen of the Damned',
    year: 2002,
    director: 'Майкл Раймер',
    localRating: 7.016,
    localVotes: 44430,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'GingerSnaps',
    title: 'Оборотень',
    originalTitle: 'Ginger Snaps',
    year: 2000,
    director: 'Джон Фоусет',
    localRating: 7.007,
    localVotes: 14472,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Halloween',
    title: 'Хэллоуин',
    originalTitle: 'Halloween',
    year: 1978,
    director: 'Джон Карпентер',
    localRating: 6.999,
    localVotes: 54095,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'DeepBlueSea',
    title: 'Глубокое синее море',
    originalTitle: 'Deep Blue Sea',
    year: 1999,
    director: 'Ренни Харлин',
    localRating: 6.998,
    localVotes: 91527,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'DraculaLoveTale',
    title: 'Дракула',
    originalTitle: 'Dracula: A Love Tale',
    year: 2025,
    director: 'Люк Бессон',
    localRating: 6.997,
    localVotes: 419640,
    genres: ['ужасы', 'мелодрама']
  },
  {
    id: 'TheUninvited',
    title: 'Незваные',
    originalTitle: 'The Uninvited',
    year: 2008,
    director: 'Чарли Гард',
    localRating: 6.997,
    localVotes: 123637,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheHunger',
    title: 'Голод',
    originalTitle: 'The Hunger',
    year: 1983,
    director: 'Тони Скотт',
    localRating: 6.997,
    localVotes: 12793,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'GhostShip',
    title: 'Корабль‑призрак',
    originalTitle: 'Ghost Ship',
    year: 2002,
    director: 'Стив Бек',
    localRating: 6.995,
    localVotes: 117365,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'DamienOmenII',
    title: 'Омен 2: Демиэн',
    originalTitle: 'Damien: Omen II',
    year: 1978,
    director: 'Дон Тейлор',
    localRating: 6.994,
    localVotes: 11790,
    genres: ['ужасы']
  },
  {
    id: 'ScaryMovie',
    title: 'Очень страшное кино',
    originalTitle: 'Scary Movie',
    year: 2000,
    director: 'Кинен Айвори Уайанс',
    localRating: 6.992,
    localVotes: 243858,
    genres: ['комедия', 'ужасы']
  },
  {
    id: 'Predator2',
    title: 'Хищник 2',
    originalTitle: 'Predator 2',
    year: 1990,
    director: 'Стивен Хопкинс',
    localRating: 6.986,
    localVotes: 84524,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Ringu',
    title: 'Звонок',
    originalTitle: 'Ringu',
    year: 1998,
    director: 'Хидэо Наката',
    localRating: 6.983,
    localVotes: 76518,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'eXistenZ',
    title: 'Экзистенция',
    originalTitle: 'eXistenZ',
    year: 1999,
    director: 'Дэвид Кроненберг',
    localRating: 6.981,
    localVotes: 51348,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Rec',
    title: 'Репортаж',
    originalTitle: '[Rec]',
    year: 2007,
    director: 'Жауме Балагеро',
    localRating: 6.980,
    localVotes: 81329,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'ElviraMistressOfTheDark',
    title: 'Эльвира — повелительница тьмы',
    originalTitle: 'Elvira: Mistress of the Dark',
    year: 1988,
    director: 'Джеймс Синьорелли',
    localRating: 6.980,
    localVotes: 65802,
    genres: ['комедия', 'фэнтези', 'ужасы']
  },
  {
    id: 'Poltergeist',
    title: 'Полтергейст',
    originalTitle: 'Poltergeist',
    year: 1982,
    director: 'Тоуб Хупер',
    localRating: 6.970,
    localVotes: 20535,
    genres: ['ужасы']
  },
  {
    id: 'InTheMouthOfMadness',
    title: 'В пасти безумия',
    originalTitle: 'In the Mouth of Madness',
    year: 1994,
    director: 'Джон Карпентер',
    localRating: 6.961,
    localVotes: 25622,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Videodrome',
    title: 'Видеодром',
    originalTitle: 'Videodrome',
    year: 1982,
    director: 'Дэвид Кроненберг',
    localRating: 6.959,
    localVotes: 20951,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'NightOfTheLivingDead',
    title: 'Ночь живых мертвецов',
    originalTitle: 'Night of the Living Dead',
    year: 1990,
    director: 'Том Савини',
    localRating: 6.952,
    localVotes: 12119,
    genres: ['ужасы']
  },
  {
    id: '28WeeksLater',
    title: '28 недель спустя',
    originalTitle: '28 Weeks Later',
    year: 2007,
    director: 'Хуан Карлос Фреснадильо',
    localRating: 6.944,
    localVotes: 173113,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'Venom',
    title: 'Веном',
    originalTitle: 'Venom',
    year: 2018,
    director: 'Рубен Фляйшер',
    localRating: 6.943,
    localVotes: 974482,
    genres: ['фантастика', 'боевик', 'ужасы']
  },
  {
    id: 'LetTheRightOneIn',
    title: 'Впусти меня',
    originalTitle: 'Låt den rätte komma in',
    year: 2008,
    director: 'Томас Альфредсон',
    localRating: 6.935,
    localVotes: 40092,
    genres: ['ужасы', 'драма', 'мелодрама']
  },
  {
    id: 'ReadyOrNot',
    title: 'Я иду искать',
    originalTitle: 'Ready or Not',
    year: 2019,
    director: 'Мэтт Беттинелли‑Олпин',
    localRating: 6.929,
    localVotes: 23627,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'AnAmericanWerewolfInLondon',
    title: 'Американский оборотень в Лондоне',
    originalTitle: 'An American Werewolf in London',
    year: 1981,
    director: 'Джон Лэндис',
    localRating: 6.917,
    localVotes: 12788,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'EdenLake',
    title: 'Райское озеро',
    originalTitle: 'Eden Lake',
    year: 2008,
    director: 'Джеймс Уоткинс',
    localRating: 6.916,
    localVotes: 91160,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Cloverfield',
    title: 'Монстро',
    originalTitle: 'Cloverfield',
    year: 2007,
    director: 'Мэтт Ривз',
    localRating: 6.909,
    localVotes: 147324,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'KaraDub',
    title: 'Чёрная магия',
    originalTitle: 'Кара дуба',
    year: 2025,
    director: 'Сапар Сайназаров',
    localRating: 6.909,
    localVotes: 36095,
    genres: ['ужасы']
  },
  {
    id: 'AlienRomulus',
    title: 'Чужой: Ромул',
    originalTitle: 'Alien: Romulus',
    year: 2024,
    director: 'Феде Альварес',
    localRating: 6.908,
    localVotes: 121444,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheGift',
    title: 'Дар',
    originalTitle: 'The Gift',
    year: 2000,
    director: 'Сэм Рэйми',
    localRating: 6.893,
    localVotes: 25596,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'SawX',
    title: 'Пила 10',
    originalTitle: 'Saw X',
    year: 2023,
    director: 'Кевин Гротерт',
    localRating: 6.891,
    localVotes: 100070,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'EventHorizon',
    title: 'Сквозь горизонт',
    originalTitle: 'Event Horizon',
    year: 1997,
    director: 'Пол У. С. Андерсон',
    localRating: 6.890,
    localVotes: 77862,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'BoneTomahawk',
    title: 'Костяной томагавк',
    originalTitle: 'Bone Tomahawk',
    year: 2015,
    director: 'С. Крэйг Залер',
    localRating: 6.887,
    localVotes: 147751,
    genres: ['ужасы', 'вестерн']
  },
  {
    id: 'HollowMan',
    title: 'Невидимка',
    originalTitle: 'Hollow Man',
    year: 2000,
    director: 'Пол Верховен',
    localRating: 6.883,
    localVotes: 61630,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'Alien3',
    title: 'Чужой 3',
    originalTitle: 'Alien³',
    year: 1992,
    director: 'Дэвид Финчер',
    localRating: 6.878,
    localVotes: 114499,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'SawIV',
    title: 'Пила 4',
    originalTitle: 'Saw IV',
    year: 2007,
    director: 'Даррен Линн Боусман',
    localRating: 6.872,
    localVotes: 80483,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'WarmBodies',
    title: 'Тепло наших тел',
    originalTitle: 'Warm Bodies',
    year: 2013,
    director: 'Джонатан Левин',
    localRating: 6.864,
    localVotes: 159188,
    genres: ['ужасы', 'мелодрама', 'комедия']
  },
  {
    id: 'TheWraith',
    title: 'Дух мщения',
    originalTitle: 'The Wraith',
    year: 1986,
    director: 'Майк Марвин',
    localRating: 6.863,
    localVotes: 10711,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Gokseong',
    title: 'Вопль',
    originalTitle: 'Gokseong',
    year: 2016,
    director: 'На Хон‑джин',
    localRating: 6.862,
    localVotes: 19381,
    genres: ['триллер', 'ужасы', 'драма']
  },
  {
    id: 'SixSouls',
    title: 'Убежище',
    originalTitle: '6 Souls',
    year: 2010,
    director: 'Монс Морлинд',
    localRating: 6.861,
    localVotes: 170435,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'LastNightInSoho',
    title: 'Прошлой ночью в Сохо',
    originalTitle: 'Last Night in Soho',
    year: 2021,
    director: 'Эдгар Райт',
    localRating: 6.852,
    localVotes: 133752,
    genres: ['драма', 'триллер', 'ужасы']
  },
  {
    id: 'TastaimynAuSeni',
    title: 'Тастаймын‑ау сени',
    originalTitle: 'Тастаймын‑ау сені',
    year: 2024,
    director: 'Анвар Матжанов',
    localRating: 6.852,
    localVotes: 52534,
    genres: ['комедия', 'ужасы']
  },
  {
    id: 'Gremlins2',
    title: 'Гремлины 2: Новенькая партия',
    originalTitle: 'Gremlins 2: The New Batch',
    year: 1990,
    director: 'Джо Данте',
    localRating: 6.852,
    localVotes: 23031,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'BladeII',
    title: 'Blade 2',
    originalTitle: 'Blade II',
    year: 2002,
    director: 'Гильермо дель Торо',
    localRating: 6.849,
    localVotes: 103712,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'Stigmata',
    title: 'Стигматы',
    originalTitle: 'Stigmata',
    year: 1999,
    director: 'Руперт Уэйнрайт',
    localRating: 6.845,
    localVotes: 16140,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheCrowSalvation',
    title: 'Ворон 3',
    originalTitle: 'The Crow: Salvation',
    year: 1999,
    director: 'Бхарат Наллури',
    localRating: 6.843,
    localVotes: 18430,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'AQuietPlace',
    title: 'Тихое место',
    originalTitle: 'A Quiet Place',
    year: 2018,
    director: 'Джон Красински',
    localRating: 6.842,
    localVotes: 379636,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'SnakeSource',
    title: 'Змеиный источник',
    originalTitle: '',
    year: 1997,
    director: 'Николай Лебедев',
    localRating: 6.841,
    localVotes: 27529,
    genres: ['ужасы', 'триллер', 'мелодрама']
  },
  {
    id: 'StirOfEchoes',
    title: 'Отзвуки эха',
    originalTitle: 'Stir of Echoes',
    year: 1999,
    director: 'Дэвид Кепп',
    localRating: 6.840,
    localVotes: 11926,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'SawV',
    title: 'Пила 5',
    originalTitle: 'Saw V',
    year: 2008,
    director: 'Дэвид Хэкл',
    localRating: 6.838,
    localVotes: 78746,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'BloodyHell',
    title: 'Адский ад',
    originalTitle: 'Bloody Hell',
    year: 2020,
    director: 'Алистер Грирсон',
    localRating: 6.833,
    localVotes: 83727,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'TheLastHouseOnTheLeft',
    title: 'Последний дом слева',
    originalTitle: 'The Last House on the Left',
    year: 2009,
    director: 'Дэннис Илиадис',
    localRating: 6.827,
    localVotes: 80004,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheMothmanProphecies',
    title: 'Человек‑мотылёк',
    originalTitle: 'The Mothman Prophecies',
    year: 2001,
    director: 'Марк Пеллингтон',
    localRating: 6.815,
    localVotes: 63922,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheCraft',
    title: 'Колдовство',
    originalTitle: 'The Craft',
    year: 1996,
    director: 'Эндрю Флеминг',
    localRating: 6.814,
    localVotes: 28167,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Spawn',
    title: 'Spawn',
    originalTitle: 'Spawn',
    year: 1997,
    director: 'Марк А. З. Диппе',
    localRating: 6.813,
    localVotes: 46235,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'SawVI',
    title: 'Пила 6',
    originalTitle: 'Saw VI',
    year: 2009,
    director: 'Кевин Гротерт',
    localRating: 6.812,
    localVotes: 75252,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Pamyo',
    title: 'Проклятие: Зов могилы',
    originalTitle: 'Pamyo',
    year: 2024,
    director: 'Чан Джэ‑хён',
    localRating: 6.811,
    localVotes: 115039,
    genres: ['ужасы']
  },
  {
    id: 'Insidious',
    title: 'Астрал',
    originalTitle: 'Insidious',
    year: 2010,
    director: 'Джеймс Ван',
    localRating: 6.805,
    localVotes: 305180,
    genres: ['ужасы']
  },
  {
    id: 'BirdBox',
    title: 'Птичий короб',
    originalTitle: 'Bird Box',
    year: 2018,
    director: 'Сюзанна Бир',
    localRating: 6.801,
    localVotes: 151795,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'Touch',
    title: 'Прикосновение',
    originalTitle: '',
    year: 1992,
    director: 'Альберт С. Мкртчян',
    localRating: 6.799,
    localVotes: 25062,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Scream2',
    title: 'Крик 2',
    originalTitle: 'Scream 2',
    year: 1997,
    director: 'Уэс Крэйвен',
    localRating: 6.795,
    localVotes: 69728,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Vampires',
    title: 'Вампиры',
    originalTitle: 'Vampires',
    year: 1998,
    director: 'Джон Карпентер',
    localRating: 6.793,
    localVotes: 41316,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'Ghostland',
    title: 'Шаман',
    originalTitle: 'Ghostland',
    year: 2024,
    director: 'Паскаль Ложье',
    localRating: 6.782,
    localVotes: 136693,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'GhostlandRU',
    title: 'Страна призраков',
    originalTitle: '',
    year: 2017,
    director: 'Михаил Мерзликин',
    localRating: 6.782,
    localVotes: 36576,
    genres: ['ужасы']
  },
  {
    id: 'TheDescent',
    title: 'Спуск',
    originalTitle: 'The Descent',
    year: 2005,
    director: 'Нил Маршалл',
    localRating: 6.779,
    localVotes: 123305,
    genres: ['ужасы', 'триллер', 'приключения']
  },
  {
    id: 'JeepersCreepers',
    title: 'Джиперс Криперс',
    originalTitle: 'Jeepers Creepers',
    year: 2001,
    director: 'Виктор Сальва',
    localRating: 6.774,
    localVotes: 103953,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'CryWolf',
    title: 'Волк‑одиночка',
    originalTitle: 'Cry Wolf',
    year: 2005,
    director: 'Джефф Уодлоу',
    localRating: 6.774,
    localVotes: 11390,
    genres: ['ужасы']
  },
  {
    id: 'TheCovenant',
    title: 'Сделка с дьяволом',
    originalTitle: 'The Covenant',
    year: 2006,
    director: 'Ренни Харлин',
    localRating: 6.773,
    localVotes: 79136,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'DeepRising',
    title: 'Подъём с глубины',
    originalTitle: 'Deep Rising',
    year: 1998,
    director: 'Стивен Соммерс',
    localRating: 6.769,
    localVotes: 21831,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'ResidentEvilApocalypse',
    title: 'Обитель зла 2: Апокалипсис',
    originalTitle: 'Resident Evil: Apocalypse',
    year: 2004,
    director: 'Александр Уитт',
    localRating: 6.768,
    localVotes: 150467,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'Backrooms',
    title: 'Закулисье реальности',
    originalTitle: 'Backrooms',
    year: 2026,
    director: 'Кейн Парсонс',
    localRating: 6.772,
    localVotes: 60576,
    genres: ['ужасы']
  },
  {
    id: 'Pathology',
    title: 'Патология',
    originalTitle: 'Pathology',
    year: 2007,
    director: 'Марк Шолерманн',
    localRating: 6.764,
    localVotes: 30697,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'Thinner',
    title: 'Худеющий',
    originalTitle: 'Thinner',
    year: 1996,
    director: 'Том Холланд',
    localRating: 6.763,
    localVotes: 28060,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'BringHerBack',
    title: 'Верни её из мёртвых',
    originalTitle: 'Bring Her Back',
    year: 2025,
    director: 'Дастан Дамиров',
    localRating: 6.754,
    localVotes: 17482,
    genres: ['ужасы']
  },
  {
    id: 'HalfLight',
    title: 'Полусвет',
    originalTitle: 'Half Light',
    year: 2006,
    director: 'Дэнни Филиппу',
    localRating: 6.753,
    localVotes: 154258,
    genres: ['ужасы']
  },
  {
    id: 'Ifrit2',
    title: 'Ифрит 2: Новая история',
    originalTitle: 'Ифрит 2. Жаңа оқиға',
    year: 2025,
    director: 'Крэйг Розенберг',
    localRating: 6.752,
    localVotes: 12785,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'LeDaim',
    title: 'Оленья кожа',
    originalTitle: 'Le daim',
    year: 2019,
    director: 'Кантен Дюпьё',
    localRating: 6.750,
    localVotes: 14751,
    genres: ['драма', 'комедия', 'криминал']
  },
  {
    id: 'TheAwakening',
    title: 'Экстрасенс',
    originalTitle: 'The Awakening',
    year: 2011,
    director: 'Ник Мерфи',
    localRating: 6.749,
    localVotes: 91431,
    genres: ['триллер', 'драма', 'ужасы']
  },
  {
    id: 'ChildsPlay',
    title: 'Детские игры',
    originalTitle: 'Childs Play',
    year: 1988,
    director: 'Том Холланд',
    localRating: 6.749,
    localVotes: 23400,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'WerewolfByNight',
    title: 'Ночной оборотень',
    originalTitle: 'Werewolf by Night',
    year: 2022,
    director: 'Майкл Джаккино',
    localRating: 6.748,
    localVotes: 16358,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'EndOfDays',
    title: 'Конец света',
    originalTitle: 'End of Days',
    year: 1999,
    director: 'Питер Хайамс',
    localRating: 6.747,
    localVotes: 64230,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'Critters',
    title: 'Зубастики',
    originalTitle: 'Critters',
    year: 1986,
    director: 'Стивен Херек',
    localRating: 6.740,
    localVotes: 23146,
    genres: ['ужасы', 'фантастика', 'комедия']
  },
  {
    id: 'PlanetTerror',
    title: 'Планета страха',
    originalTitle: 'Planet Terror',
    year: 2007,
    director: 'Роберт Родригес',
    localRating: 6.737,
    localVotes: 71465,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'FinalDestinationBloodlines',
    title: 'Пункт назначения: Узы крови',
    originalTitle: 'Final Destination: Bloodlines',
    year: 2025,
    director: 'Зак Липовски',
    localRating: 6.735,
    localVotes: 84822,
    genres: ['ужасы']
  },
  {
    id: 'SpiceBoys',
    title: 'Спайс бойз',
    originalTitle: '',
    year: 2019,
    director: 'Владимир Зинкевич',
    localRating: 6.732,
    localVotes: 99038,
    genres: ['триллер', 'драма', 'ужасы']
  },
  {
    id: 'HellboundHellraiserII',
    title: 'Восставший из ада 2',
    originalTitle: 'Hellbound: Hellraiser II',
    year: 1988,
    director: 'Тони Рэндел',
    localRating: 6.731,
    localVotes: 15339,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'VampireHumaniste',
    title: 'Вампирша‑гуманистка ищет отчаянного добровольца',
    originalTitle: 'Vampire humaniste cherche suicidaire consentant',
    year: 2023,
    director: 'Ариан Луи‑Сейз',
    localRating: 6.730,
    localVotes: 24938,
    genres: ['комедия', 'ужасы', 'мелодрама']
  },
  {
    id: 'DeadSilence',
    title: 'Мёртвая тишина',
    originalTitle: 'Dead Silence',
    year: 2006,
    director: 'Джеймс Ван',
    localRating: 6.727,
    localVotes: 69934,
    genres: ['ужасы']
  },
  {
    id: 'Saja',
    title: 'Божественная ярость',
    originalTitle: 'Saja',
    year: 2019,
    director: 'Ким Джу‑хван',
    localRating: 6.717,
    localVotes: 12704,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'Devil',
    title: 'Дьявол',
    originalTitle: 'Devil',
    year: 2010,
    director: 'Джон Эрик Даудл',
    localRating: 6.716,
    localVotes: 96460,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Pearl',
    title: 'Пэрл',
    originalTitle: 'Pearl',
    year: 2022,
    director: 'Тай Уэст',
    localRating: 6.714,
    localVotes: 51255,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheAmityvilleHorror',
    title: 'Ужас Амитивилля',
    originalTitle: 'The Amityville Horror',
    year: 2005,
    director: 'Эндрю Дуглас',
    localRating: 6.708,
    localVotes: 89248,
    genres: ['ужасы']
  },
  {
    id: 'DogSoldiers',
    title: 'Псы‑воины',
    originalTitle: 'Dog Soldiers',
    year: 2001,
    director: 'Нил Маршалл',
    localRating: 6.708,
    localVotes: 14204,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'TheCabinInTheWoods',
    title: 'Хижина в лесу',
    originalTitle: 'The Cabin in the Woods',
    year: 2011,
    director: 'Дрю Годдард',
    localRating: 6.706,
    localVotes: 180614,
    genres: ['ужасы', 'комедия', 'фэнтези']
  },
  {
    id: 'Candyman',
    title: 'Кэндимэн',
    originalTitle: 'Candyman',
    year: 1992,
    director: 'Бернард Роуз',
    localRating: 6.703,
    localVotes: 16015,
    genres: ['ужасы']
  },
  {
    id: '28YearsLaterTheBoneTemple',
    title: '28 лет спустя: Храм костей',
    originalTitle: '28 Years Later: The Bone Temple',
    year: 2026,
    director: 'Ниа ДаКоста',
    localRating: 6.702,
    localVotes: 31978,
    genres: ['ужасы']
  },
  {
    id: 'BeauIsAfraid',
    title: 'Все страхи Бо',
    originalTitle: 'Beau Is Afraid',
    year: 2023,
    director: 'Ари Астер',
    localRating: 6.698,
    localVotes: 73113,
    genres: ['комедия', 'драма', 'ужасы']
  },
  {
    id: 'Annihilation',
    title: 'Аннигиляция',
    originalTitle: 'Annihilation',
    year: 2017,
    director: 'Алекс Гарленд',
    localRating: 6.693,
    localVotes: 128840,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Thir13enGhosts',
    title: 'Тринадцать привидений',
    originalTitle: 'Thir13en Ghosts',
    year: 2001,
    director: 'Стив Бек',
    localRating: 6.692,
    localVotes: 43760,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'ZombielandDoubleTap',
    title: 'Зомбилэнд: Контрольный выстрел',
    originalTitle: 'Zombieland: Double Tap',
    year: 2019,
    director: 'Рубен Фляйшер',
    localRating: 6.691,
    localVotes: 206982,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'TheHauntingInConnecticut',
    title: 'Призраки в Коннектикуте',
    originalTitle: 'The Haunting in Connecticut',
    year: 2009,
    director: 'Питер Корнвэлл',
    localRating: 6.691,
    localVotes: 62489,
    genres: ['ужасы']
  },
  {
    id: 'JuOn',
    title: 'Проклятие',
    originalTitle: 'Ju‑on',
    year: 2002,
    director: 'Такаси Симидзу',
    localRating: 6.689,
    localVotes: 28357,
    genres: ['ужасы']
  },
  {
    id: 'Sinister',
    title: 'Синистер',
    originalTitle: 'Sinister',
    year: 2012,
    director: 'Скотт Дерриксон',
    localRating: 6.688,
    localVotes: 267616,
    genres: ['ужасы']
  },
  {
    id: 'CrimsonPeak',
    title: 'Багровый пик',
    originalTitle: 'Crimson Peak',
    year: 2015,
    director: 'Гильермо дель Торо',
    localRating: 6.687,
    localVotes: 193374,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'DraculaDeadAndLovingIt',
    title: 'Дракула: Мёртвый и довольный',
    originalTitle: 'Dracula: Dead and Loving It',
    year: 1995,
    director: 'Мэл Брукс',
    localRating: 6.684,
    localVotes: 13943,
    genres: ['комедия', 'фэнтези', 'ужасы']
  },
  {
    id: 'WrongTurn',
    title: 'Поворот не туда',
    originalTitle: 'Wrong Turn',
    year: 2003,
    director: 'Роб Шмидт',
    localRating: 6.681,
    localVotes: 106984,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'AlienResurrection',
    title: 'Чужой 4: Воскрешение',
    originalTitle: 'Alien Resurrection',
    year: 1997,
    director: 'Жан‑Пьер Жёне',
    localRating: 6.675,
    localVotes: 96427,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'UrbanLegend',
    title: 'Городские легенды',
    originalTitle: 'Urban Legend',
    year: 1998,
    director: 'Джэми Блэнкс',
    localRating: 6.668,
    localVotes: 37148,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'KindsOfKindness',
    title: 'Виды доброты',
    originalTitle: 'Kinds of Kindness',
    year: 2024,
    director: 'Йоргос Лантимос',
    localRating: 6.664,
    localVotes: 33992,
    genres: ['ужасы', 'драма', 'комедия']
  },
  {
    id: 'DeadEnd',
    title: 'Тупик',
    originalTitle: 'Dead End',
    year: 2003,
    director: 'Жан‑Батист Андреа',
    localRating: 6.661,
    localVotes: 24289,
    genres: ['ужасы']
  },
  {
    id: 'Antichrist',
    title: 'Антихрист',
    originalTitle: 'Antichrist',
    year: 2009,
    director: 'Ларс фон Триер',
    localRating: 6.660,
    localVotes: 82514,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'ThePeopleUnderTheStairs',
    title: 'Люди под лестницей',
    originalTitle: 'The People Under the Stairs',
    year: 1991,
    director: 'Уэс Крэйвен',
    localRating: 6.660,
    localVotes: 13117,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'Sinners',
    title: 'Грешники',
    originalTitle: 'Sinners',
    year: 2025,
    director: 'Райан Куглер',
    localRating: 6.659,
    localVotes: 102292,
    genres: ['ужасы', 'музыка']
  },
  {
    id: 'TheBlackPhone',
    title: 'Чёрный телефон',
    originalTitle: 'The Black Phone',
    year: 2021,
    director: 'Скотт Дерриксон',
    localRating: 6.658,
    localVotes: 86802,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Heretic',
    title: 'Еретик',
    originalTitle: 'Heretic',
    year: 2024,
    director: 'Скотт Бек',
    localRating: 6.657,
    localVotes: 574888,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheVVitch',
    title: 'Ведьма',
    originalTitle: 'The VVitch: A New‑England Folktale',
    year: 2015,
    director: 'Роберт Эггерс',
    localRating: 6.649,
    localVotes: 86434,
    genres: ['ужасы']
  },
  {
    id: 'Daybreakers',
    title: 'Воины света',
    originalTitle: 'Daybreakers',
    year: 2009,
    director: 'Майкл Спириг',
    localRating: 6.649,
    localVotes: 66934,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Dreamcatcher',
    title: 'Ловец снов',
    originalTitle: 'Dreamcatcher',
    year: 2003,
    director: 'Лоуренс Кэздан',
    localRating: 6.645,
    localVotes: 66829,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'TheCollector',
    title: 'Коллекционер',
    originalTitle: 'The Collector',
    year: 2009,
    director: 'Маркус Данстэн',
    localRating: 6.644,
    localVotes: 155326,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'LetMeIn',
    title: 'Впусти меня. Сага',
    originalTitle: 'Let Me In',
    year: 2010,
    director: 'Мэтт Ривз',
    localRating: 6.644,
    localVotes: 61454,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'IKnowWhatYouDidLastSummer',
    title: 'Я знаю, что вы сделали прошлым летом',
    originalTitle: 'I Know What You Did Last Summer',
    year: 1997,
    director: 'Джим Гиллеспи',
    localRating: 6.639,
    localVotes: 68549,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'HappyDeathDay',
    title: 'Счастливого дня смерти',
    originalTitle: 'Happy Death Day',
    year: 2017,
    director: 'Кристофер Лэндон',
    localRating: 6.638,
    localVotes: 157363,
    genres: ['ужасы', 'фантастика', 'детектив']
  },
  {
    id: 'TheLawnmowerMan',
    title: 'Газонокосильщик',
    originalTitle: 'The Lawnmower Man',
    year: 1992,
    director: 'Бретт Леонард',
    localRating: 6.637,
    localVotes: 23192,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'TheStepfordWives',
    title: 'Стэпфордские жены',
    originalTitle: 'The Stepford Wives',
    year: 2004,
    director: 'Фрэнк Оз',
    localRating: 6.636,
    localVotes: 42082,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Case39',
    title: 'Дело № 39',
    originalTitle: 'Case 39',
    year: 2007,
    director: 'Кристиан Альварт',
    localRating: 6.635,
    localVotes: 81942,
    genres: ['ужасы', 'триллер']
  },
  {
    id: '8banDeguchi',
    title: 'Выход 8',
    originalTitle: '8ban Deguchi',
    year: 2025,
    director: 'Гэнки Кавамура',
    localRating: 6.633,
    localVotes: 245385,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'FromBeyond',
    title: 'Извне',
    originalTitle: 'From Beyond',
    year: 1986,
    director: 'Стюарт Гордон',
    localRating: 6.628,
    localVotes: 12130,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'DraculaUntold',
    title: 'Дракула',
    originalTitle: 'Dracula Untold',
    year: 2014,
    director: 'Гари Шор',
    localRating: 6.623,
    localVotes: 227836,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'TheTexasChainSawMassacre',
    title: 'Техасская резня бензопилой',
    originalTitle: 'The Texas Chain Saw Massacre',
    year: 1974,
    director: 'Тоуб Хупер',
    localRating: 6.623,
    localVotes: 53877,
    genres: ['ужасы']
  },
  {
    id: 'HouseOfWax',
    title: 'Дом восковых фигур',
    originalTitle: 'House of Wax',
    year: 2005,
    director: 'Жауме Кольет-Серра',
    localRating: 6.618,
    localVotes: 130240,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'HonoguraiMizuNoSokoKara',
    title: 'Тёмные воды',
    originalTitle: 'Honogurai mizu no soko kara',
    year: 2001,
    director: 'Хидэо Наката',
    localRating: 6.617,
    localVotes: 16280,
    genres: ['ужасы']
  },
  {
    id: 'AQuietPlacePartII',
    title: 'Тихое место 2',
    originalTitle: 'A Quiet Place Part II',
    year: 2020,
    director: 'Джон Красински',
    localRating: 6.615,
    localVotes: 147816,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'Spring',
    title: 'Весна',
    originalTitle: 'Spring',
    year: 2014,
    director: 'Джастин Бенсон',
    localRating: 6.614,
    localVotes: 25588,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'Suspiria',
    title: 'Суспирия',
    originalTitle: 'Suspiria',
    year: 2018,
    director: 'Лука Гуаданьино',
    localRating: 6.612,
    localVotes: 54415,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'JohnDiesAtTheEnd',
    title: 'В финале Джон умрёт',
    originalTitle: 'John Dies at the End',
    year: 2012,
    director: 'Дон Коскарелли',
    localRating: 6.612,
    localVotes: 11260,
    genres: ['фантастика', 'комедия', 'ужасы']
  },
  {
    id: 'Mimic',
    title: 'Мутанты',
    originalTitle: 'Mimic',
    year: 1997,
    director: 'Гильермо дель Торо',
    localRating: 6.611,
    localVotes: 12605,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'Rec2',
    title: 'Репортаж из преисподней',
    originalTitle: '[Rec]²',
    year: 2009,
    director: 'Жауме Балагеро',
    localRating: 6.610,
    localVotes: 27513,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Dagon',
    title: 'Дагон',
    originalTitle: 'Dagon',
    year: 2001,
    director: 'Стюарт Гордон',
    localRating: 6.610,
    localVotes: 20634,
    genres: ['ужасы', 'фэнтези', 'детектив']
  },
  {
    id: 'Saw3D',
    title: 'Пила 3D',
    originalTitle: 'Saw 3D',
    year: 2010,
    director: 'Кевин Гротерт',
    localRating: 6.607,
    localVotes: 76606,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'HanselAndGretelWitchHunters',
    title: 'Охотники на ведьм',
    originalTitle: 'Hansel & Gretel: Witch Hunters',
    year: 2012,
    director: 'Томми Виркола',
    localRating: 6.601,
    localVotes: 223486,
    genres: ['ужасы', 'боевик', 'фэнтези']
  },
  {
    id: 'TalchulProjekteuSailleonseu',
    title: 'В тумане',
    originalTitle: 'Talchul: peurojekteu sailleonseu',
    year: 2024,
    director: 'Ким Тхэ-гон',
    localRating: 6.596,
    localVotes: 72565,
    genres: ['фантастика', 'боевик', 'ужасы']
  },
  {
    id: 'VenomTheLastDance',
    title: 'Веном: Последний танец',
    originalTitle: 'Venom: The Last Dance',
    year: 2024,
    director: 'Келли Марсел',
    localRating: 6.586,
    localVotes: 187041,
    genres: ['фантастика', 'боевик', 'ужасы']
  },
  {
    id: '13Sins',
    title: '13 грехов',
    originalTitle: '13 Sins',
    year: 2013,
    director: 'Даниэль Штамм',
    localRating: 6.586,
    localVotes: 115038,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'DodSnno2',
    title: 'Операция «Мёртвый снег» 2',
    originalTitle: 'Død snø 2',
    year: 2014,
    director: 'Томми Виркола',
    localRating: 6.581,
    localVotes: 17528,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'OddThomas',
    title: 'Странный Томас',
    originalTitle: 'Odd Thomas',
    year: 2013,
    director: 'Стивен Соммерс',
    localRating: 6.579,
    localVotes: 32609,
    genres: ['триллер', 'детектив', 'фэнтези']
  },
  {
    id: '30DaysOfNight',
    title: '30 дней ночи',
    originalTitle: '30 Days of Night',
    year: 2007,
    director: 'Дэвид Слэйд',
    localRating: 6.577,
    localVotes: 57582,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheGrudge',
    title: 'Проклятие',
    originalTitle: 'The Grudge',
    year: 2004,
    director: 'Такаси Симидзу',
    localRating: 6.576,
    localVotes: 47521,
    genres: ['ужасы']
  },
  {
    id: 'Wishmaster',
    title: 'Исполнитель желаний',
    originalTitle: 'Wishmaster',
    year: 1997,
    director: 'Роберт Куртцман',
    localRating: 6.576,
    localVotes: 20144,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'ResidentEvilExtinction',
    title: 'Обитель зла 3',
    originalTitle: 'Resident Evil: Extinction',
    year: 2007,
    director: 'Рассел Малкэй',
    localRating: 6.575,
    localVotes: 141351,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'KamisamaNoIiuTouri',
    title: 'Страшная воля богов',
    originalTitle: 'Kamisama no iu tôri',
    year: 2014,
    director: 'Такаси Миике',
    localRating: 6.575,
    localVotes: 119202,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'HouseOnHauntedHill',
    title: 'Дом ночных призраков',
    originalTitle: 'House on Haunted Hill',
    year: 1999,
    director: 'Уильям Мэлоун',
    localRating: 6.574,
    localVotes: 16679,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Prey',
    title: 'Добыча',
    originalTitle: 'Prey',
    year: 2022,
    director: 'Дэн Трахтенберг',
    localRating: 6.573,
    localVotes: 100948,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheHillsHaveEyes',
    title: 'У холмов есть глаза',
    originalTitle: 'The Hills Have Eyes',
    year: 2006,
    director: 'Александр Ажа',
    localRating: 6.571,
    localVotes: 89537,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Life',
    title: 'Живое',
    originalTitle: 'Life',
    year: 2017,
    director: 'Даниэль Эспиноса',
    localRating: 6.570,
    localVotes: 188387,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'TheEye',
    title: 'Глаз',
    originalTitle: 'The Eye',
    year: 2008,
    director: 'Давид Моро',
    localRating: 6.567,
    localVotes: 44463,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Doghouse',
    title: 'Попали!',
    originalTitle: 'Doghouse',
    year: 2009,
    director: 'Джэйк Уэст',
    localRating: 6.560,
    localVotes: 26119,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'TheTexasChainsawMassacre2003',
    title: 'Техасская резня бензопилой',
    originalTitle: 'The Texas Chainsaw Massacre',
    year: 2003,
    director: 'Маркус Ниспел',
    localRating: 6.559,
    localVotes: 50518,
    genres: ['ужасы']
  },
  {
    id: 'HauteTension',
    title: 'Кровавая жатва',
    originalTitle: 'Haute tension',
    year: 2003,
    director: 'Александр Ажа',
    localRating: 6.558,
    localVotes: 22199,
    genres: ['ужасы']
  },
  {
    id: 'ParanormalActivity',
    title: 'Паранормальное явление',
    originalTitle: 'Paranormal Activity',
    year: 2007,
    director: 'Орен Пели',
    localRating: 6.557,
    localVotes: 120561,
    genres: ['ужасы']
  },
  {
    id: 'Barbarian',
    title: 'Варвар',
    originalTitle: 'Barbarian',
    year: 2022,
    director: 'Зак Креггер',
    localRating: 6.556,
    localVotes: 84158,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'FearStreetPartTwo1978',
    title: 'Улица страха. Часть 2: 1978',
    originalTitle: 'Fear Street Part Two: 1978',
    year: 2021,
    director: 'Ли Джаньяк',
    localRating: 6.556,
    localVotes: 15742,
    genres: ['ужасы']
  },
  {
    id: 'JanghwaHongryeon',
    title: 'История двух сестёр',
    originalTitle: 'Janghwa, Hongryeon',
    year: 2003,
    director: 'Ким Джи-ун',
    localRating: 6.555,
    localVotes: 14514,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'ItChapterTwo',
    title: 'Оно 2',
    originalTitle: 'It Chapter Two',
    year: 2019,
    director: 'Андрес Мускетти',
    localRating: 6.554,
    localVotes: 289462,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'Anel',
    title: 'Анель',
    originalTitle: 'Әнел',
    year: 2024,
    director: 'Акан Сатаев',
    localRating: 6.554,
    localVotes: 43355,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'FrightNight',
    title: 'Ночь страха',
    originalTitle: 'Fright Night',
    year: 2011,
    director: 'Крэйг Гиллеспи',
    localRating: 6.552,
    localVotes: 60405,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'TheReaping',
    title: 'Жатва',
    originalTitle: 'The Reaping',
    year: 2007,
    director: 'Стивен Хопкинс',
    localRating: 6.551,
    localVotes: 28709,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Horns',
    title: 'Рога',
    originalTitle: 'Horns',
    year: 2013,
    director: 'Александр Ажа',
    localRating: 6.549,
    localVotes: 52899,
    genres: ['фэнтези', 'триллер', 'драма']
  },
  {
    id: 'ANightmareOnElmStreet4TheDreamMaster',
    title: 'Кошмар на улице Вязов 4: Повелитель сна',
    originalTitle: 'A Nightmare on Elm Street 4: The Dream Master',
    year: 1988,
    director: 'Ренни Харлин',
    localRating: 6.544,
    localVotes: 21565,
    genres: ['ужасы']
  },
  {
    id: 'Ifrit',
    title: 'Ифрит',
    originalTitle: null,
    year: 2024,
    director: 'Санжар Осмонбеков',
    localRating: 6.544,
    localVotes: 12544,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'DangerousAnimals',
    title: 'Хищные твари',
    originalTitle: 'Dangerous Animals',
    year: 2025,
    director: 'Шон Бирн',
    localRating: 6.541,
    localVotes: 78520,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheyWillKillYou',
    title: 'Они придут за тобой',
    originalTitle: 'They Will Kill You',
    year: 2026,
    director: 'Кирилл Соколов',
    localRating: 6.540,
    localVotes: 20886,
    genres: ['боевик', 'комедия', 'ужасы']
  },
  {
    id: 'Trolljegeren',
    title: 'Охотники на троллей',
    originalTitle: 'Trolljegeren',
    year: 2010,
    director: 'Андре Эвредал',
    localRating: null,
    localVotes: 19890,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'ChakushinAri',
    title: 'Один пропущенный звонок',
    originalTitle: 'Chakushin ari',
    year: 2003,
    director: 'Такаси Миике',
    localRating: null,
    localVotes: 15637,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Saphirblau',
    title: 'Таймлесс 2: Сапфировая книга',
    originalTitle: 'Saphirblau',
    year: 2014,
    director: 'Феликс Фуксштайнер',
    localRating: null,
    localVotes: 32540,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'TremorsIIAftershocks',
    title: 'Дрожь земли 2: Повторный удар (видео)',
    originalTitle: 'Tremors II: Aftershocks',
    year: 1996,
    director: 'С.С. Уилсон',
    localRating: null,
    localVotes: 22062,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'ANightmareOnElmStreetPart2FreddysRevenge',
    title: 'Кошмар на улице Вязов 2: Месть Фредди',
    originalTitle: 'A Nightmare on Elm Street Part 2: Freddy\'s Revenge',
    year: 1985,
    director: 'Джек Шолдер',
    localRating: null,
    localVotes: 30035,
    genres: ['ужасы']
  },
  {
    id: 'HalloweenII',
    title: 'Хэллоуин 2',
    originalTitle: 'Halloween II',
    year: 1981,
    director: 'Рик Розенталь',
    localRating: null,
    localVotes: 15816,
    genres: ['ужасы']
  },
  {
    id: 'TheBlairWitchProject',
    title: 'Ведьма из Блэр: Курсовая с того света',
    originalTitle: 'The Blair Witch Project',
    year: 1999,
    director: 'Дэниэл Мирик',
    localRating: null,
    localVotes: 74294,
    genres: ['ужасы']
  },
  {
    id: 'Possession',
    title: 'Фальшивка (видео)',
    originalTitle: 'Possession',
    year: 2007,
    director: 'Джоэль Бергвэлл',
    localRating: null,
    localVotes: 11248,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Virus',
    title: 'Вирус',
    originalTitle: 'Virus',
    year: 1998,
    director: 'Джон Бруно',
    localRating: null,
    localVotes: 21168,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Chatroom',
    title: 'Чат',
    originalTitle: 'Chatroom',
    year: 2010,
    director: 'Хидэо Наката',
    localRating: null,
    localVotes: 32668,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheRite',
    title: 'Обряд',
    originalTitle: 'The Rite',
    year: 2011,
    director: 'Микаэль Хофстрём',
    localRating: 6.515,
    localVotes: 38964,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'OpenWater2Adrift',
    title: 'Дрейф',
    originalTitle: 'Open Water 2: Adrift',
    year: 2006,
    director: 'Ганс Хорн',
    localRating: 6.513,
    localVotes: 41399,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'DoctorStrangeInTheMultiverseOfMadness',
    title: 'Доктор Стрэндж: В мультивселенной безумия',
    originalTitle: 'Doctor Strange in the Multiverse of Madness',
    year: 2022,
    director: 'Сэм Рэйми',
    localRating: 6.508,
    localVotes: 220689,
    genres: ['фэнтези', 'боевик', 'приключения']
  },
  {
    id: 'BadSamaritan',
    title: 'Логово монстра',
    originalTitle: 'Bad Samaritan',
    year: 2017,
    director: 'Дин Девлин',
    localRating: 6.497,
    localVotes: 103342,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Coupe',
    title: 'Убойный монтаж',
    originalTitle: 'Coupé',
    year: 2022,
    director: 'Мишель Хазанавичус',
    localRating: 6.493,
    localVotes: 22554,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Darkness',
    title: 'Тьма',
    originalTitle: 'Darkness',
    year: 2002,
    director: 'Жауме Балагеро',
    localRating: 6.489,
    localVotes: 14155,
    genres: ['ужасы']
  },
  {
    id: 'ReadyOrNot2HereICome',
    title: 'Я иду искать 2',
    originalTitle: 'Ready or Not 2: Here I Come',
    year: 2026,
    director: 'Мэтт Беттинелли-Олпин',
    localRating: 6.483,
    localVotes: 37339,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'GeorukhanBamDemonHeonteoseu',
    title: 'Святая ночь. Охотники на демонов',
    originalTitle: 'Georukhan bam: demon heonteoseu',
    year: 2025,
    director: 'Лим Дэ-хи',
    localRating: 6.482,
    localVotes: 56684,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'TheWomanInBlack',
    title: 'Женщина в чёрном',
    originalTitle: 'The Woman in Black',
    year: 2012,
    director: 'Джеймс Уоткинс',
    localRating: 6.480,
    localVotes: 123074,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'InsidiousChapter2',
    title: 'Астрал: Глава 2',
    originalTitle: 'Insidious: Chapter 2',
    year: 2013,
    director: 'Джеймс Ван',
    localRating: 6.474,
    localVotes: 118489,
    genres: ['ужасы']
  },
  {
    id: 'TheAutopsyOfJaneDoe',
    title: 'Демон внутри',
    originalTitle: 'The Autopsy of Jane Doe',
    year: 2016,
    director: 'Андре Эвредал',
    localRating: 6.473,
    localVotes: 153934,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Smile2',
    title: 'Улыбка 2',
    originalTitle: 'Smile 2',
    year: 2024,
    director: 'Паркер Финн',
    localRating: 6.471,
    localVotes: 44860,
    genres: ['ужасы']
  },
  {
    id: 'TheThing2011',
    title: 'Нечто',
    originalTitle: 'The Thing',
    year: 2011,
    director: 'Маттис ван Хейниген мл.',
    localRating: 6.464,
    localVotes: 160508,
    genres: ['ужасы', 'фантастика', 'детектив']
  },
  {
    id: 'BlackwaterLane',
    title: 'Нервный срыв',
    originalTitle: 'Blackwater Lane',
    year: 2024,
    director: 'Джефф Челентано',
    localRating: 6.463,
    localVotes: 76252,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Oculus',
    title: 'Окулус',
    originalTitle: 'Oculus',
    year: 2013,
    director: 'Майк Флэнаган',
    localRating: 6.462,
    localVotes: 172430,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'EscapeRoomTournamentOfChampions',
    title: 'Клаустрофобы 2: Лига выживших',
    originalTitle: 'Escape Room: Tournament of Champions',
    year: 2021,
    director: 'Адам Робител',
    localRating: 6.457,
    localVotes: 68638,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Jam',
    title: 'Спи',
    originalTitle: 'Jam',
    year: 2023,
    director: 'Ю Джэ-сон',
    localRating: 6.457,
    localVotes: 17024,
    genres: ['драма', 'ужасы']
  },
  {
    id: 'EvilDeadRise',
    title: 'Восстание зловещих мертвецов',
    originalTitle: 'Evil Dead Rise',
    year: 2023,
    director: 'Ли Кронин',
    localRating: 6.452,
    localVotes: 59639,
    genres: ['ужасы']
  },
  {
    id: 'Backtrack',
    title: 'Отступление',
    originalTitle: 'Backtrack',
    year: 2014,
    director: 'Майкл Петрони',
    localRating: 6.450,
    localVotes: 35133,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Fresh',
    title: 'Свежатинка',
    originalTitle: 'Fresh',
    year: 2022,
    director: 'Мими Кейв',
    localRating: 6.450,
    localVotes: 26709,
    genres: ['триллер', 'комедия', 'ужасы']
  },
  {
    id: 'Nosferatu',
    title: 'Носферату',
    originalTitle: 'Nosferatu',
    year: 2024,
    director: 'Роберт Эггерс',
    localRating: 6.449,
    localVotes: 102104,
    genres: ['ужасы']
  },
  {
    id: 'IlRaccontoDeiRaccontiTaleOfTales',
    title: 'Страшные сказки',
    originalTitle: 'Il racconto dei racconti — Tale of Tales',
    year: 2015,
    director: 'Маттео Гарроне',
    localRating: 6.443,
    localVotes: 90347,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'TheCrazies',
    title: 'Безумцы',
    originalTitle: 'The Crazies',
    year: 2010,
    director: 'Брек Эйснер',
    localRating: 6.442,
    localVotes: 50267,
    genres: ['ужасы']
  },
  {
    id: 'ACureForWellness',
    title: 'Лекарство от здоровья',
    originalTitle: 'A Cure for Wellness',
    year: 2017,
    director: 'Гор Вербински',
    localRating: 6.440,
    localVotes: 202530,
    genres: ['триллер', 'фантастика', 'ужасы']
  },
  {
    id: 'WhiteNoise',
    title: 'Белый шум',
    originalTitle: 'White Noise',
    year: 2004,
    director: 'Джеффри Сакс',
    localRating: 6.438,
    localVotes: 48173,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TalkToMe',
    title: 'Два, три, демон, приди!',
    originalTitle: 'Talk to Me',
    year: 2022,
    director: 'Дэнни Филиппу',
    localRating: 6.437,
    localVotes: 396650,
    genres: ['ужасы']
  },
  {
    id: 'Martyrs',
    title: 'Мученицы',
    originalTitle: 'Martyrs',
    year: 2008,
    director: 'Паскаль Ложье',
    localRating: 6.429,
    localVotes: 71082,
    genres: ['ужасы']
  },
  {
    id: 'SilentNightDeadlyNight',
    title: 'Тихая ночь, смертельная ночь',
    originalTitle: 'Silent Night, Deadly Night',
    year: 2025,
    director: 'Майк П. Нельсон',
    localRating: 6.429,
    localVotes: 10032,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Mama',
    title: 'Мама',
    originalTitle: 'Mama',
    year: 2013,
    director: 'Андрес Мускетти',
    localRating: 6.428,
    localVotes: 131775,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'WouldYouRather',
    title: 'Что бы вы сделали…',
    originalTitle: 'Would You Rather',
    year: 2012,
    director: 'Дэвид Гай Леви',
    localRating: 6.423,
    localVotes: 31458,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'Smile',
    title: 'Улыбка',
    originalTitle: 'Smile',
    year: 2022,
    director: 'Паркер Финн',
    localRating: 6.422,
    localVotes: 72333,
    genres: ['ужасы']
  },
  {
    id: 'TotallyKiller',
    title: 'Конкретный убийца',
    originalTitle: 'Totally Killer',
    year: 2023,
    director: 'Нахнатчка Хан',
    localRating: 6.422,
    localVotes: 15913,
    genres: ['ужасы', 'комедия', 'фантастика']
  },
  {
    id: 'Midsommar',
    title: 'Солнцестояние',
    originalTitle: 'Midsommar',
    year: 2019,
    director: 'Ари Астер',
    localRating: 6.416,
    localVotes: 462336,
    genres: ['ужасы', 'драма', 'триллер']
  },
  {
    id: 'Vacancy',
    title: 'Вакансия на жертву',
    originalTitle: 'Vacancy',
    year: 2007,
    director: 'Нимрод Антал',
    localRating: 6.415,
    localVotes: 21217,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'MuzzleCityOfWolves',
    title: 'Клык 2: Город волков',
    originalTitle: 'Muzzle: City of Wolves',
    year: 2025,
    director: 'Джон Сталберг',
    localRating: 6.414,
    localVotes: 29010,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'WillysWonderland',
    title: 'Страна чудес Вилли',
    originalTitle: 'Willy\'s Wonderland',
    year: 2020,
    director: 'Кевин Льюис',
    localRating: 6.412,
    localVotes: 68699,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'TheMortuaryCollection',
    title: 'Погребальные байки',
    originalTitle: 'The Mortuary Collection',
    year: 2019,
    director: 'Райан Р. Спинделл',
    localRating: 6.410,
    localVotes: 83332,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'Renfield',
    title: 'Ренфилд',
    originalTitle: 'Renfield',
    year: 2023,
    director: 'Крис МакКей',
    localRating: 6.405,
    localVotes: 39012,
    genres: ['комедия', 'ужасы', 'криминал']
  },
  {
    id: 'LaCasaDelFinDeLosTiempos',
    title: 'Дом в конце времён',
    originalTitle: 'La casa del fin de los tiempos',
    year: 2013,
    director: 'Алехандро Идальго',
    localRating: 6.401,
    localVotes: 12608,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'Keullojet',
    title: 'Бугимен. Царство мёртвых',
    originalTitle: 'Keullojet',
    year: 2020,
    director: 'Ким Гван-бин',
    localRating: 6.396,
    localVotes: 26938,
    genres: ['ужасы']
  },
  {
    id: 'ViciousFun',
    title: 'Порочное удовольствие',
    originalTitle: 'Vicious Fun',
    year: 2020,
    director: 'Коуди Кэлахан',
    localRating: 6.396,
    localVotes: 12424,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Housebound',
    title: 'Привязанные к дому',
    originalTitle: 'Housebound',
    year: 2014,
    director: 'Джерард Джонстоун',
    localRating: 6.391,
    localVotes: 22637,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'GraveEncounters',
    title: 'Искатели могил',
    originalTitle: 'Grave Encounters',
    year: 2010,
    director: 'Колин Минихан',
    localRating: 6.384,
    localVotes: 65934,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheConjuringLastRites',
    title: 'Заклятие 4: Последний обряд',
    originalTitle: 'The Conjuring: Last Rites',
    year: 2025,
    director: 'Майкл Чавес',
    localRating: 6.380,
    localVotes: 40661,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Thelma',
    title: 'Тельма',
    originalTitle: 'Thelma',
    year: 2017,
    director: 'Уэс Крэйвен',
    localRating: 6.379,
    localVotes: 58649,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Scream3',
    title: 'Крик 3',
    originalTitle: 'Scream 3',
    year: 2000,
    director: 'Йоаким Триер',
    localRating: 6.379,
    localVotes: 20755,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'Cujo',
    title: 'Куджо',
    originalTitle: 'Cujo',
    year: 1983,
    director: 'Льюис Тиг',
    localRating: 6.373,
    localVotes: 11150,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'LeCalendrier',
    title: 'Календарь дьявола',
    originalTitle: 'Le calendrier',
    year: 2020,
    director: 'Патрик Ридремон',
    localRating: 6.366,
    localVotes: 92702,
    genres: ['ужасы']
  },
  {
    id: 'TheTomorrowWar',
    title: 'Война будущего',
    originalTitle: 'The Tomorrow War',
    year: 2021,
    director: 'Крис МакКей',
    localRating: 6.363,
    localVotes: 129783,
    genres: ['фантастика', 'боевик', 'ужасы']
  },
  {
    id: 'BonesAndAll',
    title: 'Целиком и полностью',
    originalTitle: 'Bones and All',
    year: 2022,
    director: 'Лука Гуаданьино',
    localRating: 6.362,
    localVotes: 14144,
    genres: ['драма', 'мелодрама', 'ужасы']
  },
  {
    id: 'Hereditary',
    title: 'Реинкарнация',
    originalTitle: 'Hereditary',
    year: 2018,
    director: 'Ари Астер',
    localRating: 6.359,
    localVotes: 347057,
    genres: ['ужасы', 'драма', 'детектив']
  },
  {
    id: 'MiraPorMi',
    title: 'Будь моими глазами',
    originalTitle: 'Mira por mí',
    year: 2021,
    director: 'Рэндолл Окита',
    localRating: 6.358,
    localVotes: 48607,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'FinalDestination3',
    title: 'Пункт назначения 3',
    originalTitle: 'Final Destination 3',
    year: 2006,
    director: 'Джеймс Вон',
    localRating: 6.355,
    localVotes: 92458,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ScaryMovie2',
    title: 'Очень страшное кино 2',
    originalTitle: 'Scary Movie 2',
    year: 2001,
    director: 'Кинен Айвори Уайанс',
    localRating: 6.354,
    localVotes: 147902,
    genres: ['комедия', 'ужасы']
  },
  {
    id: 'Cube2Hypercube',
    title: 'Куб 2: Гиперкуб',
    originalTitle: 'Cube 2: Hypercube',
    year: 2002,
    director: 'Анджей Секула',
    localRating: 6.353,
    localVotes: 40248,
    genres: ['фантастика', 'триллер', 'драма']
  },
  {
    id: 'Together',
    title: 'Одно целое',
    originalTitle: 'Together',
    year: 2025,
    director: 'Дэмиэн Маккарти',
    localRating: 6.352,
    localVotes: 47540,
    genres: ['ужасы']
  },
  {
    id: 'Nope',
    title: 'Нет',
    originalTitle: 'Nope',
    year: 2022,
    director: 'Майкл Шенкс',
    localRating: 6.351,
    localVotes: 114261,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Gonjiam',
    title: 'Психиатрическая больница Конджиам',
    originalTitle: 'Gonjiam',
    year: 2018,
    director: 'Джордан Пил',
    localRating: 6.350,
    localVotes: 53072,
    genres: ['фантастика', 'ужасы']
  },
  {
    id: 'Hokum',
    title: 'Хокум',
    originalTitle: 'Hokum',
    year: 2026,
    director: 'Чон Бом-щик',
    localRating: 6.349,
    localVotes: 181975,
    genres: ['ужасы']
  },
  {
    id: 'LittleMonsters',
    title: 'Маленькие чудовища',
    originalTitle: 'Little Monsters',
    year: 2019,
    director: 'Эйб Форсайт',
    localRating: 6.347,
    localVotes: 34590,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Sputnik',
    title: 'Спутник',
    originalTitle: null,
    year: 2020,
    director: 'Егор Абраменко',
    localRating: 6.341,
    localVotes: 99102,
    genres: ['фантастика', 'ужасы', 'драма']
  },
  {
    id: 'TheShallows',
    title: 'Отмель',
    originalTitle: 'The Shallows',
    year: 2016,
    director: 'Жауме Кольет-Серра',
    localRating: 6.339,
    localVotes: 127468,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheOvalPortrait',
    title: 'Таинственный портрет',
    originalTitle: 'The Oval Portrait',
    year: 2025,
    director: 'Ли Джаньяк',
    localRating: 6.335,
    localVotes: 11381,
    genres: ['ужасы']
  },
  {
    id: 'FearStreetPartThree1666',
    title: 'Улица страха. Часть 3: 1666',
    originalTitle: 'Fear Street Part Three: 1666',
    year: 2021,
    director: 'Адриан Лэнгли',
    localRating: 6.334,
    localVotes: 16439,
    genres: ['ужасы']
  },
  {
    id: 'Resurrected',
    title: 'Возрождённые',
    originalTitle: 'Resurrected',
    year: 2022,
    director: 'Егор Баранов',
    localRating: 6.333,
    localVotes: 75107,
    genres: ['фантастика', 'ужасы']
  },
  {
    id: 'TheVoices',
    title: 'Голоса',
    originalTitle: 'The Voices',
    year: 2014,
    director: 'Маржан Сатрапи',
    localRating: 6.331,
    localVotes: 73636,
    genres: ['ужасы', 'комедия', 'криминал']
  },
  {
    id: 'Malignant',
    title: 'Злое',
    originalTitle: 'Malignant',
    year: 2021,
    director: 'Джеймс Ван',
    localRating: 6.328,
    localVotes: 79606,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'TheBabysitter',
    title: 'Няня',
    originalTitle: 'The Babysitter',
    year: 2017,
    director: 'МакДжи',
    localRating: 6.327,
    localVotes: 31498,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'BeforeIWake',
    title: 'Сомния',
    originalTitle: 'Before I Wake',
    year: 2014,
    director: 'Майк Флэнаган',
    localRating: 6.326,
    localVotes: 126934,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'AVPAlienvsPredator',
    title: 'Чужой против Хищника',
    originalTitle: 'AVP: Alien vs. Predator',
    year: 2004,
    director: 'Пол У. С. Андерсон',
    localRating: 6.326,
    localVotes: 113838,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Goegimaensyon',
    title: 'Призрачный дом',
    originalTitle: 'Goegimaensyon',
    year: 2021,
    director: 'Андре Эвредал',
    localRating: 6.325,
    localVotes: 143970,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ScaryStoriesToTellInTheDark',
    title: 'Страшные истории для рассказа в темноте',
    originalTitle: 'Scary Stories to Tell in the Dark',
    year: 2019,
    director: 'Чо Ба-рын',
    localRating: 6.325,
    localVotes: 42520,
    genres: ['ужасы']
  },
  {
    id: 'Odishon',
    title: 'Кинопроба',
    originalTitle: 'Odishon',
    year: 1999,
    director: 'Такаси Миике',
    localRating: 6.324,
    localVotes: 22680,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Hangman',
    title: 'Виселица',
    originalTitle: 'Hangman',
    year: 2017,
    director: 'Джонни Мартин',
    localRating: 6.321,
    localVotes: 50185,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'GhostsOfWar',
    title: 'Призраки войны',
    originalTitle: 'Ghosts of War',
    year: 2019,
    director: 'Эрик Бресс',
    localRating: 6.321,
    localVotes: 45835,
    genres: ['ужасы', 'военный']
  },
  {
    id: 'StayAlive',
    title: 'Остаться в живых',
    originalTitle: 'Stay Alive',
    year: 2006,
    director: 'Уильям Брент Белл',
    localRating: 6.321,
    localVotes: 28983,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'ChinGeiBin',
    title: 'Близнецы',
    originalTitle: 'Chin gei bin',
    year: 2003,
    director: 'Данте Лам',
    localRating: 6.318,
    localVotes: 12186,
    genres: ['боевик', 'комедия', 'ужасы']
  },
  {
    id: 'TheConjuringTheDevilMadeMeDoIt',
    title: 'Заклятие 3: По воле дьявола',
    originalTitle: 'The Conjuring: The Devil Made Me Do It',
    year: 2021,
    director: 'Майкл Чавес',
    localRating: 6.315,
    localVotes: 75606,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'DayShift',
    title: 'Дневная смена',
    originalTitle: 'Day Shift',
    year: 2022,
    director: 'Чо Иль-хён',
    localRating: 6.315,
    localVotes: 28532,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Saraitda',
    title: '#живой',
    originalTitle: '#saraitda',
    year: 2020,
    director: 'Дж.Дж. Перри',
    localRating: 6.314,
    localVotes: 31105,
    genres: ['ужасы', 'боевик', 'комедия']
  },
  {
    id: 'TheMummy2026',
    title: 'Мумия',
    originalTitle: 'The Mummy',
    year: 2026,
    director: 'Джулиус Эйвери',
    localRating: 6.311,
    localVotes: 71605,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Overlord',
    title: 'Оверлорд',
    originalTitle: 'Overlord',
    year: 2018,
    director: 'Ли Кронин',
    localRating: 6.311,
    localVotes: 28260,
    genres: ['ужасы']
  },
  {
    id: 'BloodAndChocolate',
    title: 'Кровь и шоколад',
    originalTitle: 'Blood and Chocolate',
    year: 2006,
    director: 'Катя фон Гарнье',
    localRating: 6.304,
    localVotes: 23991,
    genres: ['фэнтези', 'мелодрама', 'ужасы']
  },
  {
    id: 'TheDivide',
    title: 'Разделитель',
    originalTitle: 'The Divide',
    year: 2011,
    director: 'Ксавье Жанс',
    localRating: 6.302,
    localVotes: 39343,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'NightWatch',
    title: 'Ночной дозор',
    originalTitle: null,
    year: 2004,
    director: 'Тимур Бекмамбетов',
    localRating: 6.301,
    localVotes: 336680,
    genres: ['фэнтези', 'триллер', 'ужасы']
  },
  {
    id: 'Terrifier2',
    title: 'Ужасающий 2',
    originalTitle: 'Terrifier 2',
    year: 2022,
    director: 'Дэмиен Леоне',
    localRating: 6.301,
    localVotes: 73075,
    genres: ['ужасы']
  },
  {
    id: 'BelphegorLeFantomeDuLouvre',
    title: 'Белфегор – призрак Лувра',
    originalTitle: 'Belphégor - Le fantôme du Louvre',
    year: 2001,
    director: 'Жан-Поль Саломе',
    localRating: 6.295,
    localVotes: 20543,
    genres: ['ужасы', 'фэнтези', 'детектив']
  },
  {
    id: 'TheRingTwo',
    title: 'Звонок 2',
    originalTitle: 'The Ring Two',
    year: 2005,
    director: 'Хидэо Наката',
    localRating: 6.292,
    localVotes: 48741,
    genres: ['ужасы']
  },
  {
    id: 'TheTallMan',
    title: 'Верзила',
    originalTitle: 'The Tall Man',
    year: 2012,
    director: 'Паскаль Ложье',
    localRating: 6.290,
    localVotes: 48766,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'DasSchaurigeHaus',
    title: 'Дом с привидениями',
    originalTitle: 'Das schaurige Haus',
    year: 2020,
    director: 'Дэниэл Прохаска',
    localRating: 6.285,
    localVotes: 57798,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'ItFeeds',
    title: 'Оно. Новая глава',
    originalTitle: 'It Feeds',
    year: 2024,
    director: 'Чед Арчибальд',
    localRating: 6.284,
    localVotes: 91561,
    genres: ['ужасы']
  },
  {
    id: 'TrickOrTreat',
    title: 'Кошелек или жизнь',
    originalTitle: 'Trick \'r Treat',
    year: 2007,
    director: 'Майкл Догерти',
    localRating: 6.283,
    localVotes: 13489,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'TheSubstance',
    title: 'Субстанция',
    originalTitle: 'The Substance',
    year: 2024,
    director: 'Корали Фаржа',
    localRating: 6.282,
    localVotes: 1059776,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheTexasChainsawMassacreTheBeginning',
    title: 'Техасская резня бензопилой: Начало',
    originalTitle: 'The Texas Chainsaw Massacre: The Beginning',
    year: 2006,
    director: 'Джонатан Либесман',
    localRating: 6.282,
    localVotes: 30752,
    genres: ['ужасы']
  },
  {
    id: 'Us',
    title: 'Мы',
    originalTitle: 'Us',
    year: 2019,
    director: 'Джордан Пил',
    localRating: 6.281,
    localVotes: 139458,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Terrifier3',
    title: 'Ужасающий 3',
    originalTitle: 'Terrifier 3',
    year: 2024,
    director: 'Дэмиен Леоне',
    localRating: 6.281,
    localVotes: 110301,
    genres: ['ужасы']
  },
  {
    id: 'TheXFilesIWantToBelieve',
    title: 'Секретные материалы: Хочу верить',
    originalTitle: 'The X-Files: I Want to Believe',
    year: 2008,
    director: 'Крис Картер',
    localRating: 6.281,
    localVotes: 29187,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'HalloweenH2020YearsLater',
    title: 'Хэллоуин: 20 лет спустя',
    originalTitle: 'Halloween H20: 20 Years Later',
    year: 1998,
    director: 'Стив Майнер',
    localRating: 6.276,
    localVotes: 12327,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'Abigail',
    title: 'Эбигейл',
    originalTitle: 'Abigail',
    year: 2024,
    director: 'Мэтт Беттинелли-Олпин',
    localRating: 6.273,
    localVotes: 43503,
    genres: ['ужасы']
  },
  {
    id: 'TheToxicAvenger',
    title: 'Токсичный мститель',
    originalTitle: 'The Toxic Avenger',
    year: 2023,
    director: 'Мэйкон Блэр',
    localRating: 6.273,
    localVotes: 39174,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'GhostStories',
    title: 'Истории призраков',
    originalTitle: 'Ghost Stories',
    year: 2017,
    director: 'Джереми Дайсон',
    localRating: 6.270,
    localVotes: 27715,
    genres: ['драма', 'ужасы']
  },
  {
    id: 'WirSindDieNacht',
    title: 'Вкус ночи',
    originalTitle: 'Wir sind die Nacht',
    year: 2010,
    director: 'Деннис Ганзель',
    localRating: 6.269,
    localVotes: 42727,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'Dyrid',
    title: 'Агнец',
    originalTitle: 'Dýrið',
    year: 2021,
    director: 'Вальдимар Йоханнссон',
    localRating: 6.266,
    localVotes: 25233,
    genres: ['драма', 'фэнтези', 'ужасы']
  },
  {
    id: 'WhiteNoise2TheLight',
    title: 'Белый шум 2: Сияние',
    originalTitle: 'White Noise 2: The Light',
    year: 2006,
    director: 'Патрик Люссье',
    localRating: 6.265,
    localVotes: 25419,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: '1922',
    title: '1922',
    originalTitle: '1922',
    year: 2017,
    director: 'Зак Хилдитч',
    localRating: 6.265,
    localVotes: 24844,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Mandy',
    title: 'Мэнди',
    originalTitle: 'Mandy',
    year: 2017,
    director: 'Панос Косматос',
    localRating: 6.262,
    localVotes: 52595,
    genres: ['ужасы', 'боевик', 'фэнтези']
  },
  {
    id: 'YoureNext',
    title: 'Тебе конец!',
    originalTitle: 'You\'re Next',
    year: 2013,
    director: 'Адам Вингард',
    localRating: 6.261,
    localVotes: 85182,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'Scream2022',
    title: 'Крик',
    originalTitle: 'Scream',
    year: 2022,
    director: 'Мэтт Беттинелли-Олпин',
    localRating: 6.261,
    localVotes: 71671,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'FridayThe13th1980',
    title: 'Пятница 13-е',
    originalTitle: 'Friday the 13th',
    year: 1980,
    director: 'Шон С. Каннингэм',
    localRating: 6.261,
    localVotes: 31417,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Grave',
    title: 'Сырое',
    originalTitle: 'Grave',
    year: 2016,
    director: 'Жюлия Дюкурно',
    localRating: 6.261,
    localVotes: 23768,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'ExtraOrdinary',
    title: 'Сверх(НЕ)естественное',
    originalTitle: 'Extra Ordinary',
    year: 2019,
    director: 'Майк Ахерн',
    localRating: 6.260,
    localVotes: 31098,
    genres: ['фэнтези', 'комедия', 'ужасы']
  },
  {
    id: 'Imaginary',
    title: 'Воображаемый друг',
    originalTitle: 'Imaginary',
    year: 2024,
    director: 'Джефф Уодлоу',
    localRating: 6.257,
    localVotes: 28995,
    genres: ['ужасы']
  },
  {
    id: 'WesCravensNewNightmare',
    title: 'Кошмар на улице Вязов 7',
    originalTitle: 'Wes Craven\'s New Nightmare',
    year: 1994,
    director: 'Уэс Крэйвен',
    localRating: 6.257,
    localVotes: 18898,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Frozen',
    title: 'Замёрзшие',
    originalTitle: 'Frozen',
    year: 2010,
    director: 'Адам Грин',
    localRating: 6.256,
    localVotes: 116765,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Quarantine',
    title: 'Карантин',
    originalTitle: 'Quarantine',
    year: 2008,
    director: 'Джон Эрик Даудл',
    localRating: 6.253,
    localVotes: 32879,
    genres: ['ужасы', 'триллер', 'фантастика']
  },
  {
    id: 'TheRuins',
    title: 'Руины',
    originalTitle: 'The Ruins',
    year: 2008,
    director: 'Картер Смит',
    localRating: 6.253,
    localVotes: 30465,
    genres: ['ужасы', 'триллер', 'приключения']
  },
  {
    id: 'ISpitOnYourGrave',
    title: 'Я плюю на ваши могилы',
    originalTitle: 'I Spit on Your Grave',
    year: 2010,
    director: 'Стивен Р. Монро',
    localRating: 6.252,
    localVotes: 128581,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheMandelaEffect',
    title: 'Эффект Манделы',
    originalTitle: 'The Mandela Effect',
    year: 2019,
    director: 'Бенджамин Эппс',
    localRating: 6.252,
    localVotes: 61588,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'TheVisit',
    title: 'Визит',
    originalTitle: 'The Visit',
    year: 2015,
    director: 'М. Найт Шьямалан',
    localRating: 6.251,
    localVotes: 154527,
    genres: ['ужасы']
  },
  {
    id: 'VillageOfTheDamned',
    title: 'Деревня проклятых',
    originalTitle: 'Village of the Damned',
    year: 1995,
    director: 'Джон Карпентер',
    localRating: 6.251,
    localVotes: 15118,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'SolomonKane',
    title: 'Соломон Кейн',
    originalTitle: 'Solomon Kane',
    year: 2009,
    director: 'М. Дж. Бассетт',
    localRating: 6.249,
    localVotes: 120311,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'TheCollection',
    title: 'Коллекционер 2',
    originalTitle: 'The Collection',
    year: 2012,
    director: 'Маркус Данстэн',
    localRating: 6.248,
    localVotes: 114418,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheEndless',
    title: 'Паранормальное',
    originalTitle: 'The Endless',
    year: 2017,
    director: 'Джастин Бенсон',
    localRating: 6.248,
    localVotes: 42099,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'ChildsPlay2',
    title: 'Детские игры 2',
    originalTitle: 'Child\'s Play 2',
    year: 1990,
    director: 'Джон Лафия',
    localRating: 6.248,
    localVotes: 13432,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ItFollows',
    title: 'Оно приходит за тобой',
    originalTitle: 'It Follows',
    year: 2014,
    director: 'Дэвид Роберт Митчелл',
    localRating: 6.245,
    localVotes: 138855,
    genres: ['ужасы']
  },
  {
    id: 'TheReckoning',
    title: 'Проклятие ведьмы',
    originalTitle: 'The Reckoning',
    year: 2020,
    director: 'Нил Маршалл',
    localRating: 6.245,
    localVotes: 72826,
    genres: ['драма', 'ужасы']
  },
  {
    id: 'ThePopesExorcist',
    title: 'Экзорцист Ватикана',
    originalTitle: 'The Pope\'s Exorcist',
    year: 2023,
    director: 'Джулиус Эйвери',
    localRating: 6.241,
    localVotes: 34358,
    genres: ['ужасы']
  },
  {
    id: 'AnnabelleCreation',
    title: 'Проклятие Аннабель: Зарождение зла',
    originalTitle: 'Annabelle: Creation',
    year: 2017,
    director: 'Дэвид Ф. Сандберг',
    localRating: 6.239,
    localVotes: 72927,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheresSomethingInTheBarn',
    title: 'Гномы. Новогодний беспредел',
    originalTitle: 'There\'s Something in the Barn',
    year: 2023,
    director: 'Магнус Мартенс',
    localRating: 6.239,
    localVotes: 67899,
    genres: ['комедия', 'ужасы']
  },
  {
    id: 'Guyver',
    title: 'Гайвер',
    originalTitle: 'Guyver',
    year: 1991,
    director: 'Скримин Мэд Джордж',
    localRating: 6.238,
    localVotes: 14301,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheRitual',
    title: 'Ритуал',
    originalTitle: 'The Ritual',
    year: 2017,
    director: 'Дэвид Брукнер',
    localRating: 6.232,
    localVotes: 58275,
    genres: ['ужасы']
  },
  {
    id: 'DeliverUsFromEvil',
    title: 'Избави нас от лукавого',
    originalTitle: 'Deliver Us from Evil',
    year: 2014,
    director: 'Скотт Дерриксон',
    localRating: 6.232,
    localVotes: 58275,
    genres: ['детектив', 'ужасы', 'криминал']
  },
  {
    id: 'TheFourthKind',
    title: 'Четвёртый вид',
    originalTitle: 'The Fourth Kind',
    year: 2009,
    director: 'Олатунде Осунсанми',
    localRating: 6.231,
    localVotes: 81485,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'ScreamVI',
    title: 'Крик 6',
    originalTitle: 'Scream VI',
    year: 2023,
    director: 'Мэтт Беттинелли-Олпин',
    localRating: 6.230,
    localVotes: 38202,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Aftermath',
    title: 'Отзвуки эха',
    originalTitle: 'Aftermath',
    year: 2020,
    director: 'Питер Уинтер',
    localRating: 6.229,
    localVotes: 37762,
    genres: ['ужасы']
  },
  {
    id: 'DarkSkies',
    title: 'Мрачные небеса',
    originalTitle: 'Dark Skies',
    year: 2013,
    director: 'Скотт Чарльз Стюарт',
    localRating: 6.228,
    localVotes: 82262,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'FearBelow',
    title: 'Багровая отмель',
    originalTitle: 'Fear Below',
    year: 2025,
    director: 'Мэттью Холмс',
    localRating: 6.228,
    localVotes: 62537,
    genres: ['триллер', 'ужасы', 'криминал']
  },
  {
    id: 'CuandoAcechaLaMaldad',
    title: 'Одержимые злом',
    originalTitle: 'Cuando acecha la maldad',
    year: 2023,
    director: 'Демиан Рунья',
    localRating: 6.228,
    localVotes: 56204,
    genres: ['ужасы']
  },
  {
    id: 'TheGirlWithAllTheGifts',
    title: 'Новая эра Z',
    originalTitle: 'The Girl with All the Gifts',
    year: 2016,
    director: 'Колм Маккарти',
    localRating: 6.227,
    localVotes: 113013,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'Radius',
    title: 'Радиус',
    originalTitle: 'Radius',
    year: 2017,
    director: 'Кэролайн Лабреш',
    localRating: 6.226,
    localVotes: 35863,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'NoOneLives',
    title: 'Никто не выжил',
    originalTitle: 'No One Lives',
    year: 2012,
    director: 'Рюхэй Китамура',
    localRating: 6.225,
    localVotes: 80736,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheHaunting',
    title: 'Призрак дома на холме',
    originalTitle: 'The Haunting',
    year: 1999,
    director: 'Ян де Бонт',
    localRating: 6.216,
    localVotes: 33104,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'VenomLetThereBeCarnage',
    title: 'Веном 2',
    originalTitle: 'Venom: Let There Be Carnage',
    year: 2021,
    director: 'Энди Серкис',
    localRating: 6.215,
    localVotes: 499440,
    genres: ['фантастика', 'боевик', 'ужасы']
  },
  {
    id: 'Baghead',
    title: 'Нечисть',
    originalTitle: 'Baghead',
    year: 2023,
    director: 'Альберто Корредор',
    localRating: 6.215,
    localVotes: 89884,
    genres: ['ужасы']
  },
  {
    id: 'Row19',
    title: 'Ряд 19',
    originalTitle: null,
    year: 2021,
    director: 'Александр Бабаев',
    localRating: 6.213,
    localVotes: 117863,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Byzantium',
    title: 'Византия',
    originalTitle: 'Byzantium',
    year: 2012,
    director: 'Нил Джордан',
    localRating: 6.213,
    localVotes: 28240,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Doomsday',
    title: 'Судный день',
    originalTitle: 'Doomsday',
    year: 2008,
    director: 'Нил Маршалл',
    localRating: 6.210,
    localVotes: 42278,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'TheBelkoExperiment',
    title: 'Эксперимент «Офис»',
    originalTitle: 'The Belko Experiment',
    year: 2017,
    director: 'Грег Маклин',
    localRating: 6.209,
    localVotes: 104766,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'HappyDeathDay2U',
    title: 'Счастливого нового дня смерти',
    originalTitle: 'Happy Death Day 2 U',
    year: 2019,
    director: 'Кристофер Лэндон',
    localRating: 6.209,
    localVotes: 92814,
    genres: ['ужасы', 'фантастика', 'детектив']
  },
  {
    id: 'P2',
    title: 'Парковка',
    originalTitle: 'P2',
    year: 2006,
    director: 'Франк Халфун',
    localRating: 6.207,
    localVotes: 12762,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'LateNightWithTheDevil',
    title: 'Полночь с дьяволом',
    originalTitle: 'Late Night with the Devil',
    year: 2023,
    director: 'Камерон Кернс',
    localRating: 6.205,
    localVotes: 101207,
    genres: ['ужасы']
  },
  {
    id: 'ElCuco',
    title: 'Другие: Проклятие кукушки',
    originalTitle: 'El cuco',
    year: 2023,
    director: 'Мар Таргарона',
    localRating: 6.202,
    localVotes: 59942,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Fatman',
    title: 'Охота на Санту',
    originalTitle: 'Fatman',
    year: 2020,
    director: 'Эшом Нелмс',
    localRating: 6.202,
    localVotes: 36501,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'Noijeu',
    title: 'Паранормальное явление. Шум',
    originalTitle: 'Noijeu',
    year: 2024,
    director: 'Ким Су-джин',
    localRating: 6.201,
    localVotes: 19942,
    genres: ['ужасы']
  },
  {
    id: 'Hush',
    title: 'Тишина',
    originalTitle: 'Hush',
    year: 2014,
    director: 'Майк Флэнаган',
    localRating: 6.199,
    localVotes: 35503,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'WrongTurnTheFoundation',
    title: 'Поворот не туда: Наследие',
    originalTitle: 'Wrong Turn: The Foundation',
    year: 2020,
    director: 'Майк П. Нельсон',
    localRating: 6.196,
    localVotes: 190791,
    genres: ['ужасы']
  },
  {
    id: 'TheDeadDontDie',
    title: 'Мертвые не умирают',
    originalTitle: 'The Dead Don\'t Die',
    year: 2019,
    director: 'Джим Джармуш',
    localRating: 6.196,
    localVotes: 70436,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'BloodRedSky',
    title: 'Кроваво-красное небо',
    originalTitle: 'Blood Red Sky',
    year: 2021,
    director: 'Петер Торварт',
    localRating: 6.196,
    localVotes: 28674,
    genres: ['ужасы', 'триллер', 'боевик']
  },
  {
    id: 'M3GAN',
    title: 'М3ГАН',
    originalTitle: 'M3GAN',
    year: 2022,
    director: 'Джерард Джонстоун',
    localRating: 6.195,
    localVotes: 59088,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'VictorFrankenstein',
    title: 'Виктор Франкенштейн',
    originalTitle: 'Victor Frankenstein',
    year: 2015,
    director: 'Пол Макгиган',
    localRating: 6.192,
    localVotes: 91350,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Shutter',
    title: 'Фантомы',
    originalTitle: 'Shutter',
    year: 2008,
    director: 'Масаюки Отиаи',
    localRating: 6.191,
    localVotes: 30521,
    genres: ['ужасы']
  },
  {
    id: 'LandOfTheDead',
    title: 'Земля мертвых',
    originalTitle: 'Land of the Dead',
    year: 2005,
    director: 'Джордж А. Ромеро',
    localRating: 6.190,
    localVotes: 34232,
    genres: ['ужасы']
  },
  {
    id: 'TheDogs',
    title: 'Другие. Новая обитель',
    originalTitle: 'The Dogs',
    year: 2025,
    director: 'Валери Буагияр',
    localRating: 6.188,
    localVotes: 42680,
    genres: ['ужасы']
  },
  {
    id: 'Nurse3D',
    title: 'Медсестра',
    originalTitle: 'Nurse 3-D',
    year: 2013,
    director: 'Дуглас Арниокоски',
    localRating: 6.187,
    localVotes: 21859,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'VelvetBuzzsaw',
    title: 'Бархатная бензопила',
    originalTitle: 'Velvet Buzzsaw',
    year: 2019,
    director: 'Дэн Гилрой',
    localRating: 6.186,
    localVotes: 28406,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Chained',
    title: 'На цепи',
    originalTitle: 'Chained',
    year: 2011,
    director: 'Дженнифер Линч',
    localRating: 6.180,
    localVotes: 23761,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'Hidden',
    title: 'Затаившись',
    originalTitle: 'Hidden',
    year: 2014,
    director: 'Мэтт Даффер',
    localRating: 6.179,
    localVotes: 28657,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheMidnightMeatTrain',
    title: 'Полуночный экспресс',
    originalTitle: 'The Midnight Meat Train',
    year: 2008,
    director: 'Рюхэй Китамура',
    localRating: 6.176,
    localVotes: 43817,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Jaws2',
    title: 'Челюсти 2',
    originalTitle: 'Jaws 2',
    year: 1978,
    director: 'Жанно Шварц',
    localRating: 6.172,
    localVotes: 26719,
    genres: ['ужасы', 'триллер', 'приключения']
  },
  {
    id: 'OpenWater',
    title: 'Открытое море',
    originalTitle: 'Open Water',
    year: 2003,
    director: 'Крис Кентис',
    localRating: 6.171,
    localVotes: 18859,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'CannibalHolocaust',
    title: 'Ад каннибалов',
    originalTitle: 'Cannibal Holocaust',
    year: 1979,
    director: 'Руджеро Деодато',
    localRating: 6.168,
    localVotes: 29115,
    genres: ['ужасы', 'приключения']
  },
  {
    id: 'Sonnim',
    title: 'Крысолов. Древнее проклятие',
    originalTitle: 'Sonnim',
    year: 2015,
    director: 'Ким Гван-тхэ',
    localRating: 6.166,
    localVotes: 13870,
    genres: ['ужасы']
  },
  {
    id: 'X',
    title: 'Икс',
    originalTitle: 'X',
    year: 2022,
    director: 'Тай Уэст',
    localRating: 6.165,
    localVotes: 58980,
    genres: ['ужасы']
  },
  {
    id: 'Frontieres',
    title: 'Граница',
    originalTitle: 'Frontière(s)',
    year: 2007,
    director: 'Ксавье Жанс',
    localRating: 6.164,
    localVotes: 33944,
    genres: ['ужасы']
  },
  {
    id: 'Ichi',
    title: 'Иччи',
    originalTitle: null,
    year: 2020,
    director: 'Костас Марсаан',
    localRating: 6.164,
    localVotes: 24334,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheMummyTombOfTheDragonEmperor',
    title: 'Мумия: Гробница императора драконов',
    originalTitle: 'The Mummy: Tomb of the Dragon Emperor',
    year: 2008,
    director: 'Роб Коэн',
    localRating: 6.162,
    localVotes: 116380,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'Hostel',
    title: 'Хостел',
    originalTitle: 'Hostel',
    year: 2005,
    director: 'Элай Рот',
    localRating: 6.160,
    localVotes: 74884,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheHunted',
    title: 'Охотники из рая',
    originalTitle: 'The Hunted',
    year: 2024,
    director: 'Луи Лагайетт',
    localRating: 6.160,
    localVotes: 52917,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Haunt',
    title: 'Они',
    originalTitle: 'Haunt',
    year: 2018,
    director: 'Скотт Бек',
    localRating: 6.159,
    localVotes: 113819,
    genres: ['ужасы']
  },
  {
    id: 'MrHarrigansPhone',
    title: 'Телефон мистера Харригана',
    originalTitle: 'Mr. Harrigan\'s Phone',
    year: 2022,
    director: 'Джон Ли Хэнкок',
    localRating: 6.155,
    localVotes: 16960,
    genres: ['драма', 'фэнтези', 'ужасы']
  },
  {
    id: 'Cargo',
    title: 'Бремя',
    originalTitle: 'Cargo',
    year: 2017,
    director: 'Бен Хоулинг',
    localRating: 6.154,
    localVotes: 11206,
    genres: ['драма', 'ужасы']
  },
  {
    id: 'TheHappytimeMurders',
    title: 'Игрушки для взрослых',
    originalTitle: 'The Happytime Murders',
    year: 2018,
    director: 'Брайан Хенсон',
    localRating: 6.153,
    localVotes: 30568,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'Blood',
    title: 'Кровь',
    originalTitle: 'Blood',
    year: 2022,
    director: 'Брэд Андерсон',
    localRating: 6.153,
    localVotes: 19730,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'FreddyVsJason',
    title: 'Фредди против Джейсона',
    originalTitle: 'Freddy vs. Jason',
    year: 2003,
    director: 'Ронни Юй',
    localRating: 6.151,
    localVotes: 43398,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'TheCleansingHour',
    title: 'Час дьявола',
    originalTitle: 'The Cleansing Hour',
    year: 2019,
    director: 'Дэмиен ЛеВек',
    localRating: 6.150,
    localVotes: 36132,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'Apostle',
    title: 'Апостол',
    originalTitle: 'Apostle',
    year: 2018,
    director: 'Гарет Эванс',
    localRating: 6.150,
    localVotes: 19802,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheThingWithFeathers',
    title: 'Сущность',
    originalTitle: 'The Thing with Feathers',
    year: 2025,
    director: 'Дилан Саузерн',
    localRating: 6.150,
    localVotes: 18586,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Funhouse',
    title: 'Эксперимент «За стеклом»',
    originalTitle: 'Funhouse',
    year: 2019,
    director: 'Джейсон Уилльям Ли',
    localRating: 6.148,
    localVotes: 71879,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'JeepersCreepersII',
    title: 'Джиперс Криперс 2',
    originalTitle: 'Jeepers Creepers II',
    year: 2002,
    director: 'Виктор Сальва',
    localRating: 6.148,
    localVotes: 38811,
    genres: ['ужасы']
  },
  {
    id: 'TheThingWithFeathers',
    title: 'Сущность',
    originalTitle: 'The Thing with Feathers',
    year: 2025,
    director: 'Дилан Саузерн',
    localRating: 6.146,
    localVotes: 18622,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheWolfman',
    title: 'Человек‑волк',
    originalTitle: 'The Wolfman',
    year: 2010,
    director: 'Джо Джонстон',
    localRating: 6.145,
    localVotes: 43456,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Haunter',
    title: 'Лимб',
    originalTitle: 'Haunter',
    year: 2013,
    director: 'Винченцо Натали',
    localRating: 6.144,
    localVotes: 79242,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'KalianPantasMati',
    title: 'Астрал. Новые души',
    originalTitle: 'Kalian pantas mati',
    year: 2022,
    director: 'Гинанти Рона Тембан Сари',
    localRating: 6.142,
    localVotes: 26741,
    genres: ['ужасы']
  },
  {
    id: 'Countdown',
    title: 'Обратный отсчёт',
    originalTitle: 'Countdown',
    year: 2019,
    director: 'Джастин Дек',
    localRating: 6.140,
    localVotes: 217504,
    genres: ['ужасы']
  },
  {
    id: 'Claustro',
    title: 'Взаперти',
    originalTitle: 'Claustro',
    year: 2023,
    director: 'Олжас Баялбаев',
    localRating: 6.140,
    localVotes: 70012,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'PetSemataryII',
    title: 'Кладбище домашних животных 2',
    originalTitle: 'Pet Sematary II',
    year: 1992,
    director: 'Мэри Ламберт',
    localRating: 6.140,
    localVotes: 15370,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'EvilDead',
    title: 'Зловещие мертвецы: Чёрная книга',
    originalTitle: 'Evil Dead',
    year: 2013,
    director: 'Феде Альварес',
    localRating: 6.138,
    localVotes: 59490,
    genres: ['ужасы']
  },
  {
    id: 'StakeLand',
    title: 'Земля вампиров',
    originalTitle: 'Stake Land',
    year: 2010,
    director: 'Джим Микл',
    localRating: 6.130,
    localVotes: 15715,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'DragMeToHell',
    title: 'Затащи меня в Ад',
    originalTitle: 'Drag Me to Hell',
    year: 2009,
    director: 'Сэм Рэйми',
    localRating: 6.128,
    localVotes: 92734,
    genres: ['ужасы', 'комедия', 'фэнтези']
  },
  {
    id: 'RedRidingHood',
    title: 'Красная Шапочка',
    originalTitle: 'Red Riding Hood',
    year: 2011,
    director: 'Кэтрин Хардвик',
    localRating: 6.128,
    localVotes: 84101,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'DeathOfAUniicorn',
    title: 'Смерть единорога',
    originalTitle: 'Death of a Unicorn',
    year: 2025,
    director: 'Алекс Шарфман',
    localRating: 6.128,
    localVotes: 28382,
    genres: ['комедия', 'ужасы', 'фэнтези']
  },
  {
    id: '28YearsLater',
    title: '28 лет спустя',
    originalTitle: '28 Years Later',
    year: 2025,
    director: 'Дэнни Бойл',
    localRating: 6.126,
    localVotes: 87322,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Jigsaw',
    title: 'Пила 8',
    originalTitle: 'Jigsaw',
    year: 2017,
    director: 'Майкл Спириг',
    localRating: 6.125,
    localVotes: 162237,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'MyBloodyValentine',
    title: 'Мой кровавый Валентин 3D',
    originalTitle: 'My Bloody Valentine',
    year: 2009,
    director: 'Патрик Люссье',
    localRating: 6.124,
    localVotes: 35092,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'WakeUp',
    title: 'Ночной замес',
    originalTitle: 'Wake Up',
    year: 2023,
    director: 'Франсуа Симар',
    localRating: 6.124,
    localVotes: 10013,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'PrideAndPrejudiceAndZombies',
    title: 'Гордость и предубеждение и зомби',
    originalTitle: 'Pride and Prejudice and Zombies',
    year: 2015,
    director: 'Бёрр Стирс',
    localRating: 6.123,
    localVotes: 121603,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'NoWayUp',
    title: 'Из глубины',
    originalTitle: 'No Way Up',
    year: 2024,
    director: 'Клаудио Фах',
    localRating: 6.121,
    localVotes: 205353,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheHole',
    title: 'Врата в 3D',
    originalTitle: 'The Hole',
    year: 2009,
    director: 'Джо Данте',
    localRating: 6.121,
    localVotes: 19101,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Scream4',
    title: 'Крик 4',
    originalTitle: 'Scream 4',
    year: 2011,
    director: 'Уэс Крэйвен',
    localRating: 6.119,
    localVotes: 95531,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'DarkWater',
    title: 'Тёмная вода',
    originalTitle: 'Dark Water',
    year: 2005,
    director: 'Уолтер Саллес',
    localRating: 6.117,
    localVotes: 22687,
    genres: ['ужасы']
  },
  {
    id: 'TheBoy',
    title: 'Кукла',
    originalTitle: 'The Boy',
    year: 2015,
    director: 'Уильям Брент Белл',
    localRating: 6.116,
    localVotes: 101180,
    genres: ['ужасы']
  },
  {
    id: 'TokyoGhoulS',
    title: 'Токийский гуль 2',
    originalTitle: 'Tokyo Ghoul S',
    year: 2019,
    director: 'Кадзухико Хирамаки',
    localRating: 6.111,
    localVotes: 10805,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheOmen',
    title: 'Омен',
    originalTitle: 'The Omen',
    year: 2006,
    director: 'Джон Мур',
    localRating: 6.110,
    localVotes: 52206,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'HellHouseLLCOrigins',
    title: 'Дом ада: Исследователи потустороннего',
    originalTitle: 'Hell House LLC Origins: The Carmichael Manor',
    year: 2023,
    director: 'Стивен Коньетти',
    localRating: 6.107,
    localVotes: 34023,
    genres: ['ужасы']
  },
  {
    id: 'Anaconda',
    title: 'Анаконда',
    originalTitle: 'Anaconda',
    year: 1997,
    director: 'Луис Льоса',
    localRating: 6.100,
    localVotes: 40714,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'Dracula2000',
    title: 'Дракула 2000',
    originalTitle: 'Dracula 2000',
    year: 2000,
    director: 'Патрик Люссье',
    localRating: 6.096,
    localVotes: 26711,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'ANightmareOnElmStreetTheDreamChild',
    title: 'Кошмар на улице Вязов 5: Дитя сна',
    originalTitle: 'A Nightmare on Elm Street: The Dream Child',
    year: 1989,
    director: 'Стивен Хопкинс',
    localRating: 6.095,
    localVotes: 19218,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'TheNeonDemon',
    title: 'Неоновый демон',
    originalTitle: 'The Neon Demon',
    year: 2016,
    director: 'Николас Виндинг Рефн',
    localRating: 6.091,
    localVotes: 162262,
    genres: ['драма', 'триллер', 'ужасы']
  },
  {
    id: 'AlienCovenant',
    title: 'Чужой: Завет',
    originalTitle: 'Alien: Covenant',
    year: 2017,
    director: 'Ридли Скотт',
    localRating: 6.090,
    localVotes: 201419,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'H0us3',
    title: 'Пароль: Хаус',
    originalTitle: 'H0us3',
    year: 2018,
    director: 'Маноло Мунгуйя',
    localRating: 6.090,
    localVotes: 57154,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Shattered',
    title: 'Флирт с дьяволом',
    originalTitle: 'Shattered',
    year: 2021,
    director: 'Луис Прието',
    localRating: 6.088,
    localVotes: 109864,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'HouseOf9',
    title: 'Смертельный лабиринт',
    originalTitle: 'House of 9',
    year: 2004,
    director: 'Стивен Р. Монро',
    localRating: 6.087,
    localVotes: 12548,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheWretched',
    title: 'Первая ведьма',
    originalTitle: 'The Wretched',
    year: 2019,
    director: 'Бретт Пирс',
    localRating: 6.085,
    localVotes: 95635,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'Bando',
    title: 'Поезд в Пусан 2: Полуостров',
    originalTitle: 'Bando',
    year: 2020,
    director: 'Ён Сан-хо',
    localRating: 6.084,
    localVotes: 243003,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Aterrados',
    title: 'Оцепеневшие от страха',
    originalTitle: 'Aterrados',
    year: 2018,
    director: 'Демиан Рунья',
    localRating: 6.082,
    localVotes: 65813,
    genres: ['ужасы']
  },
  {
    id: 'Saheul',
    title: 'Астрал. Мёртвое сердце',
    originalTitle: 'Saheul',
    year: 2024,
    director: 'Хён Мун-соп',
    localRating: 6.082,
    localVotes: 11040,
    genres: ['ужасы']
  },
  {
    id: 'Underwater',
    title: 'Под водой',
    originalTitle: 'Underwater',
    year: 2019,
    director: 'Уильям Юбэнк',
    localRating: 6.074,
    localVotes: 98911,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'Smaragdgrün',
    title: 'Таймлесс 3: Изумрудная книга',
    originalTitle: 'Smaragdgrün',
    year: 2016,
    director: 'Феликс Фуксштайнер',
    localRating: 6.074,
    localVotes: 21536,
    genres: ['ужасы', 'фэнтези', 'приключения']
  },
  {
    id: 'FinalDestination5',
    title: 'Пункт назначения 5',
    originalTitle: 'Final Destination 5',
    year: 2011,
    director: 'Стивен Куэйл',
    localRating: 6.069,
    localVotes: 90881,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Crawl',
    title: 'Капкан',
    originalTitle: 'Crawl',
    year: 2019,
    director: 'Александр Ажа',
    localRating: 6.069,
    localVotes: 60962,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'Oddity',
    title: 'Астрал. Медиум',
    originalTitle: 'Oddity',
    year: 2024,
    director: 'Дэмиэн Маккарти',
    localRating: 6.068,
    localVotes: 68377,
    genres: ['ужасы']
  },
  {
    id: 'Lowlifes',
    title: 'Маргиналы',
    originalTitle: 'Lowlifes',
    year: 2024,
    director: 'Теш Гуттиконда',
    localRating: 6.067,
    localVotes: 10317,
    genres: ['ужасы']
  },
  {
    id: 'ResidentEvilAfterlife',
    title: 'Обитель зла 4: Жизнь после смерти 3D',
    originalTitle: 'Resident Evil: Afterlife',
    year: 2010,
    director: 'Пол У. С. Андерсон',
    localRating: 6.064,
    localVotes: 119513,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'NightOfTheReaper',
    title: 'Хэллоуин. Ночной кошмар',
    originalTitle: 'Night of the Reaper',
    year: 2025,
    director: 'Брэндон Кристенсен',
    localRating: 6.063,
    localVotes: 15494,
    genres: ['ужасы']
  },
  {
    id: 'Pulse',
    title: 'Пульс',
    originalTitle: 'Pulse',
    year: 2006,
    director: 'Джим Сонзеро',
    localRating: 6.062,
    localVotes: 23011,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'FridayThe13thPart2',
    title: 'Пятница 13‑е — Часть 2',
    originalTitle: 'Friday the 13th Part 2',
    year: 1981,
    director: 'Стив Майнер',
    localRating: 6.062,
    localVotes: 14751,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'WindChill',
    title: 'Призраки',
    originalTitle: 'Wind Chill',
    year: 2007,
    director: 'Грегори Джейкобс',
    localRating: 6.062,
    localVotes: 11635,
    genres: ['ужасы']
  },
  {
    id: 'HellHouseLLC',
    title: 'Дом ада',
    originalTitle: 'Hell House LLC',
    year: 2015,
    director: 'Стивен Коньетти',
    localRating: 6.061,
    localVotes: 44252,
    genres: ['ужасы']
  },
  {
    id: 'Goedammanchan',
    title: 'Вкус страха',
    originalTitle: 'Goedammanchan',
    year: 2023,
    director: 'Ан Сан-хун',
    localRating: 6.060,
    localVotes: 20384,
    genres: ['ужасы']
  },
  {
    id: 'Carriers',
    title: 'Носители',
    originalTitle: 'Carriers',
    year: 2008,
    director: 'Давид Пастор',
    localRating: 6.059,
    localVotes: 78305,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'AnAffairToDieFor',
    title: 'Измени или умри',
    originalTitle: 'An Affair to Die For',
    year: 2019,
    director: 'Виктор Гарсия',
    localRating: 6.057,
    localVotes: 38649,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Domovoy',
    title: 'Домовой',
    originalTitle: null,
    year: 2024,
    director: 'Андрей Загидуллин',
    localRating: 6.053,
    localVotes: 150374,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'Apollo18',
    title: 'Аполлон 18',
    originalTitle: 'Apollo 18',
    year: 2011,
    director: 'Гонсало Лопес‑Гальего',
    localRating: 6.053,
    localVotes: 49683,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'Freaky',
    title: 'Дичь',
    originalTitle: 'Freaky',
    year: 2020,
    director: 'Кристофер Лэндон',
    localRating: 6.053,
    localVotes: 38954,
    genres: ['ужасы', 'комедия', 'фэнтези']
  },
  {
    id: 'TheGrudge2',
    title: 'Проклятие 2',
    originalTitle: 'The Grudge 2',
    year: 2006,
    director: 'Такаси Симидзу',
    localRating: 6.052,
    localVotes: 15523,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ComeTrue',
    title: 'Кошмары',
    originalTitle: 'Come True',
    year: 2020,
    director: 'Энтони Скотт Бёрнс',
    localRating: 6.050,
    localVotes: 32647,
    genres: ['ужасы']
  },
  {
    id: 'FearStreetPartOne1994',
    title: 'Улица страха. Часть 1: 1994',
    originalTitle: 'Fear Street Part One: 1994',
    year: 2021,
    director: 'Ли Джаньяк',
    localRating: 6.050,
    localVotes: 23012,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'WerewolvesWithin',
    title: 'Оборотни внутри',
    originalTitle: 'Werewolves Within',
    year: 2020,
    director: 'Джош Рубен',
    localRating: 6.046,
    localVotes: 37023,
    genres: ['ужасы', 'комедия', 'детектив']
  },
  {
    id: 'Grabbers',
    title: 'Грэбберсы',
    originalTitle: 'Grabbers',
    year: 2011,
    director: 'Джон Райт',
    localRating: 6.044,
    localVotes: 15564,
    genres: ['ужасы', 'комедия', 'фантастика']
  },
  {
    id: 'TheJester2',
    title: 'Джестер 2',
    originalTitle: 'The Jester 2',
    year: 2025,
    director: 'Колин Кравчук',
    localRating: 6.044,
    localVotes: 14012,
    genres: ['ужасы']
  },
  {
    id: 'Species',
    title: 'Особь',
    originalTitle: 'Species',
    year: 1995,
    director: 'Роджер Дональдсон',
    localRating: 6.042,
    localVotes: 18532,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Antiviral',
    title: 'Антивирус',
    originalTitle: 'Antiviral',
    year: 2012,
    director: 'Брэндон Кроненберг',
    localRating: 6.042,
    localVotes: 12745,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'FrittVilt',
    title: 'Остаться в живых',
    originalTitle: 'Fritt vilt',
    year: 2006,
    director: 'Роар Утхауг',
    localRating: 6.042,
    localVotes: 10262,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ChildrenOfTheCorn',
    title: 'Дети кукурузы',
    originalTitle: 'Children of the Corn',
    year: 1984,
    director: 'Фриц Кирш',
    localRating: 6.041,
    localVotes: 30640,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Voces',
    title: 'Я слышу голоса',
    originalTitle: 'Voces',
    year: 2020,
    director: 'Анхель Гомес Эрнандес',
    localRating: 6.040,
    localVotes: 25613,
    genres: ['ужасы']
  },
  {
    id: 'Evilenko',
    title: 'Эвиленко',
    originalTitle: 'Evilenko',
    year: 2004,
    director: 'Давид Гриеко',
    localRating: 6.040,
    localVotes: 12380,
    genres: ['триллер', 'криминал', 'ужасы']
  },
  {
    id: 'NoOneWillSaveYou',
    title: 'Никто тебя не спасёт',
    originalTitle: 'No One Will Save You',
    year: 2023,
    director: 'Брайан Даффилд',
    localRating: 6.035,
    localVotes: 25486,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'IlargiGuztiak',
    title: 'Амайа. Дитя вампира',
    originalTitle: 'Ilargi Guztiak',
    year: 2020,
    director: 'Игорь Легаррета',
    localRating: 6.035,
    localVotes: 18166,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'WinchesterTheHouseThatGhostsBuilt',
    title: 'Винчестер. Дом, который построили призраки',
    originalTitle: 'Winchester: The House that Ghosts Built',
    year: 2018,
    director: 'Майкл Спириг',
    localRating: 6.034,
    localVotes: 57943,
    genres: ['ужасы', 'фэнтези', 'детектив']
  },
  {
    id: 'TheMessengers',
    title: 'Посланники',
    originalTitle: 'The Messengers',
    year: 2007,
    director: 'Дэнни Пан',
    localRating: 6.033,
    localVotes: 18699,
    genres: ['ужасы', 'драма', 'детектив']
  },
  {
    id: 'TheDark',
    title: 'Тёмные силы',
    originalTitle: 'The Dark',
    year: 2005,
    director: 'Джон Фоусет',
    localRating: 6.033,
    localVotes: 10098,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'BrideOfChucky',
    title: 'Невеста Чаки',
    originalTitle: 'Bride of Chucky',
    year: 1998,
    director: 'Ронни Юй',
    localRating: 6.031,
    localVotes: 20665,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'SecondsApart',
    title: 'Близнецы‑убийцы',
    originalTitle: 'Seconds Apart',
    year: 2010,
    director: 'Антонио Негре',
    localRating: 6.031,
    localVotes: 13737,
    genres: ['ужасы']
  },
  {
    id: 'BladeTrinity',
    title: 'Блэйд 3: Троица',
    originalTitle: 'Blade: Trinity',
    year: 2004,
    director: 'Дэвид С. Гойер',
    localRating: 6.028,
    localVotes: 72706,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Thanksgiving',
    title: 'День благодарения',
    originalTitle: 'Thanksgiving',
    year: 2023,
    director: 'Элай Рот',
    localRating: 6.024,
    localVotes: 16282,
    genres: ['ужасы']
  },
  {
    id: 'AsAboveSoBelow',
    title: 'Париж: Город мёртвых',
    originalTitle: 'As Above, So Below',
    year: 2014,
    director: 'Джон Эрик Даудл',
    localRating: 6.021,
    localVotes: 53422,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Vermines',
    title: 'Паутина страха',
    originalTitle: 'Vermines',
    year: 2023,
    director: 'Себастьян Ваничек',
    localRating: 6.020,
    localVotes: 35219,
    genres: ['ужасы']
  },
  {
    id: 'TheEmptyMan',
    title: 'Пустой человек',
    originalTitle: 'The Empty Man',
    year: 2020,
    director: 'Дэвид Прайор',
    localRating: 6.020,
    localVotes: 33928,
    genres: ['детектив', 'ужасы']
  },
  {
    id: 'WolfCreek',
    title: 'Волчья яма',
    originalTitle: 'Wolf Creek',
    year: 2004,
    director: 'Грег Маклин',
    localRating: 6.020,
    localVotes: 32539,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheStrangers',
    title: 'Незнакомцы',
    originalTitle: 'The Strangers',
    year: 2007,
    director: 'Брайан Бертино',
    localRating: 6.017,
    localVotes: 30158,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Whisper',
    title: 'Шёпот',
    originalTitle: 'Whisper',
    year: 2006,
    director: 'Стюарт Хендлер',
    localRating: 6.016,
    localVotes: 14083,
    genres: ['ужасы']
  },
  {
    id: 'TheNightHouse',
    title: 'Дом на другой стороне',
    originalTitle: 'The Night House',
    year: 2020,
    director: 'Дэвид Брукнер',
    localRating: 6.015,
    localVotes: 37294,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'HellraiserIIIHellOnEarth',
    title: 'Восставший из ада 3: Ад на Земле',
    originalTitle: 'Hellraiser III: Hell on Earth',
    year: 1992,
    director: 'Энтони Хикокс',
    localRating: 6.015,
    localVotes: 10,
    genres: ['ужасы']
  },
  {
    id: 'TheDescentPart2',
    title: 'Спуск 2',
    originalTitle: 'The Descent: Part 2',
    year: 2009,
    director: 'Джон Харрис',
    localRating: 6.014,
    localVotes: 101118,
    genres: ['ужасы']
  },
  {
    id: 'Muse',
    title: 'Муза смерти',
    originalTitle: 'Muse',
    year: 2017,
    director: 'Жауме Балагеро',
    localRating: 6.007,
    localVotes: 23669,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'KuBei',
    title: 'Последний день на Земле',
    originalTitle: 'Ku bei',
    year: 2021,
    director: 'Роб Джаббаз',
    localRating: 6.006,
    localVotes: 33305,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'ThePurge',
    title: 'Судная ночь',
    originalTitle: 'The Purge',
    year: 2013,
    director: 'Джеймс ДеМонако',
    localRating: 6.005,
    localVotes: 155886,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheNunII',
    title: 'Проклятие монахини 2',
    originalTitle: 'The Nun II',
    year: 2023,
    director: 'Майкл Чавес',
    localRating: 6.004,
    localVotes: 31614,
    genres: ['ужасы']
  },
  {
    id: 'WelcomeHome',
    title: 'Идеальная западня',
    originalTitle: 'Welcome Home',
    year: 2017,
    director: 'Джордж Рэтлифф',
    localRating: 6.003,
    localVotes: 49915,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'HouseAtTheEndOfTheStreet',
    title: 'Дом в конце улицы',
    originalTitle: 'House at the End of the Street',
    year: 2011,
    director: 'Марк Тондерай',
    localRating: 6.002,
    localVotes: 49636,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'IStillKnowWhatYouDidLastSummer',
    title: 'Я всё ещё знаю, что вы сделали прошлым летом',
    originalTitle: 'I Still Know What You Did Last Summer',
    year: 1998,
    director: 'Дэнни Кэннон',
    localRating: 6.000,
    localVotes: 30689,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheBabysitterKillerQueen',
    title: 'Няня. Королева проклятых',
    originalTitle: 'The Babysitter: Killer Queen',
    year: 2020,
    director: 'МакДжи',
    localRating: 5.999,
    localVotes: 15259,
    genres: ['ужасы', 'комедия', 'мелодрама']
  },
  {
    id: 'ColorOutOfSpace',
    title: 'Цвет из иных миров',
    originalTitle: 'Color Out of Space',
    year: 2019,
    director: 'Ричард Стэнли',
    localRating: 5.998,
    localVotes: 64123,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'FreddysDeadTheFinalNightmare',
    title: 'Кошмар на улице Вязов 6: Фредди мёртв',
    originalTitle: 'Freddy\'s Dead: The Final Nightmare',
    year: 1991,
    director: 'Рейчел Тэлалей',
    localRating: 5.997,
    localVotes: 21172,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'Frágiles',
    title: 'Хрупкость',
    originalTitle: 'Frágiles',
    year: 2005,
    director: 'Жауме Балагеро',
    localRating: 5.992,
    localVotes: 12662,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheBoyBehindTheDoor',
    title: 'Прячься',
    originalTitle: 'The Boy Behind the Door',
    year: 2020,
    director: 'Давид Шарбонье',
    localRating: 5.991,
    localVotes: 22691,
    genres: ['ужасы']
  },
  {
    id: 'Delirium',
    title: 'Истерия',
    originalTitle: 'Delirium',
    year: 2016,
    director: 'Дэннис Илиадис',
    localRating: 5.989,
    localVotes: 29181,
    genres: ['ужасы']
  },
  {
    id: 'TheUnholy',
    title: 'Нечестивые',
    originalTitle: 'The Unholy',
    year: 2021,
    director: 'Эван Спилиотопулос',
    localRating: 5.987,
    localVotes: 47370,
    genres: ['ужасы']
  },
  {
    id: 'CabinFever',
    title: 'Лихорадка',
    originalTitle: 'Cabin Fever',
    year: 2003,
    director: 'Элай Рот',
    localRating: 5.987,
    localVotes: 15811,
    genres: ['ужасы']
  },
  {
    id: 'TheMonkey',
    title: 'Обезьяна',
    originalTitle: 'The Monkey',
    year: 2025,
    director: 'Осгуд Перкинс',
    localRating: 5.986,
    localVotes: 132926,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Priest',
    title: 'Пастырь',
    originalTitle: 'Priest',
    year: 2011,
    director: 'Скотт Чарльз Стюарт',
    localRating: 5.985,
    localVotes: 116024,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'FridayThe13thPartIII',
    title: 'Пятница 13‑е — Часть 3',
    originalTitle: 'Friday the 13th Part III',
    year: 1982,
    director: 'Стив Майнер',
    localRating: 5.984,
    localVotes: 12090,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Sestry',
    title: 'Сёстры',
    originalTitle: null,
    year: 2022,
    director: 'Иван Петухов',
    localRating: 5.983,
    localVotes: 27699,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'Halloween2007',
    title: 'Хэллоуин 2007',
    originalTitle: 'Halloween',
    year: 2007,
    director: 'Роб Зомби',
    localRating: 5.983,
    localVotes: 22889,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'SatanicHispanics',
    title: 'Байки на Хэллоуин',
    originalTitle: 'Satanic Hispanics',
    year: 2022,
    director: 'Алехандро Брюгес',
    localRating: 5.982,
    localVotes: 13362,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'TheWard',
    title: 'Палата',
    originalTitle: 'The Ward',
    year: 2010,
    director: 'Джон Карпентер',
    localRating: 5.981,
    localVotes: 61729,
    genres: ['ужасы']
  },
  {
    id: 'ScoutsGuideToTheZombieApocalypse',
    title: 'Скауты против зомби',
    originalTitle: 'Scouts Guide to the Zombie Apocalypse',
    year: 2015,
    director: 'Кристофер Лэндон',
    localRating: 5.978,
    localVotes: 38251,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'FridayThe13thTheFinalChapter',
    title: 'Пятница 13‑е — Часть 4: Последняя глава',
    originalTitle: 'Friday the 13th: The Final Chapter',
    year: 1984,
    director: 'Джозеф Зито',
    localRating: 5.975,
    localVotes: 10676,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'LightsOut',
    title: 'И гаснет свет...',
    originalTitle: 'Lights Out',
    year: 2016,
    director: 'Дэвид Ф. Сандберг',
    localRating: 5.974,
    localVotes: 80427,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'UnfriendedDarkWeb',
    title: 'Убрать из друзей: Даркнет',
    originalTitle: 'Unfriended: Dark Web',
    year: 2018,
    director: 'Стивен Саско',
    localRating: 5.974,
    localVotes: 14343,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Telekinez',
    title: 'Телекинез',
    originalTitle: null,
    year: 2022,
    director: 'Константин Максимов',
    localRating: 5.974,
    localVotes: 11230,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'ClownInACornfield',
    title: 'Кровавый урожай',
    originalTitle: 'Clown in a Cornfield',
    year: 2024,
    director: 'Илай Крэйг',
    localRating: 5.973,
    localVotes: 34589,
    genres: ['ужасы']
  },
  {
    id: 'NoEntres',
    title: 'Заклятье. Последний стрим',
    originalTitle: 'No entres',
    year: 2024,
    director: 'Уго Кардосо',
    localRating: 5.972,
    localVotes: 31002,
    genres: ['ужасы']
  },
  {
    id: 'Slither',
    title: 'Слизняк',
    originalTitle: 'Slither',
    year: 2006,
    director: 'Джеймс Ганн',
    localRating: 5.972,
    localVotes: 18957,
    genres: ['ужасы', 'фантастика', 'комедия']
  },
  {
    id: 'CubeZero',
    title: 'Куб Зеро (видео)',
    originalTitle: 'Cube Zero',
    year: 2004,
    director: 'Эрни Барбараш',
    localRating: 5.970,
    localVotes: 24734,
    genres: ['фантастика', 'триллер', 'драма']
  },
  {
    id: 'Ils',
    title: 'Они',
    originalTitle: 'Ils',
    year: 2006,
    director: 'Давид Моро',
    localRating: 5.968,
    localVotes: 10076,
    genres: ['ужасы']
  },
  {
    id: 'TheGates',
    title: 'Врата ада',
    originalTitle: 'The Gates',
    year: 2023,
    director: 'Стивен Холл',
    localRating: 5.967,
    localVotes: 16546,
    genres: ['ужасы']
  },
  {
    id: 'OksuyeokGwisin',
    title: 'Призрачная станция',
    originalTitle: 'Oksuyeok gwisin',
    year: 2022,
    director: 'Чон Ён-ги',
    localRating: 5.965,
    localVotes: 41625,
    genres: ['ужасы']
  },
  {
    id: 'DarkGame',
    title: 'Пила. Джокер',
    originalTitle: 'DarkGame',
    year: 2024,
    director: 'Ховард Дж. Форд',
    localRating: 5.964,
    localVotes: 46469,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Apartment7A',
    title: 'Квартира 7А',
    originalTitle: 'Apartment 7A',
    year: 2023,
    director: 'Натали Эрика Джеймс',
    localRating: 5.964,
    localVotes: 10928,
    genres: ['ужасы']
  },
  {
    id: 'TheFirstOmen',
    title: 'Омен. Первое знамение',
    originalTitle: 'The First Omen',
    year: 2024,
    director: 'Аркаша Стивенсон',
    localRating: 5.961,
    localVotes: 10691,
    genres: ['ужасы']
  },
  {
    id: 'Severance',
    title: 'Корпоративка',
    originalTitle: 'Severance',
    year: 2006,
    director: 'Кристофер Смит',
    localRating: 5.959,
    localVotes: 20200,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'ApocalipsisZ',
    title: 'Апокалипсис Z: Начало конца',
    originalTitle: 'Apocalipsis Z: El principio del fin',
    year: 2024,
    director: 'Карлес Торренс',
    localRating: 5.957,
    localVotes: 34469,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Held',
    title: 'Опасные игры',
    originalTitle: 'Held',
    year: 2020,
    director: 'Трэвис Клафф',
    localRating: 5.957,
    localVotes: 33050,
    genres: ['ужасы']
  },
  {
    id: 'TheLastBreath',
    title: 'Опасные воды',
    originalTitle: 'The Last Breath',
    year: 2023,
    director: 'Йоахим Хеден',
    localRating: 5.955,
    localVotes: 24650,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ParanormalActivity2',
    title: 'Паранормальное явление 2',
    originalTitle: 'Paranormal Activity 2',
    year: 2010,
    director: 'Тод Уильямс',
    localRating: 5.953,
    localVotes: 52554,
    genres: ['ужасы']
  },
  {
    id: 'Solstice',
    title: 'Солнцестояние',
    originalTitle: 'Solstice',
    year: 2007,
    director: 'Дэниэл Мирик',
    localRating: 5.953,
    localVotes: 11662,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Sunyi',
    title: 'Астрал. Шепот мертвых',
    originalTitle: 'Sunyi',
    year: 2019,
    director: 'Ави Сурьяди',
    localRating: 5.948,
    localVotes: 15314,
    genres: ['ужасы']
  },
  {
    id: 'BlackPhone2',
    title: 'Чёрный телефон 2',
    originalTitle: 'Black Phone 2',
    year: 2025,
    director: 'Скотт Дерриксон',
    localRating: 5.947,
    localVotes: 21344,
    genres: ['ужасы']
  },
  {
    id: 'Cursed',
    title: 'Оборотни',
    originalTitle: 'Cursed',
    year: 2005,
    director: 'Уэс Крэйвен',
    localRating: 5.947,
    localVotes: 11918,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'TheMeg',
    title: 'Мег: Монстр глубины',
    originalTitle: 'The Meg',
    year: 2018,
    director: 'Джон Тёртлтауб',
    localRating: 5.945,
    localVotes: 269368,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: '47MetersDown',
    title: 'Синяя бездна',
    originalTitle: '47 Meters Down',
    year: 2017,
    director: 'Йоханнес Робертс',
    localRating: 5.945,
    localVotes: 75567,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'PostMortem',
    title: 'Пост Мортем',
    originalTitle: 'Post Mortem',
    year: 2020,
    director: 'Петер Бергенди',
    localRating: 5.944,
    localVotes: 49235,
    genres: ['ужасы']
  },
  {
    id: 'AbrahamLincolnVampireHunter',
    title: 'Президент Линкольн: Охотник на вампиров',
    originalTitle: 'Abraham Lincoln: Vampire Hunter',
    year: 2012,
    director: 'Тимур Бекмамбетов',
    localRating: 5.942,
    localVotes: 95222,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'Pulau',
    title: 'Проклятый остров',
    originalTitle: 'Pulau',
    year: 2023,
    director: 'Ё Хо',
    localRating: 5.942,
    localVotes: 23138,
    genres: ['ужасы']
  },
  {
    id: 'NineDead',
    title: 'Девять в списке мёртвых',
    originalTitle: 'Nine Dead',
    year: 2009,
    director: 'Крис Шэдли',
    localRating: 5.939,
    localVotes: 20825,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'GoodBoy',
    title: 'Глазами пса',
    originalTitle: 'Good Boy',
    year: 2025,
    director: 'Бен Леонберг',
    localRating: 5.938,
    localVotes: 17389,
    genres: ['ужасы']
  },
  {
    id: 'PerempuanTanahJahanam',
    title: 'Ведьма. Деревня проклятых',
    originalTitle: 'Perempuan Tanah Jahanam',
    year: 2019,
    director: 'Джоко Анвар',
    localRating: 5.937,
    localVotes: 17520,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Backcountry',
    title: 'Роковой маршрут',
    originalTitle: 'Backcountry',
    year: 2014,
    director: 'Адам Макдональд',
    localRating: 5.936,
    localVotes: 27953,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'RavensHollow',
    title: 'Воронья лощина',
    originalTitle: 'Raven\'s Hollow',
    year: 2022,
    director: 'Кристофер Хаттон',
    localRating: 5.935,
    localVotes: 17656,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'EatLocals',
    title: 'Натуральные упыри',
    originalTitle: 'Eat Locals',
    year: 2016,
    director: 'Джейсон Флеминг',
    localRating: 5.935,
    localVotes: 11648,
    genres: ['ужасы', 'боевик', 'комедия']
  },
  {
    id: 'LaNuitADevoreLeMonde',
    title: 'Париж. Город Zомби',
    originalTitle: 'La nuit a dévoré le monde',
    year: 2017,
    director: 'Доминик Роше',
    localRating: 5.931,
    localVotes: 45185,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Leprechaun',
    title: 'Лепрекон',
    originalTitle: 'Leprechaun',
    year: 1993,
    director: 'Марк Джонс',
    localRating: 5.927,
    localVotes: 13328,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'AnnabelleComesHome',
    title: 'Проклятие Аннабель 3',
    originalTitle: 'Annabelle Comes Home',
    year: 2019,
    director: 'Гари Доберман',
    localRating: 5.925,
    localVotes: 59956,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'WeGoOn',
    title: 'Мы продолжаем',
    originalTitle: 'We Go On',
    year: 2015,
    director: 'Джесси Холлэнд',
    localRating: 5.924,
    localVotes: 19291,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'DontBeAfraidOfTheDark',
    title: 'Не бойся темноты',
    originalTitle: 'Don\'t Be Afraid of the Dark',
    year: 2010,
    director: 'Трой Никси',
    localRating: 5.920,
    localVotes: 46702,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'TheLodge',
    title: 'Сторожка',
    originalTitle: 'The Lodge',
    year: 2019,
    director: 'Северин Фиала',
    localRating: 5.919,
    localVotes: 22377,
    genres: ['триллер', 'драма', 'ужасы']
  },
  {
    id: 'Deadstream',
    title: 'Паранормальные явления. Дом призраков',
    originalTitle: 'Deadstream',
    year: 2022,
    director: 'Джозеф Винтер',
    localRating: 5.916,
    localVotes: 55082,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Neukdaesanyang',
    title: 'Корабль в Пусан',
    originalTitle: 'Neukdaesanyang',
    year: 2022,
    director: 'Ким Хон-сон',
    localRating: 5.914,
    localVotes: 128267,
    genres: ['боевик', 'ужасы', 'криминал']
  },
  {
    id: 'Ravage',
    title: 'Несломленная',
    originalTitle: 'Ravage',
    year: 2019,
    director: 'Тедди Греннан',
    localRating: 5.914,
    localVotes: 41268,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'RareExports',
    title: 'Санта на продажу',
    originalTitle: 'Rare Exports',
    year: 2010,
    director: 'Ялмари Хеландер',
    localRating: 5.914,
    localVotes: 10516,
    genres: ['ужасы', 'фэнтези', 'приключения']
  },
  {
    id: 'Evidence',
    title: 'Улики',
    originalTitle: 'Evidence',
    year: 2012,
    director: 'Олатунде Осунсанми',
    localRating: 5.913,
    localVotes: 17081,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TokyoGhoul',
    title: 'Токийский гуль',
    originalTitle: 'Tokyo Ghoul',
    year: 2017,
    director: 'Кэнтаро Хагивара',
    localRating: 5.912,
    localVotes: 32725,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'Excision',
    title: 'Экстирпация',
    originalTitle: 'Excision',
    year: 2012,
    director: 'Ричард Бейтс мл.',
    localRating: 5.908,
    localVotes: 18946,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Spell',
    title: 'Заклинание',
    originalTitle: 'Spell',
    year: 2020,
    director: 'Марк Тондерай',
    localRating: 5.908,
    localVotes: 14598,
    genres: ['ужасы']
  },
  {
    id: 'Doom',
    title: 'Doom',
    originalTitle: 'Doom',
    year: 2005,
    director: 'Анджей Бартковяк',
    localRating: 5.907,
    localVotes: 105172,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'Alone',
    title: 'Дом Z',
    originalTitle: 'Alone',
    year: 2020,
    director: 'Джонни Мартин',
    localRating: 5.907,
    localVotes: 39235,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'DeepFear',
    title: 'На глубине страха',
    originalTitle: 'Deep Fear',
    year: 2022,
    director: 'Маркус Адамс',
    localRating: 5.907,
    localVotes: 38103,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'TeenWolfTheMovie',
    title: 'Оборотень: Фильм',
    originalTitle: 'Teen Wolf: The Movie',
    year: 2023,
    director: 'Рассел Малкэй',
    localRating: 5.907,
    localVotes: 21200,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'TheCave',
    title: 'Пещера',
    originalTitle: 'The Cave',
    year: 2005,
    director: 'Брюс Хант',
    localRating: 5.906,
    localVotes: 16073,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TruthOrDare',
    title: 'Играй до смерти',
    originalTitle: 'Truth or Dare',
    year: 2011,
    director: 'Роберт Хит',
    localRating: 5.905,
    localVotes: 16477,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'GretelAndHansel',
    title: 'Гретель и Гензель',
    originalTitle: 'Gretel & Hansel',
    year: 2020,
    director: 'Осгуд Перкинс',
    localRating: 5.904,
    localVotes: 92785,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'ParanormalActivity3',
    title: 'Паранормальное явление 3',
    originalTitle: 'Paranormal Activity 3',
    year: 2011,
    director: 'Генри Джуст',
    localRating: 5.904,
    localVotes: 40785,
    genres: ['ужасы']
  },
  {
    id: 'AttackTheBlock',
    title: 'Чужие на районе',
    originalTitle: 'Attack the Block',
    year: 2011,
    director: 'Джо Корниш',
    localRating: 5.904,
    localVotes: 14669,
    genres: ['фантастика', 'боевик', 'комедия']
  },
  {
    id: 'TheCellar',
    title: 'Заклятье: Спуск к дьяволу',
    originalTitle: 'The Cellar',
    year: 2021,
    director: 'Брендан Малдауни',
    localRating: 5.902,
    localVotes: 43984,
    genres: ['ужасы']
  },
  {
    id: 'ArmyOfTheDead',
    title: 'Армия мертвецов',
    originalTitle: 'Army of the Dead',
    year: 2021,
    director: 'Зак Снайдер',
    localRating: 5.901,
    localVotes: 67283,
    genres: ['ужасы', 'драма', 'боевик']
  },
  {
    id: 'TheFinalGirls',
    title: 'Последние девушки',
    originalTitle: 'The Final Girls',
    year: 2015,
    director: 'Тодд Штраус-Шульсон',
    localRating: 5.901,
    localVotes: 13846,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Carrie',
    title: 'Телекинез',
    originalTitle: 'Carrie',
    year: 2013,
    director: 'Кимберли Пирс',
    localRating: 5.900,
    localVotes: 114612,
    genres: ['триллер', 'ужасы', 'драма']
  },
  {
    id: 'Creep',
    title: 'Крип',
    originalTitle: 'Creep',
    year: 2004,
    director: 'Кристофер Смит',
    localRating: 5.899,
    localVotes: 18878,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'FridayThe13th',
    title: 'Пятница 13-е',
    originalTitle: 'Friday the 13th',
    year: 2009,
    director: 'Маркус Ниспел',
    localRating: 5.895,
    localVotes: 70512,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheTwin',
    title: 'Близнец',
    originalTitle: 'The Twin',
    year: 2022,
    director: 'Танели Мустонен',
    localRating: 5.895,
    localVotes: 34290,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'WhenAStrangerCalls',
    title: 'Когда звонит незнакомец',
    originalTitle: 'When a Stranger Calls',
    year: 2006,
    director: 'Саймон Уэст',
    localRating: 5.892,
    localVotes: 20193,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheWatchers',
    title: 'Смотрители',
    originalTitle: 'The Watchers',
    year: 2024,
    director: 'Ишана Шьямалан',
    localRating: 5.888,
    localVotes: 30662,
    genres: ['ужасы']
  },
  {
    id: 'VampireAcademy',
    title: 'Академия вампиров',
    originalTitle: 'Vampire Academy',
    year: 2014,
    director: 'Марк Уотерс',
    localRating: 5.887,
    localVotes: 123375,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'TheCloverfieldParadox',
    title: 'Парадокс Кловерфилда',
    originalTitle: 'The Cloverfield Paradox',
    year: 2018,
    director: 'Джулиус Она',
    localRating: 5.886,
    localVotes: 38877,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'ItComesAtNight',
    title: 'Оно приходит ночью',
    originalTitle: 'It Comes at Night',
    year: 2017,
    director: 'Трей Эдвард Шульц',
    localRating: 5.886,
    localVotes: 33300,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Terrifier',
    title: 'Ужасающий',
    originalTitle: 'Terrifier',
    year: 2016,
    director: 'Дэмиен Леоне',
    localRating: 5.883,
    localVotes: 116096,
    genres: ['ужасы']
  },
  {
    id: 'Malasana32',
    title: 'Заклятье. Дом 32',
    originalTitle: 'Malasaña 32',
    year: 2020,
    director: 'Альберт Пинто',
    localRating: 5.883,
    localVotes: 100921,
    genres: ['ужасы']
  },
  {
    id: 'FollowMe',
    title: 'Клаустрофобы: Квест в Москве',
    originalTitle: 'Follow Me',
    year: 2020,
    director: 'Уилл Верник',
    localRating: 5.883,
    localVotes: 76130,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'GueulesNoires',
    title: 'Спуск в бездну',
    originalTitle: 'Gueules noires',
    year: 2023,
    director: 'Матьё Тури',
    localRating: 5.882,
    localVotes: 52534,
    genres: ['ужасы']
  },
  {
    id: 'TheBreed',
    title: 'Свора',
    originalTitle: 'The Breed',
    year: 2006,
    director: 'Николас Мастандреа',
    localRating: 5.881,
    localVotes: 18290,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Longlegs',
    title: 'Собиратель душ',
    originalTitle: 'Longlegs',
    year: 2023,
    director: 'Осгуд Перкинс',
    localRating: 5.874,
    localVotes: 225571,
    genres: ['триллер', 'детектив', 'ужасы']
  },
  {
    id: 'TheReef',
    title: 'Открытое море: Новые жертвы',
    originalTitle: 'The Reef',
    year: 2010,
    director: 'Эндрю Трауки',
    localRating: 5.874,
    localVotes: 49366,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheSacrament',
    title: 'Таинство',
    originalTitle: 'The Sacrament',
    year: 2013,
    director: 'Тай Уэст',
    localRating: 5.874,
    localVotes: 12004,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'OfficeUprising',
    title: 'Офисный беспредел',
    originalTitle: 'Office Uprising',
    year: 2018,
    director: 'Лин Одинг',
    localRating: 5.873,
    localVotes: 25868,
    genres: ['ужасы', 'боевик', 'комедия']
  },
  {
    id: 'ThePurgeElectionYear',
    title: 'Судная ночь 3',
    originalTitle: 'The Purge: Election Year',
    year: 2016,
    director: 'Джеймс ДеМонако',
    localRating: 5.867,
    localVotes: 55678,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'February',
    title: 'Февраль',
    originalTitle: 'February',
    year: 2015,
    director: 'Осгуд Перкинс',
    localRating: 5.867,
    localVotes: 10311,
    genres: ['ужасы']
  },
  {
    id: 'Brightburn',
    title: 'Гори, гори ясно',
    originalTitle: 'Brightburn',
    year: 2019,
    director: 'Дэвид Яровески',
    localRating: 5.865,
    localVotes: 82924,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'ColdSkin',
    title: 'Атлантида',
    originalTitle: 'Cold Skin',
    year: 2016,
    director: 'Ксавье Жанс',
    localRating: 5.865,
    localVotes: 81185,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'Karakoz',
    title: 'Страшные истории для рассказа у костра',
    originalTitle: 'Каракоз',
    year: 2018,
    director: 'Роман Сидоренко',
    localRating: 5.864,
    localVotes: 11473,
    genres: ['ужасы']
  },
  {
    id: 'TheUnborn',
    title: 'Нерождённый',
    originalTitle: 'The Unborn',
    year: 2009,
    director: 'Дэвид С. Гойер',
    localRating: 5.863,
    localVotes: 42544,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'ADarkSong',
    title: 'Песнь дьявола',
    originalTitle: 'A Dark Song',
    year: 2016,
    director: 'Лайам Гэвин',
    localRating: 5.863,
    localVotes: 30009,
    genres: ['ужасы']
  },
  {
    id: '8',
    title: 'Отдай свою душу',
    originalTitle: '8',
    year: 2019,
    director: 'Харольд Хёльшер',
    localRating: 5.860,
    localVotes: 21233,
    genres: ['ужасы']
  },
  {
    id: 'ThePossession',
    title: 'Шкатулка проклятия',
    originalTitle: 'The Possession',
    year: 2011,
    director: 'Уле Борнедаль',
    localRating: 5.859,
    localVotes: 42647,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'LosUltimosDias',
    title: 'Эпидемия',
    originalTitle: 'Los últimos días',
    year: 2013,
    director: 'Давид Пастор',
    localRating: 5.859,
    localVotes: 37750,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Pahanhautoja',
    title: 'Скрежет',
    originalTitle: 'Pahanhautoja',
    year: 2021,
    director: 'Ханна Бергхольм',
    localRating: 5.858,
    localVotes: 21512,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'FirstBorn',
    title: 'Младенец',
    originalTitle: 'First Born',
    year: 2007,
    director: 'Исаак Уэбб',
    localRating: 5.857,
    localVotes: 12683,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'ChildsPlay',
    title: 'Детские игры',
    originalTitle: 'Child\'s Play',
    year: 2019,
    director: 'Ларс Клевберг',
    localRating: 5.856,
    localVotes: 55553,
    genres: ['ужасы']
  },
  {
    id: 'NightTeeth',
    title: 'Клыки ночи',
    originalTitle: 'Night Teeth',
    year: 2021,
    director: 'Адам Рэндолл',
    localRating: 5.854,
    localVotes: 18108,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Arcadian',
    title: 'Судная ночь в Аркадии',
    originalTitle: 'Arcadian',
    year: 2024,
    director: 'Бенжамин Брюэр',
    localRating: 5.851,
    localVotes: 55099,
    genres: ['ужасы']
  },
  {
    id: 'JuegaConmigo',
    title: 'Кукла',
    originalTitle: 'Juega Conmigo',
    year: 2020,
    director: 'Адриан Гарсиа Больяно',
    localRating: 5.847,
    localVotes: 23632,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'HellHouseLLCIITheAbaddonHotel',
    title: 'Дом ада. 2 Отель «Абаддон»',
    originalTitle: 'Hell House LLC II: The Abaddon Hotel',
    year: 2018,
    director: 'Стивен Коньетти',
    localRating: 5.841,
    localVotes: 30474,
    genres: ['ужасы']
  },
  {
    id: 'AQuietPlaceDayOne',
    title: 'Тихое место: День первый',
    originalTitle: 'A Quiet Place: Day One',
    year: 2024,
    director: 'Майкл Сарноски',
    localRating: 5.840,
    localVotes: 48396,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'FiveNightsAtFreddys',
    title: 'Пять ночей с Фредди',
    originalTitle: 'Five Nights at Freddy\'s',
    year: 2023,
    director: 'Эмма Тамми',
    localRating: 5.839,
    localVotes: 159758,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheWitchInTheWindow',
    title: 'Проклятый дом',
    originalTitle: 'The Witch in the Window',
    year: 2018,
    director: 'Энди Миттон',
    localRating: 5.838,
    localVotes: 53806,
    genres: ['драма', 'ужасы']
  },
  {
    id: 'RangZong',
    title: 'Паранормальные явления. Медиум',
    originalTitle: 'Rang Zong',
    year: 2021,
    director: 'Банйонг Писантханакун',
    localRating: 5.838,
    localVotes: 14892,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'RiverOfBlood',
    title: 'Затерянные в джунглях',
    originalTitle: 'River of Blood',
    year: 2024,
    director: 'Ховард Дж. Форд',
    localRating: 5.837,
    localVotes: 134609,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'UnderTheSkin',
    title: 'Побудь в моей шкуре',
    originalTitle: 'Under the Skin',
    year: 2013,
    director: 'Джонатан Глейзер',
    localRating: 5.835,
    localVotes: 54402,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'OuijaOriginOfEvil',
    title: 'Уиджи. Проклятие доски дьявола',
    originalTitle: 'Ouija: Origin of Evil',
    year: 2016,
    director: 'Майк Флэнаган',
    localRating: 5.835,
    localVotes: 37857,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'ElLlanto',
    title: 'Вопль',
    originalTitle: 'El llanto',
    year: 2023,
    director: 'Педро Мартин-Калеро',
    localRating: 5.835,
    localVotes: 16351,
    genres: ['ужасы']
  },
  {
    id: 'Krampus',
    title: 'Крампус',
    originalTitle: 'Krampus',
    year: 2015,
    director: 'Майкл Догерти',
    localRating: 5.834,
    localVotes: 47914,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'BooksOfBlood',
    title: 'Книги крови',
    originalTitle: 'Books of Blood',
    year: 2020,
    director: 'Брэннон Брага',
    localRating: 5.832,
    localVotes: 25968,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'TheDevilsCandy',
    title: 'Дары смерти',
    originalTitle: 'The Devil\'s Candy',
    year: 2015,
    director: 'Шон Бирн',
    localRating: 5.832,
    localVotes: 19788,
    genres: ['ужасы']
  },
  {
    id: 'Halloween',
    title: 'Хэллоуин',
    originalTitle: 'Halloween',
    year: 2018,
    director: 'Дэвид Гордон Грин',
    localRating: 5.826,
    localVotes: 56216,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'ScoobyDoo2MonstersUnleashed',
    title: 'Скуби‑Ду 2: Монстры на свободе',
    originalTitle: 'Scooby Doo 2: Monsters Unleashed',
    year: 2004,
    director: 'Раджа Госнелл',
    localRating: 5.825,
    localVotes: 24429,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'TheExorcismOfGod',
    title: 'Последнее пришествие дьявола',
    originalTitle: 'The Exorcism of God',
    year: 2021,
    director: 'Алехандро Идальго',
    localRating: 5.823,
    localVotes: 23516,
    genres: ['ужасы']
  },
  {
    id: 'Maniac',
    title: 'Маньяк',
    originalTitle: 'Maniac',
    year: 2012,
    director: 'Франк Халфун',
    localRating: 5.822,
    localVotes: 33608,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'TheLastVoyageOfTheDemeter',
    title: 'Последнее путешествие «Деметра»',
    originalTitle: 'The Last Voyage of the Demeter',
    year: 2023,
    director: 'Андре Эвредал',
    localRating: 5.820,
    localVotes: 27979,
    genres: ['ужасы']
  },
  {
    id: 'TheBadBatch',
    title: 'Плохая партия',
    originalTitle: 'The Bad Batch',
    year: 2016,
    director: 'Ана Лили Амирпур',
    localRating: 5.820,
    localVotes: 13430,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheVoid',
    title: 'Пустота',
    originalTitle: 'The Void',
    year: 2016,
    director: 'Джереми Гиллеспи',
    localRating: 5.820,
    localVotes: 12928,
    genres: ['ужасы']
  },
  {
    id: 'WheresRose',
    title: 'Другая',
    originalTitle: 'Where\'s Rose',
    year: 2021,
    director: 'Джон Мэтис',
    localRating: 5.819,
    localVotes: 20315,
    genres: ['ужасы']
  },
  {
    id: 'InTheTallGrass',
    title: 'Высокая зелёная трава',
    originalTitle: 'In the Tall Grass',
    year: 2019,
    director: 'Винченцо Натали',
    localRating: 5.818,
    localVotes: 31679,
    genres: ['ужасы', 'триллер', 'фэнтези']
  },
  {
    id: 'PeterPansNeverlandNightmare',
    title: 'Питер Пэн. Кошмар в Нетландии',
    originalTitle: 'Peter Pan\'s Neverland Nightmare',
    year: 2025,
    director: 'Скотт Чемберс',
    localRating: 5.816,
    localVotes: 40283,
    genres: ['ужасы']
  },
  {
    id: 'TheDevilConspiracy',
    title: 'Заговор дьявола',
    originalTitle: 'The Devil Conspiracy',
    year: 2022,
    director: 'Нэйтан Франковски',
    localRating: 5.815,
    localVotes: 121299,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Beowulf',
    title: 'Беовульф',
    originalTitle: 'Beowulf',
    year: 1999,
    director: 'Грэм Бейкер',
    localRating: 5.813,
    localVotes: 17887,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'InsidiousChapter3',
    title: 'Астрал 3',
    originalTitle: 'Insidious: Chapter 3',
    year: 2015,
    director: 'Ли Уоннелл',
    localRating: 5.812,
    localVotes: 83627,
    genres: ['ужасы']
  },
  {
    id: 'Extinction',
    title: 'Вымирание',
    originalTitle: 'Extinction',
    year: 2015,
    director: 'Мигель Анхель Вивас',
    localRating: 5.812,
    localVotes: 12343,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Taro',
    title: 'Таро',
    originalTitle: 'Taro',
    year: 2024,
    director: 'Чхве Бён-гиль',
    localRating: 5.809,
    localVotes: 15304,
    genres: ['ужасы']
  },
  {
    id: 'ThePainted',
    title: 'Астрал. Спуск к дьяволу',
    originalTitle: 'The Painted',
    year: 2024,
    director: 'Саша Сибли',
    localRating: 5.806,
    localVotes: 38866,
    genres: ['ужасы']
  },
  {
    id: 'Scream7',
    title: 'Крик 7',
    originalTitle: 'Scream 7',
    year: 2026,
    director: 'Кевин Уильямсон',
    localRating: 5.806,
    localVotes: 30940,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ASavannahHaunting',
    title: 'Метки тьмы',
    originalTitle: 'A Savannah Haunting',
    year: 2021,
    director: 'Уильям Марк Маккалло',
    localRating: 5.804,
    localVotes: 34091,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Annabelle',
    title: 'Проклятие Аннабель',
    originalTitle: 'Annabelle',
    year: 2014,
    director: 'Джон Р. Леонетти',
    localRating: 5.802,
    localVotes: 110882,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: '47MetersDownUncaged',
    title: 'Синяя бездна 2',
    originalTitle: '47 Meters Down: Uncaged',
    year: 2019,
    director: 'Йоханнес Робертс',
    localRating: 5.800,
    localVotes: 46140,
    genres: ['ужасы']
  },
  {
    id: 'Morgan',
    title: 'Морган',
    originalTitle: 'Morgan',
    year: 2016,
    director: 'Люк Скотт',
    localRating: null,
    localVotes: null,
    genres: ['ужасы']
  },
  {
    id: 'CaptiveState',
    title: 'Битва за Землю',
    originalTitle: 'Captive State',
    year: 2019,
    director: 'Руперт Уайатт',
    localRating: 5.797,
    localVotes: 63257,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheHollowChild',
    title: 'Дитя тьмы',
    originalTitle: 'The Hollow Child',
    year: 2017,
    director: 'Джереми Люттер',
    localRating: 5.797,
    localVotes: 38365,
    genres: ['ужасы']
  },
  {
    id: 'HostelPartII',
    title: 'Хостел 2',
    originalTitle: 'Hostel: Part II',
    year: 2007,
    director: 'Элай Рот',
    localRating: 5.797,
    localVotes: 29815,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'InsidiousTheLastKey',
    title: 'Астрал 4: Последний ключ',
    originalTitle: 'Insidious: The Last Key',
    year: 2018,
    director: 'Адам Робител',
    localRating: 5.793,
    localVotes: 80900,
    genres: ['ужасы']
  },
  {
    id: 'TheMummy',
    title: 'Мумия',
    originalTitle: 'The Mummy',
    year: 2017,
    director: 'Алекс Куртцман',
    localRating: 5.791,
    localVotes: 241388,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'TruthOrDare',
    title: 'Правда или действие',
    originalTitle: 'Truth or Dare',
    year: 2018,
    director: 'Джефф Уодлоу',
    localRating: 5.787,
    localVotes: 104775,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'WinnieThePoohBloodAndHoneyII',
    title: 'Винни‑Пух: Кровь и мёд 2',
    originalTitle: 'Winnie‑the‑Pooh: Blood and Honey II',
    year: 2024,
    director: 'Рис Фрейк‑Уотерфилд',
    localRating: 5.787,
    localVotes: 58268,
    genres: ['ужасы']
  },
  {
    id: 'Splice',
    title: 'Химера',
    originalTitle: 'Splice',
    year: 2009,
    director: 'Винченцо Натали',
    localRating: 5.785,
    localVotes: 101138,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'Malevolent',
    title: 'Проклятие: Обитель смерти',
    originalTitle: 'Malevolent',
    year: 2017,
    director: 'Олаф де Флёр Йоханнессон',
    localRating: 5.782,
    localVotes: 43044,
    genres: ['ужасы']
  },
  {
    id: 'Sting',
    title: 'Чёрная вдова. Укус смерти',
    originalTitle: 'Sting',
    year: 2024,
    director: 'Кия Роуч‑Тернер',
    localRating: 5.782,
    localVotes: 22685,
    genres: ['ужасы']
  },
  {
    id: 'NightmareCinema',
    title: 'Кинотеатр кошмаров',
    originalTitle: 'Nightmare Cinema',
    year: 2018,
    director: 'Алехандро Брюгес',
    localRating: 5.780,
    localVotes: 17517,
    genres: ['ужасы']
  },
  {
    id: 'TheInhabitant',
    title: 'Одержимость. Проклятие Лиззи Борден',
    originalTitle: 'The Inhabitant',
    year: 2022,
    director: 'Джеррен Лаудер',
    localRating: 5.778,
    localVotes: 32289,
    genres: ['ужасы']
  },
  {
    id: 'LaNinaDeLaComunion',
    title: 'Заклятье. Первое пробуждение',
    originalTitle: 'La niña de la comunión',
    year: 2022,
    director: 'Виктор Гарсия',
    localRating: 5.777,
    localVotes: 49433,
    genres: ['ужасы']
  },
  {
    id: 'PlayDead',
    title: 'Клаустрофобы: Квест с того света',
    originalTitle: 'Play Dead',
    year: 2022,
    director: 'Патрик Люссье',
    localRating: 5.776,
    localVotes: 69182,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheNun',
    title: 'Проклятие монахини',
    originalTitle: 'The Nun',
    year: 2018,
    director: 'Корин Харди',
    localRating: 5.775,
    localVotes: 161680,
    genres: ['ужасы']
  },
  {
    id: 'GreatWhite',
    title: 'В пасти океана',
    originalTitle: 'Great White',
    year: 2020,
    director: 'Мартин Уилсон',
    localRating: 5.775,
    localVotes: 45253,
    genres: ['ужасы']
  },
  {
    id: 'Turistas',
    title: 'Туристас',
    originalTitle: 'Turistas',
    year: 2006,
    director: 'Джон Стокуэлл',
    localRating: 5.773,
    localVotes: 22963,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'HellFest',
    title: 'Хэллфест',
    originalTitle: 'Hell Fest',
    year: 2018,
    director: 'Грегори Плоткин',
    localRating: 5.772,
    localVotes: 31731,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'InTheFire',
    title: '13 пришествий дьявола',
    originalTitle: 'In the Fire',
    year: 2023,
    director: 'Конор Эллин',
    localRating: 5.771,
    localVotes: 13086,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'AHauntedHouse',
    title: 'Дом с паранормальными явлениями',
    originalTitle: 'A Haunted House',
    year: 2013,
    director: 'Майкл Тиддес',
    localRating: 5.770,
    localVotes: 128545,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Nekrotronic',
    title: 'Некромант',
    originalTitle: 'Nekrotronic',
    year: 2018,
    director: 'Кия Роуч‑Тернер',
    localRating: 5.770,
    localVotes: 29061,
    genres: ['ужасы', 'комедия', 'фэнтези']
  },
  {
    id: 'DodSno',
    title: 'Операция «Мёртвый снег»',
    originalTitle: 'Død snø',
    year: 2009,
    director: 'Томми Виркола',
    localRating: 5.766,
    localVotes: 86635,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'UntilDawn',
    title: 'Дожить до рассвета',
    originalTitle: 'Until Dawn',
    year: 2025,
    director: 'Дэвид Ф. Сандберг',
    localRating: 5.766,
    localVotes: 48996,
    genres: ['ужасы']
  },
  {
    id: 'SeeNoEvil',
    title: 'Не вижу зла',
    originalTitle: 'See No Evil',
    year: 2006,
    director: 'Грегори Дарк',
    localRating: 5.766,
    localVotes: 19361,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'TheyLiveInTheGrey',
    title: 'Экстрасенс. Дело Софи',
    originalTitle: 'They Live in the Grey',
    year: 2021,
    director: 'Абель Ван',
    localRating: 5.766,
    localVotes: 11184,
    genres: ['ужасы']
  },
  {
    id: 'ElHombreDelSaco',
    title: 'Бугимен. Начало легенды',
    originalTitle: 'El hombre del saco',
    year: 2023,
    director: 'Анхель Гомес Эрнандес',
    localRating: 5.764,
    localVotes: 43672,
    genres: ['ужасы', 'фэнтези', 'приключения']
  },
  {
    id: 'WeHaveAlwaysLivedInTheCastle',
    title: 'Мы всегда жили в замке',
    originalTitle: 'We Have Always Lived in the Castle',
    year: 2017,
    director: 'Стэйси Пассон',
    localRating: 5.761,
    localVotes: 21833,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Men',
    title: 'Род мужской',
    originalTitle: 'Men',
    year: 2022,
    director: 'Алекс Гарленд',
    localRating: 5.759,
    localVotes: 72238,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Byvshaya',
    title: 'Бывшая',
    originalTitle: '',
    year: 2021,
    director: 'Евгений Пузыревский',
    localRating: 5.758,
    localVotes: 40993,
    genres: ['ужасы']
  },
  {
    id: 'TheAstronaut',
    title: 'Астронавт',
    originalTitle: 'The Astronaut',
    year: 2025,
    director: 'Джессика Варлей',
    localRating: 5.757,
    localVotes: 27535,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'AHouseOnTheBayou',
    title: 'Дом у болота',
    originalTitle: 'A House on the Bayou',
    year: 2021,
    director: 'Алекс Маколи',
    localRating: 5.757,
    localVotes: 12373,
    genres: ['ужасы']
  },
  {
    id: 'WhatJosiahSaw',
    title: 'Шепоты мёртвого дома',
    originalTitle: 'What Josiah Saw',
    year: 2021,
    director: 'Винсент Грэшоу',
    localRating: 5.756,
    localVotes: 12677,
    genres: ['драма', 'триллер', 'ужасы']
  },
  {
    id: 'ASoundOfThunder',
    title: 'И грянул гром',
    originalTitle: 'A Sound of Thunder',
    year: 2004,
    director: 'Питер Хайамс',
    localRating: 5.753,
    localVotes: 58058,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Consecration',
    title: 'Проклятие. Посвящение',
    originalTitle: 'Consecration',
    year: 2022,
    director: 'Кристофер Смит',
    localRating: 5.752,
    localVotes: 22995,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'ASacrifice',
    title: 'Город страха',
    originalTitle: 'A Sacrifice',
    year: 2024,
    director: 'Джордан Скотт',
    localRating: 5.750,
    localVotes: 16255,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheBay',
    title: 'Залив',
    originalTitle: 'The Bay',
    year: 2012,
    director: 'Барри Левинсон',
    localRating: 5.748,
    localVotes: 27779,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'DiaryOfTheDead',
    title: 'Дневники мертвецов',
    originalTitle: 'Diary of the Dead',
    year: 2007,
    director: 'Джордж А. Ромеро',
    localRating: 5.748,
    localVotes: 11244,
    genres: ['ужасы', 'фантастика', 'фэнтези']
  },
  {
    id: 'TheLastExorcism',
    title: 'Последнее изгнание дьявола',
    originalTitle: 'The Last Exorcism',
    year: 2010,
    director: 'Даниэль Штамм',
    localRating: 5.747,
    localVotes: 26338,
    genres: ['ужасы']
  },
  {
    id: 'HouseOf1000Corpses',
    title: 'Дом 1000 трупов',
    originalTitle: 'House of 1000 Corpses',
    year: 2003,
    director: 'Роб Зомби',
    localRating: 5.746,
    localVotes: 20033,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'TheBabadook',
    title: 'Бабадук',
    originalTitle: 'The Babadook',
    year: 2014,
    director: 'Дженнифер Кент',
    localRating: 5.745,
    localVotes: 95620,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'PleaseDontFeedTheChildren',
    title: 'Одни из нас',
    originalTitle: 'Please Don\'t Feed the Children',
    year: 2024,
    director: 'Дестри Эллин Спилберг',
    localRating: 5.745,
    localVotes: 17411,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheBoogeyman',
    title: 'Бугимен',
    originalTitle: 'The Boogeyman',
    year: 2023,
    director: 'Роб Сэвидж',
    localRating: 5.743,
    localVotes: 15094,
    genres: ['ужасы']
  },
  {
    id: 'TheWickerMan',
    title: 'Плетёный человек',
    originalTitle: 'The Wicker Man',
    year: 2006,
    director: 'Нил Лабут',
    localRating: 5.741,
    localVotes: 53336,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'ElHabitante',
    title: 'Убежище дьявола',
    originalTitle: 'El habitante',
    year: 2017,
    director: 'Гильермо Амоедо',
    localRating: 5.741,
    localVotes: 31669,
    genres: ['ужасы']
  },
  {
    id: 'Southbound',
    title: 'Монстры Юга',
    originalTitle: 'Southbound',
    year: 2015,
    director: 'Роксанна Бенжамин',
    localRating: 5.740,
    localVotes: 23044,
    genres: ['ужасы']
  },
  {
    id: 'JennifersBody',
    title: 'Тело Дженнифер',
    originalTitle: 'Jennifer\'s Body',
    year: 2009,
    director: 'Карин Кусама',
    localRating: 5.738,
    localVotes: 166390,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'ThePredator',
    title: 'Хищник',
    originalTitle: 'The Predator',
    year: 2018,
    director: 'Шейн Блэк',
    localRating: 5.737,
    localVotes: 203044,
    genres: ['боевик', 'фантастика', 'триллер']
  },
  {
    id: 'ThePossessionOfMichaelKing',
    title: 'Одержимость Майкла Кинга',
    originalTitle: 'The Possession of Michael King',
    year: 2014,
    director: 'Дэвид Юнг',
    localRating: 5.737,
    localVotes: 27904,
    genres: ['ужасы']
  },
  {
    id: 'LastShift',
    title: 'Последняя смена',
    originalTitle: 'Last Shift',
    year: 2014,
    director: 'Энтони ДиБлази',
    localRating: 5.736,
    localVotes: 101852,
    genres: ['ужасы']
  },
  {
    id: 'TheMaid',
    title: 'Проклятие. Дом с прислугой',
    originalTitle: 'The Maid',
    year: 2020,
    director: 'Ли Тхонгкхам',
    localRating: 5.736,
    localVotes: 23264,
    genres: ['ужасы']
  },
  {
    id: 'Spree',
    title: 'Отрыв',
    originalTitle: 'Spree',
    year: 2020,
    director: 'Юджин Котляренко',
    localRating: 5.731,
    localVotes: 39403,
    genres: ['комедия', 'ужасы']
  },
  {
    id: 'SuitableFlesh',
    title: 'Плоть',
    originalTitle: 'Suitable Flesh',
    year: 2023,
    director: 'Джо Линч',
    localRating: 5.730,
    localVotes: 10949,
    genres: ['ужасы']
  },
  {
    id: 'AileenWuornosAmericanBoogeywoman',
    title: 'Монстр: Начало',
    originalTitle: 'Aileen Wuornos: American Boogeywoman',
    year: 2021,
    director: 'Дэниэл Фаррандс',
    localRating: 5.729,
    localVotes: 21473,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheStrangersChapter1',
    title: 'Незнакомцы: Начало',
    originalTitle: 'The Strangers: Chapter 1',
    year: 2024,
    director: 'Ренни Харлин',
    localRating: 5.727,
    localVotes: 32540,
    genres: ['ужасы']
  },
  {
    id: 'Visions',
    title: 'Видения',
    originalTitle: 'Visions',
    year: 2014,
    director: 'Кевин Гротерт',
    localRating: 5.727,
    localVotes: 19870,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Flatliners',
    title: 'Коматозники',
    originalTitle: 'Flatliners',
    year: 2017,
    director: 'Нильс Арден Оплев',
    localRating: 5.726,
    localVotes: 62862,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Gaia',
    title: 'Гайя: Месть богов',
    originalTitle: 'Gaia',
    year: 2020,
    director: 'Яко Баувер',
    localRating: 5.726,
    localVotes: 19453,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'Cobweb',
    title: 'В паутине страха',
    originalTitle: 'Cobweb',
    year: 2022,
    director: 'Сэмюэл Бодин',
    localRating: 5.724,
    localVotes: 17565,
    genres: ['ужасы']
  },
  {
    id: 'Incarnate',
    title: 'Инкарнация',
    originalTitle: 'Incarnate',
    year: 2016,
    director: 'Брэд Пейтон',
    localRating: 5.715,
    localVotes: 26985,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'CockneysVsZombies',
    title: 'Кокни против зомби',
    originalTitle: 'Cockneys vs Zombies',
    year: 2012,
    director: 'Матиас Хёне',
    localRating: 5.715,
    localVotes: 10531,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'PetSematary',
    title: 'Кладбище домашних животных',
    originalTitle: 'Pet Sematary',
    year: 2019,
    director: 'Кевин Колш',
    localRating: 5.714,
    localVotes: 128962,
    genres: ['ужасы']
  },
  {
    id: 'Z',
    title: 'Z',
    originalTitle: 'Z',
    year: 2019,
    director: 'Брэндон Кристенсен',
    localRating: 5.713,
    localVotes: 35668,
    genres: ['ужасы']
  },
  {
    id: 'TheRadleys',
    title: 'Вампиры лёгкого поведения',
    originalTitle: 'The Radleys',
    year: 2024,
    director: 'Эрос Лин',
    localRating: 5.713,
    localVotes: 22025,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'DoctorJekyll',
    title: 'Доктор Джекилл',
    originalTitle: 'Doctor Jekyll',
    year: 2023,
    director: 'Джо Стивенсон',
    localRating: 5.713,
    localVotes: 13709,
    genres: ['ужасы']
  },
  {
    id: 'MomAndDad',
    title: 'Безумные родители',
    originalTitle: 'Mom and Dad',
    year: 2017,
    director: 'Брайан Тейлор',
    localRating: 5.712,
    localVotes: 15197,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'ZaklyateShyopotVedm',
    title: 'Заклятье. Шёпот ведьм',
    originalTitle: '',
    year: 2023,
    director: 'Серик Бейсеу',
    localRating: 5.711,
    localVotes: 42601,
    genres: ['ужасы']
  },
  {
    id: 'ColdStorage',
    title: 'Зараза',
    originalTitle: 'Cold Storage',
    year: 2025,
    director: 'Джонни Кэмпбелл',
    localRating: 5.709,
    localVotes: 14048,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'SororityRow',
    title: 'Крик в общаге',
    originalTitle: 'Sorority Row',
    year: 2009,
    director: 'Стюарт Хендлер',
    localRating: 5.708,
    localVotes: 16402,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'TheSeventhDay',
    title: 'Ученик экзорциста',
    originalTitle: 'The Seventh Day',
    year: 2020,
    director: 'Джастин П. Ланж',
    localRating: 5.702,
    localVotes: 27861,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'ZelenyySlonik',
    title: 'Зелёный слоник',
    originalTitle: '',
    year: 1999,
    director: 'Светлана Баскова',
    localRating: 5.701,
    localVotes: 157111,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Tusk',
    title: 'Бивень',
    originalTitle: 'Tusk',
    year: 2014,
    director: 'Кевин Смит',
    localRating: 5.701,
    localVotes: 136553,
    genres: ['ужасы', 'комедия', 'драма']
  },
  {
    id: 'YagaKoshmarTemnogoLesa',
    title: 'Яга. Кошмар тёмного леса',
    originalTitle: '',
    year: 2020,
    director: 'Святослав Подгаевский',
    localRating: 5.701,
    localVotes: 89061,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'FiveNightsAtFreddys2',
    title: 'Пять ночей с Фредди 2',
    originalTitle: 'Five Nights at Freddy\'s 2',
    year: 2025,
    director: 'Эмма Тамми',
    localRating: 5.701,
    localVotes: 47244,
    genres: ['ужасы']
  },
  {
    id: 'IlNido',
    title: 'Секта',
    originalTitle: 'Il nido',
    year: 2019,
    director: 'Роберто Де Фео',
    localRating: 5.701,
    localVotes: 16824,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'InsidiousTheRedDoor',
    title: 'Астрал 5: Красная дверь',
    originalTitle: 'Insidious: The Red Door',
    year: 2023,
    director: 'Патрик Уилсон',
    localRating: 5.700,
    localVotes: 38950,
    genres: ['ужасы']
  },
  {
    id: 'HuntHerKillHer',
    title: 'Убей её, если сможешь',
    originalTitle: 'Hunt Her, Kill Her',
    year: 2022,
    director: 'Грег Свинсон',
    localRating: 5.699,
    localVotes: 28280,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Belzebuth',
    title: 'Вельзевул',
    originalTitle: 'Belzebuth',
    year: 2018,
    director: 'Эмилио Портес',
    localRating: 5.693,
    localVotes: 15245,
    genres: ['ужасы']
  },
  {
    id: 'SomethingInTheWater',
    title: 'Челюсти. Кровавый риф',
    originalTitle: 'Something in the Water',
    year: 2024,
    director: 'Хейли Истон Стрит',
    localRating: 5.692,
    localVotes: 30831,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheHouseOfDeadlySecrets',
    title: 'Дом страшных секретов (ТВ)',
    originalTitle: 'The House of Deadly Secrets',
    year: 2018,
    director: 'Даг Кэмпбелл',
    localRating: 5.691,
    localVotes: 41998,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheSilence',
    title: 'Молчание',
    originalTitle: 'The Silence',
    year: 2019,
    director: 'Джон Р. Леонетти',
    localRating: 5.689,
    localVotes: 24954,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Virus32',
    title: 'Эпидемия: Вирус-32',
    originalTitle: 'Virus-32',
    year: 2022,
    director: 'Густаво Эрнандес',
    localRating: 5.684,
    localVotes: 33857,
    genres: ['ужасы']
  },
  {
    id: 'Cuerdas',
    title: 'Бешенство',
    originalTitle: 'Cuerdas',
    year: 2019,
    director: 'Хосе Луис Монтесинос',
    localRating: 5.683,
    localVotes: 16348,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Leave',
    title: 'Астрал: Потомство',
    originalTitle: 'Leave',
    year: 2022,
    director: 'Алекс Херрон',
    localRating: 5.681,
    localVotes: 64858,
    genres: ['ужасы']
  },
  {
    id: 'ParadiseCove',
    title: 'Райская бухта',
    originalTitle: 'Paradise Cove',
    year: 2020,
    director: 'Мартин Гиги',
    localRating: 5.679,
    localVotes: 34720,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Hounded',
    title: 'Я иду искать. Королевская игра',
    originalTitle: 'Hounded',
    year: 2022,
    director: 'Томми Боулдинг',
    localRating: 5.678,
    localVotes: 28283,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'TheDarkAndTheWicked',
    title: 'Пустошь тьмы и зла',
    originalTitle: 'The Dark and the Wicked',
    year: 2020,
    director: 'Брайан Бертино',
    localRating: 5.677,
    localVotes: 54189,
    genres: ['ужасы']
  },
  {
    id: 'Site',
    title: 'Континуум',
    originalTitle: 'Site',
    year: 2025,
    director: 'Джейсон Эрик Перлман',
    localRating: 5.677,
    localVotes: 11071,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'Tarot',
    title: 'Таро: Карта смерти',
    originalTitle: 'Tarot',
    year: 2024,
    director: 'Спенсер Коэн',
    localRating: 5.676,
    localVotes: 32650,
    genres: ['ужасы']
  },
  {
    id: 'Seance',
    title: 'Спиритический сеанс',
    originalTitle: 'Seance',
    year: 2020,
    director: 'Саймон Баррет',
    localRating: 5.672,
    localVotes: 20905,
    genres: ['ужасы']
  },
  {
    id: 'Maggie',
    title: 'Зараженная',
    originalTitle: 'Maggie',
    year: 2014,
    director: 'Генри Хобсон',
    localRating: 5.669,
    localVotes: 23226,
    genres: ['драма', 'ужасы']
  },
  {
    id: 'Censor',
    title: 'Цензор',
    originalTitle: 'Censor',
    year: 2021,
    director: 'Прано Бэйли-Бонд',
    localRating: 5.667,
    localVotes: 14244,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'AndraSidan',
    title: 'Заклятье: Другая сторона',
    originalTitle: 'Andra sidan',
    year: 2020,
    director: 'Торд Даниэльссон',
    localRating: 5.666,
    localVotes: 24417,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'MalDeOjo',
    title: 'Ведьма: Реинкарнация',
    originalTitle: 'Mal de ojo',
    year: 2022,
    director: 'Исаак Эсбан',
    localRating: 5.665,
    localVotes: 54981,
    genres: ['ужасы']
  },
  {
    id: 'HighRise',
    title: 'Высотка',
    originalTitle: 'High-Rise',
    year: 2015,
    director: 'Бен Уитли',
    localRating: 5.660,
    localVotes: 48052,
    genres: ['драма', 'фантастика', 'ужасы']
  },
  {
    id: 'ScienceFictionVolumeOneTheOsirisChild',
    title: 'Дитя Осириса',
    originalTitle: 'Science Fiction Volume One: The Osiris Child',
    year: 2016,
    director: 'Шейн Эббесс',
    localRating: 5.659,
    localVotes: 21160,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Ssin',
    title: 'Нечисть в Сеуле',
    originalTitle: 'Ssin',
    year: 2024,
    director: 'Хан Дон-сок',
    localRating: 5.659,
    localVotes: 13370,
    genres: ['ужасы']
  },
  {
    id: 'TheFinalDestination',
    title: 'Пункт назначения 4',
    originalTitle: 'The Final Destination',
    year: 2009,
    director: 'Дэвид Р. Эллис',
    localRating: 5.658,
    localVotes: 89226,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ChildsPlay3',
    title: 'Детские игры 3',
    originalTitle: 'Child\'s Play 3',
    year: 1991,
    director: 'Джек Бендер',
    localRating: 5.658,
    localVotes: 10266,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'BlackWaterAbyss',
    title: 'Хищные воды: Западня',
    originalTitle: 'Black Water: Abyss',
    year: 2020,
    director: 'Эндрю Трауки',
    localRating: 5.656,
    localVotes: 30788,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'NeverLetGo',
    title: 'Затерянное место',
    originalTitle: 'Never Let Go',
    year: 2024,
    director: 'Александр Ажа',
    localRating: 5.656,
    localVotes: 10590,
    genres: ['ужасы']
  },
  {
    id: 'TheMistress',
    title: 'Тайна проклятой обители',
    originalTitle: 'The Mistress',
    year: 2022,
    director: 'Грег Притикин',
    localRating: 5.654,
    localVotes: 26477,
    genres: ['ужасы']
  },
  {
    id: 'TheKindred',
    title: 'Дети тьмы',
    originalTitle: 'The Kindred',
    year: 2021,
    director: 'Джэми Паттерсон',
    localRating: 5.654,
    localVotes: 11296,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'ThePact',
    title: 'Пакт',
    originalTitle: 'The Pact',
    year: 2011,
    director: 'Николас МакКарти',
    localRating: 5.652,
    localVotes: 21232,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'ANightmareOnElmStreet',
    title: 'Кошмар на улице Вязов',
    originalTitle: 'A Nightmare on Elm Street',
    year: 2010,
    director: 'Сэмюэл Байер',
    localRating: 5.651,
    localVotes: 62292,
    genres: ['ужасы', 'драма', 'криминал']
  },
  {
    id: 'ShutIn',
    title: 'Незваные гости',
    originalTitle: 'Shut In',
    year: 2015,
    director: 'Адам Шиндлер',
    localRating: 5.651,
    localVotes: 42904,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'ComePlay',
    title: 'Приходи поиграть',
    originalTitle: 'Come Play',
    year: 2020,
    director: 'Джейкоб Чейз',
    localRating: 5.646,
    localVotes: 22798,
    genres: ['ужасы']
  },
  {
    id: 'Hellraiser',
    title: 'Восставший из ада',
    originalTitle: 'Hellraiser',
    year: 2022,
    director: 'Дэвид Брукнер',
    localRating: 5.646,
    localVotes: 17318,
    genres: ['ужасы']
  },
  {
    id: 'HellHouseLLCLakeOfFire',
    title: 'Дом ада. 3: Озеро огня',
    originalTitle: 'Hell House LLC III: Lake of Fire',
    year: 2019,
    director: 'Стивен Коньетти',
    localRating: 5.645,
    localVotes: 19451,
    genres: ['ужасы']
  },
  {
    id: 'DaddysHead',
    title: 'Заклятие: Реинкарнация отца',
    originalTitle: 'Daddy\'s Head',
    year: 2024,
    director: 'Бенжамин Барфут',
    localRating: 5.640,
    localVotes: 15609,
    genres: ['ужасы']
  },
  {
    id: 'TheProdigy',
    title: 'Омен: Перерождение',
    originalTitle: 'The Prodigy',
    year: 2019,
    director: 'Николас МакКарти',
    localRating: 5.635,
    localVotes: 22364,
    genres: ['ужасы']
  },
  {
    id: 'Antlers',
    title: 'Оленьи рога',
    originalTitle: 'Antlers',
    year: 2021,
    director: 'Скотт Купер',
    localRating: 5.634,
    localVotes: 21140,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Motherly',
    title: 'Проклятие матери: Прятки на выживание',
    originalTitle: 'Motherly',
    year: 2021,
    director: 'Крэйг Дэвид Уоллес',
    localRating: 5.633,
    localVotes: 23538,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'ShenHaiSheNan',
    title: 'Анаконда. Подъём с глубины',
    originalTitle: 'Shen hai she nan',
    year: 2022,
    director: 'У Ян',
    localRating: 5.632,
    localVotes: 15691,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Tremors3BackToPerfection',
    title: 'Дрожь земли 3',
    originalTitle: 'Tremors 3: Back to Perfection',
    year: 2001,
    director: 'Брент Мэддок',
    localRating: 5.632,
    localVotes: 13763,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'AktaSkrack',
    title: 'Первые ведьмы. Потомство',
    originalTitle: 'Äkta Skräck',
    year: 2023,
    director: 'Даниель ди Градо',
    localRating: 5.632,
    localVotes: 13640,
    genres: ['ужасы']
  },
  {
    id: 'SeaFever',
    title: 'Морские паразиты',
    originalTitle: 'Sea Fever',
    year: 2019,
    director: 'Ниса Хардиман',
    localRating: 5.631,
    localVotes: 39122,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'TheForeverPurge',
    title: 'Судная ночь навсегда',
    originalTitle: 'The Forever Purge',
    year: 2021,
    director: 'Эверардо Валерио Гоут',
    localRating: 5.631,
    localVotes: 34581,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'WarHunt',
    title: 'Охота на ведьм',
    originalTitle: 'WarHunt',
    year: 2021,
    director: 'Мауро Боррелли',
    localRating: 5.629,
    localVotes: 25211,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'VHSH94',
    title: 'З/Л/О 94',
    originalTitle: 'V/H/S/94',
    year: 2021,
    director: 'Саймон Баррет',
    localRating: 5.627,
    localVotes: 10784,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Presencias',
    title: 'Озеро страха. Присутствие',
    originalTitle: 'Presencias',
    year: 2022,
    director: 'Луис Мандоки',
    localRating: 5.626,
    localVotes: 23775,
    genres: ['ужасы']
  },
  {
    id: 'YouShouldHaveLeft',
    title: 'Тебе стоило уйти',
    originalTitle: 'You Should Have Left',
    year: 2020,
    director: 'Дэвид Кепп',
    localRating: 5.625,
    localVotes: 44233,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheVigil',
    title: 'Диббук',
    originalTitle: 'The Vigil',
    year: 2019,
    director: 'Кит Томас',
    localRating: 5.624,
    localVotes: 17736,
    genres: ['ужасы']
  },
  {
    id: 'Morbius',
    title: 'Морбиус',
    originalTitle: 'Morbius',
    year: 2022,
    director: 'Даниэль Эспиноса',
    localRating: 5.623,
    localVotes: 133993,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheFreeFall',
    title: 'Свободное падение',
    originalTitle: 'The Free Fall',
    year: 2021,
    director: 'Адам Стивелл',
    localRating: 5.620,
    localVotes: 22295,
    genres: ['ужасы', 'драма', 'детектив']
  },
  {
    id: 'Konvert',
    title: 'Конверт',
    originalTitle: '',
    year: 2017,
    director: 'Владимир Марков',
    localRating: 5.620,
    localVotes: 16325,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'BoysFromCountyHell',
    title: 'Ко всем чертям',
    originalTitle: 'Boys from County Hell',
    year: 2020,
    director: 'Крис Боф',
    localRating: 5.619,
    localVotes: 17754,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'TheBlackDemon',
    title: 'Мегалодон',
    originalTitle: 'The Black Demon',
    year: 2023,
    director: 'Адриан Грюнберг',
    localRating: 5.616,
    localVotes: 150130,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheHauntingInConnecticut2GhostsOfGeorgia',
    title: 'Призраки в Коннектикуте 2: Тени прошлого',
    originalTitle: 'The Haunting in Connecticut 2: Ghosts of Georgia',
    year: 2012,
    director: 'Том Элкинс',
    localRating: 5.616,
    localVotes: 11449,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheBayou',
    title: 'Абсолютный хищник',
    originalTitle: 'The Bayou',
    year: 2025,
    director: 'Танели Мустонен',
    localRating: 5.615,
    localVotes: 33926,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Kandisha',
    title: 'Кандиша: Демон мести',
    originalTitle: 'Kandisha',
    year: 2020,
    director: 'Александр Бустильо',
    localRating: 5.615,
    localVotes: 25285,
    genres: ['ужасы']
  },
  {
    id: 'Immaculate',
    title: 'Омен. Непорочная',
    originalTitle: 'Immaculate',
    year: 2024,
    director: 'Майкл Мохан',
    localRating: 5.612,
    localVotes: 56189,
    genres: ['ужасы']
  },
  {
    id: 'AnAmericanHaunting',
    title: 'Призрак Красной реки',
    originalTitle: 'An American Haunting',
    year: 2005,
    director: 'Кортни Соломон',
    localRating: 5.612,
    localVotes: 10019,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'WrongTurn2DeadEnd',
    title: 'Поворот не туда 2: Тупик',
    originalTitle: 'Wrong Turn 2: Dead End',
    year: 2007,
    director: 'Джо Линч',
    localRating: 5.611,
    localVotes: 34088,
    genres: ['ужасы', 'приключения']
  },
  {
    id: 'TheHeadHunter',
    title: 'Время монстров',
    originalTitle: 'The Head Hunter',
    year: 2018,
    director: 'Джордан Дауни',
    localRating: 5.610,
    localVotes: 30049,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'TheHillsHaveEyesII',
    title: 'У холмов есть глаза 2',
    originalTitle: 'The Hills Have Eyes II',
    year: 2007,
    director: 'Мартин Вайз',
    localRating: 5.610,
    localVotes: 29173,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'NoDormiras',
    title: 'Инсомния',
    originalTitle: 'No dormirás',
    year: 2017,
    director: 'Густаво Эрнандес',
    localRating: 5.610,
    localVotes: 23851,
    genres: ['ужасы']
  },
  {
    id: 'Legion',
    title: 'Легион',
    originalTitle: 'Legion',
    year: 2010,
    director: 'Скотт Чарльз Стюарт',
    localRating: 5.602,
    localVotes: 156659,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'OutComeTheWolves',
    title: 'Охота на волков',
    originalTitle: 'Out Come the Wolves',
    year: 2024,
    director: 'Адам Макдональд',
    localRating: 5.602,
    localVotes: 13893,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Meg2TheTrench',
    title: 'Мег 2: Бездна',
    originalTitle: 'Meg 2: The Trench',
    year: 2023,
    director: 'Бен Уитли',
    localRating: 5.599,
    localVotes: 47977,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheDeathThatAwaits',
    title: 'Зло: Новая глава',
    originalTitle: 'The Death That Awaits',
    year: 2024,
    director: 'Ричард Дж. Ли',
    localRating: 5.595,
    localVotes: 15716,
    genres: ['ужасы']
  },
  {
    id: 'TheNewMutants',
    title: 'Новые мутанты',
    originalTitle: 'The New Mutants',
    year: 2020,
    director: 'Джош Бун',
    localRating: 5.593,
    localVotes: 100824,
    genres: ['фантастика', 'боевик', 'детектив']
  },
  {
    id: 'Osiris',
    title: 'Хищник: Миссия «Осирис»',
    originalTitle: 'Osiris',
    year: 2025,
    director: 'Уильям Кауфман',
    localRating: 5.591,
    localVotes: 47856,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Unfriended',
    title: 'Убрать из друзей',
    originalTitle: 'Unfriended',
    year: 2015,
    director: 'Леван Габриадзе',
    localRating: 5.589,
    localVotes: 73465,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'DayZero',
    title: 'Тюрьма живых мертвецов',
    originalTitle: 'Day Zero',
    year: 2022,
    director: 'Джои де Гусман',
    localRating: 5.589,
    localVotes: 30793,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'TheDeepHouse',
    title: 'Дом на глубине',
    originalTitle: 'The Deep House',
    year: 2021,
    director: 'Александр Бустильо',
    localRating: 5.587,
    localVotes: 77969,
    genres: ['ужасы']
  },
  {
    id: 'PengabdiSetan',
    title: 'Заклятье: Слуги Сатаны',
    originalTitle: 'Pengabdi Setan',
    year: 2017,
    director: 'Джоко Анвар',
    localRating: 5.586,
    localVotes: 26960,
    genres: ['ужасы']
  },
  {
    id: 'Hunger',
    title: 'Голод',
    originalTitle: 'Hunger',
    year: 2009,
    director: 'Стивен Хентджес',
    localRating: 5.586,
    localVotes: 24322,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'ParanormalActivityTokyoNight',
    title: 'Паранормальное явление: Ночь в Токио',
    originalTitle: 'Paranômaru akutibiti: Dai‑2‑shô — Tokyo Night',
    year: 2010,
    director: 'Тосикадзу Нагаэ',
    localRating: 5.583,
    localVotes: 13730,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'SousLaSeine',
    title: 'Акулы в Париже',
    originalTitle: 'Sous la Seine',
    year: 2024,
    director: 'Ксавье Жанс',
    localRating: 5.581,
    localVotes: 11372,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'Critters3',
    title: 'Зубастики 3',
    originalTitle: 'Critters 3',
    year: 1991,
    director: 'Кристин Питерсон',
    localRating: 5.577,
    localVotes: 10416,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'ShelbyOaks',
    title: 'Шелби Оукс. Город‑призрак',
    originalTitle: 'Shelby Oaks',
    year: 2024,
    director: 'Крис Стакманн',
    localRating: 5.570,
    localVotes: 11290,
    genres: ['ужасы']
  },
  {
    id: 'BirdBoxBarcelona',
    title: 'Птичий короб: Барселона',
    originalTitle: 'Bird Box: Barcelona',
    year: 2023,
    director: 'Давид Пастор',
    localRating: 5.569,
    localVotes: 16059,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'KillerWhale',
    title: 'Кит‑убийца',
    originalTitle: 'Killer Whale',
    year: 2026,
    director: 'Джо‑Энн Бречин',
    localRating: 5.568,
    localVotes: 48482,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheToll',
    title: 'Толмен. Первый демон',
    originalTitle: 'The Toll',
    year: 2019,
    director: 'Майкл Нэйдер',
    localRating: 5.567,
    localVotes: 18529,
    genres: ['ужасы']
  },
  {
    id: 'InFabric',
    title: 'Маленькое красное платье',
    originalTitle: 'In Fabric',
    year: 2018,
    director: 'Питер Стриклэнд',
    localRating: 5.566,
    localVotes: 10829,
    genres: ['ужасы', 'фэнтези', 'комедия']
  },
  {
    id: 'Paranoia',
    title: 'Паранойя',
    originalTitle: 'Paranoia',
    year: 2024,
    director: 'Кари Видё',
    localRating: 5.565,
    localVotes: 15099,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Outpost',
    title: 'Адский бункер',
    originalTitle: 'Outpost',
    year: 2007,
    director: 'Стив Баркер',
    localRating: 5.565,
    localVotes: 11592,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'LookAway',
    title: 'Тёмное зеркало',
    originalTitle: 'Look Away',
    year: 2017,
    director: 'Асаф Бернштейн',
    localRating: 5.559,
    localVotes: 83421,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'ShaKouTaoSheng',
    title: 'Остров акул',
    originalTitle: 'Sha kou tao sheng',
    year: 2021,
    director: 'Чжу Цзян',
    localRating: 5.555,
    localVotes: 22054,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'DontHangUp',
    title: 'Призраки Талсы',
    originalTitle: 'Don\'t Hang Up',
    year: 2025,
    director: 'Алекс Херрон',
    localRating: 5.554,
    localVotes: 10961,
    genres: ['ужасы']
  },
  {
    id: 'LaAbuela',
    title: 'Бабушка',
    originalTitle: 'La abuela',
    year: 2021,
    director: 'Пако Пласа',
    localRating: 5.552,
    localVotes: 64747,
    genres: ['ужасы']
  },
  {
    id: 'TheLastDaysOnMars',
    title: 'Последние дни на Марсе',
    originalTitle: 'The Last Days on Mars',
    year: 2013,
    director: 'Рори Робинсон',
    localRating: 5.551,
    localVotes: 11573,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'DriveBack',
    title: 'Извне. Петля времени',
    originalTitle: 'Drive Back',
    year: 2024,
    director: 'Коуди Эшфорд',
    localRating: 5.547,
    localVotes: 32612,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheCured',
    title: 'Третья волна зомби',
    originalTitle: 'The Cured',
    year: 2017,
    director: 'Дэвид Фрейн',
    localRating: 5.539,
    localVotes: 12869,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'LaStanza',
    title: 'Таинственная комната',
    originalTitle: 'La stanza',
    year: 2020,
    director: 'Стефано Лодовики',
    localRating: 5.538,
    localVotes: 10271,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'WishUpon',
    title: 'Бойся своих желаний',
    originalTitle: 'Wish Upon',
    year: 2017,
    director: 'Джон Р. Леонетти',
    localRating: 5.535,
    localVotes: 36450,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'Unwelcome',
    title: 'Гремлины: Хранители леса',
    originalTitle: 'Unwelcome',
    year: 2021,
    director: 'Джон Райт',
    localRating: 5.534,
    localVotes: 16236,
    genres: ['ужасы']
  },
  {
    id: 'Yummy',
    title: 'Пациент Зеро',
    originalTitle: 'Yummy',
    year: 2019,
    director: 'Ларс Дамуасо',
    localRating: 5.526,
    localVotes: 26071,
    genres: ['ужасы', 'комедия', 'боевик']
  },
  {
    id: 'ThingsWillBeDifferent',
    title: 'В петле времени',
    originalTitle: 'Things Will Be Different',
    year: 2024,
    director: 'Майкл Фелкер',
    localRating: 5.525,
    localVotes: 15250,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'DeathOfMe',
    title: 'С днём смерти',
    originalTitle: 'Death of Me',
    year: 2020,
    director: 'Даррен Линн Боусман',
    localRating: 5.523,
    localVotes: 19245,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Glorious',
    title: 'Зло: Проклятая комната',
    originalTitle: 'Glorious',
    year: 2022,
    director: 'Ребека МакКендри',
    localRating: 5.523,
    localVotes: 13320,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Shrooms',
    title: 'Грибы',
    originalTitle: 'Shrooms',
    year: 2007,
    director: 'Пэдди Бретнэк',
    localRating: 5.522,
    localVotes: 23172,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'Neulbomgadeun',
    title: 'Астрал. Кошмар в «Спринг Гарден»',
    originalTitle: 'Neulbomgadeun',
    year: 2024,
    director: 'Ку Тхэ-джин',
    localRating: 5.519,
    localVotes: 15906,
    genres: ['ужасы']
  },
  {
    id: 'PikovayaDamaZazerkale',
    title: 'Пиковая дама: Зазеркалье',
    originalTitle: '',
    year: 2018,
    director: 'Александр Домогаров мл.',
    localRating: 5.516,
    localVotes: 30882,
    genres: ['ужасы']
  },
  {
    id: 'Cuckoo',
    title: 'Кукушка',
    originalTitle: 'Cuckoo',
    year: 2024,
    director: 'Тильман Сингер',
    localRating: 5.516,
    localVotes: 11500,
    genres: ['ужасы']
  },
  {
    id: 'LastSentinel',
    title: 'Рубеж выживания',
    originalTitle: 'Last Sentinel',
    year: 2023,
    director: 'Танел Тоом',
    localRating: 5.503,
    localVotes: 91190,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'TheJackInTheBoxRises',
    title: 'Шкатулка дьявола 3. Воскрешение',
    originalTitle: 'The Jack in the Box Rises',
    year: 2024,
    director: 'Лоуренс Фаулер',
    localRating: 5.503,
    localVotes: 19445,
    genres: ['ужасы']
  },
  {
    id: 'SalemsLot',
    title: 'Жребий',
    originalTitle: 'Salem\'s Lot',
    year: 2024,
    director: 'Гари Доберман',
    localRating: 5.503,
    localVotes: 11494,
    genres: ['ужасы']
  },
  {
    id: 'AnythingForJackson',
    title: 'Реинкарнация: Пришествие дьявола',
    originalTitle: 'Anything for Jackson',
    year: 2020,
    director: 'Джастин Дж. Дайк',
    localRating: 5.494,
    localVotes: 16639,
    genres: ['ужасы']
  },
  {
    id: '211',
    title: 'Ограбление: Код 211',
    originalTitle: '211',
    year: 2018,
    director: 'Йорк Алек Шеклтон',
    localRating: 5.491,
    localVotes: 15232,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'YoullNeverFindMe',
    title: 'Дом тайн',
    originalTitle: 'You\'ll Never Find Me',
    year: 2023,
    director: 'Джозиа Аллен',
    localRating: 5.488,
    localVotes: 11392,
    genres: ['ужасы']
  },
  {
    id: 'TheOtherSideOfTheDoor',
    title: 'По ту сторону двери',
    originalTitle: 'The Other Side of the Door',
    year: 2015,
    director: 'Йоханнес Робертс',
    localRating: 5.485,
    localVotes: 24485,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ElevatorGame',
    title: 'Игра в лифте',
    originalTitle: 'Elevator Game',
    year: 2023,
    director: 'Ребека МакКендри',
    localRating: 5.484,
    localVotes: 102493,
    genres: ['ужасы']
  },
  {
    id: 'Malicious',
    title: 'Зло',
    originalTitle: 'Malicious',
    year: 2017,
    director: 'Майкл Уинник',
    localRating: 5.483,
    localVotes: 38269,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheGolem',
    title: 'Голем: Начало',
    originalTitle: 'The Golem',
    year: 2018,
    director: 'Дорон Пас',
    localRating: 5.480,
    localVotes: 15984,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'BeyondSkyline',
    title: 'Скайлайн 2',
    originalTitle: 'Beyond Skyline',
    year: 2016,
    director: 'Лиам О’Доннелл',
    localRating: 5.479,
    localVotes: 40597,
    genres: ['фантастика', 'боевик', 'ужасы']
  },
  {
    id: 'Nightman',
    title: 'Неспокойной ночи',
    originalTitle: 'Nightman',
    year: 2023,
    director: 'Мелани Деллой',
    localRating: 5.478,
    localVotes: 13520,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'FriendRequest',
    title: 'Запрос в друзья',
    originalTitle: 'Friend Request',
    year: 2015,
    director: 'Симон Ферхоэвен',
    localRating: 5.475,
    localVotes: 101418,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Méandre',
    title: 'Бегущая в лабиринте',
    originalTitle: 'Méandre',
    year: 2019,
    director: 'Матьё Тури',
    localRating: 5.475,
    localVotes: 26646,
    genres: ['фантастика', 'триллер', 'ужасы']
  },
  {
    id: 'HorizonLine',
    title: 'Линия горизонта',
    originalTitle: 'Horizon Line',
    year: 2020,
    director: 'Микаэль Марсимаин',
    localRating: 5.472,
    localVotes: 10257,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'BrahmsTheBoyII',
    title: 'Кукла 2: Брамс',
    originalTitle: 'Brahms: The Boy II',
    year: 2020,
    director: 'Уильям Брент Белл',
    localRating: 5.471,
    localVotes: 49973,
    genres: ['ужасы']
  },
  {
    id: 'Monstrous',
    title: 'Чудовище',
    originalTitle: 'Monstrous',
    year: 2021,
    director: 'Крис Сивертсон',
    localRating: 5.470,
    localVotes: 11283,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheFirstPurge',
    title: 'Судная ночь. Начало',
    originalTitle: 'The First Purge',
    year: 2018,
    director: 'Герард МакМюррей',
    localRating: 5.469,
    localVotes: 40490,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'ThePriceWePay',
    title: 'Поворот не туда. Дом зла',
    originalTitle: 'The Price We Pay',
    year: 2022,
    director: 'Рюхэй Китамура',
    localRating: 5.469,
    localVotes: 27475,
    genres: ['криминал', 'ужасы']
  },
  {
    id: 'TheColony',
    title: 'Колония',
    originalTitle: 'The Colony',
    year: 2013,
    director: 'Джефф Ренфро',
    localRating: 5.466,
    localVotes: 42734,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'SpiralFromTheBookOfSaw',
    title: 'Пила: Спираль',
    originalTitle: 'Spiral: From the Book of Saw',
    year: 2020,
    director: 'Даррен Линн Боусман',
    localRating: 5.465,
    localVotes: 99988,
    genres: ['детектив', 'триллер', 'ужасы']
  },
  {
    id: 'Latency',
    title: 'Ханна. В игре',
    originalTitle: 'Latency',
    year: 2024,
    director: 'Джеймс Крок',
    localRating: 5.464,
    localVotes: 10536,
    genres: ['ужасы']
  },
  {
    id: 'KolskayaSverhglubokaya',
    title: 'Кольская сверхглубокая',
    originalTitle: '',
    year: 2020,
    director: 'Арсений Сюхин',
    localRating: 5.463,
    localVotes: 126664,
    genres: ['триллер', 'ужасы', 'фантастика']
  },
  {
    id: 'DarkWindows',
    title: 'Тёмные окна',
    originalTitle: 'Dark Windows',
    year: 2023,
    director: 'Алекс Херрон',
    localRating: 5.463,
    localVotes: 11350,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheBunker',
    title: 'Прибытие: Новый контакт',
    originalTitle: 'The Bunker',
    year: 2024,
    director: 'Брайан Хэнсон',
    localRating: 5.462,
    localVotes: 10976,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'WolfMan',
    title: 'Вульфмен',
    originalTitle: 'Wolf Man',
    year: 2025,
    director: 'Ли Уоннелл',
    localRating: 5.458,
    localVotes: 15688,
    genres: ['ужасы']
  },
  {
    id: 'MesseBasse',
    title: 'Наваждение Джули',
    originalTitle: 'Messe basse',
    year: 2020,
    director: 'Батист Драпо',
    localRating: 5.457,
    localVotes: 15790,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'XingMenShenYuan',
    title: 'Миссия: Чужой',
    originalTitle: 'Xing men shen yuan',
    year: 2024,
    director: 'Чжан Сяобэй',
    localRating: 5.456,
    localVotes: 13196,
    genres: ['фантастика', 'боевик', 'ужасы']
  },
  {
    id: 'ASementeDoMal',
    title: 'Заклятие Амелии',
    originalTitle: 'A Semente do Mal',
    year: 2023,
    director: 'Гэбриел Абрантеш',
    localRating: 5.456,
    localVotes: 11162,
    genres: ['ужасы']
  },
  {
    id: 'TheSound',
    title: 'Скалолазы',
    originalTitle: 'The Sound',
    year: 2025,
    director: 'Брендан Дивейн',
    localRating: 5.452,
    localVotes: 25802,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'TragedyGirls',
    title: 'Убить за лайк',
    originalTitle: 'Tragedy Girls',
    year: 2017,
    director: 'Тайлер МакИнтайр',
    localRating: 5.452,
    localVotes: 24481,
    genres: ['ужасы', 'комедия', 'криминал']
  },
  {
    id: 'ItsAWonderfulKnife',
    title: 'Крик. Ночь перед Рождеством',
    originalTitle: 'It\'s a Wonderful Knife',
    year: 2023,
    director: 'Тайлер МакИнтайр',
    localRating: 5.450,
    localVotes: 11259,
    genres: ['ужасы', 'комедия', 'фантастика']
  },
  {
    id: 'JukaiMura',
    title: 'Лес самоубийц',
    originalTitle: 'Jukai Mura',
    year: 2021,
    director: 'Такаси Симидзу',
    localRating: 5.449,
    localVotes: 11122,
    genres: ['ужасы']
  },
  {
    id: '13Exorcismos',
    title: '13 изгнаний дьявола',
    originalTitle: '13 exorcismos',
    year: 2022,
    director: 'Хакобо Мартинес',
    localRating: 5.447,
    localVotes: 13173,
    genres: ['ужасы']
  },
  {
    id: 'PengabdiSetan2Communion',
    title: 'Заклятье: 13‑й этаж',
    originalTitle: 'Pengabdi Setan 2: Communion',
    year: 2022,
    director: 'Джоко Анвар',
    localRating: 5.444,
    localVotes: 10679,
    genres: ['ужасы']
  },
  {
    id: 'VoldemortOriginsOfTheHeir',
    title: 'Волан‑де‑Морт: Корни наследника',
    originalTitle: 'Voldemort: Origins of the Heir',
    year: 2018,
    director: 'Джанмария Пеццато',
    localRating: 5.444,
    localVotes: 10457,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'AmityvilleTheAwakening',
    title: 'Ужас Амитивилля: Пробуждение',
    originalTitle: 'Amityville: The Awakening',
    year: 2015,
    director: 'Франк Халфун',
    localRating: 5.443,
    localVotes: 41300,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'BloodFest',
    title: 'Бладфест',
    originalTitle: 'Blood Fest',
    year: 2018,
    director: 'Оуэн Эджертон',
    localRating: 5.443,
    localVotes: 17706,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'PrivorotChernoeVenchanie',
    title: 'Приворот. Чёрное венчание',
    originalTitle: '',
    year: 2021,
    director: 'Святослав Подгаевский',
    localRating: 5.437,
    localVotes: 44000,
    genres: ['ужасы']
  },
  {
    id: 'OtrazhenieTmy',
    title: 'Отражение тьмы',
    originalTitle: '',
    year: 2023,
    director: 'Серик Бейсеу',
    localRating: 5.435,
    localVotes: 14090,
    genres: ['ужасы']
  },
  {
    id: 'TheTank',
    title: 'Нечто. Монстр из глубин',
    originalTitle: 'The Tank',
    year: 2023,
    director: 'Скотт Уокер',
    localRating: 5.434,
    localVotes: 17993,
    genres: ['ужасы']
  },
  {
    id: 'DeadZone',
    title: 'Мёртвая зона',
    originalTitle: 'Dead Zone',
    year: 2022,
    director: 'Хэнк Брэкстэн',
    localRating: 5.433,
    localVotes: 17647,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Hostile',
    title: 'Выжившие',
    originalTitle: 'Hostile',
    year: 2017,
    director: 'Матьё Тури',
    localRating: 5.432,
    localVotes: 64307,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'TheLair',
    title: 'Логово',
    originalTitle: 'The Lair',
    year: 2022,
    director: 'Нил Маршалл',
    localRating: 5.432,
    localVotes: 32540,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'Vamps',
    title: 'Вампирши',
    originalTitle: 'Vamps',
    year: 2011,
    director: 'Эми Хекерлинг',
    localRating: 5.432,
    localVotes: 10588,
    genres: ['ужасы', 'мелодрама', 'комедия']
  },
  {
    id: 'ResidentEvilTheFinalChapter',
    title: 'Обитель зла: Последняя глава',
    originalTitle: 'Resident Evil: The Final Chapter',
    year: 2016,
    director: 'Пол У. С. Андерсон',
    localRating: 5.431,
    localVotes: 106018,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'TheRussianBride',
    title: 'Русская невеста',
    originalTitle: 'The Russian Bride',
    year: 2018,
    director: 'Майкл С. Ойеда',
    localRating: 5.430,
    localVotes: 20595,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'Alive',
    title: 'Пила: Начало',
    originalTitle: 'Alive',
    year: 2018,
    director: 'Роб Грант',
    localRating: 5.429,
    localVotes: 19437,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Relic',
    title: 'Реликвия',
    originalTitle: 'Relic',
    year: 2020,
    director: 'Натали Эрика Джеймс',
    localRating: 5.427,
    localVotes: 20950,
    genres: ['ужасы', 'драма', 'детектив']
  },
  {
    id: 'Sorgenfri',
    title: 'Зона X',
    originalTitle: 'Sorgenfri',
    year: 2015,
    director: 'Бо Миккельсен',
    localRating: 5.427,
    localVotes: 14028,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheHoleInTheGround',
    title: 'Другой',
    originalTitle: 'The Hole in the Ground',
    year: 2018,
    director: 'Ли Кронин',
    localRating: 5.426,
    localVotes: 21303,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'TheInvitation',
    title: 'Приглашение',
    originalTitle: 'The Invitation',
    year: 2022,
    director: 'Джессика Томпсон',
    localRating: 5.426,
    localVotes: 13358,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Host',
    title: 'Астрал. Онлайн',
    originalTitle: 'Host',
    year: 2020,
    director: 'Роб Сэвидж',
    localRating: 5.422,
    localVotes: 12237,
    genres: ['ужасы']
  },
  {
    id: 'ParanormalActivityNextOfKin',
    title: 'Паранормальное явление: Ближайший родич',
    originalTitle: 'Paranormal Activity: Next of Kin',
    year: 2021,
    director: 'Уильям Юбэнк',
    localRating: 5.420,
    localVotes: 14538,
    genres: ['ужасы']
  },
  {
    id: 'KeretaBerdarah',
    title: 'Пункт назначения: Поезд № 13',
    originalTitle: 'Kereta Berdarah',
    year: 2024,
    director: 'Ризал Мантовани',
    localRating: 5.412,
    localVotes: 58835,
    genres: ['ужасы']
  },
  {
    id: 'TheJackInTheBoxAwakening',
    title: 'Шкатулка дьявола: Пробуждение зла',
    originalTitle: 'The Jack in the Box: Awakening',
    year: 2022,
    director: 'Лоуренс Фаулер',
    localRating: 5.407,
    localVotes: 37487,
    genres: ['ужасы']
  },
  {
    id: 'Verónica',
    title: 'Уиджи: Проклятие Вероники',
    originalTitle: 'Verónica',
    year: 2017,
    director: 'Пако Пласа',
    localRating: 5.406,
    localVotes: 14378,
    genres: ['ужасы']
  },
  {
    id: 'Zhest',
    title: 'Жесть',
    originalTitle: '',
    year: 2006,
    director: 'Денис Нейманд',
    localRating: 5.406,
    localVotes: 13607,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'Triggered',
    title: 'Дезматч',
    originalTitle: 'Triggered',
    year: 2020,
    director: 'Аластер Орр',
    localRating: 5.405,
    localVotes: 14047,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'ThePower',
    title: 'Проклятье Эбигейл',
    originalTitle: 'The Power',
    year: 2021,
    director: 'Коринна Фэйт',
    localRating: 5.402,
    localVotes: 34682,
    genres: ['ужасы']
  },
  {
    id: 'ResidentEvilWelcomeToRaccoonCity',
    title: 'Обитель зла: Раккун‑Сити',
    originalTitle: 'Resident Evil: Welcome to Raccoon City',
    year: 2021,
    director: 'Йоханнес Робертс',
    localRating: 5.400,
    localVotes: 53561,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'Hellbender',
    title: 'Хэллбендер',
    originalTitle: 'Hellbender',
    year: 2021,
    director: 'Джон Адамс',
    localRating: 5.397,
    localVotes: 15396,
    genres: ['ужасы']
  },
  {
    id: 'Polaroid',
    title: 'Пункт назначения: Смайл',
    originalTitle: 'Polaroid',
    year: 2019,
    director: 'Ларс Клевберг',
    localRating: 5.394,
    localVotes: 67377,
    genres: ['ужасы']
  },
  {
    id: 'TheConfession',
    title: 'Синистер. Первое проклятие',
    originalTitle: 'The Confession',
    year: 2025,
    director: 'Уилл Кэнон',
    localRating: 5.392,
    localVotes: 10479,
    genres: ['ужасы']
  },
  {
    id: 'TheFearway',
    title: 'За гранью времени',
    originalTitle: 'The Fearway',
    year: 2023,
    director: 'Слободан Гайич',
    localRating: 5.388,
    localVotes: 20293,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Carnifex',
    title: 'Карнифекс: Борьба за выживание',
    originalTitle: 'Carnifex',
    year: 2022,
    director: 'Шон Лахифф',
    localRating: 5.388,
    localVotes: 13210,
    genres: ['ужасы']
  },
  {
    id: 'UrMörkret',
    title: 'Синистер. Из тьмы',
    originalTitle: 'Ur mörkret',
    year: 2024,
    director: 'Филип В. да Сильва',
    localRating: 5.387,
    localVotes: 12067,
    genres: ['ужасы']
  },
  {
    id: 'Viral',
    title: 'Вирус',
    originalTitle: 'Viral',
    year: 2015,
    director: 'Генри Джуст',
    localRating: 5.386,
    localVotes: 35929,
    genres: ['ужасы', 'фантастика', 'драма']
  },
  {
    id: 'Maraé',
    title: 'Остров Черепа',
    originalTitle: 'Maraé',
    year: 2024,
    director: 'Жак Клюгер',
    localRating: 5.382,
    localVotes: 29051,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'StillBorn',
    title: 'Близнецы',
    originalTitle: 'Still/Born',
    year: 2017,
    director: 'Брэндон Кристенсен',
    localRating: 5.382,
    localVotes: 18336,
    genres: ['ужасы']
  },
  {
    id: 'LordOfMisrule',
    title: 'Лукавый',
    originalTitle: 'Lord of Misrule',
    year: 2023,
    director: 'Уильям Брент Белл',
    localRating: 5.381,
    localVotes: 16805,
    genres: ['ужасы']
  },
  {
    id: 'Whistle',
    title: 'Свист',
    originalTitle: 'Whistle',
    year: 2025,
    director: 'Корин Харди',
    localRating: 5.378,
    localVotes: 11743,
    genres: ['ужасы']
  },
  {
    id: 'FromBlack',
    title: 'Астрал. Женщина в чёрном',
    originalTitle: 'From Black',
    year: 2022,
    director: 'Томас Маркезе',
    localRating: 5.377,
    localVotes: 14236,
    genres: ['ужасы']
  },
  {
    id: 'GraveEncounters2',
    title: 'Искатели могил 2',
    originalTitle: 'Grave Encounters 2',
    year: 2012,
    director: 'Джон Поликуин',
    localRating: 5.372,
    localVotes: 39342,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'Wildling',
    title: 'Сага о чудовище. Сумерки',
    originalTitle: 'Wildling',
    year: 2017,
    director: 'Фритц Бём',
    localRating: 5.371,
    localVotes: 12230,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'BabyBlue',
    title: 'Проклятие. Паранормальное видео',
    originalTitle: 'Baby Blue',
    year: 2023,
    director: 'Адам Мэйсон',
    localRating: 5.370,
    localVotes: 11166,
    genres: ['ужасы']
  },
  {
    id: 'HalloweenKills',
    title: 'Хэллоуин убивает',
    originalTitle: 'Halloween Kills',
    year: 2021,
    director: 'Дэвид Гордон Грин',
    localRating: 5.364,
    localVotes: 38625,
    genres: ['ужасы']
  },
  {
    id: 'BambiTheReckoning',
    title: 'Бэмби. Лесной кошмар',
    originalTitle: 'Bambi: The Reckoning',
    year: 2025,
    director: 'Дэн Аллен',
    localRating: 5.363,
    localVotes: 10505,
    genres: ['ужасы']
  },
  {
    id: 'TheRental',
    title: 'Кто не спрятался',
    originalTitle: 'The Rental',
    year: 2020,
    director: 'Дэйв Франко',
    localRating: 5.362,
    localVotes: 54831,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Jessabelle',
    title: 'Джезабель',
    originalTitle: 'Jessabelle',
    year: 2014,
    director: 'Кевин Гротерт',
    localRating: 5.361,
    localVotes: 18998,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheNight',
    title: 'Ночь',
    originalTitle: 'The Night',
    year: 2020,
    director: 'Курош Ахари',
    localRating: 5.361,
    localVotes: 15450,
    genres: ['ужасы']
  },
  {
    id: 'Candyman',
    title: 'Кэндимен',
    originalTitle: 'Candyman',
    year: 2020,
    director: 'Ниа ДаКоста',
    localRating: 5.353,
    localVotes: 18877,
    genres: ['ужасы']
  },
  {
    id: 'Piranha3D',
    title: 'Пираньи 3D',
    originalTitle: 'Piranha 3D',
    year: 2010,
    director: 'Александр Ажа',
    localRating: 5.349,
    localVotes: 90604,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'TheHuntressRuneOfTheDead',
    title: 'Охотница: Руна мёртвых',
    originalTitle: 'The Huntress: Rune of the Dead',
    year: 2019,
    director: 'Расмус Тирзитис',
    localRating: 5.345,
    localVotes: 10533,
    genres: ['драма', 'фэнтези', 'ужасы']
  },
  {
    id: 'Lorafo',
    title: 'Не дыши: Игра на выживание',
    originalTitle: 'L\'orafo',
    year: 2022,
    director: 'Винченцо Риккьюто',
    localRating: 5.344,
    localVotes: 39697,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheCurseOfLaLlorona',
    title: 'Проклятие Плачущей',
    originalTitle: 'The Curse of La Llorona',
    year: 2018,
    director: 'Майкл Чавес',
    localRating: 5.342,
    localVotes: 36338,
    genres: ['ужасы']
  },
  {
    id: 'WeSummonTheDarkness',
    title: 'Мы призываем тьму',
    originalTitle: 'We Summon the Darkness',
    year: 2019,
    director: 'Марк Мейерс',
    localRating: 5.341,
    localVotes: 14488,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'HauntingOfTheQueenMary',
    title: 'Корабль призраков',
    originalTitle: 'Haunting of the Queen Mary',
    year: 2022,
    director: 'Гари Шор',
    localRating: 5.334,
    localVotes: 26752,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Bait',
    title: 'Цунами 3D',
    originalTitle: 'Bait',
    year: 2011,
    director: 'Кимбл Рендалл',
    localRating: 5.331,
    localVotes: 36882,
    genres: ['ужасы']
  },
  {
    id: 'BodyAtBrightonRock',
    title: 'Смертельная тропа',
    originalTitle: 'Body at Brighton Rock',
    year: 2019,
    director: 'Роксанна Бенжамин',
    localRating: 5.329,
    localVotes: 17053,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'TheThaw',
    title: 'Оттепель',
    originalTitle: 'The Thaw',
    year: 2009,
    director: 'Марк А. Льюис',
    localRating: 5.329,
    localVotes: 14825,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'IceDemon',
    title: 'Ледяной демон',
    originalTitle: 'Ice Demon',
    year: 2021,
    director: 'Иван Капитонов',
    localRating: 5.325,
    localVotes: 13431,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Bumperkleef',
    title: 'Преследование',
    originalTitle: 'Bumperkleef',
    year: 2019,
    director: 'Лодевейк Крейнс',
    localRating: 5.324,
    localVotes: 33483,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'Women',
    title: 'Препод: История Галатеи',
    originalTitle: 'Women',
    year: 2021,
    director: 'Антон Сигурдссон',
    localRating: 5.323,
    localVotes: 35540,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Conductor',
    title: 'Проводник',
    originalTitle: 'Conductor',
    year: 2018,
    director: 'Илья Максимов',
    localRating: 5.322,
    localVotes: 23318,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Pyewacket',
    title: 'Злой дух',
    originalTitle: 'Pyewacket',
    year: 2017,
    director: 'Адам Макдональд',
    localRating: 5.321,
    localVotes: 18117,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'Splinter',
    title: 'Заноза',
    originalTitle: 'Splinter',
    year: 2008,
    director: 'Тоби Уилкинс',
    localRating: 5.320,
    localVotes: 11000,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'TheForest',
    title: 'Лес призраков',
    originalTitle: 'The Forest',
    year: 2015,
    director: 'Джейсон Зада',
    localRating: 5.319,
    localVotes: 34760,
    genres: ['ужасы']
  },
  {
    id: 'TheDen',
    title: 'Смерть в сети',
    originalTitle: 'The Den',
    year: 2013,
    director: 'Захари Донохью',
    localRating: 5.319,
    localVotes: 26802,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'LesAffames',
    title: 'Голодные Z',
    originalTitle: 'Les affamés',
    year: 2017,
    director: 'Робин Обер',
    localRating: 5.318,
    localVotes: 12121,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'VanishingOn7thStreet',
    title: 'Исчезновение на 7‑й улице',
    originalTitle: 'Vanishing on 7th Street',
    year: 2010,
    director: 'Брэд Андерсон',
    localRating: 5.313,
    localVotes: 26441,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Heidi',
    title: 'Хайди',
    originalTitle: 'Heidi',
    year: 2014,
    director: 'Дэниэл Рэй Гутьеррез',
    localRating: 5.312,
    localVotes: 13895,
    genres: ['ужасы']
  },
  {
    id: 'ResidentEvilRetribution',
    title: 'Обитель зла: Возмездие',
    originalTitle: 'Resident Evil: Retribution',
    year: 2012,
    director: 'Пол У. С. Андерсон',
    localRating: 5.310,
    localVotes: 122711,
    genres: ['ужасы', 'боевик', 'фантастика']
  },
  {
    id: 'TheSpecial',
    title: 'Нечто особенное',
    originalTitle: 'The Special',
    year: 2020,
    director: 'Брюс Смит',
    localRating: 5.310,
    localVotes: 17863,
    genres: ['ужасы']
  },
  {
    id: 'HalloweenEnds',
    title: 'Хэллоуин заканчивается',
    originalTitle: 'Halloween Ends',
    year: 2022,
    director: 'Дэвид Гордон Грин',
    localRating: 5.309,
    localVotes: 14968,
    genres: ['ужасы']
  },
  {
    id: 'Tamara',
    title: 'Несущая смерть',
    originalTitle: 'Tamara',
    year: 2005,
    director: 'Джереми Хафт',
    localRating: 5.308,
    localVotes: 12438,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Mara',
    title: 'Мара. Пожиратель снов',
    originalTitle: 'Mara',
    year: 2017,
    director: 'Клайв Тонг',
    localRating: 5.305,
    localVotes: 46182,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'ThePossessionOfHannahGrace',
    title: 'Кадавр',
    originalTitle: 'The Possession of Hannah Grace',
    year: 2018,
    director: 'Дидерик Ван Ружен',
    localRating: 5.305,
    localVotes: 31397,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'IKnowWhatYouDidLastSummer',
    title: 'Я знаю, что вы сделали прошлым летом',
    originalTitle: 'I Know What You Did Last Summer',
    year: 2025,
    director: 'Дженн Робинсон',
    localRating: 5.304,
    localVotes: 15310,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Eloise',
    title: 'Призраки Элоиз',
    originalTitle: 'Eloise',
    year: 2016,
    director: 'Роберт Легато',
    localRating: 5.300,
    localVotes: 26976,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ArthurMalediction',
    title: 'Проклятие Артура',
    originalTitle: 'Arthur, malédiction',
    year: 2022,
    director: 'Бартелеми Гроссманн',
    localRating: 5.300,
    localVotes: 19246,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Husk',
    title: 'Шелуха',
    originalTitle: 'Husk',
    year: 2010,
    director: 'Бретт Симмонс',
    localRating: 5.297,
    localVotes: 26880,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'AnacondasTheHuntForTheBloodOrchid',
    title: 'Анаконда 2: Охота за проклятой орхидеей',
    originalTitle: 'Anacondas: The Hunt for the Blood Orchid',
    year: 2004,
    director: 'Дуайт Х. Литтл',
    localRating: 5.297,
    localVotes: 11075,
    genres: ['ужасы', 'боевик', 'приключения']
  },
  {
    id: 'TheHallow',
    title: 'Из тьмы',
    originalTitle: 'The Hallow',
    year: 2015,
    director: 'Корин Харди',
    localRating: 5.293,
    localVotes: 15803,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'PayTheGhost',
    title: 'Врата тьмы',
    originalTitle: 'Pay the Ghost',
    year: 2015,
    director: 'Ули Эдель',
    localRating: 5.292,
    localVotes: 26427,
    genres: ['ужасы']
  },
  {
    id: 'MortoNaoFala',
    title: 'Голоса с того света',
    originalTitle: 'Morto Não Fala',
    year: 2018,
    director: 'Деннисон Рамалью',
    localRating: 5.290,
    localVotes: 17165,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'ISpitOnYourGrave2',
    title: 'Я плюю на ваши могилы 2',
    originalTitle: 'I Spit on Your Grave 2',
    year: 2013,
    director: 'Стивен Р. Монро',
    localRating: 5.288,
    localVotes: 47287,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'PatientsOfASaint',
    title: 'Проклятый остров',
    originalTitle: 'Patients of a Saint',
    year: 2020,
    director: 'Расселл Оуэн',
    localRating: 5.288,
    localVotes: 21063,
    genres: ['ужасы']
  },
  {
    id: 'TheGreenInferno',
    title: 'Зелёный ад',
    originalTitle: 'The Green Inferno',
    year: 2013,
    director: 'Элай Рот',
    localRating: 5.287,
    localVotes: 17704,
    genres: ['ужасы', 'приключения']
  },
  {
    id: 'AHauntedHouse2',
    title: 'Дом с паранормальными явлениями 2',
    originalTitle: 'A Haunted House 2',
    year: 2014,
    director: 'Майкл Тиддес',
    localRating: 5.285,
    localVotes: 78638,
    genres: ['ужасы', 'комедия']
  },
  {
    id: 'Butchers',
    title: 'Мясники',
    originalTitle: 'Butchers',
    year: 2020,
    director: 'Адриан Лэнгли',
    localRating: 5.282,
    localVotes: 25200,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheFlood',
    title: 'Наводнение',
    originalTitle: 'The Flood',
    year: 2023,
    director: 'Брэндон Слэгл',
    localRating: 5.282,
    localVotes: 15666,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'Leatherface',
    title: 'Техасская резня бензопилой: Кожаное лицо',
    originalTitle: 'Leatherface',
    year: 2017,
    director: 'Александр Бустильо',
    localRating: 5.281,
    localVotes: 41636,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'HellHouseLLCLineage',
    title: 'Дом ада. Спуск к дьяволу',
    originalTitle: 'Hell House LLC: Lineage',
    year: 2025,
    director: 'Стивен Коньетти',
    localRating: 5.276,
    localVotes: 17065,
    genres: ['ужасы']
  },
  {
    id: 'Sinister2',
    title: 'Синистер 2',
    originalTitle: 'Sinister 2',
    year: 2015,
    director: 'Киран Фой',
    localRating: 5.275,
    localVotes: 73726,
    genres: ['ужасы']
  },
  {
    id: 'GhostsOfMars',
    title: 'Призраки Марса',
    originalTitle: 'Ghosts of Mars',
    year: 2001,
    director: 'Джон Карпентер',
    localRating: 5.268,
    localVotes: 15010,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TheSuper',
    title: 'Смотритель',
    originalTitle: 'The Super',
    year: 2017,
    director: 'Штефан Рик',
    localRating: 5.263,
    localVotes: 10019,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'BagOfLies',
    title: 'Реинкарнация. Демоны желаний',
    originalTitle: 'Bag of Lies',
    year: 2024,
    director: 'Дэвид Джеймс',
    localRating: 5.258,
    localVotes: 11893,
    genres: ['ужасы']
  },
  {
    id: 'FromDuskTillDawn3',
    title: 'От заката до рассвета 3: Дочь палача',
    originalTitle: 'From Dusk Till Dawn 3: The Hangman\'s Daughter',
    year: 1999,
    director: 'П. Дж. Пеше',
    localRating: 5.258,
    localVotes: 10920,
    genres: ['ужасы', 'фэнтези', 'боевик']
  },
  {
    id: 'VHSH2',
    title: 'З/Л/О 2',
    originalTitle: 'V/H/S/2',
    year: 2013,
    director: 'Саймон Баррет',
    localRating: 5.257,
    localVotes: 13965,
    genres: ['ужасы']
  },
  {
    id: 'HauntSeason',
    title: 'Крик. Сезон призраков',
    originalTitle: 'Haunt Season',
    year: 2024,
    director: 'Джейк Джарви',
    localRating: 5.255,
    localVotes: 10287,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'Bagman',
    title: 'Синистер. Семейное проклятие',
    originalTitle: 'Bagman',
    year: 2024,
    director: 'Колм Маккарти',
    localRating: 5.253,
    localVotes: 12870,
    genres: ['ужасы']
  },
  {
    id: 'OneMissedCall',
    title: 'Один пропущенный звонок',
    originalTitle: 'One Missed Call',
    year: 2007,
    director: 'Эрик Валетт',
    localRating: 5.245,
    localVotes: 14426,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'TheTakingOfDeborahLogan',
    title: 'Демоны Деборы Логан',
    originalTitle: 'The Taking of Deborah Logan',
    year: 2014,
    director: 'Адам Робител',
    localRating: 5.243,
    localVotes: 18610,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheInstitute',
    title: 'Институт Роузвуд',
    originalTitle: 'The Institute',
    year: 2016,
    director: 'Джеймс Франко',
    localRating: 5.243,
    localVotes: 11217,
    genres: ['триллер', 'ужасы', 'драма']
  },
  {
    id: 'Ash',
    title: 'Пепел',
    originalTitle: 'Ash',
    year: 2024,
    director: 'Flying Lotus',
    localRating: 5.241,
    localVotes: 17861,
    genres: ['фантастика', 'ужасы']
  },
  {
    id: 'ShadowInTheCloud',
    title: 'Воздушный бой',
    originalTitle: 'Shadow in the Cloud',
    year: 2020,
    director: 'Розанна Лян',
    localRating: 5.240,
    localVotes: 56888,
    genres: ['ужасы', 'боевик', 'военный']
  },
  {
    id: 'Feardotcom',
    title: 'Страх.сом',
    originalTitle: 'Feardotcom',
    year: 2002,
    director: 'Уильям Мэлоун',
    localRating: 5.239,
    localVotes: 13711,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'TheLazarusEffect',
    title: 'Эффект Лазаря',
    originalTitle: 'The Lazarus Effect',
    year: 2013,
    director: 'Дэвид Гелб',
    localRating: 5.236,
    localVotes: 23182,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheFog',
    title: 'Туман',
    originalTitle: 'The Fog',
    year: 2005,
    director: 'Руперт Уэйнрайт',
    localRating: 5.235,
    localVotes: 12670,
    genres: ['ужасы', 'детектив']
  },
  {
    id: 'DeathValley',
    title: 'Лощина мертвецов',
    originalTitle: 'Death Valley',
    year: 2021,
    director: 'Мэттью Нинабер',
    localRating: 5.234,
    localVotes: 19818,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'BoneKeeper',
    title: 'Хищник. Спуск в преисподнюю',
    originalTitle: 'Bone Keeper',
    year: 2025,
    director: 'Ховард Дж. Форд',
    localRating: 5.234,
    localVotes: 13105,
    genres: ['фантастика', 'триллер', 'ужасы']
  },
  {
    id: 'Prey',
    title: 'Добыча',
    originalTitle: 'Prey',
    year: 2019,
    director: 'Франк Халфун',
    localRating: 5.230,
    localVotes: 22019,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Twixt',
    title: 'Между',
    originalTitle: 'Twixt',
    year: 2011,
    director: 'Фрэнсис Форд Коппола',
    localRating: 5.230,
    localVotes: 10466,
    genres: ['детектив', 'фэнтези', 'ужасы']
  },
  {
    id: 'BlackWater',
    title: 'Чёрная вода',
    originalTitle: 'Black Water',
    year: 2015,
    director: 'Роман Каримов',
    localRating: 5.229,
    localVotes: 17525,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'ThePossessed',
    title: 'Одержимые',
    originalTitle: 'The Possessed',
    year: 2021,
    director: 'Крис Сан',
    localRating: 5.222,
    localVotes: 12436,
    genres: ['ужасы']
  },
  {
    id: 'TheDjinn',
    title: 'Заклинание джинна',
    originalTitle: 'The Djinn',
    year: 2020,
    director: 'Давид Шарбонье',
    localRating: 5.220,
    localVotes: 12754,
    genres: ['ужасы']
  },
  {
    id: 'Heilstätten',
    title: 'Обитель тьмы',
    originalTitle: 'Heilstätten',
    year: 2018,
    director: 'Майкл Дэвид Пэйт',
    localRating: 5.219,
    localVotes: 14350,
    genres: ['ужасы']
  },
  {
    id: 'Begotten',
    title: 'Порождённый',
    originalTitle: 'Begotten',
    year: 1989,
    director: 'Э. Элиас Мэридж',
    localRating: 5.219,
    localVotes: 11384,
    genres: ['ужасы', 'фэнтези']
  },
  {
    id: 'NoEscapeRoom',
    title: 'Смертельный квест',
    originalTitle: 'No Escape Room',
    year: 2018,
    director: 'Алекс Меркин',
    localRating: 5.215,
    localVotes: 21378,
    genres: ['ужасы']
  },
  {
    id: 'Koputus',
    title: 'Не стучи',
    originalTitle: 'Koputus',
    year: 2022,
    director: 'Йонас Паюнен',
    localRating: 5.212,
    localVotes: 27032,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheByeByeMan',
    title: 'БайБайМэн',
    originalTitle: 'The Bye Bye Man',
    year: 2016,
    director: 'Стэйси Тайтл',
    localRating: 5.211,
    localVotes: 22373,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Sadako',
    title: 'Звонок. Последняя глава',
    originalTitle: 'Sadako',
    year: 2019,
    director: 'Хидэо Наката',
    localRating: 5.210,
    localVotes: 11055,
    genres: ['ужасы']
  },
  {
    id: 'PlayDead',
    title: 'Игра со смертью',
    originalTitle: 'Play Dead',
    year: 2025,
    director: 'Карлос Гоития',
    localRating: 5.203,
    localVotes: 10195,
    genres: ['ужасы']
  },
  {
    id: 'SilentHillRevelation',
    title: 'Сайлент Хилл 2',
    originalTitle: 'Silent Hill: Revelation',
    year: 2012,
    director: 'М. Дж. Бассетт',
    localRating: 5.198,
    localVotes: 81722,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Guests',
    title: 'Гости',
    originalTitle: 'Guests',
    year: 2019,
    director: 'Евгений Абызов',
    localRating: 5.197,
    localVotes: 20512,
    genres: ['триллер', 'ужасы', 'мелодрама']
  },
  {
    id: 'MeganIsMissing',
    title: 'Пропавшая Меган',
    originalTitle: 'Megan Is Missing',
    year: 2011,
    director: 'Майкл Гои',
    localRating: 5.196,
    localVotes: 22268,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'KokoDiKokoDa',
    title: 'Коко‑ди Коко‑да',
    originalTitle: 'Koko‑di koko‑da',
    year: 2019,
    director: 'Йоханнес Нюхольм',
    localRating: 5.196,
    localVotes: 17773,
    genres: ['ужасы', 'драма']
  },
  {
    id: '31',
    title: '31: Праздник смерти',
    originalTitle: '31',
    year: 2016,
    director: 'Роб Зомби',
    localRating: 5.196,
    localVotes: 15008,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Slumber',
    title: 'Сламбер: Лабиринты сна',
    originalTitle: 'Slumber',
    year: 2017,
    director: 'Джонатан Хопкинс',
    localRating: 5.193,
    localVotes: 20926,
    genres: ['ужасы']
  },
  {
    id: 'Possessions',
    title: 'Омен: Кладовая страхов',
    originalTitle: 'Possessions',
    year: 2024,
    director: 'Брент Коте',
    localRating: 5.191,
    localVotes: 10858,
    genres: ['ужасы']
  },
  {
    id: 'Wer',
    title: 'Оборотень',
    originalTitle: 'Wer',
    year: 2013,
    director: 'Уильям Брент Белл',
    localRating: 5.189,
    localVotes: 10649,
    genres: ['ужасы', 'боевик']
  },
  {
    id: 'DownADarkHall',
    title: 'Дальше по коридору',
    originalTitle: 'Down a Dark Hall',
    year: 2016,
    director: 'Родриго Кортес',
    localRating: 5.189,
    localVotes: 10321,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'ReturnToSilentHill',
    title: 'Возвращение в Сайлент Хилл',
    originalTitle: 'Return to Silent Hill',
    year: 2025,
    director: 'Кристоф Ган',
    localRating: 5.188,
    localVotes: 106772,
    genres: ['ужасы']
  },
  {
    id: 'HesOutThere',
    title: 'Кукловод',
    originalTitle: 'He\'s Out There',
    year: 2018,
    director: 'Дэннис Илиадис',
    localRating: 5.183,
    localVotes: 21558,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheTexasChainsawMassacre',
    title: 'Техасская резня бензопилой',
    originalTitle: 'The Texas Chainsaw Massacre',
    year: 2021,
    director: 'Дэвид Блу Гарсиа',
    localRating: 5.169,
    localVotes: 20758,
    genres: ['ужасы']
  },
  {
    id: 'Diabolic',
    title: 'Оно. Первое пришествие',
    originalTitle: 'Diabolic',
    year: 2025,
    director: 'Дэниэл Дж. Филлипс',
    localRating: 5.168,
    localVotes: 24799,
    genres: ['ужасы']
  },
  {
    id: 'TheStrangersPreyAtNight',
    title: 'Незнакомцы: Жестокие игры',
    originalTitle: 'The Strangers: Prey at Night',
    year: 2018,
    director: 'Йоханнес Робертс',
    localRating: 5.165,
    localVotes: 18369,
    genres: ['ужасы']
  },
  {
    id: 'CurseOfChucky',
    title: 'Проклятие Чаки',
    originalTitle: 'Curse of Chucky',
    year: 2013,
    director: 'Дон Манчини',
    localRating: 5.158,
    localVotes: 15246,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'MySoulToTake',
    title: 'Забери мою душу',
    originalTitle: 'My Soul to Take',
    year: 2010,
    director: 'Уэс Крэйвен',
    localRating: 5.156,
    localVotes: 17417,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Hagazussa',
    title: 'Ведьмы',
    originalTitle: 'Hagazussa',
    year: 2017,
    director: 'Лукас Файгелфелд',
    localRating: 5.147,
    localVotes: 11695,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'SOSSurviveOrSacrifice',
    title: 'S.O.S. Остаться в живых',
    originalTitle: 'S.O.S. Survive or Sacrifice',
    year: 2020,
    director: 'Роман Доронин',
    localRating: 5.144,
    localVotes: 36493,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'LifeAfterBeth',
    title: 'Если твоя девушка — зомби',
    originalTitle: 'Life After Beth',
    year: 2014,
    director: 'Джефф Бэйна',
    localRating: 5.144,
    localVotes: 15086,
    genres: ['мелодрама', 'комедия', 'ужасы']
  },
  {
    id: 'IAmLisa',
    title: 'Месть волчицы',
    originalTitle: 'I Am Lisa',
    year: 2020,
    director: 'Патрик Ри',
    localRating: 5.139,
    localVotes: 11774,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheWomanInBlack2AngelOfDeath',
    title: 'Женщина в чёрном 2: Ангел смерти',
    originalTitle: 'The Woman in Black 2: Angel of Death',
    year: 2014,
    director: 'Том Харпер',
    localRating: 5.137,
    localVotes: 24874,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'AVPRAliensVsPredatorRequiem',
    title: 'Чужие против Хищника: Реквием',
    originalTitle: 'AVPR: Aliens vs Predator — Requiem',
    year: 2007,
    director: 'Колин Штраус',
    localRating: 5.129,
    localVotes: 67974,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'TalesOfHalloween',
    title: 'Город монстров',
    originalTitle: 'Tales of Halloween',
    year: 2015,
    director: 'Даррен Линн Боусман',
    localRating: 5.129,
    localVotes: 11239,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'Poltergeist',
    title: 'Полтергейст',
    originalTitle: 'Poltergeist',
    year: 2015,
    director: 'Гил Кинан',
    localRating: 5.122,
    localVotes: 36177,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'GhostHouse',
    title: 'Дом призраков',
    originalTitle: 'Ghost House',
    year: 2017,
    director: 'Рич Рэгсдэйл',
    localRating: 5.120,
    localVotes: 10591,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheCraftLegacy',
    title: 'Колдовство: Новый ритуал',
    originalTitle: 'The Craft: Legacy',
    year: 2020,
    director: 'Зои Листер Джонс',
    localRating: 5.116,
    localVotes: 18890,
    genres: ['ужасы', 'фэнтези', 'драма']
  },
  {
    id: 'ScareUs',
    title: 'Страшные истории для рассказа незнакомцам',
    originalTitle: 'Scare Us',
    year: 2021,
    director: 'Карл Дженсен',
    localRating: 5.105,
    localVotes: 13237,
    genres: ['ужасы']
  },
  {
    id: 'SeedOfChucky',
    title: 'Потомство Чаки',
    originalTitle: 'Seed of Chucky',
    year: 2004,
    director: 'Дон Манчини',
    localRating: 5.104,
    localVotes: 16414,
    genres: ['ужасы', 'триллер', 'комедия']
  },
  {
    id: 'Malum',
    title: 'Астрал. Ритуал Малум',
    originalTitle: 'Malum',
    year: 2023,
    director: 'Энтони ДиБлази',
    localRating: 5.102,
    localVotes: 31156,
    genres: ['ужасы']
  },
  {
    id: 'TheJackInTheBox',
    title: 'Шкатулка дьявола',
    originalTitle: 'The Jack in the Box',
    year: 2019,
    director: 'Лоуренс Фаулер',
    localRating: 5.090,
    localVotes: 35754,
    genres: ['ужасы']
  },
  {
    id: 'Rec4Apocalipsis',
    title: 'Репортаж: Апокалипсис',
    originalTitle: '[Rec] 4: Apocalipsis',
    year: 2014,
    director: 'Жауме Балагеро',
    localRating: 5.088,
    localVotes: 12882,
    genres: ['ужасы']
  },
  {
    id: 'Syndrome',
    title: 'Синдром',
    originalTitle: 'Syndrome',
    year: 2021,
    director: 'Вячеслав Руденко',
    localRating: 5.085,
    localVotes: 13104,
    genres: ['триллер', 'ужасы']
  },
  {
    id: 'TheDyatlovPassIncident',
    title: 'Тайна перевала Дятлова',
    originalTitle: 'The Dyatlov Pass Incident',
    year: 2013,
    director: 'Ренни Харлин',
    localRating: 5.084,
    localVotes: 59482,
    genres: ['ужасы', 'фантастика']
  },
  {
    id: 'Boogeyman',
    title: 'Бугимен',
    originalTitle: 'Boogeyman',
    year: 2005,
    director: 'Стефен Т. Кэй',
    localRating: 5.083,
    localVotes: 17188,
    genres: ['ужасы']
  },
  {
    id: 'EvenLambsHaveTeeth',
    title: 'Даже у ягнят есть зубы',
    originalTitle: 'Even Lambs Have Teeth',
    year: 2015,
    director: 'Терри Майлз',
    localRating: 5.078,
    localVotes: 17559,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheCrucifixion',
    title: 'Заклятье. Наши дни',
    originalTitle: 'The Crucifixion',
    year: 2017,
    director: 'Ксавье Жанс',
    localRating: 5.076,
    localVotes: 19844,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'SrpskiFilm',
    title: 'Сербский фильм',
    originalTitle: 'Srpski film',
    year: 2010,
    director: 'Срджан Спасоевич',
    localRating: 5.066,
    localVotes: 67002,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'DontKnockTwice',
    title: 'Не стучи дважды',
    originalTitle: 'Don\'t Knock Twice',
    year: 2016,
    director: 'Карадог В. Джеймс',
    localRating: 5.065,
    localVotes: 64531,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'TheMidnightMan',
    title: 'Полуночный человек',
    originalTitle: 'The Midnight Man',
    year: 2016,
    director: 'Трэвис Заривны',
    localRating: 5.063,
    localVotes: 17888,
    genres: ['ужасы', 'фэнтези', 'детектив']
  },
  {
    id: 'DarkNature',
    title: 'Спуск: Новая глава',
    originalTitle: 'Dark Nature',
    year: 2022,
    director: 'Беркли Брэйди',
    localRating: 5.059,
    localVotes: 24785,
    genres: ['ужасы']
  },
  {
    id: 'FromDuskTillDawn2TexasBloodMoney',
    title: 'От заката до рассвета 2: Кровавые деньги из Техаса',
    originalTitle: 'From Dusk Till Dawn 2: Texas Blood Money',
    year: 1998,
    director: 'Скотт Шпигель',
    localRating: 5.059,
    localVotes: 14266,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: '247F',
    title: '247 градусов по Фаренгейту',
    originalTitle: '247°F',
    year: 2011,
    director: 'Леван Бакия',
    localRating: 5.056,
    localVotes: 12293,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheJester',
    title: 'Джестер',
    originalTitle: 'The Jester',
    year: 2023,
    director: 'Колин Кравчук',
    localRating: 5.055,
    localVotes: 21467,
    genres: ['ужасы']
  },
  {
    id: 'Room203',
    title: 'Призраки квартиры 203',
    originalTitle: 'Room 203',
    year: 2022,
    director: 'Бен Джаггер',
    localRating: 5.047,
    localVotes: 14785,
    genres: ['ужасы', 'драма']
  },
  {
    id: 'Traumatika',
    title: 'Оно. Кошмар на Мейпл‑стрит',
    originalTitle: 'Traumatika',
    year: 2024,
    director: 'Пьер Цигаридис',
    localRating: 5.047,
    localVotes: 12616,
    genres: ['ужасы']
  },
  {
    id: 'ChernobylDiaries',
    title: 'Запретная зона',
    originalTitle: 'Chernobyl Diaries',
    year: 2012,
    director: 'Брэдли Паркер',
    localRating: 5.044,
    localVotes: 43977,
    genres: ['ужасы']
  },
  {
    id: 'StAgatha',
    title: 'Святая Агата',
    originalTitle: 'St. Agatha',
    year: 2018,
    director: 'Даррен Линн Боусман',
    localRating: 5.044,
    localVotes: 18733,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheVault',
    title: 'Хранилище',
    originalTitle: 'The Vault',
    year: 2017,
    director: 'Дэн Буш',
    localRating: 5.038,
    localVotes: 13011,
    genres: ['ужасы', 'триллер', 'криминал']
  },
  {
    id: 'Autopsy',
    title: 'Вскрытие',
    originalTitle: 'Autopsy',
    year: 2008,
    director: 'Адам Гираш',
    localRating: 5.037,
    localVotes: 34328,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Cell',
    title: 'Мобильник',
    originalTitle: 'Cell',
    year: 2014,
    director: 'Тод Уильямс',
    localRating: 5.036,
    localVotes: 40721,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'GoodBoy',
    title: 'Опасный друг',
    originalTitle: 'Good Boy',
    year: 2022,
    director: 'Вильяр Бёэ',
    localRating: 5.031,
    localVotes: 81581,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'TheRequin',
    title: 'Тропический шторм',
    originalTitle: 'The Requin',
    year: 2022,
    director: 'Ле-Ван Кьет',
    localRating: 5.020,
    localVotes: 32373,
    genres: ['ужасы']
  },
  {
    id: 'HellboyTheCrookedMan',
    title: 'Хеллбой: Проклятие Горбуна',
    originalTitle: 'Hellboy: The Crooked Man',
    year: 2024,
    director: 'Брайан Тейлор',
    localRating: 5.006,
    localVotes: 21905,
    genres: ['ужасы', 'боевик', 'триллер']
  },
  {
    id: 'DeathNote',
    title: 'Тетрадь смерти',
    originalTitle: 'Death Note',
    year: 2017,
    director: 'Адам Вингард',
    localRating: 4.995,
    localVotes: 39895,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'WitchesInTheWoods',
    title: 'Проклятый лес',
    originalTitle: 'Witches in the Woods',
    year: 2019,
    director: 'Джордан Баркер',
    localRating: 4.979,
    localVotes: 11175,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'WomanInTheMaze',
    title: 'Дом тысячи дверей',
    originalTitle: 'Woman in the Maze',
    year: 2023,
    director: 'Митеш Кумар Патель',
    localRating: 4.978,
    localVotes: 15015,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'Redcon1',
    title: 'Карантин Z',
    originalTitle: 'Redcon-1',
    year: 2018,
    director: 'Чи Кеонг Чанг',
    localRating: 4.974,
    localVotes: 12208,
    genres: ['фантастика', 'боевик', 'ужасы']
  },
  {
    id: 'PlayOrDie',
    title: 'Играй или умри',
    originalTitle: 'Play or Die',
    year: 2019,
    director: 'Жак Клюгер',
    localRating: 4.972,
    localVotes: 16067,
    genres: ['ужасы', 'триллер', 'детектив']
  },
{
  id: 'TractionParkMassacre',
  title: 'Пункт назначения: Новый аттракцион',
  originalTitle: 'Traction Park Massacre',
  year: 2025,
  director: 'Дуглас Димонда',
  localRating: 4.779,
  localVotes: 30245,
  genres: ['ужасы']
},
{
  id: 'Hellphone',
  title: 'Чертов мобильник',
  originalTitle: 'Hellphone',
  year: 2007,
  director: 'Джеймс Ют',
  localRating: 4.775,
  localVotes: 21716,
  genres: ['ужасы', 'фэнтези', 'комедия']
},
{
  id: 'Rings',
  title: 'Звонки',
  originalTitle: 'Rings',
  year: 2016,
  director: 'Ф. Хавьер Гутьеррес',
  localRating: 4.774,
  localVotes: 25762,
  genres: ['ужасы', 'драма', 'мелодрама']
},
{
  id: 'Wolves',
  title: 'Волки',
  originalTitle: 'Wolves',
  year: 2013,
  director: 'Дэвид Хэйтер',
  localRating: 4.772,
  localVotes: 19129,
  genres: ['фэнтези', 'боевик', 'ужасы']
},
{
  id: 'ThePyramid',
  title: 'Пирамида',
  originalTitle: 'The Pyramid',
  year: 2014,
  director: 'Грегори Левассёр',
  localRating: 4.763,
  localVotes: 28950,
  genres: ['ужасы', 'триллер', 'детектив']
},
{
  id: 'TheBride',
  title: 'Невеста',
  originalTitle: 'The Bride',
  year: 2017,
  director: 'Святослав Подгаевский',
  localRating: 4.762,
  localVotes: 46046,
  genres: ['ужасы']
},
{
  id: 'ParanormalActivityGhostDimension',
  title: 'Паранормальное явление 5: Призраки в 3D',
  originalTitle: 'Paranormal Activity: The Ghost Dimension',
  year: 2015,
  director: 'Грегори Плоткин',
  localRating: 4.739,
  localVotes: 15311,
  genres: ['ужасы']
},
{
  id: 'Skinamarink',
  title: 'Паранормальные явления. Скинамаринк',
  originalTitle: 'Skinamarink',
  year: 2022,
  director: 'Кайл Эдвард Болл',
  localRating: 4.703,
  localVotes: 13781,
  genres: ['ужасы']
},
{
  id: 'JasonX',
  title: 'Джейсон Х',
  originalTitle: 'Jason X',
  year: 2000,
  director: 'Джеймс Исаак',
  localRating: 4.722,
  localVotes: 14181,
  genres: ['ужасы', 'фантастика', 'боевик']
},
{
  id: 'ShookumHills',
  title: 'Хребет дьявола',
  originalTitle: 'Shookum Hills',
  year: 2021,
  director: 'Брэдли Паркер',
  localRating: 4.727,
  localVotes: 16759,
  genres: ['ужасы']
},
{
  id: 'DeepBlueSea3',
  title: 'Глубокое синее море 3',
  originalTitle: 'Deep Blue Sea 3',
  year: 2020,
  director: 'Джон Пог',
  localRating: 4.699,
  localVotes: 27260,
  genres: ['ужасы']
},
{
  id: 'Cooties',
  title: 'Кутис',
  originalTitle: 'Cooties',
  year: 2014,
  director: 'Джонатан Милотт',
  localRating: 4.693,
  localVotes: 17724,
  genres: ['ужасы', 'комедия']
},
{
  id: 'MonstersDarkContinent',
  title: 'Монстры 2: Тёмный континент',
  originalTitle: 'Monsters: Dark Continent',
  year: 2014,
  director: 'Том Грин',
  localRating: 4.688,
  localVotes: 10111,
  genres: ['ужасы', 'фантастика', 'боевик']
},
{
  id: 'Piglet',
  title: 'Пятачок. Кровь и жёлуди',
  originalTitle: 'Piglet',
  year: 2025,
  director: 'Андреа М. Катинелла',
  localRating: 4.665,
  localVotes: 16185,
  genres: ['ужасы']
},
{
  id: 'ISpitOnYourGrave3',
  title: 'Я плюю на ваши могилы 3',
  originalTitle: 'I Spit on Your Grave 3',
  year: 2015,
  director: 'Ричард Шенкман',
  localRating: 4.661,
  localVotes: 21285,
  genres: ['триллер', 'ужасы', 'криминал']
},
{
  id: 'LaTour',
  title: 'Мгла',
  originalTitle: 'La tour',
  year: 2022,
  director: 'Гийом Никлу',
  localRating: 4.655,
  localVotes: 14189,
  genres: ['ужасы', 'фэнтези', 'драма']
},
{
  id: 'Heimsuchung',
  title: 'Заклятье. Дом тьмы',
  originalTitle: 'Heimsuchung',
  year: 2023,
  director: 'Ахмед Абдель‑Салам',
  localRating: 4.628,
  localVotes: 12076,
  genres: ['ужасы']
},
{
  id: 'TheGhostsOfBorleyRectory',
  title: 'Призрак монахини из Борли',
  originalTitle: 'The Ghosts of Borley Rectory',
  year: 2021,
  director: 'Стивен М. Смит',
  localRating: 4.610,
  localVotes: 10130,
  genres: ['ужасы', 'триллер', 'драма']
},
{
  id: 'Werewolves',
  title: 'Другой мир: Год волка',
  originalTitle: 'Werewolves',
  year: 2024,
  director: 'Стивен С. Миллер',
  localRating: 4.586,
  localVotes: 15856,
  genres: ['ужасы', 'боевик']
},
{
  id: 'UniversalSoldierDayOfReckoning',
  title: 'Универсальный солдат 4',
  originalTitle: 'Universal Soldier: Day of Reckoning',
  year: 2012,
  director: 'Джон Хайамс',
  localRating: 4.566,
  localVotes: 15705,
  genres: ['ужасы', 'фантастика', 'боевик']
},
{
  id: 'PrisonersOfTheSun',
  title: 'Пленники солнца',
  originalTitle: 'Prisoners of the Sun',
  year: 2013,
  director: 'Роджер Кристиан',
  localRating: 4.564,
  localVotes: 12511,
  genres: ['ужасы', 'боевик', 'детектив']
},
{
  id: 'TheVaticanTapes',
  title: 'Ватиканские записи',
  originalTitle: 'The Vatican Tapes',
  year: 2015,
  director: 'Марк Невелдайн',
  localRating: 4.550,
  localVotes: 17230,
  genres: ['ужасы', 'триллер']
},
{
  id: 'EscapeRoom2016',
  title: 'Квест',
  originalTitle: 'Escape Room',
  year: 2016,
  director: 'Питер Дьюкс',
  localRating: 4.513,
  localVotes: 21704,
  genres: ['ужасы']
},
{
  id: 'TheUnkind',
  title: 'Ведьма: Возрождение',
  originalTitle: 'The Unkind',
  year: 2021,
  director: 'Лука Габриэле Россетти',
  localRating: 4.512,
  localVotes: 12229,
  genres: ['ужасы']
},
{
  id: 'WinnieThePoohBloodAndHoney',
  title: 'Винни‑Пух: Кровь и мёд',
  originalTitle: 'Winnie‑the‑Pooh: Blood and Honey',
  year: 2023,
  director: 'Рис Фрейк‑Уотерфилд',
  localRating: 4.456,
  localVotes: 136545,
  genres: ['ужасы']
},
{
  id: 'TheBunkerGame',
  title: 'Клаустрофобы. Начало',
  originalTitle: 'The Bunker Game',
  year: 2021,
  director: 'Роберто Дзаццара',
  localRating: 4.449,
  localVotes: 11354,
  genres: ['ужасы', 'триллер', 'детектив']
},
{
  id: 'DayOfTheDeadBloodline',
  title: 'День мертвецов: Злая кровь',
  originalTitle: 'Day of the Dead: Bloodline',
  year: 2017,
  director: 'Гектор Эрнандес',
  localRating: 4.445,
  localVotes: 19243,
  genres: ['ужасы', 'фантастика', 'боевик']
},
{
  id: 'Breach',
  title: 'Брешь',
  originalTitle: 'Breach',
  year: 2020,
  director: 'Джон Суитц',
  localRating: 4.423,
  localVotes: 21146,
  genres: ['фантастика', 'боевик', 'ужасы']
},
{
  id: 'ParanormalActivityTheMarkedOnes',
  title: 'Паранормальное явление: Метка Дьявола',
  originalTitle: 'Paranormal Activity: The Marked Ones',
  year: 2013,
  director: 'Кристофер Лэндон',
  localRating: 4.414,
  localVotes: 17456,
  genres: ['ужасы', 'детектив']
},
{
  id: 'WrongTurn4BloodyBeginnings',
  title: 'Поворот не туда 4: Кровавое начало',
  originalTitle: 'Wrong Turn 4: Bloody Beginnings',
  year: 2011,
  director: 'Деклан О’Брайен',
  localRating: 4.385,
  localVotes: 24156,
  genres: ['ужасы', 'приключения']
},
{
  id: 'JeepersCreepers3',
  title: 'Джиперс Криперс 3',
  originalTitle: 'Jeepers Creepers 3',
  year: 2017,
  director: 'Виктор Сальва',
  localRating: 4.382,
  localVotes: 33765,
  genres: ['ужасы']
},
{
  id: 'Abattoir',
  title: 'Абатуар. Лабиринт страха',
  originalTitle: 'Abattoir',
  year: 2015,
  director: 'Даррен Линн Боусман',
  localRating: 4.376,
  localVotes: 11538,
  genres: ['ужасы']
},
{
  id: 'YogaHosers',
  title: 'Йоганутые',
  originalTitle: 'Yoga Hosers',
  year: 2015,
  director: 'Кевин Смит',
  localRating: 4.362,
  localVotes: 11428,
  genres: ['ужасы', 'боевик', 'мелодрама']
},
{
  id: 'Astral',
  title: 'Астрал: Новое измерение',
  originalTitle: 'Astral',
  year: 2018,
  director: 'Крис Мул',
  localRating: 4.360,
  localVotes: 18606,
  genres: ['ужасы']
},
{
  id: 'TheRedBookRitual',
  title: 'Заклятье. Книга крови',
  originalTitle: 'The Red Book Ritual',
  year: 2022,
  director: 'Николас Онетти',
  localRating: 4.319,
  localVotes: 12030,
  genres: ['ужасы', 'триллер']
},
{
  id: 'EscapeTheField',
  title: 'Клаустрофобы. Долина дьявола',
  originalTitle: 'Escape The Field',
  year: 2022,
  director: 'Эмерсон Мур',
  localRating: 4.318,
  localVotes: 12811,
  genres: ['ужасы', 'триллер']
},
{
  id: 'SharkNight3D',
  title: 'Челюсти 3D',
  originalTitle: 'Shark Night 3D',
  year: 2011,
  director: 'Дэвид Р. Эллис',
  localRating: 4.309,
  localVotes: 29796,
  genres: ['ужасы', 'боевик', 'триллер']
},
{
  id: 'DRailed',
  title: 'Поезд смерти',
  originalTitle: 'D‑Railed',
  year: 2018,
  director: 'Дэйл Фабригар',
  localRating: 4.308,
  localVotes: 10359,
  genres: ['ужасы', 'фантастика', 'боевик']
},
{
  id: 'TheGallows',
  title: 'Виселица',
  originalTitle: 'The Gallows',
  year: 2015,
  director: 'Трэвис Клафф',
  localRating: 4.306,
  localVotes: 10735,
  genres: ['ужасы']
},
{
  id: 'SlenderMan',
  title: 'Слендермен',
  originalTitle: 'Slender Man',
  year: 2018,
  director: 'Сильвен Уайт',
  localRating: 4.302,
  localVotes: 57038,
  genres: ['ужасы', 'детектив']
},
{
  id: 'TheLostPlace',
  title: 'Проигранное место',
  originalTitle: 'The Lost Place',
  year: 2018,
  director: 'Надежда Михалкова',
  localRating: 4.281,
  localVotes: 15973,
  genres: ['ужасы', 'триллер', 'детектив']
},
{
  id: 'Teeth',
  title: 'Зубы',
  originalTitle: 'Teeth',
  year: 2007,
  director: 'Митчелл Лихтенштейн',
  localRating: 4.268,
  localVotes: 10324,
  genres: ['ужасы', 'комедия']
},
{
  id: 'DoomAnnihilation',
  title: 'Doom: Аннигиляция',
  originalTitle: 'Doom: Annihilation',
  year: 2019,
  director: 'Тони Джильо',
  localRating: 4.255,
  localVotes: 30409,
  genres: ['ужасы', 'боевик', 'фантастика']
},
{
  id: 'TheApparition',
  title: 'Явление',
  originalTitle: 'The Apparition',
  year: 2011,
  director: 'Тодд Линкольн',
  localRating: 4.228,
  localVotes: 14018,
  genres: ['ужасы', 'триллер']
},
{
  id: 'ElevenElevenEleven',
  title: '(11-11-11)',
  originalTitle: '11.11.2011',
  year: 2011,
  director: 'Даррен Линн Боусман',
  localRating: 4.225,
  localVotes: 17121,
  genres: ['ужасы', 'триллер', 'детектив']
},
{
  id: 'LadyBathory',
  title: 'Кровавая леди Батори',
  originalTitle: 'Lady Bathory',
  year: 2015,
  director: 'Андрей Конст',
  localRating: 4.199,
  localVotes: 27720,
  genres: ['триллер', 'ужасы']
},
{
  id: 'TheABCsOfDeath',
  title: 'Азбука смерти',
  originalTitle: 'The ABCs of Death',
  year: 2012,
  director: 'Кааре Эндрюс',
  localRating: 4.192,
  localVotes: 10139,
  genres: ['ужасы', 'комедия']
},
{
  id: 'WrongTurn6',
  title: 'Поворот не туда 6',
  originalTitle: 'Wrong Turn VI',
  year: 2014,
  director: 'Валерий Милев',
  localRating: 4.165,
  localVotes: 19858,
  genres: ['ужасы', 'приключения']
},
{
  id: 'VampiresSuck',
  title: 'Вампирский засос',
  originalTitle: 'Vampires Suck',
  year: 2010,
  director: 'Джейсон Фридберг',
  localRating: 4.135,
  localVotes: 50843,
  genres: ['ужасы', 'комедия']
},
{
  id: 'WrongTurn5',
  title: 'Поворот не туда 5: Кровное родство',
  originalTitle: 'Wrong Turn 5',
  year: 2012,
  director: 'Деклан О’Брайен',
  localRating: 4.117,
  localVotes: 17796,
  genres: ['ужасы', 'приключения']
},
{
  id: 'TheSiberianButcher',
  title: 'Сибирский потрошитель',
  originalTitle: 'The Siberian Butcher',
  year: 2016,
  director: 'Сергей Жизненный',
  localRating: 4.097,
  localVotes: 22201,
  genres: ['ужасы', 'триллер', 'драма']
},
{
  id: 'TheSand',
  title: 'Песок',
  originalTitle: 'The Sand',
  year: 2015,
  director: 'Исаак Габаефф',
  localRating: 4.078,
  localVotes: 11924,
  genres: ['ужасы', 'фантастика', 'триллер']
},
{
  id: 'TheLastExorcismPartII',
  title: 'Последнее изгнание дьявола: Второе пришествие',
  originalTitle: 'The Last Exorcism Part II',
  year: 2013,
  director: 'Эд Гасс‑Доннели',
  localRating: 4.029,
  localVotes: 10807,
  genres: ['ужасы', 'триллер']
},
{
  id: 'RouteBuilt',
  title: 'Маршрут построен',
  originalTitle: 'Route Built',
  year: 2016,
  director: 'Олег Асадулин',
  localRating: 4.018,
  localVotes: 17094,
  genres: ['ужасы', 'триллер']
},
{
  id: 'TheHumanCentipede',
  title: 'Человеческая многоножка',
  originalTitle: 'The Human Centipede (First Sequence)',
  year: 2009,
  director: 'Том Сикс',
  localRating: 3.992,
  localVotes: 73326,
  genres: ['ужасы']
},
{
  id: 'JeepersCreepersReborn',
  title: 'Джиперс Криперс: Возрождённый',
  originalTitle: 'Jeepers Creepers: Reborn',
  year: 2021,
  director: 'Тимо Вуоренсола',
  localRating: 3.952,
  localVotes: 41789,
  genres: ['ужасы']
},
{
  id: 'AlwaysWatching',
  title: 'Слендер',
  originalTitle: 'Always Watching: A Marble Hornets Story',
  year: 2015,
  director: 'Джеймс Моран',
  localRating: 3.951,
  localVotes: 20208,
  genres: ['ужасы']
},
{
  id: 'TheHumanCentipedeIII',
  title: 'Человеческая многоножка 3',
  originalTitle: 'The Human Centipede III (Final Sequence)',
  year: 2015,
  director: 'Том Сикс',
  localRating: 3.874,
  localVotes: 17203,
  genres: ['ужасы', 'комедия', 'криминал']
},
{
  id: 'PhotoForMemory',
  title: 'Фото на память',
  originalTitle: 'Photo For Memory',
  year: 2018,
  director: 'Антон Зенкович',
  localRating: 3.827,
  localVotes: 22595,
  genres: ['триллер', 'ужасы']
},
{
  id: 'PhobosClubOfFear',
  title: 'Фобос. Клуб страха',
  originalTitle: 'Phobos Club Of Fear',
  year: 2010,
  director: 'Олег Асадулин',
  localRating: 3.738,
  localVotes: 19346,
  genres: ['ужасы', 'триллер']
},
{
  id: 'Thanatomorphose',
  title: 'Танатоморфоз',
  originalTitle: 'Thanatomorphose',
  year: 2012,
  director: 'Эрик Фалардо',
  localRating: 3.670,
  localVotes: 15497,
  genres: ['ужасы']
},
{
  id: 'AlienInvasion',
  title: 'Чужой. Вторжение',
  originalTitle: 'Alien Invasion',
  year: 2022,
  director: 'Фред Сирл',
  localRating: 3.622,
  localVotes: 18548,
  genres: ['ужасы', 'фантастика']
},
{
  id: 'TheHumanCentipedeII',
  title: 'Человеческая многоножка 2',
  originalTitle: 'The Human Centipede II (Full Sequence)',
  year: 2011,
  director: 'Том Сикс',
  localRating: 3.432,
  localVotes: 25329,
  genres: ['ужасы', 'драма', 'криминал']
},
{
  id: 'BloodRayne',
  title: 'Бладрейн',
  originalTitle: 'BloodRayne',
  year: 2005,
  director: 'Уве Болл',
  localRating: 3.389,
  localVotes: 25992,
  genres: ['ужасы', 'фэнтези', 'боевик']
},
{
  id: 'Aquaslash',
  title: 'Пункт назначения. Аквапарк',
  originalTitle: 'Aquaslash',
  year: 2019,
  director: 'Рено Готье',
  localRating: 3.373,
  localVotes: 48297,
  genres: ['ужасы', 'драма', 'комедия']
},
{
  id: 'Piranha3DD',
  title: 'Пираньи 3DD',
  originalTitle: 'Piranha 3DD',
  year: 2012,
  director: 'Джон Гулагер',
  localRating: 3.337,
  localVotes: 48476,
  genres: ['ужасы', 'фантастика', 'триллер']
},
{
  id: 'Sharknado',
  title: 'Акулий торнадо',
  originalTitle: 'Sharknado',
  year: 2013,
  director: 'Энтони Ферранте',
  localRating: 3.289,
  localVotes: 22790,
  genres: ['ужасы', 'фантастика', 'боевик']
},
{
  id: 'StanHelsing',
  title: 'Стан Хельсинг',
  originalTitle: 'Stan Helsing',
  year: 2009,
  director: 'Бо Дзенга',
  localRating: 3.203,
  localVotes: 11102,
  genres: ['ужасы', 'фэнтези', 'комедия']
},
{
  id: 'Sxtape',
  title: 'Секс‑плёнка',
  originalTitle: 'sxtape',
  year: 2013,
  director: 'Бернард Роуз',
  localRating: 3.088,
  localVotes: 10541,
  genres: ['ужасы']
},
{
  id: 'SlaughteredVomitDolls',
  title: 'Бойня блюющих куколок',
  originalTitle: 'Slaughtered Vomit Dolls',
  year: 2006,
  director: 'Люцифер Валентайн',
  localRating: 3.080,
  localVotes: 11008,
  genres: ['ужасы']
},
{
  id: 'StarshipTroopers2',
  title: 'Звёздный десант 2: Герой федерации',
  originalTitle: 'Starship Troopers 2: Hero of the Federation',
  year: 2004,
  director: 'Фил Типпетт',
  localRating: 3.012,
  localVotes: 12978,
  genres: ['ужасы', 'фантастика', 'боевик']
},
{
  id: 'VaseDeNoces',
  title: 'Свадебная ваза',
  originalTitle: 'Vase de noces',
  year: 1974,
  director: 'Тьерри Зено',
  localRating: 2.992,
  localVotes: 24233,
  genres: ['ужасы', 'драма', 'мелодрама']
},
{
  id: 'Dislike',
  title: 'Дизлайк',
  originalTitle: 'Dislike',
  year: 2016,
  director: 'Павел Руминов',
  localRating: 1.543,
  localVotes: 23917,
  genres: ['ужасы']
},
{
  id: 'ZombieVacation',
  title: 'Зомби каникулы',
  originalTitle: 'Zombie Vacation',
  year: 2013,
  director: 'Кирилл Кемниц',
  localRating: 1.461,
  localVotes: 15236,
  genres: ['ужасы', 'триллер', 'комедия']
},
  {
    id: 'EscapeRoom',
    title: 'Клаустрофобия',
    originalTitle: 'Escape Room',
    year: 2016,
    director: 'Уилл Верник',
    localRating: 4.967,
    localVotes: 36301,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Demonic',
    title: 'Последний обряд',
    originalTitle: 'Demonic',
    year: 2015,
    director: 'Уилл Кэнон',
    localRating: 4.966,
    localVotes: 14944,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheTask',
    title: 'Задание',
    originalTitle: 'The Task',
    year: 2011,
    director: 'Алекс Оруэлл',
    localRating: 4.963,
    localVotes: 12528,
    genres: ['ужасы']
  },
  {
    id: 'SavageHunt',
    title: 'Гризли',
    originalTitle: 'Savage Hunt',
    year: 2025,
    director: 'Роэль Рейн',
    localRating: 4.959,
    localVotes: 15009,
    genres: ['ужасы', 'триллер']
  },
  {
    id: 'Contracted',
    title: 'Инфекция',
    originalTitle: 'Contracted',
    year: 2013,
    director: 'Эрик Инглэнд',
    localRating: 4.956,
    localVotes: 34323,
    genres: ['ужасы']
  },
  {
    id: 'BehindYou',
    title: 'Зеркала: Инкарнация',
    originalTitle: 'Behind You',
    year: 2020,
    director: 'Эндрю Мечэм',
    localRating: 4.950,
    localVotes: 15927,
    genres: ['ужасы']
  },
  {
    id: 'RealGuysVsZombies',
    title: 'Реальные пацаны против зомби',
    originalTitle: null,
    year: 2020,
    director: 'Жанна Кадникова',
    localRating: 4.947,
    localVotes: 34133,
    genres: ['комедия', 'ужасы']
  },
  {
    id: 'LoveAndMonsters',
    title: 'Любовь и монстры',
    originalTitle: null,
    year: 2020,
    director: 'Екатерина Краснер',
    localRating: 4.947,
    localVotes: 10485,
    genres: ['комедия', 'ужасы']
  },
  {
    id: 'TexasChainsaw3D',
    title: 'Техасская резня бензопилой 3D',
    originalTitle: 'Texas Chainsaw 3D',
    year: 2013,
    director: 'Джон Льюсенхоп',
    localRating: 4.946,
    localVotes: 33821,
    genres: ['ужасы', 'триллер', 'детектив']
  },
  {
    id: 'TheGrudge',
    title: 'Проклятие',
    originalTitle: 'The Grudge',
    year: 2019,
    director: 'Николас Пеш',
    localRating: 4.931,
    localVotes: 20673,
    genres: ['ужасы']
  },
  {
    id: 'OpenWater3CageDive',
    title: 'Над глубиной: Хроника выживания',
    originalTitle: 'Open Water 3: Cage Dive',
    year: 2016,
    director: 'Джералд Рашионато',
    localRating: 4.930,
    localVotes: 14554,
    genres: ['ужасы', 'триллер', 'драма']
  },
  {
    id: 'TheDay',
    title: 'Судный день',
    originalTitle: 'The Day',
    year: 2011,
    director: 'Дуглас Арниокоски',
    localRating: 4.929,
    localVotes: 11048,
    genres: ['ужасы', 'фантастика', 'боевик']
  },
  {
    id: 'WhereTheDevilHides',
    title: 'Рука Дьявола',
    originalTitle: 'Where the Devil Hides',
    year: 2014,
    director: 'Кристиан Е. Кристиансен',
    localRating: 4.928,
    localVotes: 11017,
    genres: ['триллер']
  },
  {
    id: 'VHVS',
    title: 'З/Л/О',
    originalTitle: 'V/H/S',
    year: 2012,
    director: 'Мэтт Беттинелли-Олпин',
    localRating: 4.924,
    localVotes: 28030,
    genres: ['ужасы']
  },
  {
    id: 'TheMortuaryAssistant',
    title: 'Вскрытие демона',
    originalTitle: 'The Mortuary Assistant',
    year: 2026,
    director: 'Джереми Кипп',
    localRating: 4.915,
    localVotes: 14050,
    genres: ['ужасы']
  },
  {
    id: 'TheDevilInside',
    title: 'Одержимая',
    originalTitle: 'The Devil Inside',
    year: 2012,
    director: 'Уильям Брент Белл',
    localRating: 4.912,
    localVotes: 16036,
    genres: ['ужасы']
  },
  {
    id: 'MermaidDown',
    title: 'Русалка на суше',
    originalTitle: 'Mermaid Down',
    year: 2019,
    director: 'Джеффри Греллман',
    localRating: 4.910,
    localVotes: 29018,
    genres: ['ужасы', 'фэнтези', 'триллер']
  },
  {
    id: 'ProjectIthaca',
    title: 'Проект «Итака»',
    originalTitle: 'Project Ithaca',
    year: 2019,
    director: 'Николас Хемфрис',
    localRating: 4.909,
    localVotes: 14889,
    genres: ['ужасы', 'фантастика', 'триллер']
  },
  {
    id: 'BlairWitch',
    title: 'Ведьма из Блэр: Новая глава',
    originalTitle: 'Blair Witch',
    year: 2016,
    director: 'Адам Вингард',
    localRating: 4.902,
    localVotes: 22740,
    genres: ['ужасы']
  },
  {
    id: 'ContractedPhaseII',
    title: 'Инфекция: Фаза 2',
    originalTitle: 'Contracted: Phase II',
    year: 2015,
    director: 'Джош Форбс',
    localRating: 4.902,
    localVotes: 14884,
    genres: ['ужасы']
  },
{
  id: 'Lookout',
  title: 'Смотри в оба',
  originalTitle: 'Lookout',
  year: 2025,
  director: 'Стефан Колсон',
  localRating: 4.900,
  localVotes: 11148,
  genres: ['ужасы', 'фантастика', 'триллер']
},
{
  id: 'ParanormalActivity4',
  title: 'Паранормальное явление 4',
  originalTitle: 'Paranormal Activity 4',
  year: 2012,
  director: 'Генри Джуст',
  localRating: 4.894,
  localVotes: 27198,
  genres: ['ужасы']
},
{
  id: 'TheCall',
  title: 'Проклятие Лауры: Завещание',
  originalTitle: 'The Call',
  year: 2020,
  director: 'Тимоти Вудворд мл.',
  localRating: 4.886,
  localVotes: 15866,
  genres: ['ужасы']
},
{
  id: 'Zombeavers',
  title: 'Бобры‑зомби',
  originalTitle: 'Zombeavers',
  year: 2014,
  director: 'Джордан Рубин',
  localRating: 4.883,
  localVotes: 51362,
  genres: ['ужасы', 'комедия']
},
{
  id: 'TheMorrigan',
  title: 'Мумия. Возрождение зла',
  originalTitle: 'The Morrigan',
  year: 2025,
  director: 'Колум Иствуд',
  localRating: 4.879,
  localVotes: 12541,
  genres: ['ужасы']
},
{
  id: 'Ouija',
  title: 'Уиджи: Доска Дьявола',
  originalTitle: 'Ouija',
  year: 2014,
  director: 'Стайлз Уайт',
  localRating: 4.876,
  localVotes: 35547,
  genres: ['ужасы']
},
{
  id: 'Survivre',
  title: 'Последний день Земли',
  originalTitle: 'Survivre',
  year: 2024,
  director: 'Фредерик Жарден',
  localRating: 4.872,
  localVotes: 27237,
  genres: ['ужасы', 'фантастика', 'боевик']
},
{
  id: 'WhatLiesBelow',
  title: 'Что скрывает вода',
  originalTitle: 'What Lies Below',
  year: 2020,
  director: 'Брэйден Р. Дуэммлер',
  localRating: 4.862,
  localVotes: 22014,
  genres: ['ужасы']
},
{
  id: 'ArcticVoid',
  title: 'Исчезнувшие',
  originalTitle: 'Arctic Void',
  year: 2021,
  director: 'Даррен Манн',
  localRating: 4.859,
  localVotes: 41820,
  genres: ['ужасы', 'фантастика', 'триллер']
},
{
  id: 'OperationRagnarok',
  title: 'Зона 261',
  originalTitle: 'Operation Ragnarök',
  year: 2018,
  director: 'Фредерик Хиллер',
  localRating: 4.857,
  localVotes: 22996,
  genres: ['ужасы', 'боевик']
},
{
  id: 'Mirrors2',
  title: 'Зеркала 2',
  originalTitle: 'Mirrors 2',
  year: 2010,
  director: 'Виктор Гарсия',
  localRating: 4.856,
  localVotes: 15834,
  genres: ['ужасы', 'детектив']
},
{
  id: 'TheAssent',
  title: 'Изгоняющий дьявола: Абаддон',
  originalTitle: 'The Assent',
  year: 2019,
  director: 'Пирри Реджинальд Тео',
  localRating: 4.846,
  localVotes: 10142,
  genres: ['ужасы']
},
{
  id: 'GirlOnTheThirdFloor',
  title: 'Проклятый дом 2',
  originalTitle: 'Girl on the Third Floor',
  year: 2019,
  director: 'Трэвис Стивенс',
  localRating: 4.839,
  localVotes: 17910,
  genres: ['ужасы']
},
{
  id: 'TrinketBox',
  title: 'Шкатулка проклятия. Шёпот ведьмы',
  originalTitle: 'Trinket Box',
  year: 2023,
  director: 'Патрысия Кепа',
  localRating: 4.833,
  localVotes: 14509,
  genres: ['ужасы']
},
{
  id: 'WrongTurn3',
  title: 'Поворот не туда 3',
  originalTitle: 'Wrong Turn 3: Left for Dead',
  year: 2009,
  director: 'Деклан О’Брайен',
  localRating: 4.828,
  localVotes: 25053,
  genres: ['ужасы', 'фэнтези', 'приключения']
},
{
  id: 'TheReefStalked',
  title: 'Открытое море: Монстр глубины',
  originalTitle: 'The Reef: Stalked',
  year: 2022,
  director: 'Эндрю Трауки',
  localRating: 4.819,
  localVotes: 13299,
  genres: ['триллер', 'ужасы']
},
{
  id: 'TheShed',
  title: 'Подсобка дьявола',
  originalTitle: 'The Shed',
  year: 2019,
  director: 'Фрэнк Сабателла',
  localRating: 4.819,
  localVotes: 10102,
  genres: ['ужасы', 'драма']
},
{
  id: 'TheQuietOnes',
  title: 'Эксперимент: Зло',
  originalTitle: 'The Quiet Ones',
  year: 2014,
  director: 'Джон Пог',
  localRating: 4.816,
  localVotes: 10243,
  genres: ['ужасы', 'триллер', 'детектив']
},
{
  id: 'PrivateProperty',
  title: 'Проникновение',
  originalTitle: 'Private Property',
  year: 2022,
  director: 'Чадд Харбольд',
  localRating: 4.815,
  localVotes: 24989,
  genres: ['ужасы', 'триллер', 'драма']
},
{
  id: 'AfterChernobyl',
  title: 'После Чернобыля',
  originalTitle: null,
  year: 2021,
  director: 'Игорь Кинько',
  localRating: 4.795,
  localVotes: 60561,
  genres: ['ужасы', 'триллер', 'детектив']
},
{
  id: 'ATM',
  title: 'Банкомат',
  originalTitle: 'ATM',
  year: 2011,
  director: 'Дэвид Брукс',
  localRating: 4.785,
  localVotes: 15781,
  genres: ['ужасы', 'триллер']
},
{
  id: 'Yulenka',
  title: 'Юленька',
  originalTitle: null,
  year: 2008,
  director: 'Александр Стриженов',
  localRating: 4.784,
  localVotes: 44353,
  genres: ['ужасы']
},
{
  id: 'HostelPartIII',
  title: 'Хостел 3',
  originalTitle: 'Hostel: Part III',
  year: 2011,
  director: 'Скотт Шпигель',
  localRating: 4.781,
  localVotes: 12481,
  genres: ['ужасы']
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

    let list = kino.filter(item => normalize(item.title).includes(term));

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