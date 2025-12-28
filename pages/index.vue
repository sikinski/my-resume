<template>
    <div class="home-page">
        <section class="main-section">
            <div class="content">
                <div class="socials">
                    <a href="/" class="link" target="_blank"><span class="icon icon-tg"></span></a>
                    <a href="/" class="link" target="_blank"><span class="icon icon-whatsapp"></span></a>
                    <a href="/" class="link" target="_blank"><span class="icon icon-email"></span></a>
                    <a href="/" class="link" target="_blank"><span class="icon icon-site"></span></a>
                    <a href="/" class="link" target="_blank"><span class="icon icon-github"></span></a>
                </div>

                <p class="overtitle">Меня зовут Ульяна Фомина</p>
                <h1 class="h1">Я&nbsp;- <span class="highlight">frontend</span> разработчик сайтов из&nbsp;Челябинска
                </h1>

                <div class="btns">
                    <button class="btn btn-highlight">Портфолио</button>
                    <button class="btn">Написать</button>
                </div>

                <img src="@/assets/images/about_image.webp" alt="" class="image">
            </div>
        </section>

        <section class="skills-section pt-full">
            <div class="content">
                <p class="overtitle">Что я умею</p>
                <h2 class="h2">Мои навыки и компетенции</h2>

                <p class="text">Привет! Мой опыт работы 3.5 года, из них коммерческого по профессии - 1.2 года.
                    Ознакомься с тем, что я умею:</p>

                <span class="title-line"></span>

                <div class="items mt">
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/frontend.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Разработка фронтэнда</h3>
                        <p class="desc">Разработка современных веб-приложений на Vue 3 / Nuxt 3. Использую SSR,
                            серверные компоненты, composables, stores, nuxt-modules, pnpm, Cursor AI</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/layout.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Верстка сайтов</h3>
                        <p class="desc">Mobile-first верстка, SASS, адаптивная верстка, кроссбраузерность. Умею в Pixel
                            Perfect</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/devops.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Немного Devops</h3>
                        <p class="desc">Умею настраивать Nginx на работу фронта, бэка. Умею работать с Docker, сама
                            создаю Dockerfile, docker-compose.yml для фронта. Знаю частые причины падений фронта в
                            докере</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/backend.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Чуть-чуть бэкэнда</h3>
                        <p class="desc">Умею создавать простые REST API сервисы для небольших задач (отправка e-mail,
                            авторизация с токенами,
                            простенькие CRUD). Стек - Node.js + Prisma + Fastify</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/optimization.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Оптимизация. SEO и не только</h3>
                        <p class="desc">Всегда забочусь об оптимизации. Важна быстрая скорость открытия сайта и хорошее
                            ранжирование сайта в поиске. Сжимаю картинки, смотрю на вес бандла, проверяю сайты на Google
                            PageSpeed + Lighthouse</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/business.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Помощь бизнесу</h3>
                        <p class="desc">Использую все необходимые современные средства для создания хорошего сайта
                            быстро. Не трачу время на изобретение велосипеда, использую готовые инструменты. В последнее
                            время использую AI.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="portfolio-section">
            <div class="content">
                <p class="overtitle">Работы</p>
                <h2 class="h2">Мое портфолио</h2>

                <span class="title-line"></span>

                <div class="items mt">
                    <a href="/" target="_blank" class="item">
                        <span class="prompt">Корпоративный сайт</span>
                        <img src="@/assets/images/portfolio/vsl.png" alt="" class="image">
                    </a>
                    <a href="/" target="_blank" class="item">
                        <span class="prompt">Турагенство</span>
                        <img src="@/assets/images/portfolio/tourvibe.png" alt="" class="image">
                    </a>
                    <a href="/" target="_blank" class="item">
                        <span class="prompt">Салон красоты</span>
                        <img src="@/assets/images/portfolio/hclub.png" alt="" class="image">
                    </a>
                    <a href="/" target="_blank" class="item">
                        <span class="prompt">Медицинская клиника</span>
                        <img src="@/assets/images/portfolio/alekhin.png" alt="" class="image">
                    </a>
                    <a href="/" target="_blank" class="item">
                        <span class="prompt">Турагенство</span>
                        <img src="@/assets/images/portfolio/atour.png" alt="" class="image">
                    </a>
                    <a href="/" target="_blank" class="item">
                        <span class="prompt">Интернет-магазин</span>
                        <img src="@/assets/images/portfolio/armada.png" alt="" class="image">
                    </a>
                    <a href="/" target="_blank" class="item">
                        <span class="prompt">Карьерный портал</span>
                        <img src="@/assets/images/portfolio/konar-vacancies.png" alt="" class="image">
                    </a>
                    <a href="/" target="_blank" class="item">
                        <span class="prompt">Строительная компания</span>
                        <img src="@/assets/images/portfolio/souz.png" alt="" class="image">
                    </a>

                </div>
            </div>
        </section>

        <section class="benefits-section">
            <div class="content">
                <p class="overtitle">Преимущества</p>
                <h2 class="h2">Почему я?</h2>

                <div class="items">
                    <!-- Здесь нужно написать -
                     1. Скорость. Я работаю быстро. Лендинг по макету с отправкой заявки, seo-настройкой и пр. занимает 8 часов. Недавно с Cursor AI сделала сайт из 5 страниц с полного нуля без дизайна за 6 часов. (союз-дома.рф)
                     2. Ответственность. Просыпаюсь вовремя, буду записывать все важное. Использую канбан. Не делегирую свои задачи.
                     3. Упрямость. Это самое главное. Если осталось сделать одну секцию на сайте или добить форму - я останусь сверхурочно. Если фронт не собирается, а время уже поджимает, я закончу это дело до конца. -->
                </div>
            </div>
        </section>

        <section class="form-section">
            <div class="content">
                <p class="overtitle">Заинтересованы?</p>
                <h2 class="h2">Оставьте заявку</h2>

                <form class="form">
                    <!-- здесь нужна полноценная форма с валидацией, под стиль всего сайта. Поля - Имя, email, политика конф. -->
                </form>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style lang="sass">
