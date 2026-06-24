const movies = [
  { id:"m1", film:"Чужой", genre:"Фантастический хоррор", kinopoisk:8.1, myRating:87, horrorRate:2, quote:"Космос здесь не спасает — он только усиливает страх.", poster:"https://image.tmdb.org/t/p/w500/4s6YwJhzuHVMbI9Bz5q8pN8iZxG.jpg" },
  { id:"m2", film:"Сияние", genre:"Психологический хоррор", kinopoisk:7.8, myRating:96, horrorRate:4, quote:"Иногда самый страшный враг — это тишина и стены вокруг.", poster:"https://image.tmdb.org/t/p/w500/gbwQrQae7j3S9k9YQkKfN2mZ0Yw.jpg" },
  { id:"m3", film:"Изгоняющий дьявола", genre:"Сверхъестественный хоррор", kinopoisk:7.7, myRating:71, horrorRate:3, quote:"Фильм, после которого воздух в комнате кажется тяжелее.", poster:"https://image.tmdb.org/t/p/w500/yzErKXJ1hM3nqkQWzJm1W3n5xgL.jpg" },
  { id:"m4", film:"Психо", genre:"Психологический хоррор", kinopoisk:8.1, myRating:90, horrorRate:2, quote:"Классика, где страх вырастает из детали.", poster:"https://image.tmdb.org/t/p/w500/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg" },
  { id:"m5", film:"Нечто", genre:"Фантастический хоррор", kinopoisk:7.9, myRating:68, horrorRate:2, quote:"Паранойя здесь работает лучше любого монстра.", poster:"https://image.tmdb.org/t/p/w500/tz5T0qX75EfTzP8J9hS4dJ0N3fN.jpg" },
  { id:"m6", film:"Чужие", genre:"Фантастический хоррор", kinopoisk:8.1, myRating:10, horrorRate:5, quote:"Больше шума, больше огня, но страх никуда не уходит.", poster:"https://image.tmdb.org/t/p/w500/rhIRbceoE9lR4veEXuwCC2wARtG.jpg" },
  { id:"m7", film:"Пила", genre:"Психологический хоррор", kinopoisk:7.3, myRating:9, horrorRate:4, quote:"Игра начинается не с крика, а с выбора.", poster:"https://image.tmdb.org/t/p/w500/9wV5t8qv3Hf4qvJj4qT2WQeGvHf.jpg" },
  { id:"m8", film:"Звонок", genre:"Сверхъестественный хоррор", kinopoisk:7.0, myRating:58, horrorRate:1, quote:"Один звонок — и неделя становится длиннее.", poster:"https://image.tmdb.org/t/p/w500/3j6I5xM9cQJf7W7mVvFq2Yd3k9M.jpg" },
  { id:"m9", film:"Крик", genre:"Слэшер", kinopoisk:7.0, myRating:9, horrorRate:4, quote:"Ужас, который знает правила жанра и смеётся над ними.", poster:"https://image.tmdb.org/t/p/w500/1VqoV8v7L8F9vYh1Qn0qg1Q7jQv.jpg" },
  { id:"m10", film:"Зловещие мертвецы", genre:"Сверхъестественный хоррор", kinopoisk:7.5, myRating:10, horrorRate:5, quote:"Грязный, шумный и очень живой кошмар.", poster:"https://image.tmdb.org/t/p/w500/4h4qVYf0Hq3bF1H8l3Z8j4K9aQ2.jpg" },
  { id:"m11", film:"Хэллоуин", genre:"Слэшер", kinopoisk:7.0, myRating:35, horrorRate:2, quote:"Лицо без эмоций, которое стало символом страха.", poster:"https://image.tmdb.org/t/p/w500/vt6Es0zq29y4G0qD0fY7wR2c1Tq.jpg" },
  { id:"m12", film:"Техасская резня бензопилой", genre:"Слэшер", kinopoisk:6.6, myRating:54, horrorRate:2, quote:"Фильм, который будто пахнет жарой и металлом.", poster:"https://image.tmdb.org/t/p/w500/9V3QH4QjR3cQ6f0Y3f3q4K1pQ2g.jpg" },
  { id:"m13", film:"Кошмар на улице Вязов", genre:"Сверхъестественный хоррор", kinopoisk:7.7, myRating:72, horrorRate:3, quote:"Сон здесь — не отдых, а ловушка.", poster:"https://image.tmdb.org/t/p/w500/9iQWsXWq5N4G7Y1e3J6zJQ0QK7.jpg" },
  { id:"m14", film:"Пятница 13-е", genre:"Слэшер", kinopoisk:6.3, myRating:11, horrorRate:1, quote:"Легенда лагерного страха, которая не стареет.", poster:"https://image.tmdb.org/t/p/w500/5KZc1z3Q1q3ZtP9m0J4xY3L1n7.jpg" },
  { id:"m15", film:"Кэрри", genre:"Психологический хоррор", kinopoisk:7.2, myRating:66, horrorRate:2, quote:"Когда унижение становится оружием, становится по-настоящему жутко.", poster:"https://image.tmdb.org/t/p/w500/1q2W3e4r5t6y7u8i9o0pQWERTY.jpg" },
  { id:"m16", film:"Ребёнок Розмари", genre:"Психологический хоррор", kinopoisk:7.6, myRating:84, horrorRate:1, quote:"Тревога растёт тихо, как трещина на стекле.", poster:"https://image.tmdb.org/t/p/w500/3m3m3m3m3m3m3m3m3m3m3m3m3m.jpg" },
  { id:"m17", film:"Полтергейст", genre:"Сверхъестественный хоррор", kinopoisk:7.0, myRating:9, horrorRate:4, quote:"Дом, который не хочет быть пустым.", poster:"https://image.tmdb.org/t/p/w500/2p2p2p2p2p2p2p2p2p2p2p2p2p.jpg" },
  { id:"m18", film:"Оно", genre:"Сверхъестественный хоррор", kinopoisk:7.3, myRating:82, horrorRate:3, quote:"У страха здесь лицо клоуна и голос из канализации.", poster:"https://image.tmdb.org/t/p/w500/8o8o8o8o8o8o8o8o8o8o8o8o8o.jpg" },
  { id:"m19", film:"Заклятие", genre:"Сверхъестественный хоррор", kinopoisk:7.3, myRating:74, horrorRate:3, quote:"Тьма в этом доме ведёт себя слишком уверенно.", poster:"https://image.tmdb.org/t/p/w500/5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg" },
  { id:"m20", film:"Ночь живых мертвецов", genre:"Зомби-рор", kinopoisk:6.7, myRating:8, horrorRate:4, quote:"Проклятие не любит продолжений, но получает их.", poster:"https://image.tmdb.org/t/p/w500/8j8j8j8j8j8j8j8j8j8j8j8j8j.jpg" },
  { id:"m42", film:"Проклятие", genre:"Сверхъестественный хоррор", kinopoisk:6.4, myRating:8, horrorRate:4, quote:"В доме не должно быть столько тишины.", poster:"https://image.tmdb.org/t/p/w500/9k9k9k9k9k9k9k9k9k9k9k9k9k.jpg" },
  { id:"m43", film:"Проклятие 2", genre:"Сверхъестественный хоррор", kinopoisk:6.2, myRating:7, horrorRate:3, quote:"Вторая часть добавляет ещё больше холода.", poster:"https://image.tmdb.org/t/p/w500/0l0l0l0l0l0l0l0l0l0l0l0l0.jpg" },
  { id:"m44", film:"Пункт назначения", genre:"Психоррор", kinopoisk:7.2, myRating:33, horrorRate:1, quote:"Когда мёртвые идут, мир становится тише.", poster:"https://image.tmdb.org/t/p/w500/6n6n6n6n6n6n6n6n6n6n6n6n6n.jpg" },
  { id:"m21", film:"Рассвет мертвецов", genre:"Зомби-хоррор", kinopoisk:7.1, myRating:42, horrorRate:1, quote:"Торговый центр как крепость против конца света.", poster:"https://image.tmdb.org/t/p/w500/7r7r7r7r7r7r7r7r7r7r7r7r7r.jpg" },
  { id:"m22", film:"Поезд в Пусан", genre:"Зомби-хоррор", kinopoisk:7.2, myRating:9, horrorRate:4, quote:"Вагон за вагоном страх только растёт.", poster:"https://image.tmdb.org/t/p/w500/8p8p8p8p8p8p8p8p8p8p8p8p8p.jpg" },
  { id:"m23", film:"Чужой 3", genre:"Фантастический хоррор", kinopoisk:6.8, myRating:8, horrorRate:3, quote:"Холодное продолжение в самом мрачном пространстве.", poster:"https://image.tmdb.org/t/p/w500/9q9q9q9q9q9q9q9q9q9q9q9q9q.jpg" },
  { id:"m24", film:"Молчание ягнят", genre:"Психологический хоррор", kinopoisk:8.3, myRating:10, horrorRate:2, quote:"Самый страшный разговор — тот, который ведётся спокойно.", poster:"https://image.tmdb.org/t/p/w500/1s1s1s1s1s1s1s1s1s1s1s1s1s.jpg" },
  { id:"m25", film:"Прочь", genre:"Психологический хоррор", kinopoisk:7.2, myRating:79, horrorRate:2, quote:"Улыбка здесь может быть страшнее крика.", poster:"https://image.tmdb.org/t/p/w500/2t2t2t2t2t2t2t2t2t2t2t2t2t.jpg" },
  { id:"m26", film:"Мы", genre:"Психологический хоррор", kinopoisk:6.9, myRating:8, horrorRate:4, quote:"Самый жуткий враг иногда стоит прямо напротив тебя.", poster:"https://image.tmdb.org/t/p/w500/3u3u3u3u3u3u3u3u3u3u3u3u3u.jpg" },
  { id:"m27", film:"Тихое место", genre:"Фантастический хоррор", kinopoisk:6.8, myRating:8, horrorRate:4, quote:"Тишина здесь звучит громче любого удара.", poster:"https://image.tmdb.org/t/p/w500/4v4v4v4v4v4v4v4v4v4v4v4v4v.jpg" },
  { id:"m28", film:"Реинкарнация", genre:"Психологический хоррор", kinopoisk:6.4, myRating:8, horrorRate:4, quote:"Семейная драма, которая медленно соскальзывает в бездну.", poster:"https://image.tmdb.org/t/p/w500/5w5w5w5w5w5w5w5w5w5w5w5w5w.jpg" },
  { id:"m29", film:"Мидсоммар", genre:"Психологический хоррор", kinopoisk:7.1, myRating:9, horrorRate:5, quote:"Дневной свет здесь пугает сильнее ночи.", poster:"https://image.tmdb.org/t/p/w500/6x6x6x6x6x6x6x6x6x6x6x6x6x.jpg" },
  { id:"m30", film:"бабадук", genre:"Психологический хоррор", kinopoisk:5.7, myRating:77, horrorRate:4, quote:"мать-одиночка против мнстра из книжки.", poster:"https://image.tmdb.org/t/p/w500/7y7y7y7y7y7y7y7y7y7y7y7y7y.jpg" },
  { id:"m31", film:"Астрал", genre:"Сверхъестественный хоррор", kinopoisk:6.8, myRating:70, horrorRate:4, quote:"Выход за пределы реальности не обещает спасения.", poster:"https://image.tmdb.org/t/p/w500/8z8z8z8z8z8z8z8z8z8z8z8z8z.jpg" },
  { id:"m32", film:"Астрал 2", genre:"Сверхъестественный хоррор", kinopoisk:6.7, myRating:8, horrorRate:4, quote:"Возвращение в тёмный коридор страхов.", poster:"https://image.tmdb.org/t/p/w500/9a9a9a9a9a9a9a9a9a9a9a9a9a.jpg" },
  { id:"m33", film:"Джиперс Криперс", genre:"Сверхъестественный хоррор", kinopoisk:6.2, myRating:8, horrorRate:3, quote:"Монстр, который всегда приезжает не вовремя.", poster:"https://image.tmdb.org/t/p/w500/0b0b0b0b0b0b0b0b0b0b0b0b0b.jpg" },
  { id:"m34", film:"Джиперс Криперс 2", genre:"Сверхъестественный хоррор", kinopoisk:6.0, myRating:7, horrorRate:3, quote:"Ночь, в которой дорога становится ловушкой.", poster:"https://image.tmdb.org/t/p/w500/1c1c1c1c1c1c1c1c1c1c1c1c1c.jpg" },
  { id:"m35", film:"У холмов есть глаза", genre:"Психологический хоррор", kinopoisk:6.4, myRating:8, horrorRate:4, quote:"Выживание здесь очень быстро теряет романтику.", poster:"https://image.tmdb.org/t/p/w500/2d2d2d2d2d2d2d2d2d2d2d2d2d.jpg" },
  { id:"m36", film:"Спуск", genre:"Психологический хоррор", kinopoisk:6.5, myRating:8, horrorRate:4, quote:"Самый страшный путь — вниз.", poster:"https://image.tmdb.org/t/p/w500/3e3e3e3e3e3e3e3e3e3e3e3e3e.jpg" },
  { id:"m37", film:"Синистер", genre:"Сверхъестественный хоррор", kinopoisk:6.7, myRating:67, horrorRate:3, quote:"Плёнка здесь выглядит как приговор.", poster:"https://image.tmdb.org/t/p/w500/4f4f4f4f4f4f4f4f4f4f4f4f4f.jpg" },
  { id:"m38", film:"Уиджа. Доска дьявола", genre:"Сверхъестественный хоррор", kinopoisk:5.7, myRating:7, horrorRate:3, quote:"Игры с потусторонним редко заканчиваются красиво.", poster:"https://image.tmdb.org/t/p/w500/5g5g5g5g5g5g5g5g5g5g5g5g5g.jpg" },
  { id:"m39", film:"Тьма", genre:"Психологический хоррор", kinopoisk:6.2, myRating:7, horrorRate:3, quote:"Темнота — хороший друг тревоги.", poster:"https://image.tmdb.org/t/p/w500/6h6h6h6h6h6h6h6h6h6h6h6h6h.jpg" },
  { id:"m40", film:"Глаз", genre:"Сверхъестественный хоррор", kinopoisk:6.1, myRating:7, horrorRate:3, quote:"Когда видишь лишнее, назад уже не развидеть.", poster:"https://image.tmdb.org/t/p/w500/7i7i7i7i7i7i7i7i7i7i7i7i7i.jpg" },
  { id:"m41", film:"Звонок 2", genre:"Сверхъестественный хорхологический хоррор", kinopoisk:6.7, myRating:8, horrorRate:4, quote:"Смерть любит точный график.", poster:"https://image.tmdb.org/t/p/w500/1m1m1m1m1m1m1m1m1m1m1m1m1m.jpg" },
  { id:"m45", film:"Пункт назначения 2", genre:"Психологический хоррор", kinopoisk:6.5, myRating:8, horrorRate:4, quote:"Плохие предчувствия здесь обычно правы.", poster:"https://image.tmdb.org/t/p/w500/2n2n2n2n2n2n2n2n2n2n2n2n2n.jpg" },
  { id:"m46", film:"Поворот не туда", genre:"Психологический хоррор", kinopoisk:6.1, myRating:7, horrorRate:3, quote:"Лес не всегда ведёт туда, куда обещает.", poster:"https://image.tmdb.org/t/p/w500/3o3o3o3o3o3o3o3o3o3o3o3o3o.jpg" },
  { id:"m47", film:"Тупик", genre:"Психологический хоррор", kinopoisk:6.0, myRating:7, horrorRate:3, quote:"Иногда дорога пугает сильнее леса.", poster:"https://image.tmdb.org/t/p/w500/4p4p4p4p4p4p4p4p4p4p4p4p4p.jpg" },
  { id:"m48", film:"Мгла", genre:"Фантастический хоррор", kinopoisk:7.1, myRating:9, horrorRate:5, quote:"Когда туман приходит, надежда уходит медленно.", poster:"https://image.tmdb.org/t/p/w500/5q5q5q5q5q5q5q5q5q5q5q5q5q.jpg" },
  { id:"m49", film:"Кладбище домашних животных", genre:"Сверхъестественный хоррор", kinopoisk:6.3, myRating:8, horrorRate:4, quote:"Иногда любовь возвращается совсем не в том виде.", poster:"https://image.tmdb.org/t/p/w500/6r6r6r6r6r6r6r6r6r6r6r6r6r.jpg" },
  { id:"m50", film:"Кладбище домашних животных 2", genre:"Сверхъестественный хоррор", kinopoisk:5.8, myRating:7, horrorRate:3, quote:"Продолжение, которое пахнет сырой землёй.", poster:"https://image.tmdb.org/t/p/w500/7s7s7s7s7s7s7s7s7s7s7s7s7s.jpg" },
  { id:"m51", film:"Оно 2", genre:"Сверхъестественный хоррор", kinopoisk:6.8, myRating:8, horrorRate:4, quote:"Клоун не уходит, пока боятся дети.", poster:"https://image.tmdb.org/t/p/w500/8t8t8t8t8t8t8t8t8t8t8t8t8t.jpg" },
  { id:"m52", film:"Аннабель", genre:"Сверхъестественный хоррор", kinopoisk:6.0, myRating:7, horrorRate:3, quote:"Куклы выглядят невинно, пока не начинают смотреть в ответ.", poster:"https://image.tmdb.org/t/p/w500/9u9u9u9u9u9u9u9u9u9u9u9u9u.jpg" },
  { id:"m53", film:"Аннабель 2", genre:"Сверхъестественный хоррор", kinopoisk:6.3, myRating:8, horrorRate:4, quote:"Иногда история игрушки становится историей кошмара.", poster:"https://image.tmdb.org/t/p/w500/0v0v0v0v0v0v0v0v0v0v0v0v0v.jpg" },
  { id:"m54", film:"Монахиня", genre:"Сверхъестественный хоррор", kinopoisk:6.1, myRating:7, horrorRate:3, quote:"Свет здесь слишком слабый, чтобы спасти.", poster:"https://image.tmdb.org/t/p/w500/1w1w1w1w1w1w1w1w1w1w1w1w1w.jpg" },
  { id:"m55", film:"Проклятие Аннабель: Зарождение зла", genre:"Сверхъестественный хоррор", kinopoisk:6.5, myRating:8, horrorRate:4, quote:"Корни страха всегда растут в темноте.", poster:"https://image.tmdb.org/t/p/w500/2x2x2x2x2x2x2x2x2x2x2x2x2x.jpg" },
  { id:"m56", film:"Чёрный телефон", genre:"Психологический хоррор", kinopoisk:6.7, myRating:8, horrorRate:4, quote:"Один звонок может звучать как спасение.", poster:"https://image.tmdb.org/t/p/w500/3y3y3y3y3y3y3y3y3y3y3y3y3y.jpg" },
  { id:"m57", film:"Счастливого дня смерти", genre:"Психологический хоррор", kinopoisk:6.6, myRating:7, horrorRate:3, quote:"Повторяющийся день быстро становится ловушкой.", poster:"https://image.tmdb.org/t/p/w500/4z4z4z4z4z4z4z4z4z4z4z4z4z.jpg" },
  { id:"m58", film:"Я иду искать", genre:"Психологический хоррор", kinopoisk:6.8, myRating:8, horrorRate:4, quote:"Семейные традиции бывают очень кровавыми.", poster:"https://image.tmdb.org/t/p/w500/5a5a5a5a5a5a5a5a5a5a5a5a5a.jpg" },
  { id:"m59", film:"28 дней спустя", genre:"зомби", kinopoisk:7.4, myRating:64, horrorRate:2, quote:"один человек в пустом городе, против орды зомби.", poster:"https://image.tmdb.org/t/p/w500/6b6b6b6b6b6b6b6b6b6b6b6b6b.jpg" },
  { id:"m60", film:"хостел", genre:"слэшер", kinopoisk:6.2, myRating:55, horrorRate:2, quote:"амереканцы в секс туре, попадают  в ловушку.", poster:"https://image.tmdb.org/t/p/w500/7c7c7c7c7c7c7c7c7c7c7c7c7c.jpg" },
  { id:"m61", film:"ведьма", genre:"религиозный хоррор", kinopoisk:6.6, myRating:60, horrorRate:1, quote:"к чему приводит религия.", poster:"https://image.tmdb.org/t/p/w500/8d8d8d8d8d8d8d8d8d8d8d8d8d.jpg" },
  { id:"m62",
  film:"Молчание ягнят",
  genre:"Психологический хоррор",
  kinopoisk:8.3,
  myRating:93,
  horrorRate:2,
  quote:"Сделка с каннибалом, чтобы поймать маньяка.",
  poster:"./images/molchanieyagnyat.jpg..jpeg",
  trailer:"https://www.youtube.com/watch?v=6iB21hsprAQ",
  director:"Джонатан Демми",
  cast:["Джоди Фостер", "Энтони Хопкинс", "Скотт Гленн", "Тед Левайн"],
  synopsis:"Агент ФБР обращается за помощью к опасному заключённому, чтобы поймать серийного убийцу и спасти следующую жертву.",
  facts:[
    "Один из самых известных психологических хорроров и триллеров.",
    "Фильм держит напряжение не монстрами, а диалогами и атмосферой.",
  ]},
  { id:"m63", film:"Чёрная дыра", genre:"Фантастический хоррор", kinopoisk:6.6, myRating:8, horrorRate:3, quote:"Иногда пустота страшнее монстра.", poster:"https://image.tmdb.org/t/p/w500/0f0f0f0f0f0f0f0f0f0f0f0f0f.jpg" },
  { id:"m64", film:"Пандорум", genre:"Фантастический хоррор", kinopoisk:6.7, myRating:8, horrorRate:4, quote:"Корабль в темноте — плохое место для надежды.", poster:"https://image.tmdb.org/t/p/w500/1g1g1g1g1g1g1g1g1g1g1g1g1g.jpg" },
  { id:"m65", film:"Хищник", genre:"Фантастический хоррор", kinopoisk:7.8, myRating:9, horrorRate:4, quote:"Охота начинается там, где заканчивается контроль.", poster:"https://image.tmdb.org/t/p/w500/2h2h2h2h2h2h2h2h2h2h2h2h2h.jpg" },
  { id:"m66", film:"тихое место", genre:"Фантастический хоррор", kinopoisk:6.8, myRating:49, horrorRate:1, quote:"Городская ночь делает охоту ещё опаснее.", poster:"https://image.tmdb.org/t/p/w500/3i3i3i3i3i3i3i3i3i3i3i3i3i.jpg" },
  { id:"m67", film:"Хижина в лесу", genre:"Сверхъестественный хоррор", kinopoisk:7.0, myRating:9, horrorRate:5, quote:"Фильм, который играет с жанром и выигрывает.", poster:"https://image.tmdb.org/t/p/w500/4j4j4j4j4j4j4j4j4j4j4j4j4j.jpg" },
  { id:"m68", film:"Корабль-призрак", genre:"Сверхъестественный хоррор", kinopoisk:6.3, myRating:7, horrorRate:3, quote:"Море хранит вещи, о которых лучше не знать.", poster:"https://image.tmdb.org/t/p/w500/5k5k5k5k5k5k5k5k5k5k5k5k.jpg" },
  { id:"m69", film:"Дети кукурузы", genre:"Сверхъестественный хоррор", kinopoisk:6.0, myRating:7, horrorRate:3, quote:"Поля могут быть слишком пустыми и слишком тихими.", poster:"https://image.tmdb.org/t/p/w500/6l6l6l6l6l6l6l6l6l6l6l6l6l.jpg" },
  { id:"m70", film:"Сквозь горизонт", genre:"Фантастический хоррор", kinopoisk:6.9, myRating:8, horrorRate:4, quote:"То, что пришло из пустоты, уже нельзя вернуть обратно.", poster:"https://image.tmdb.org/t/p/w500/7m7m7m7m7m7m7m7m7m7m7m7m7m.jpg" },
  { id:"m71", film:"Ловец снов", genre:"Фантастический хоррор", kinopoisk:6.1, myRating:7, horrorRate:3, quote:"Страх любит маскироваться под фантастику.", poster:"https://image.tmdb.org/t/p/w500/8n8n8n8n8n8n8n8n8n8n8n8n8n.jpg" },
  { id:"m72", film:"Куда приводят мечты", genre:"Психологический хоррор", kinopoisk:7.3, myRating:8, horrorRate:4, quote:"Даже красивый мир может быть очень мрачным.", poster:"https://image.tmdb.org/t/p/w500/9o9o9o9o9o9o9o9o9o9o9o9o.jpg" },
  { id:"m73", film:"Люди под лестницей", genre:"Психологический хоррор", kinopoisk:6.4, myRating:7, horrorRate:3, quote:"Ужас иногда живёт буквально под ногами.", poster:"https://image.tmdb.org/t/p/w500/0p0p0p0p0p0p0p0p0p0p0p0p0p.jpg" },
  { id:"m74", film:"Гремлины", genre:"Сверхъестественный хоррор", kinopoisk:7.0, myRating:8, horrorRate:4, quote:"Милое быстро становится разрушительным.", poster:"https://image.tmdb.org/t/p/w500/1q1q1q1q1q1q1q1q1q1q1q1q1q.jpg" },
  { id:"m75", film:"Ужин с придурками", genre:"Психологический хоррор", kinopoisk:6.0, myRating:6, horrorRate:2, quote:"Странная комедия, которая иногда пугает своим абсурдом.", poster:"https://image.tmdb.org/t/p/w500/2r2r2r2r2r2r2r2r2r2r2r2r2r.jpg" },
  { id:"m76", film:"Зомби по имени Шон", genre:"Зомби-хоррор", kinopoisk:7.8, myRating:9, horrorRate:4, quote:"Смех не отменяет апокалипсис.", poster:"https://image.tmdb.org/t/p/w500/3s3s3s3s3s3s3s3s3s3s3s3s3s.jpg" },
  { id:"m77", film:"Добро пожаловать в Zомбилэнд", genre:"Зомби-хоррор", kinopoisk:6.8, myRating:8, horrorRate:3, quote:"Апокалипсис с пулей, шуткой и быстрым темпом.", poster:"https://image.tmdb.org/t/p/w500/4t4t4t4t4t4t4t4t4t4t4t4t4t.jpg" },
  { id:"m78", film:"Мёртвая тишина", genre:"Сверхъестественный хоррор", kinopoisk:6.2, myRating:8, horrorRate:4, quote:"Тишина здесь слишком похожа на предупреждение.", poster:"https://image.tmdb.org/t/p/w500/5u5u5u5u5u5u5u5u5u5u5u5u5u.jpg" },
  { id:"m79", film:"Дом восковых фигур", genre:"Слэшер", kinopoisk:6.0, myRating:7, horrorRate:3, quote:"Город, где фигуры слишком молчаливы.", poster:"https://image.tmdb.org/t/p/w500/6v6v6v6v6v6v6v6v6v6v6v6v6v.jpg" },
  { id:"m80", film:"Улица страха", genre:"Слэшер", kinopoisk:6.2, myRating:7, horrorRate:3, quote:"Подростковый ужас, который держит темп.", poster:"https://image.tmdb.org/t/p/w500/7w7w7w7w7w7w7w7w7w7w7w7w7w.jpg" },
  { id:"m81", film:"Улица страха 2", genre:"Слэшер", kinopoisk:6.1, myRating:7, horrorRate:3, quote:"Вторая часть тянет тревогу ещё дальше.", poster:"https://image.tmdb.org/t/p/w500/8x8x8x8x8x8x8x8x8x8x8x8x8x.jpg" },
  { id:"m82", film:"зомби по имени шон", genre:"комедия", kinopoisk:7.3, myRating:65, horrorRate:2, quote:"спасение отношений, мамы и лучшего друга во время зомби-апокалипсиса.", poster:"https://image.tmdb.org/t/p/w500/9y9y9y9y9y9y9y9y9y9y9y9y9y.jpg" },
  { id:"m83", film:"Безумный Макс: дорога ярости", genre:"Фантастический хоррор", kinopoisk:8.1, myRating:7, horrorRate:2, quote:"Не хоррор в чистом виде, но пустыня здесь очень злая.", poster:"https://image.tmdb.org/t/p/w500/0z0z0z0z0z0z0z0z0z0z0z0z0z.jpg" },
  { id:"m84", film:"Явление", genre:"Сверхъестественный хоррор", kinopoisk:5.9, myRating:6, horrorRate:2, quote:"Иногда самое страшное — не понимать, что именно происходит.", poster:"https://image.tmdb.org/t/p/w500/1a1a1a1a1a1a1a1a1a1a1a1a1a.jpg" },
  { id:"m85", film:"Проклятый дом", genre:"Сверхъестественный хоррор", kinopoisk:6.0, myRating:7, horrorRate:3, quote:"Дом, который явно помнит лишнее.", poster:"https://image.tmdb.org/t/p/w500/2b2b2b2b2b2b2b2b2b2b2b2b2b.jpg" },
  { id:"m86", film:"Туман", genre:"Сверхъестественный хоррор", kinopoisk:6.8, myRating:8, horrorRate:4, quote:"Туман не прячет страх — он его размножает.", poster:"https://image.tmdb.org/t/p/w500/3c3c3c3c3c3c3c3c3c3c3c3c3c.jpg" },
  { id:"m87", film:"Лес призраков", genre:"Сверхъестественный хоррор", kinopoisk:5.8, myRating:6, horrorRate:2, quote:"Лес здесь явно не хочет быть картой.", poster:"https://image.tmdb.org/t/p/w500/4d4d4d4d4d4d4d4d4d4d4d4d4d.jpg" },
  { id:"m88", film:"Культ Чаки", genre:"Сверхъестественный хоррор", kinopoisk:5.9, myRating:6, horrorRate:2, quote:"Кукла снова улыбается слишком уверенно.", poster:"https://image.tmdb.org/t/p/w500/5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg" },
  { id:"m89", film:"Детские игры", genre:"Сверхъестественный хоррор", kinopoisk:6.7, myRating:8, horrorRate:4, quote:"Игрушка, которая слишком хорошо помнит зло.", poster:"https://image.tmdb.org/t/p/w500/6f6f6f6f6f6f6f6f6f6f6f6f.jpg" },
  { id:"m90", film:"Суспирия", genre:"Психологический хоррор", kinopoisk:7.1, myRating:8, horrorRate:4, quote:"Стильный кошмар с очень красивой жестокостью.", poster:"https://image.tmdb.org/t/p/w500/7g7g7g7g7g7g7g7g7g7g7g7g7g.jpg" },
  { id:"m91", film:"Одержимость", genre:"Психологический хоррор", kinopoisk:7.0, myRating:8, horrorRate:4, quote:"Страх здесь прорастает изнутри.", poster:"https://image.tmdb.org/t/p/w500/8h8h8h8h8h8h8h8h8h8h8h8h8h.jpg" },
  { id:"m92", film:"воставший из ада", genre:"Сверхъестественный хоррор", kinopoisk:7.0, myRating:61, horrorRate:3, quote:"Видения возвращаются, и это плохой знак.", poster:"https://image.tmdb.org/t/p/w500/9i9i9i9i9i9i9i9i9i9i9i9i9i.jpg" },
  { id:"m93", film:"Мама", genre:"Сверхъестественный хоррор", kinopoisk:6.5, myRating:8, horrorRate:4, quote:"Иногда самая страшная фигура — это та, что защищает.", poster:"https://image.tmdb.org/t/p/w500/0j0j0j0j0j0j0j0j0j0j0j0j0j.jpg" },
  { id:"m94", film:"Тихоокеанский рубеж", genre:"Фантастический хоррор", kinopoisk:6.9, myRating:7, horrorRate:2, quote:"Больше фантастика, чем хоррор, но монстры здесь внушительные.", poster:"https://image.tmdb.org/t/p/w500/1k1k1k1k1k1k1k1k1k1k1k1k1k.jpg" },
  { id:"m95", film:"Обитель зла", genre:"Зомби-хоррор", kinopoisk:6.8, myRating:8, horrorRate:4, quote:"Заражение любит стерильные коридоры.", poster:"https://image.tmdb.org/t/p/w500/2l2l2l2l2l2l2l2l2l2l2l2l2l.jpg" },
  { id:"m96", film:"впусти меня", genre:"вампир-хоррор", kinopoisk:6.9, myRating:56, horrorRate:1, quote:"дружба мальчика и девочке кчему привидет.", poster:"https://image.tmdb.org/t/p/w500/3m3m3m3m3m3m3m3m3m3m3m3m3m.jpg" },
  { id:"m97", film:"Ведьма из Блэр", genre:"Психологический хоррор", kinopoisk:6.4, myRating:9, horrorRate:4, quote:"Страх, который почти не видно, страшнее всего.", poster:"https://image.tmdb.org/t/p/w500/4n4n4n4n4n4n4n4n4n4n4n4n4n.jpg" },
  { id:"m98", film:"Паранормальное явление", genre:"Сверхъестественный хоррор", kinopoisk:6.6, myRating:57, horrorRate:3, quote:"Маленькие шумы тут значат очень много.", poster:"https://image.tmdb.org/t/p/w500/5o5o5o5o5o5o5o5o5o5o5o5o5o.jpg" },
  { id:"m99", film:"Глаз", genre:"Сверхъестественный хоррор", kinopoisk:6.1, myRating:7, horrorRate:3, quote:"Взгляд, который лучше было бы не получать.", poster:"https://image.tmdb.org/t/p/w500/6p6p6p6p6p6p6p6p6p6p6p6p6p.jpg" },
  { id:"m100", film:"Монахиня", genre:"Сверхъестественный хоррор", kinopoisk:6.1, myRating:7, horrorRate:3, quote:"У страха в монастыре слишком много теней.", poster:"https://image.tmdb.org/t/p/w500/7q7q7q7q7q7q7q7q7q7q7q7q7q.jpg" },
]
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
  if (weekPoster) {
  weekPoster.src = "./images/zakulis-erealnosti.jpg.jpg";
}
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
document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const res = await fetch('./cartoons-horror.json');
  const movies = await res.json();

  const movie = movies.find(m => m.id === id);
  const container = document.getElementById('movieDetails');

  if (!movie) {
    container.innerHTML = '<p>Фильм не найден</p>';
    return;
  }

  container.innerHTML = `
    <div class="movie-page">
      <img src="${movie.poster || './images/poster-placeholder.jpg'}" alt="${movie.title}">
      <h1>${movie.title}</h1>
      <p><strong>Оригинальное название:</strong> ${movie.originalTitle || '—'}</p>
      <p><strong>Год:</strong> ${movie.year}</p>
      <p><strong>Режиссёр:</strong> ${movie.director || '—'}</p>
      <p><strong>Локальный рейтинг:</strong> ${movie.localRating}</p>
      <p><strong>Количество оценок:</strong> ${movie.localVotes}</p>
      <p><strong>Жанры:</strong> ${movie.genres.join(', ')}</p>
    </div>
  `;
});
  if (!movie) {
    box.innerHTML = "<p>Фильм не найден</p>";
    return;
  }

  const director = movie.director || "Не указан";
  const cast = movie.cast || ["Не указаны"];
  const synopsis = movie.synopsis || movie.quote || "Описание скоро появится.";
  const extraFacts = movie.facts || [
    "Страшная и атмосферная карточка для твоего сайта.",
    "Можно потом добавить трейлер, год и длительность.",
    "Этот шаблон подойдёт для всех фильмов."
  ];

  box.innerHTML = `
  <div class="movie-card">
    <div class="movie-card-left">
      <img class="movie-card-poster" src="${movie.poster}" alt="${movie.film}">
      <div class="trailer-block">
        <h3>Трейлер</h3>
        ${
          movie.trailer
            ? `
              <div class="youtube-video-container">
                <iframe
                  src="${movie.trailer}"
                  title="Трейлер фильма ${movie.film}"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
              </div>
            `
            : `<p class="trailer-empty">Трейлер скоро появится.</p>`
        }
      </div>
    </div>

    <div class="movie-card-info">
      <h1>${movie.film}</h1>
      <p class="movie-card-genre">${movie.genre}</p>

      <div class="movie-card-meta">
        <div class="meta-item">
          <span>КиноПоиск</span>
          <strong>${movie.kinopoisk.toFixed(1)}</strong>
        </div>
        <div class="meta-item">
          <span>Мой рейтинг</span>
          <strong>${movie.myRating}</strong>
        </div>
        <div class="meta-item">
          <span>Рейтинг ужаса</span>
          <strong>${stars(movie.horrorRate)}</strong>
        </div>
        <div class="meta-item">
          <span>Режиссёр</span>
          <strong>${director}</strong>
        </div>
      </div>

      <div class="movie-card-section">
        <h3>О фильме</h3>
        <p>${synopsis}</p>
      </div>

      <p class="movie-card-quote">«${movie.quote}»</p>

      <div class="movie-card-badges">
      </div>

      <div class="movie-card-bottom">
        <div class="cast-list">
          <h3>Актёры</h3>
          <ul>
            ${cast.map(actor => `<li>${actor}</li>`).join("")}
          </ul>
        </div>

        <div class="facts-list">
          <h3>Дополнительно</h3>
          <ul>
            ${extraFacts.map(fact => `<li>${fact}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  </div>
  `;
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

  document.getElementById("movieTableBody")?.addEventListener("click", (e) => {
  const row = e.target.closest(".movie-row");
  if (!row) return;
  location.href = `movie.html?id=${row.dataset.id}`;
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