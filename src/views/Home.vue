<template>
  <div class="Home">
    <h3>Grzyby wielkoowocnikowe
      Parku Grabiszyńskiego
      Lista obecności w obrazkach</h3>

    <h4>Grzyb dnia: <strong>{{randomShroom.name}}</strong></h4>
    <shroom
        :shroom="randomShroom"
        class="hoverable"
        @click.native="$router.push({name: 'shroom-detail', params: {shroomName: randomShroom.name.replace(' ', '-')}})"
    ></shroom>
    <p><span style="color: #0d0a04;">Na przełomie 2017 i 2018 r. podczas konsultacji z mieszkańcami tzw. masterplanemu, gdy urzędnicy przedstawiali pomysł jak w kosztowny i kosztotwórczy sposób przekształcić Park Grabiszyński we Wrocławiu w pretensjonalny i miejscami kiczowaty skwerek - rozmawialiśmy o złym traktowaniu roślin (agresywna wycinka, nadmierne koszenie, ograniczanie różnorodności, maszynowe i niepotrzebne sprzątanie), zwierząt&nbsp; (niszczenie siedlisk, brak warunków zimowania) i samej przestrzeni Parku. W pierwszych dwóch kwestiach&nbsp; nastąpił od tamtego czasu pewien postęp, w ostatniej - nie do końca.&nbsp;</span>
    </p>
    <p><span style="color: #0d0a04;">Nie został wówczas podjęty temat ochrony czy chociaż dostrzeżenia kolejnych mieszkańców Parku – grzybów, a jest ich tutaj sporo.&nbsp;</span><span
        style="color: #0d0a04;">Aby sprawdzanie tego, co grzybowo rośnie w Parku było przekazywalne, należy grzyby poprawnie nazwać. Nie mam mikroskopu, nie badałem wysypu zarodników, ale mając do dyspozycji wiedzę atlasów i zwłaszcza internetu – spróbowałem określić te nazwy samodzielnie. W trzech przypadkach uzyskałem pomoc innych osób (podane przy zdjęciach, dziękuję!). Jeśli gdzieś popełniłem błąd w nazewnictwie, a ktoś ma wiedzę, aby to skorygować – proszę o informację.&nbsp;</span>
    </p>
    <p><span style="color: #0d0a04;">W okolicy 2019 r. udokumentowałem 37 gatunków grzybów wielkoowocnikowych i jest to dalekie od "wyczerpania zasobów". Jest kilka grzybów, o których wiem, że w Parku bywają, a nie spotkałem ich w minionym roku. Z kolei kilka spotkałem, ale bez aparatu lub dokumentacja jest zbyt mała. Wszystkie prezentowane zdjęcia zostały wykonane w Parku Grabiszyńskim. &nbsp; </span>
    </p>
    <p><span style="color: #0d0a04;">Aktualnie (luty 2020 r.) potwierdzone jest występowanie w Parku Grabiszyńskim trzech gatunków, które były pod ścisłą ochroną do października 2014 r. (<em>purchawica olbrzymia, wachlarzowiec olbrzymi&nbsp;&nbsp;</em>i <em>szmaciak gałęzisty&nbsp;&nbsp;</em>vel <em>siedzuń sosnowy</em>) oraz dwóch gatunków będących na „<strong>Czerwonej liście roślin i grzybów Polski</strong>” (lista organizmów zagrożonych wyginięciem) - <em>gęstoporka cynobrowego</em> i <em>uszaka skórnikowatego</em>;&nbsp; jest też <em>gniewosz</em>. </span>
    </p>
    <p><span style="color: #0d0a04;">Zauważając widoczne gołym okiem owocniki grzybów warto pamiętać o roli grzybów w obiegu materii, o tym, że grzyby jako mieszkańcy gleby współdziałając z innymi mikroorganizmami glebowymi i nieco większymi jej mieszkańcami tworzą odpowiednie i chyba nawet konieczne warunki dla rozwoju roślin. Bez odpowiednich organizmów glebowych niewiele by tutaj urosło. Innym tematem są właściwości (i zastosowania) grzybów, linki umieszczone przy zdjęciach często prowadzą do wzmianek również na ten temat, oprócz tego warto samemu poszukać; nazwy grzybów też bywają intrygujące. &nbsp;</span>
    </p>
    <p><span style="color: #0d0a04;">Uważam, że w patrzeniu na Park (mam na myśli ewentualne plany „poprawiania” i „modernizacji” przestrzeni, działania tzw. pielęgnacyjne) należy uwzględniać również grzyby jako jednych z tutejszych mieszkańców; radzą sobie nieźle i chyba jak zwykle wystarczy im nie przeszkadzać.</span>
    </p>
    <p><span style="color: #0d0a04;"><em>Zastrzeżenie:</em> opisy i zdjęcia nie stanowią zachęty do zbierania przedstawianych grzybów czy też do ich spożywania. Nie jest to opis o aspiracjach atlasu grzybów, to bardziej niepełna lista ich obecności w PG. Fotografie zostały zrobione wg stanu na chwilę ich wykonania, niekoniecznie pokazują cechy charakterystyczne w sposób podręcznikowy. Określenia nazw grzybów są wykonane w dobrej wierze, ale mogą zawierać błędy. Część z opisanych tutaj grzybów jest trująca. Nie mając odpowiedniej wiedzy i praktyki – nie należy ich zbierać (to dotyczy grzybów w ogóle), część podlega ochronie. Grzyby akumulują metale ciężkie i pomysł zbierania ich w mieście jest bardzo nierozsądny. Zdecydowana większość owocników pokazanych na zdjęciach jest widoczna z ogólnodostępnych ścieżek i trawników, wystarczy popatrzeć.&nbsp; </span>
    </p>
    <p><span style="color: #0d0a04;">Jerzy Trzaska</span></p>

  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from '@vue/composition-api';
import {Mushroom} from "@/models";
import {ShroomRaw, shrooms} from "@/data/legacy";
import Shroom from "@/views/shrooms/Shroom.vue";
import {pickRandomDeterministic, transparentBackground} from "@/helpers";

export default defineComponent({
    name: "Home",
    components: {
        Shroom,
    },
    setup() {
        const randomShroom = new Mushroom(pickRandomDeterministic(shrooms) as ShroomRaw);
        const style = computed(() => transparentBackground(randomShroom.randomImage, .03));
        return {randomShroom, style};
    },
})
</script>

<style scoped lang="scss">
@import "src/styles/main";

.Home {
  h3 {
    text-align: center;
  }

}
</style>