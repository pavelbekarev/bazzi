<script setup>
  import { ref } from 'vue';
  import ServicesList from './components/ServicesList.vue';
  import ContactForm from './components/ContactForm/ContactForm.vue';
  // import loveImage from "./img/love.jpg";
  // import no_love from "./img/no_love.jpg";
  // import healthImage from "./img/health.jpg";
  // import forecastImage from "./img/forecast.jpg";
  // import robberImage from "./img/robber.jpg";
  // import eventsImage from "./img/events.jpg";

  import love_tree from "./img/love_tree.jpg";
  import no_love2 from "./img/no_love2.jpg";
  import health2 from "./img/health2.jpg";
  import forecastImage from "./img/forecast.jpg";
  import gold_dragon from "./img/gold_dragon.jpg";
  import dragon from "./img/dragon.jpg";
  
  const services = ref([
    {
      name: "Любовь в 2024 году",
      description: "У каждого из нас бывают периоды, когда в нашей карте Бацзы затрагивается Дом Брака" + "Дом Брака — второй столп в карте под названием «День» или «Личность»",
      imagePath: love_tree
    },
    {
      name: "Развод в 2024",
      description: "Зона риска в 2024г в отношениях",
      imagePath: no_love2
    },
    {
      name: "Здоровье в 2024",
      description:"Многих волнуют вопросы:"                 +
                  "– какие болезни могут активизироваться?" +
                  "– каким органам стоит уделить внимание"  +
                  "– кто будет в зоне риска и кому стоит выделить тему здоровья в своём планере на год",
      imagePath: health2
    },
    {
      name: "Прогноз по элементам",
      description: "Ежедневно выкладывается прогноз на день для всех элементов, но Вы также можете более подробно узнать для себя",
      imagePath: forecastImage
    },
    {
      name: "События в 2024",
      description: "Что ждет нас в грядущем году",
      imagePath: dragon
    },
    {
      name: "Грабитель богатства",
      description: "Дни грабителя — это дни, когда деньги могут уйти из вашего кошелька. Поэтому рекомендуется самим запланировать траты, чтобы финансы не ушли сами собой.",
      imagePath: gold_dragon
    }
  ])
</script>

<template>
  <header>
    <div class="header__bg">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__menu">
            <ul>
              <li class="header__menu-item"><a class="header__menu-link" href="">Главная</a></li>
              <li class="header__menu-item"><a class="header__menu-link" href="">О бацзы</a></li>
            </ul>
          </div>
          <div class="header__content">
            <h2 class="header__h2">Познай себя сквозь призму китайской метафизики</h2>
          </div>
        </div>
      </div>
    </div>
  </header>


  <main >
    <section>
      <div class="services__wrapper">
        <div class="container">
          <div class="services__content">
            <h2 class="services__h2">Услуги</h2>
            <div class="services">
              <ServicesList :services="services"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="contact__wrapper">
        <div class="contact-form__wrapper">
          <form action="" class="contact-form__wrapper">
            <div class="offer-to-contact">
              <h2 class="offer__h2">Свяжитесь со мной</h2>
              <div class="socials">
                <a href=""><img title="Телеграм канал" class="form__offer-icon" src="./img/telegram.svg" alt="telegram icon"></a>
                <a href=""><img class="form__offer-icon" src="./img/iconmonstr-vk-1.svg" alt="VK icon"></a>
              </div>
            </div>
            <ContactForm />
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" src="./style/App.scss">
</style>
