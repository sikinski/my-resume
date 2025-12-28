<template>
    <div class="home-page">
        <section class="main-section">
            <div class="content">
                <div class="socials">
                    <a href="https://t.me/sikinski" class="link" target="_blank"><span class="icon icon-tg"></span></a>
                    <a href="https://wa.me/79221594805" class="link" target="_blank"><span
                            class="icon icon-whatsapp"></span></a>
                    <a href="mailto:ulyana.sikinski@gmail.com" class="link" target="_blank"><span
                            class="icon icon-email"></span></a>
                    <a href="https://visualsenselab.ru" class="link" target="_blank"><span
                            class="icon icon-site"></span></a>
                    <a href="https://github.com/sikinski" class="link" target="_blank"><span
                            class="icon icon-github"></span></a>
                </div>

                <p class="overtitle">Меня зовут Ульяна Фомина</p>
                <h1 class="h1">Я&nbsp;— <span class="highlight">Frontend-разработчик</span> сайтов из&nbsp;Челябинска
                </h1>

                <div class="btns">
                    <a class="btn btn-highlight" href="#portfolio">Портфолио</a>
                    <a class="btn" href="#form">Написать</a>
                </div>

                <img src="@/assets/images/about_image.webp" alt="" class="image">
            </div>
        </section>

        <section class="skills-section pt-full">
            <div class="content">
                <p class="overtitle">Что я умею</p>
                <h2 class="h2">Мои навыки и компетенции</h2>

                <p class="text">Привет! Мой опыт работы 3.5 года, из&nbsp;них коммерческого по&nbsp;профессии&nbsp;— 1.2
                    года.
                    Ознакомься с&nbsp;тем, что я&nbsp;умею:</p>

                <span class="title-line"></span>

                <div class="items mt">
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/frontend.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Разработка фронтэнда</h3>
                        <p class="desc">Разработка современных веб-приложений на&nbsp;Vue 3 / Nuxt 3. Использую SSR,
                            серверные компоненты, composables, stores, nuxt-modules, pnpm, git, Cursor AI</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/layout.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Верстка сайтов</h3>
                        <p class="desc">Mobile-first верстка, SASS, адаптивная верстка, кроссбраузерность. Верстка
                            из&nbsp;
                            макетов из&nbsp;
                            Figma и&nbsp;"на&nbsp;глаз". Умею в&nbsp;Pixel Perfect</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/devops.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Немного Devops</h3>
                        <p class="desc">Умею настраивать Nginx на&nbsp;работу фронта, бэка. Умею работать с&nbsp;Docker,
                            сама
                            создаю Dockerfile, docker-compose.yml для&nbsp;фронта. Знаю частые причины падений фронта
                            в&nbsp;
                            докере</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/backend.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Чуть-чуть бэкэнда</h3>
                        <p class="desc">Умею создавать простые REST API сервисы для&nbsp;небольших задач (отправка
                            e-mail,
                            авторизация с&nbsp;токенами,
                            простенькие CRUD). Стек&nbsp;— Node.js + Prisma + Fastify</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/optimization.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Оптимизация. SEO и не только</h3>
                        <p class="desc">Всегда забочусь об&nbsp;оптимизации. Важна быстрая скорость открытия сайта
                            и&nbsp;хорошее
                            ранжирование сайта в&nbsp;поиске. Сжимаю картинки, смотрю на&nbsp;вес бандла, проверяю сайты
                            на&nbsp;Google
                            PageSpeed + Lighthouse</p>
                    </div>
                    <div class="item">
                        <div class="icon-wrapper">
                            <img src="@/assets/images/icons/business.svg" alt="" class="icon" />
                            <img src="@/assets/images/icons/circle.svg" alt="" class="circle">
                        </div>
                        <h3 class="title">Помощь бизнесу</h3>
                        <p class="desc">Использую все необходимые современные средства для&nbsp;создания хорошего сайта
                            быстро. Не&nbsp;трачу время на&nbsp;изобретение велосипеда, использую готовые инструменты.
                            В&nbsp;последнее
                            время использую AI.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="portfolio-section" id="portfolio">
            <div class="content">
                <p class="overtitle">Работы</p>
                <h2 class="h2">Мое портфолио</h2>

                <span class="title-line"></span>

                <div class="items mt">
                    <a href="http://союз-дома.рф" target="_blank" class="item">
                        <span class="prompt">Строительная компания</span>
                        <img src="@/assets/images/portfolio/souz.png" alt="" class="image">
                    </a>
                    <a href="https://visualsenselab.ru" target="_blank" class="item">
                        <span class="prompt">Корпоративный сайт</span>
                        <img src="@/assets/images/portfolio/vsl.png" alt="" class="image">
                    </a>
                    <a href="https://tour-vibe.ru" target="_blank" class="item">
                        <span class="prompt">Турагенство</span>
                        <img src="@/assets/images/portfolio/tourvibe.png" alt="" class="image">
                    </a>
                    <a href="https://visualsenselab.ru/cases/h-club-beauty-salon" target="_blank" class="item">
                        <span class="prompt">Салон красоты</span>
                        <img src="@/assets/images/portfolio/hclub.png" alt="" class="image">
                    </a>
                    <a href="https://visualsenselab.ru/cases/alex-clinic" target="_blank" class="item">
                        <span class="prompt">Медицинская клиника</span>
                        <img src="@/assets/images/portfolio/alekhin.png" alt="" class="image">
                    </a>
                    <a href="https://visualsenselab.ru/cases/a-tour" target="_blank" class="item">
                        <span class="prompt">Турагенство</span>
                        <img src="@/assets/images/portfolio/atour.png" alt="" class="image">
                    </a>
                    <a href="https://visualsenselab.ru/cases/armada-marketplace" target="_blank" class="item">
                        <span class="prompt">Интернет-магазин</span>
                        <img src="@/assets/images/portfolio/armada.png" alt="" class="image">
                    </a>
                    <a href="https://visualsenselab.ru/cases/konar-career-portal" target="_blank" class="item">
                        <span class="prompt">Карьерный портал</span>
                        <img src="@/assets/images/portfolio/konar-vacancies.png" alt="" class="image">
                    </a>


                </div>
            </div>
        </section>

        <section class="benefits-section">
            <div class="content">
                <p class="overtitle">Преимущества</p>
                <h2 class="h2">Почему я?</h2>

                <span class="title-line"></span>

                <div class="items mt">
                    <div class="item">
                        <div class="number-wrapper">
                            <span class="number">1</span>
                        </div>
                        <h3 class="title">Эффективность и&nbsp;скорость разработки</h3>
                        <p class="desc">
                            Работаю быстро, но&nbsp;качественно. Полностью готовый лендинг с&nbsp;отправкой заявки делаю
                            за&nbsp;8&nbsp;
                            часов. Недавно с&nbsp;Cursor
                            AI сделала сайт из&nbsp;5&nbsp;страниц с&nbsp;нуля за&nbsp;6&nbsp;часов. Использую
                            современные инструменты и&nbsp;
                            проверенные решения, чтобы ускорить разработку.
                        </p>
                    </div>
                    <div class="item">
                        <div class="number-wrapper">
                            <span class="number">2</span>
                        </div>
                        <h3 class="title">Профессиональная ответственность</h3>
                        <p class="desc">Всегда соблюдаю дедлайны, просыпаюсь вовремя. Использую канбан
                            для&nbsp;отслеживания
                            задач. Не&nbsp;делегирую свои задачи. Записываю все важное и&nbsp;умею вести коммуникацию
                            с&nbsp;
                            заказчиками.</p>
                    </div>
                    <div class="item">
                        <div class="number-wrapper">
                            <span class="number">3</span>
                        </div>
                        <h3 class="title">Настойчивость и надежность</h3>
                        <p class="desc">Всегда довожу проект до&nbsp;конца, какой&nbsp;бы сложный он&nbsp;ни&nbsp;был.
                            Если нужно доделать
                            секцию или&nbsp;форму&nbsp;— остаюсь до&nbsp;поздна. Если фронт не&nbsp;собирается,
                            а&nbsp;дедлайн близко&nbsp;— не&nbsp;
                            брошу, пока не&nbsp;решу проблему. Это важно для&nbsp;меня.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="form-section pb-full" id="form">
            <div class="content">
                <p class="overtitle">Заинтересованы?</p>
                <h2 class="h2">Оставьте заявку</h2>

                <form class="form mt" @submit.prevent="handleSubmit">
                    <div class="field">
                        <label class="label">Имя</label>
                        <input type="text" class="input" :class="{ 'has-error': errors.name }" v-model="formData.name"
                            @blur="validateName" @input="clearError('name')" placeholder="Введите ваше имя" />
                        <span v-if="errors.name" class="error">{{ errors.name }}</span>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <input type="email" class="input" :class="{ 'has-error': errors.email }"
                            v-model="formData.email" @blur="validateEmail" @input="clearError('email')"
                            placeholder="example@mail.com" />
                        <span v-if="errors.email" class="error">{{ errors.email }}</span>
                    </div>

                    <div class="field">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="formData.agreed" @change="clearError('agreed')" />
                            <span class="checkbox-custom"></span>
                            <span class="checkbox-text">Я согласен(а) на обработку персональных данных (&nbsp;<NuxtLink
                                    to="/privacy" target="_blank" class="privacy-link">политика конфиденциальности
                                </NuxtLink>&nbsp;)</span>
                        </label>
                        <span v-if="errors.agreed" class="error">{{ errors.agreed }}</span>
                    </div>

                    <button type="submit" class="submit-btn" :disabled="isLoading">
                        {{ isLoading ? 'Отправка...' : 'Отправить' }}
                    </button>
                </form>
            </div>
        </section>

        <v-modal v-model="showModal">
            <p style="font-size: 18px; font-weight: 500; margin: 0;">{{ modalMessage }}</p>
        </v-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { makeEmail } from '@/utils/makeEmail'

