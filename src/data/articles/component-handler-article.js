export const art = {
    header: 'Handler Component',
    synopsis: 'В этой теме мы рассмотрим создание компонентов-обработчиков с использованием <b>Spring Boot</b>',
    sections: [
        {
            header: 'Обзор',
            content: [
                {
                    type: 'text',
                    content: 'Chengine предоставляет специальную аннотацию ' +
                        '<span class="text-badge text-monospace">@HandlerComponent</span>, ' +
                        'которая позволяет создать обработчик команд, как Spring комонент:'
                },
                {
                    type: "code",
                    language: "java",
                    content:
                        'import io.chengine.springframework.ComponentHandler\n' +
                        'import io.chengine.handler.HandleCommand\n' +
                        '\n\n' +
                        '@HandlerComponent\n' +
                        'class UserCommandHandler {\n\n' +
                        '@HandleCommand(\"/hello\")\n' +
                        'public Send hello()\n' +
                        '\treturn Send.messageWithText(() -> "Привет пользователь!")\n' +
                        '}'
                },
                {
                    type: 'text',
                    content: 'Из очевидных преимуществ такого подхода - это возможность инжектировать ' +
                        'другие компоненты и сервисы в стиле Spring'
                },
            ]
        },
        {
            header: 'Конец',
            content: [

            ]
        }
    ]
}