@use '@/assets/styles/adaptive' as *
.home-page
    .main-section
        background-color: #c0dbee
        .content
            display: flex
            flex-direction: column
            justify-content: center
            padding-bottom: 5%
        .socials
            display: flex
            align-items: center
            gap: 8px
            margin-bottom: 40px
            .link
                width: 33px
                height: 33px
                display: flex
                justify-content: center
                align-items: center
                border-radius: 50%
                transition: .3s ease 
                background-color: #fff
                .icon
                    background-color: #000
                    mask-size: contain
                    mask-position: center
                    display: block
                    width: 60%
                    height: 60%
                    transition: .3s ease 
                    &-tg
                        mask-image: url(@/assets/images/icons/telegram.svg)
                    &-whatsapp
                        mask-image: url(@/assets/images/icons/whatsapp.svg)
                    &-email
                        mask-image: url(@/assets/images/icons/email.svg)
                    &-site
                        mask-image: url(@/assets/images/icons/site.svg)
                    &-github
                        mask-image: url(@/assets/images/icons/github.svg)
                &:hover
                    .icon-tg
                        background-color: #2195d0
                    .icon-whatsapp
                        background-color: #2cd46b
                    .icon-email
                        background-color: var(--main-color)
                    .icon-site
                        background-color: #1449c8
        .h1
            margin: 20px 0
            font-size: 2.25rem
            .highlight
                color: var(--main-color)
                font-weight: 900
        .image
            border-radius: 10px
            width: 75vw
            height: 75vw
            // align-self: center
            object-fit: cover
        .btns
            display: flex
            align-items: center
            gap: 4px
            font-size: 1rem
            font-weight: 700
            margin-top: 40px
            order: 1
            .btn
                border: none
                padding: 12px 18px
                &-highlight
                    box-shadow: 0px 4px 4px 0px #00000026
                    background-color: var(--main-color)

    .skills-section
        .text
            font-size: 14px
            margin-top: 10px
        .items
            display: flex
            flex-direction: column
            .item
                display: grid
                grid-template-columns: 38px 1fr
                grid-template-rows: 38px 1fr
                grid-gap: 12px 8px
                border-bottom: 1px solid #a0a0a0
                padding: 20px 0
                .icon-wrapper
                    display: flex
                    justify-content: flex-end
                    align-items: flex-end
                    position: relative
                    .icon
                        width: 25px
                        z-index: 1
                    .circle
                        position: absolute
                        top: 0
                        right: 0
                        z-index: -1
                        width: 32px
                        height: 32px
                .title
                    align-self: center
                    font-weight: 500
                .desc
                    grid-column: 2/3
                &:last-child
                    border-bottom: none

    .portfolio-section
        .items
            display: flex
            flex-direction: column
            gap: 10px
            .item
                position: relative
                border-radius: 20px
                overflow: hidden
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
                .prompt
                    position: absolute
                    background-color: rgba(255, 255, 255, 1)
                    background-color: var(--main-color)
                    color: #fff
                    padding: 4px 8px
                    border-top-right-radius: 20px
                    border-bottom-right-radius: 20px
                    font-size: 14px
                .image
                    width: 100%
                    object-fit: contain
</style>