const config = useRuntimeConfig()

useHead({
    title: 'Ульяна Фомина - Frontend разработчик сайтов из Челябинска',
    meta: [
        {
            name: 'description',
            content: 'Frontend разработчик сайтов из Челябинска. Разработка на Vue 3 / Nuxt 3, верстка, оптимизация и SEO. Портфолио проектов.'
        },
        {
            name: 'keywords',
            content: 'frontend разработчик, vue разработчик, nuxt разработчик, верстка сайтов, челябинск, веб-разработка'
        },
        {
            property: 'og:title',
            content: 'Ульяна Фомина - Frontend разработчик сайтов'
        },
        {
            property: 'og:description',
            content: 'Frontend разработчик сайтов из Челябинска. Разработка на Vue 3 / Nuxt 3, верстка, оптимизация и SEO.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://domain.com'
        },
        {
            name: 'twitter:card',
            content: 'summary'
        },
        {
            name: 'twitter:title',
            content: 'Ульяна Фомина - Frontend разработчик сайтов'
        },
        {
            name: 'twitter:description',
            content: 'Frontend разработчик сайтов из Челябинска. Разработка на Vue 3 / Nuxt 3, верстка, оптимизация и SEO.'
        }
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg'
        }
    ]
})

const formData = ref({
    name: '',
    email: '',
    agreed: false
})
console.log('test');

