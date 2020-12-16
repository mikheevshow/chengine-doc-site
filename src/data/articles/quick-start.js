export const quickStart = {
    header: 'Быстрый старт',
    synopsis: 'В этой статье рассматривается начало работы с <strong>Chengine</strong> с' +
        ' использованием стартера для <strong>Spring Boot</strong>,' +
        'а также кратко рассмотрены особенности работы с командами для ботов и отправкой сообщений.',
    sections: [
        {
            header: 'Добавление зависимостей',
            content: [
                {
                    type: 'text',
                    content: 'Если вы используете maven, добавьте следующие строки в ваш <span class="text-badge">pom.xml</span> файл:'
                },
                {
                    type: 'code',
                    language: 'xml',
                    content:
                        '<dependency>\n' +
                        '\t<groupId>io.chengine</groupId>\n' +
                        '\t<artifactId>spring-boot-starter-telegram</artifactId>\n' +
                        '\t<version>1.0.0</version>\n' +
                        '</dependency>'
                },
                {
                    type: 'text',
                    content: 'Если вы используете Gradle, то добавьте следующие строки в <span class="text-badge">.gradle</span>:'
                },
                {
                    type: 'code',
                    language: 'kotlin',
                    content: 'implementation(\'io.chengine:spring-boot-starter-telegram:1.0.0\')'
                },
            ]
        },
        {
            header: 'Добавление токена доступа',
            content: [
                {
                    type: 'text',
                    content: 'Добавьте необходимую конфигурацию для доступа к Telegram API, как показано на примере ниже. ' +
                        'Подробнее о том, как получить токен доступа и имя пользователя для бота, вы узнать из ' +
                        'официальной <a target="_blank" rel="noopener noreferrer" href="https://core.telegram.org/bots#3-how-do-i-create-a-bot">документации</a>.'
                },
                {
                    type: 'code',
                    language: 'yml',
                    content:
                        'chengine:\n' +
                        '  telegram:\n' +
                        '    token: AAAABBBB:1112222333444555\n' +
                        '    username: bot_username\n'
                }
            ]
        },
        {
            header: 'Да будет свет, скажи \"Привет!\"',
            content: []

        },
        {
            header: 'Куда двигаться дальше',
            content: []
        }
    ]
}