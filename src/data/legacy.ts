export interface ShroomRaw {
    name: string;
    description: string;
    images: string[];
    links: string[];
    warning?: string;
    isHtml?: boolean;
}

export const shrooms: ShroomRaw[] = [
    {
        name: 'Białoporek brzozowy',
        description: 'Jest go aktualnie sporo, rośnie tylko na brzozach, jednoroczny. Brzóz w różnym stanie jeszcze trochę zostało, lecz tych drzew raczej będzie ubywać, wówczas białoporek zniknie z Parku.',
        links: ['https://pl.wikipedia.org/wiki/Bia%C5%82oporek_brzozowy'],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/PB160307z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/PB160291z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/PB160296z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },



    {
        name: 'Borowik ponury',
        description: 'To niespodzianka, rodzina borowików w Parku Grabiszyńskim. Łącznie bodaj 5 szt., młodzież i jeden w wieku średnim. Niektóre tak pochowane, że w środku dnia trzeba było użyć lampy błyskowej. Dwa dni po wykonaniu zdjęć zajrzałem, aby zobaczyć czy i jak urosły. Ktoś je zabrał  - co nie jest dobrym pomysłem.  ',
        links: ['https://pl.wikipedia.org/wiki/Borowik_ponury'],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/P6060628z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P6060630zz.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P6060627z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P6060619.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Chrząstkoskórnik purpurowy',
        description: 'Podręcznikowo pospolity. Jest, ale w Parku zbyt wielu ich nie spotkałem w 2019 r. Postrach sadowników.',
        links: [
            'https://nagrzyby.pl/atlas/587',
            'https://pl.wikipedia.org/wiki/Chrz%C4%85stkosk%C3%B3rnik_purpurowy',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/IMG_9554z.JPG.opt467x701o0%2C0s467x701.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/IMG_9543z.JPG.opt467x699o0%2C0s467x699.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/IMG_9562z.JPG.opt465x696o0%2C0s465x696.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/IMG_9546z2.JPG.opt760x506o0%2C0s760x506.JPG',
        ],
    },

    {
        name: 'Czasznica olbrzymia',
        isHtml: true,
        description: 'Czasznica olbrzymia. Zwana również purchawicą olbrzymią. Bardzo efektowny grzyb, tworzy duże białe owocniki wyglądające jak nie z tego świata. Jeden z kilku grzybów w Parku Grabiszyńskim, który wytwarza największe fizycznie owocniki. W ciągu ostatnich 2-3 lat powiększył obszar występowania w Parku, dojrzałe owocniki można spotkać jeszcze w trakcie łagodnej zimy.' +
            'Do października 2014 r. był pod ścisłą ochroną. Niestety czasznica zbyt mocno przyciąga uwagę nadaktywnych obywateli, którzy polerują swoje ego poprzez jej kopnięcie, podeptanie lub chociaż przyciśnięcie bucikiem',
        links: [
            'https://pl.wikipedia.org/wiki/Czasznica_olbrzymia',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/P1119312z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P1119279z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P8291483z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P8311480z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P8311473z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P8291487z.jpg.opt420x630o0%2C0s420x630.jpg',
        ],
    },

    {
        name: 'Czernidłak błyszczący',
        description: 'Jeden z czterech gatunków czernidłaków w tym zestawieniu. Mogą pojawiać się zgrupowania liczące bardzo wiele owocników.',
        links: [
            'https://pl.wikipedia.org/wiki/Czernid%C5%82ak_b%C5%82yszcz%C4%85cy',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/P5180332z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/P5180330z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/PB100171z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/PC319221z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Czernidłak gromadny',
        description: 'To grzybowy mikrokosmos, owocniki pojawiły się znienacka,  tak jak na załączonych zdjęciach wyglądały nieco ponad dobę i obumarły. Bywają gromady znacznie liczniejsze niż ta z Parku, p. Wikipedia. Ale za to na tym samym adresie pojawiły się w 2019 r. trzykrotnie (co najmniej). Tutaj zdjęcia z zieloną dominantą są z czerwca, dwa pozostałe z września. Były jeszcze po raz trzeci, ale nie zrobiłem zdjęć. Dziękuję p. J. Słowińskiemu z bio-forum.pl za pomoc w identyfikacji. To mamy cztery gatunki czernidłaków.     ',
        links: [
            'https://pl.wikipedia.org/wiki/Czernid%C5%82ak_gromadny',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P6030533z1.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P6030543z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P6030541z2.jpg.opt419x629o0%2C0s419x629.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9272156z1.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9272145z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Czernidłak kołpakowaty',
        description: 'Młode owocniki są trochę podobne do kani, starsze już mniej. Chyba najbardziej rozpoznawalny z czernidłaków. Pojawia się w Parku, ale nie w takich ilościach jak czernidłak błyszczący czy gromadny.  ',
        links: [
            'https://pl.wikipedia.org/wiki/Czernid%C5%82ak_ko%C5%82pakowaty',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PA142278z.jpg.opt430x645o0%2C0s430x645.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PA142315z.jpg.opt432x648o0%2C0s432x648.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PA142316z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Czernidłak pospolity',
        description: 'Mimo nazwy - w 2019 r. nie widziałem go w Parku w wielkich ilościach.',
        links: [
            'https://pl.wikipedia.org/wiki/Czernid%C5%82ak_pospolity',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9282178z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9292233z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PA012250zz.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Czubajka czerwieniejąca',
        description: 'Pojawia się pojedynczo i w grupach, również w miejscach, w których pojawia się purchawica olbrzymia.',
        links: [
            'https://pl.wikipedia.org/wiki/Czubajka_czerwieniej%C4%85ca',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PA142300z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PB070102z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9242072z2.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9242081z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9242067z2.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Gąsówka fioletowawa',
        description: 'Późny grzyb i niezbyt rzucający się w oczy, rośnie w kępkach poukrywanych wśród bluszczu.',
        links: [
            'https://pl.wikipedia.org/wiki/G%C4%85s%C3%B3wka_fioletowawa',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9272122z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9272117z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PB100141z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Gęstoporek cynobrowy',
        description: 'Znajduje się na „Czerwonej liście roślin i grzybów Polski”. Ma status R – potencjalnie zagrożony z powodu ograniczonego zasięgu geograficznego i małych obszarów siedliskowych. Mamy w Parku co najmniej dwa gatunki grzybów z „Czerwonej listy”.\n' +
            '\n' +
            'Gęstoporek występuje w części pocmentarnej, biocenotycznej, czyli na obszarze na szczęście niezrealizowanej jednej z wydumek masterplanu. Rośnie tam gdzie jest (jeszcze) ładnie.     ',
        warning: 'Czerwona lista roślin i grzybów Polski',
        links: [
            'https://pl.wikipedia.org/wiki/G%C4%99stoporek_cynobrowy',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9292220z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9292218z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P9292229zz.jpg.opt420x630o0%2C0s420x630.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PB100162z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PB100168z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Gmatwica chropowata',
        description: 'Hymenofor wygląda zdumiewająco, czasami warto spojrzeć w górę – bo tam często się ona znajduje, rosnąc na pniach drzew. Patrzymy, nie macamy.   ',
        links: [
            'https://pl.wikipedia.org/wiki/Gmatwica_chropowata',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/IMG_9500z2.JPG.opt760x506o0%2C0s760x506.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/IMG_9500z.JPG.opt760x506o0%2C0s760x506.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/PB160341z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P2202011z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Gwiazdosz prążkowany',
        description: 'Mam tak z 95,1% pewności co do tego oznaczenia, podobny jest gwiazdosz długoszyjkowy, wydaje mi się że to jednak jest prążkowany. Czyli mamy też niepozorne gwiazdosze.',
        links: [
            'https://nagrzyby.pl/atlas/838',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P8291531z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P8311463z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P8291535z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/grzyby2/P8311470z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Hubiak pospolity',
        description: 'Potocznie nazywane hubami. Solidne grzyby wieloletnie o zdumiewającej ilości zastosowań, łącznie z branżą modową.  ',
        links: [
            'https://pl.wikipedia.org/wiki/Hubiak_pospolity',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PB160324z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PB160319z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P2202026z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P2202026z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Koźlarz grabowy',
        description: 'Spotkałem tylko te trzy starsze egzemplarze, widać że wszystkie mocno zaczerwione, jeden lekko dotknięty - złamał się. Wydaje mi się, że to koźlarz grabowy, sugeruje to też jego stanowisko.  ',
        links: [
            'https://nagrzyby.pl/atlas/4950',
            'https://pl.wikipedia.org/wiki/Ko%C5%BAlarz_grabowy',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P6180672z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P6180675z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P6180676z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P6180681z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },

    {
        name: 'Lakownica spłaszczona',
        description: 'Z góry prawie niewidoczna, a od spodniej strony biała, tutaj na kapeluszu widoczne ślady wilgoci. Część zdjęć dzieli kilka miesięcy.  ',
        links: [
            'https://pl.wikipedia.org/wiki/Lakownica_sp%C5%82aszczona',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PB140229z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PB140221z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P2262224z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P2262227zz.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Lejkownik kubkowatokapeluszowy',
        description: 'Pseudoclitocybe cyathiformis. Miałem kłopot z ustaleniem jaki to grzyb, pomógł p. M. Gryc z bio-forum.pl, dziękuję!  Grzyb późnojesienny, zdjęcia z 31 grudnia.     ',
        links: [
            'https://nagrzyby.pl/atlas/260',
            'http://www.carmarthenshirefungi.co.uk/2015/12/pseudoclitocybe-cyathiformis-goblet.html',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PC319238z1.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PC319233z1.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PC319234z1.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Łuskwiak brunatnołuseczkowy',
        description: 'Sporo jest różnych łuskwiaków. Bardzo ładne skupisko.     ',
        links: [
            'https://nagrzyby.pl/atlas/1404',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P9232031z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P9232027z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P9232029z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Łuskwiak nastroszony',
        description: 'Nie miałem okazji sprawdzić jak długo przetrwały na tym stanowisku, nie jest to ścieżka mainstreamowa, może chwilę porosły.  ',
        links: [
            'https://nagrzyby.pl/atlas/83',
            'https://pl.wikipedia.org/wiki/%C5%81uskwiak_nastroszony',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PA142307zz.jpg.opt760x505o0%2C0s760x505.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PA142307z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PA142311z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Maślanka wiązkowa',
        description: 'W tym samym miejscu pojawia się kilka rodzajów grzybów.',
        links: [
            'https://nagrzyby.pl/atlas/238',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P6050591z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P6050594z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Murszak rdzawy',
        description: 'Poprawnie zidentyfikować murszaka pomógł mi p. A. Tyka – dziękuję! Naprowadził również na informacje opisane m.in. w drugim linku.\n' +
            '\n' +
            'Grzyby ze zdjęć przegrały starcie  z kosiarkami, ale zniszczenie owocników nie musi oznaczać wytępienia grzybów w  danym miejscu. Inne stanowisko jest w strefie biocenycznej, tam nie koszą.  ',
        links: [
            'https://pl.wikipedia.org/wiki/Murszak_rdzawy',
            'https://lop.kielce.pl/wp-content/uploads/Niekonwencjonalne-wykorzystanie-grzyb%C3%B3w-nadrzewnych.pdf',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g6/P6100638z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g6/P6100642z2.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g6/P6100653zz.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g6/P6180682z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g6/P6180683z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Opieńka ciemna',
        description: 'Owocniki spotkane w Parku Grabiszyńskim były w wieku średnim, a nawet nieco dalej. Poprzednio sądziłem, że wszystkie opieńki to opieńki miodowe różniące się wyglądem owocników w zależności od miejsca występowania, ale naukowcy nie zasypiają gruszek i powyodrębniali nowe gatunki. Opieńki bywają duże i świecące, najstarsza znana ma nieco ponad 2000 lat.   ',
        links: [
            'https://www.lasy.gov.pl/pl/informacje/publikacje/do-poczytania/grzyby-jakich-nie-znamy-1/grzyby_jakich_nie_znamy.pdf',
            'https://www.bio-forum.pl/messages/2/542178.html',
            'https://pl.wikipedia.org/wiki/Opie%C5%84ka_ciemna',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PB029428z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PB029431z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/PB029432z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Pieczarka',
        description: 'Wyglądają jak p. łąkowa, ale rzecz dzieje się w mieście, wiec zapewne p. miejska, jest kilka gatunków podobnych, w tym trujące. W Parku występują w dużych grupach. Pieczarki są ze sklepu lub z naturalnej łąki i zbierane przez doświadczoną osobę, każde z nich smakują inaczej. Jeśli takowe są w ich okolicy – akumulują metale ciężkie.    ',
        links: [
            'https://nagrzyby.pl/atlas/342',
            'https://pl.wikipedia.org/wiki/Pieczarka_miejska',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P6030548z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P6030547z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P8311461z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P9232021z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Podgrzybek brunatny',
        description: 'Czyli podgrzybek. To chyba najbardziej znane grzyby. Poprawność polityczna nie zna granic - po badaniach awansował i zmieniono mu nazwę na borowik kasztanowy.   ',
        links: [
            'https://pl.wikipedia.org/wiki/Podgrzybek_brunatny',
            'https://www.gospodarz.pl/encyklopedia-rolnicza/b/borowik-kasztanowy.html',
            'https://www.lasy.gov.pl/pl/informacje/publikacje/do-poczytania/grzyby-jakich-nie-znamy-1/grzyby_jakich_nie_znamy.pdf',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P9232039z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g3/P9232044z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Podgrzybek złotawy',
        description: 'Sporo ich rośnie w Parku. Te grzyby wyrastają od razu z zestawem lokatorów, czyli ktoś je lubi.',
        links: [
            'https://nagrzyby.pl/atlas/350',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P6040580z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P6040576z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P8291512z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P8291523z2.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Próchnilec długotrzonkowy',
        description: 'To akuratny grzybek na pocmentarny park, nieduży. Jak to często bywa - tradycyjna nazwa czyli „palce umarlaka” lepiej i dowcipniej oddaje jego wygląd. Ale nie ma stosownej powagi i powiązań: skoro musi być w nazwie „próchnilec” –  to wolałbym „próchnilec umarlak”. Każdy od razu by go rozpoznał, nawet bez uprzedniego kontaktu.   ',
        links: [
            'http://natura.wm.pl/199424,Maczuga-i-palce-umarlaka-z-drzewa-wystajace.html',
            'https://pl.wikipedia.org/wiki/Pr%C3%B3chnilec_d%C5%82ugotrzonkowy',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/IMG_8084z.JPG.opt760x506o0%2C0s760x506.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/IMG_8082z.JPG.opt760x506o0%2C0s760x506.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/IMG_8077z.JPG.opt760x506o0%2C0s760x506.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/IMG_8074z.JPG.opt442x663o0%2C0s442x663.JPG',
        ],
    },
    {
        name: 'Purchawka chropowata',
        description: 'Kolejny  z grzybów mocno akumulujących metale ciężkie.',
        links: [
            'https://pl.wikipedia.org/wiki/Purchawka_chropowata',
            'https://nagrzyby.pl/atlas/361',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P9232033z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P9232034z2.jpg.opt436x654o0%2C0s436x654.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PC319226z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Rozszczepka pospolita',
        description: 'Jedyny grzyb mający rozszczepiające się blaszki. Wyglądają jak miniaturowa scenografia do filmu w rodzaju „Wyprawa do wnętrza Ziemi” wg Verne’a.    ',
        links: [
            'https://pl.wikipedia.org/wiki/Rozszczepka_pospolita',
            'https://nagrzyby.pl/atlas/390',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2222127z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2222118z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2222121z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2222135z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PB070079z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Szmaciak gałęzisty',
        description: 'Zauważenie tego grzyba, którego zupełnie nie spodziewałem się zobaczyć w Parku Grabiszyńskim zmotywowało mnie do zabrania się za dokumentowanie wielkoowocnikowej braci grzybowej zamieszkującej Park. Poprzednio zwany był szmaciakiem gałęzistym, potem dostał nową nazwę: siedzuń sosnowy –  ta teraz obowiązuje. Czyli z deszczu pod rynnę. Zostaję przy starej .\n' +
            '\n' +
            'Do października 2014 r. był pod ścisłą ochroną. Od kilkunastu lat rzeczywiście jest częstszy, ale spotkanie w śródmiejskim parku to niespodzianka. Od dnia, w którym go zauważyłem (wtedy był cały) do wykonania zdjęć upłynęły 2 lub 3 dni, pewnie jakiś czworonóg sprawdzał co to takiego - brakuje kawałka na górze, za to jest wgląd do wnętrza. Gdyby sprawdzał ktoś inny – najpewniej zdjęć by nie było. ',
        links: [
            'https://pl.wikipedia.org/wiki/Siedzu%C5%84_sosnowy',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PB029427z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PB029423z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PB029424z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Trzęsak pomarańczowożółty',
        description: 'W bezlistnej porze ożywia szary krajobraz. Zmienia nazwy jak rękawiczki.       ',
        links: [
            'https://pl.wikipedia.org/wiki/Trz%C4%99sak_pomara%C5%84czowo%C5%BC%C3%B3%C5%82ty',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2051738z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2051696z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2051735z.jpg.opt436x654o0%2C0s436x654.jpg',
        ],
    },
    {
        name: 'Uszak bzowy',
        description: 'Rośnie prawie na całym świecie, w Parku Grabiszyńskim też.  ',
        links: [
            'https://pl.wikipedia.org/wiki/Uszak_bzowy',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P5130254z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P5130261z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P5130264z.jpg.opt446x669o0%2C0s446x669.jpg',
        ],
    },
    {
        name: 'Uszak skórnikowaty',
        description: 'Znajduje się na „Czerwonej liście roślin i grzybów Polski”, Status R – potencjalnie zagrożony z powodu ograniczonego zasięgu geograficznego i małych obszarów siedliskowych. I jest w Parku Grabiszyńskim !\n' +
            '\n' +
            'To może można uznać za niewskazane dziwne działania na obszarze al. Romera (tutaj jest jego stanowisko): ot chociażby akcje sypania miału granitowego, plan stawiania tabliczek z cortenu i inne budowlane wykopki. Jednocześnie jest to wprost zachęta do pozostawiania fragmentów martwych drzew jako siedlisk.  ',
        warning: 'Czerwona lista roślin i grzybów Polski',
        links: [
            'https://pl.wikipedia.org/wiki/Uszak_sk%C3%B3rnikowaty',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2242192z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2242178z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2242194z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P2242200z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Wachlarzowiec olbrzymi',
        description: 'To jeden grzybów o największych spotykanych w Parku owocnikach i ich skupiskach.\n' +
            '\n' +
            'Do października 2014 r. był pod ścisłą ochroną. W Parku jest kilka jego stanowisk.',
        links: [
            'https://pl.wikipedia.org/wiki/Wachlarzowiec_olbrzymi',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g4/P9282201z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PA012261z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PA202334z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PA202333z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PA242366z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g4/PA242380z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Wrośniak różnobarwny',
        description: 'Ma sporo zastosowań i „zastosowań”.',
        links: [
            'https://pl.wikipedia.org/wiki/Wro%C5%9Bniak_r%C3%B3%C5%BCnobarwny',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P2202024z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P2202025z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P2212073z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P2212061z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P2212063z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Zimówka aksamitnotrzonowa',
        description: 'Uzyskała nową nazwę, teraz to płomiennica zimowa. Zdjęcia ze śniegiem są z 07 grudnia 2012 roku, czyli z jesieni. Pozostałe zdjęcia są z „zimy” 2018/2019, w „zimie” 2019/2020 roku nie widuję zimówki, rok wcześniej było jej całkiem sporo.    ',
        links: [
            'https://pl.wikipedia.org/wiki/P%C5%82omiennica_zimowa',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g5/IMG_7644z.JPG.opt760x506o0%2C0s760x506.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/IMG_7650z.JPG.opt460x690o0%2C0s460x690.JPG',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/PC319217z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/PC319240z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Żagiew łuskowata',
        description: 'Tylko kilka zdjęć tego młodego owocnika, źle wybrał miejsce. Jest inne stanowisko, gdzie te grzyby dorastają słuszniejszych rozmiarów ale w 2019 roku minąłem się z nim i aparatem.   ',
        links: [
            'https://nagrzyby.pl/atlas/174',
            'https://pl.wikipedia.org/wiki/%C5%BBagiew_%C5%82uskowata',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P5130240z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P5130244z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P5130251z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
    {
        name: 'Żółciak siarkowy',
        description: 'Może osiągać spore rozmiary i jest jednym z grzybów o potencjalnie największych skupiskach owocników  w Parku. Kolor dekonspiruje go z daleka.    ',
        links: [
            'https://pl.wikipedia.org/wiki/%C5%BB%C3%B3%C5%82ciak_siarkowy',
        ],
        images: [
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P5270438z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P5270436z.jpg.opt760x506o0%2C0s760x506.jpg',
            'https://grzybgrabiszynski.yolasite.com/resources/g5/P6040570z.jpg.opt760x506o0%2C0s760x506.jpg',
        ],
    },
];