const errors = ref({
    name: '',
    email: '',
    agreed: ''
})

const isLoading = ref(false)
const showModal = ref(false)
const modalMessage = ref('')

const validateName = () => {
    if (!formData.value.name.trim()) {
        errors.value.name = 'Поле обязательно для заполнения'
        return false
    }
    if (formData.value.name.trim().length < 2) {
        errors.value.name = 'Имя должно содержать минимум 2 символа'
        return false
    }
    errors.value.name = ''
    return true
}

const validateEmail = () => {
    if (!formData.value.email.trim()) {
        errors.value.email = 'Поле обязательно для заполнения'
        return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.value.email)) {
        errors.value.email = 'Введите корректный email'
        return false
    }
    errors.value.email = ''
    return true
}

const validateAgreed = () => {
    if (!formData.value.agreed) {
        errors.value.agreed = 'Необходимо согласиться'
        return false
    }
    errors.value.agreed = ''
    return true
}

const clearError = (field) => {
    if (errors.value[field]) {
        errors.value[field] = ''
    }
}

const handleSubmit = async () => {
    const isNameValid = validateName()
    const isEmailValid = validateEmail()
    const isAgreedValid = validateAgreed()

    if (!isNameValid || !isEmailValid || !isAgreedValid) {
        return
    }

    isLoading.value = true

    try {
        const backendAddress = config.public.backend_address
        const mailTo = config.public.mail_to
        const currentUrl = window.location.href

        const emailData = makeEmail({
            name: formData.value.name,
            email: formData.value.email
        }, currentUrl)

        const response = await fetch(`${backendAddress}/mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mailTo: mailTo,
                mailString: emailData,
                site_from: 'сайт-визитка Ульяны',
                data: {
                    name: formData.value.name,
                    email: formData.value.email,
                },
            }),
        })

        if (!response.ok) {
            throw new Error('Ошибка при отправке заявки')
        }

        modalMessage.value = 'Заявка отправлена!'
        showModal.value = true

        // Сброс формы
        formData.value = {
            name: '',
            email: '',
            agreed: false
        }
    } catch (error) {
        console.error('Ошибка отправки формы:', error)
        modalMessage.value = 'Произошла ошибка при отправке заявки. Попробуйте позже.'
        showModal.value = true
    } finally {
        isLoading.value = false
    }
}
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
                    mask-repeat: no-repeat
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

    .benefits-section
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
                .number-wrapper
                    display: flex
                    justify-content: flex-end
                    align-items: flex-start
                    position: relative
                    .number
                        display: flex
                        align-items: center
                        justify-content: center
                        width: 32px
                        height: 32px
                        background-color: var(--main-color)
                        color: #fff
                        border-radius: 50%
                        font-weight: 700
                        font-size: 18px
                        z-index: 1
                .title
                    align-self: center
                    font-weight: 500
                .desc
                    grid-column: 2/3
                &:last-child
                    border-bottom: none

    .form-section
        .form
            display: flex
            flex-direction: column
            gap: 20px
            .field
                display: flex
                flex-direction: column
                gap: 8px
                .label
                    font-size: 14px
                    font-weight: 500
                    color: var(--dark-color)
                .input
                    padding: 12px 16px
                    border: 1px solid #a0a0a0
                    border-radius: 6px
                    font-size: 16px
                    background-color: #fff
                    transition: border-color .3s ease
                    &::placeholder
                        color: var(--gray-text)
                    &:focus
                        border-color: var(--main-color)
                    &.has-error
                        border-color: var(--error-color)
                .error
                    font-size: 12px
                    color: var(--error-color)
                .checkbox-label
                    display: flex
                    align-items: flex-start
                    gap: 12px
                    cursor: pointer
                    input[type="checkbox"]
                        display: none
                    .checkbox-custom
                        width: 20px
                        height: 20px
                        min-width: 20px
                        border: 2px solid #a0a0a0
                        border-radius: 4px
                        position: relative
                        transition: all .3s ease
                        margin-top: 2px
                    input:checked + .checkbox-custom
                        background-color: var(--main-color)
                        border-color: var(--main-color)
                        &::after
                            content: ''
                            position: absolute
                            top: 50%
                            left: 50%
                            transform: translate(-50%, -60%) rotate(45deg)
                            width: 5px
                            height: 10px
                            border: solid #fff
                            border-width: 0 2px 2px 0
                    .checkbox-text
                        font-size: 14px
                        color: var(--dark-color)
                        line-height: 1.5
                        user-select: none
                        .privacy-link
                            color: var(--main-color)
                            text-decoration: none
                            transition: opacity .3s ease
                            &:hover
                                opacity: 0.7
            .submit-btn
                padding: 16px 32px
                background-color: var(--main-color)
                color: #fff
                border: none
                border-radius: 6px
                font-size: 16px
                font-weight: 700
                cursor: pointer
                transition: background-color .3s ease, transform .2s ease, opacity .3s ease
                align-self: flex-start
                margin-top: 10px
                &:hover:not(:disabled)
                    background-color: #e69500
                &:active:not(:disabled)
                    transform: scale(0.98)
                &:disabled
                    opacity: 0.6
                    cursor: not-allowed

@media only screen and (min-width: $bp-tablet)
    .home-page
        .main-section
            .content
                align-items: center
            .socials
                .link
                    width: 45px
                    height: 45px
            .h1
                font-size: 2.5rem
                text-align: center
                margin: 40px 0
            .overtitle
                &::before
                    left: 0%
            .image
                width: 50vw
                height: 60vw
            .btns
                font-size: 18px
                .btn
                    padding: 20px 40px

        .skills-section
            .h2, .text
                text-align: center
            .text
                font-size: 18px
                margin-top: 20px
            .items
                .item
                    grid-gap: 10px 20px
                    grid-template-columns: 60px 1fr
                    grid-template-rows: 60px 1fr
                    .icon-wrapper
                        grid-row: 1/3
                        justify-content: center
                        align-items: center
                        .icon
                            width: 40px
                        .circle
                            left: 0
                            top: unset
                            bottom: 50%
                            width: 40px
                            height: 40px
                    .title
                        font-size: 20px
                    .desc
                        font-size: 18px

        .portfolio-section
            .h2
                text-align: center
            .items
                .item
                    .prompt
                        font-size: 1rem
                        padding: 8px 12px
                        font-weight: 500

        .benefits-section
            .h2
                text-align: center
            .items
                .item
                    grid-template-columns: 45px 1fr
                    grid-template-rows: 45px 1fr
                    grid-gap: 20px
                    .number-wrapper
                        .number
                            width: 45px
                            height: 45px
                            font-size: 1.75rem
                    .title
                        font-size: 20px
                    .desc
                        font-size: 18px

        .form-section
            .h2
                text-align: center
            .form
                max-width: 600px
                margin-left: auto
                margin-right: auto

@media only screen and (min-width: $bp-tablet-landscape-up)
    .home-page
        .main-section
            .content
                display: grid
                grid-template-columns: 1fr 1fr
                grid-template-rows: auto 1fr auto 1fr
                grid-template-areas: 'socials socials' 'image overtitle' 'image title' 'image btns'
                grid-gap: 0 40px
            .socials
                grid-area: socials
                .link
                    width: 40px
                    height: 40px
            .h1
                font-size: 2.5rem
                text-align: left
                margin:  0
                grid-area: title
                align-self: start
            .overtitle
                grid-area: overtitle
                text-align: left
                align-self: start
                &::before
                    left: 0%
            .image
                grid-area: image
                width: 100%
                height: 550px
            .btns
                grid-area: btns
                font-size: 18px
                .btn
                    padding: 20px 40px

        .skills-section
            .h2, .text
                text-align: center
            .text
                font-size: 18px
                margin-top: 20px
            .items
                display: grid
                grid-template-columns: 1fr 1fr
                .item
                    grid-gap: 10px 20px
                    grid-template-columns: 60px 1fr
                    grid-template-rows: 60px 1fr
                    padding: 20px
                    .icon-wrapper
                        grid-row: 1/3
                        justify-content: center
                        align-items: center
                        .icon
                            width: 40px
                        .circle
                            left: 0
                            top: unset
                            bottom: 50%
                            width: 40px
                            height: 40px
                    .title
                        font-size: 20px
                    .desc
                        font-size: 18px
                    &:nth-child(5)
                        border-bottom: none
                    &:nth-child(even)
                        border-left: 1px solid #a0a0a0

        .portfolio-section
            .h2
                text-align: center
            .items
                display: grid
                grid-template-columns: 1fr 1fr
                .item
                    transition: box-shadow .3s ease
                    .prompt
                        font-size: 14px
                        padding: 8px 12px
                        font-weight: 500
                    &:hover
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px

        .benefits-section
            .h2
                text-align: center
            .items
                display: grid
                grid-template-columns: 1fr 1fr 1fr
                .item
                    grid-template-columns: 40px 1fr
                    grid-template-rows: 40px 1fr
                    grid-gap: 10px 20px
                    border: none
                    .number-wrapper
                        .number
                            width: 40px
                            height: 40px
                            font-size: 1.75rem
                    .title
                        font-size: 18px
                    .desc
                        font-size: 1rem

        .form-section
            .h2
                text-align: center
            .form
                max-width: 600px
                margin-left: auto
                margin-right: auto

@media only screen and (min-width: $bp-pc)
    .home-page
        .main-section
            .content
                display: grid
                grid-template-columns: 3fr 5fr
                grid-template-areas: 'socials socials' 'image overtitle' 'image title' 'image btns'
                grid-gap: 0 40px
                padding-top: 0
                padding-bottom: 0
            .socials
                grid-area: socials
                .link
                    width: 45px
                    height: 45px
                    .icon
                        width: 50%
                        height: 50%
            .h1
                font-size: 3.25rem
                text-align: left
                margin:  0
                grid-area: title
                align-self: start
                margin-top: -10%
            .overtitle
                grid-area: overtitle
                text-align: left
                align-self: start
                &::before
                    left: 0%
            .image
                grid-area: image
                width: 100%
                height: 550px
            .btns
                grid-area: btns
                margin: 0
                font-size: 18px
                .btn
                    padding: 20px 40px
                    &:hover
                        background-color: rgba(255, 255, 255, .5)
                    &-highlight
                        transition: .3s ease
                        &:hover
                            background-color: var(--main-color)
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px

        .skills-section
            .h2, .text
                text-align: center
            .text
                font-size: 18px
                margin-top: 20px
            .items
                display: grid
                grid-template-columns: 1fr 1fr 1fr
                .item
                    grid-gap: 10px 20px
                    grid-template-columns: 60px 1fr
                    grid-template-rows: 60px 1fr
                    padding: 20px
                    border-left: 1px solid #a0a0a0
                    .icon-wrapper
                        grid-row: 1/3
                        justify-content: center
                        align-items: center
                        .icon
                            width: 40px
                        .circle
                            left: 0
                            top: unset
                            bottom: 50%
                            width: 40px
                            height: 40px
                    .title
                        font-size: 20px
                    .desc
                        font-size: 16px
                    &:nth-child(4), &:nth-child(5)
                        border-bottom: none
                        border-left: none
                    &:first-child, &:nth-child(3), &:nth-child(6), &:nth-child(5)
                        border-right: none
                    &:first-child
                        border-left: none
                    &:nth-child(5)
                        border-left: 1px solid #a0a0a0
        .form-section
            .h2
                text-align: center
            .form
                max-width: 600px
                margin-left: auto
                margin-right: auto
                padding: 10px
                margin-top: 40px
</style>