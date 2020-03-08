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
        description: '<p class="over_outline"><span style="color: #141312;"><strong>Czasznica olbrzymia</strong>. Zwana również <em>purchawicą olbrzymią</em>. Bardzo efektowny grzyb, tworzy duże białe owocniki wyglądające jak nie z tego świata. Jeden z kilku grzybów w Parku Grabiszyńskim, który wytwarza największe fizycznie owocniki. W ciągu ostatnich 2-3 lat powiększył obszar występowania w Parku, dojrzałe owocniki można spotkać jeszcze w trakcie łagodnej zimy. </span></p>\n' +
            '<p class="over_outline"><span style="color: #141312;">Do października &nbsp;2014 r. był pod ścisłą ochroną. Niestety czasznica zbyt mocno przyciąga uwagę nadaktywnych obywateli, którzy polerują swoje ego poprzez jej kopnięcie, podeptanie lub chociaż przyciśnięcie bucikiem.&nbsp; &nbsp; &nbsp;</span></p>\n' +
            '<p class="over_outline"><a href="https://pl.wikipedia.org/wiki/Czasznica_olbrzymia"></a></p>',
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
];
