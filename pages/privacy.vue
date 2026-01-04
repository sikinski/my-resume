<template>
    <div class="privacy-page">
        <section class="privacy-section">
            <div class="content">
                <h1 class="h1">Политика конфиденциальности</h1>

                <div class="text-content">
                    <p class="text">Дата последнего обновления: {{ currentDate }}</p>

                    <h2 class="h2">1. Общие положения</h2>
                    <p class="text">
                        Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
                        пользователей сайта https://sikinski.github.io/my-resume/ (далее — Сайт).
                    </p>
                    <p class="text">
                        Используя Сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
                    </p>

                    <h2 class="h2">2. Собираемая информация</h2>
                    <p class="text">
                        При заполнении формы обратной связи на Сайте мы собираем следующую информацию:
                    </p>
                    <ul class="list">
                        <li>Имя</li>
                        <li>Email адрес</li>
                    </ul>

                    <h2 class="h2">3. Цели использования информации</h2>
                    <p class="text">
                        Собранная информация используется исключительно для:
                    </p>
                    <ul class="list">
                        <li>Обработки и ответа на ваши заявки</li>
                        <li>Связи с вами по вопросам сотрудничества</li>
                        <li>Улучшения работы Сайта</li>
                    </ul>

                    <h2 class="h2">4. Защита персональных данных</h2>
                    <p class="text">
                        Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного
                        доступа, изменения, раскрытия или уничтожения.
                    </p>

                    <h2 class="h2">5. Передача данных третьим лицам</h2>
                    <p class="text">
                        Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, когда это
                        необходимо для обработки вашей заявки или требуется законодательством.
                    </p>

                    <h2 class="h2">6. Ваши права</h2>
                    <p class="text">
                        Вы имеете право:
                    </p>
                    <ul class="list">
                        <li>Получить информацию о ваших персональных данных</li>
                        <li>Требовать исправления неточных данных</li>
                        <li>Требовать удаления ваших персональных данных</li>
                        <li>Отозвать согласие на обработку персональных данных</li>
                    </ul>

                    <h2 class="h2">7. Cookies</h2>
                    <p class="text">
                        Сайт может использовать файлы cookie для улучшения работы и анализа использования Сайта. Вы
                        можете отключить cookies в настройках вашего браузера.
                    </p>

                    <h2 class="h2">8. Изменения в Политике конфиденциальности</h2>
                    <p class="text">
                        Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Все
                        изменения вступают в силу с момента их публикации на Сайте.
                    </p>

                    <h2 class="h2">9. Контактная информация</h2>
                    <p class="text">
                        По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами через
                        форму обратной связи на Сайте.
                    </p>

                    <div class="back-link">
                        <NuxtLink to="/" class="link">← Вернуться на главную</NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const currentDate = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})

useHead({
    title: 'Политика конфиденциальности - https://sikinski.github.io/my-resume/',
    meta: [
        {
            name: 'description',
            content: 'Политика конфиденциальности сайта. Информация об обработке персональных данных.'
        },
        {
            name: 'robots',
            content: 'noindex, nofollow'
        }
    ]
})
</script>

<style lang="sass">
@use '@/assets/styles/adaptive' as *

.privacy-page
    .privacy-section
        padding: 40px 0
        .content
            max-width: 800px
            margin: 0 auto
            .h1
                font-size: 2rem
                font-weight: 500
                margin-bottom: 30px
                text-align: center
            .h2
                font-size: 1.5rem
                font-weight: 500
                margin-top: 40px
                margin-bottom: 15px
            .text-content
                .text
                    font-size: 16px
                    line-height: 1.6
                    margin-bottom: 15px
                    color: #333
                .list
                    margin: 15px 0
                    padding-left: 25px
                    li
                        font-size: 16px
                        line-height: 1.8
                        margin-bottom: 8px
                        color: #333
            .back-link
                margin-top: 50px
                padding-top: 30px
                border-top: 1px solid #a0a0a0
                .link
                    color: var(--main-color)
                    font-size: 16px
                    font-weight: 500
                    text-decoration: none
                    transition: opacity .3s ease
                    &:hover
                        opacity: 0.7

@media only screen and (min-width: $bp-tablet)
    .privacy-page
        .privacy-section
            padding: 60px 0
            .content
                .h1
                    font-size: 2.5rem
                .h2
                    font-size: 1.75rem
                .text-content
                    .text
                        font-size: 18px
                    .list
                        li
                            font-size: 18px
</style>
