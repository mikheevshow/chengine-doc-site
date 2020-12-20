export const mainPageSnapshot = {
    advantages: [
        {
            title: 'Fluent API',
            content: 'Фреймворк предоставляет удобный и декларативный API для написания обработчиков сообщений из мессенджеров.' +
                ' С помощью него вы сможете с легкостью управлять содержимым сообщений, клавиатурами, медиа-ресурсами, а также многим другим.'
        },
        {
            title: 'Интегрирован со Spring Boot <img height="20" src="https://img.icons8.com/color/144/000000/spring-logo.png"/> ',
            content: '<strong>Chengine</strong> имеет интеграцию со Spring Boot из коробки. Специальный набор аннотаций позволит создавать ' +
                'Spring компоненты и пользоваться механизмом Dependency Injection без препятствий'
        },
        {
            title: 'Один для всех',
            content: 'Множество реализаций коннекторов для различных мессенджеров позволяет писать универсальную бизнес-логику.'
        }
    ],
    cards: [
        {
            title: 'Готовы начать?',
            text: 'Пройдите базовые уроки для начала работы с Chengine.',
            buttonText: 'Быстрый старт',
            link: '/quick-start'
        },
        {
            title: 'Книга рецептов',
            text: 'Здесь вы найдете примеры использования различных конструкций фреймворка.',
            buttonText: 'Выпекаем',
            link: '/cook-book'
        }
    ],
    codeExamples: [
        {
            title: 'Создавайте обработчики команд',
            text: 'Для создания простейших обработчиков команд достаточно использовать всего две аннотации ' +
                '<span class="text-badge text-monospace">@ComponentHandler</span> и <span class="text-badge text-monospace">' +
                '@HandleCommand</span>.<br><br>' +
                'Для отправки сообщений пользователю используйте объект <span class="text-badge text-monospace">Send</span>. ' +
                'Этот объект позволит вам посылать пользователю как обычные текстовые сообщения, так и различный медиа контент: ' +
                'изображения, аудио/видео и прочие файлы.'
            + '',
            code: '@ComponentHandler\n' +
                'public class HelloHandler {\n\n' +
                '  @HandleCommand(\"\\hello\")\n' +
                '  public Send helloMessage(User user) {\n' +
                '    return Send.messageWithText(() -> "Hello " + user.username())\n' +
                '  }\n' +
                '}\n'
        },
        {
            title: 'Inline клавиатуры',
            text: 'Chengine предоставляет возможность удобного управления inline клавиатурами.\n Вы можете добавить разметку ' +
                'для клавиатуры, используя FluentAPI. <br><br> Для всякой кнопки клавиатуры необходимо указать команду обратного вызова' +
                ', используя метод <span class="text-badge text-monospace">.withPayload()</span>. Чтобы изменить сообщение ' +
                'по нажатию на кнопку клавиатуры, достаточно создать метод обработки команды с возвращаемым значением типа ' +
                '<span class="text-badge text-monospace">Edit</span>. <br><br>',
            code: '@ComponentHandler\n' +
                'public class InlineKeyboardExample {\n' +
                '\t\n' +
                '  @HandleCommand(\"\\keyboard\")\n' +
                '  public Send messageWithKeyboard() {\n' +
                '    return Send\n' +
                '      .message()\n' +
                '      .withText(() -> \"Example with keyboard!\")\n' +
                '      .withInlineKeyboard(k -> k\n' +
                '        .addRow(r -> r\n' +
                '          .addButton(r -> r\n' +
                '          .withText(() -> \"Push me to change button\")\n' +
                '          .withPayload(() -> \"\\changemessage\")\n' +
                '          )\n' +
                '        )\n' +
                '      );\n' +
                '  }\n' +
                '\t\n' +
                '  // Изменяем текущее сообщение, обрабатывая callback\n' +
                '  // от нажатой кнопки.\n' +
                '  @HandleCommand(\"\\changemessage\")\n' +
                '  public Edit messageWithKeyboard() {\n' +
                '    return Edit\n' +
                '      .message()\n' +
                '      .setText(() -> \"Current message edited!\")\n' +
                '      .deleteInlineKeyboard();\n' +
                '  }\n' +
                '}\n'
        }
    ]
}