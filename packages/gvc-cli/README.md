# GVC - Generate Vue Component

## Установка / Installation

Инструмент находится в pre-alpha версии, потому не опубликован на npm, установка происходит в полуручном режиме.

The tool is in the pre-alpha version, therefore it is not published on npm, the installation takes place in a semi-manual mode.

Клонируем проект / Clone the project
```
git clone git@github.com:dcrtit/kit.git
```

Переходим директорию монорепозитория/gvc-cli

Go to the mono-repository directory/gvc-cli
```
cd *monorepo catalog*/packages/gvc-cli/
```

Линкуем проект как глобальный пакет

Link project as global package
```
npm link
```

## Использование / Usage

Доступные команды:

* `gvc` - Сгенерирует компонент в текущей директории с параметрами, задаными по умолчанию.

Параметры:

* `--help` | `-h` - Выводит в консоль информацию о текущей версии инструмента, также доступные команды;
* `--setup` | `-S` - Запускает режим установки параметров по умолчанию;
* `--name` | `-n` - Имя проекта, пример: `gvc --name DataTable` (сгенерирует компонент ./components/DataTable);
* `--lang` | `-l` - Язык разработки (javascript либо typescript), пример: `gvc --lang typescript`;
* `--class-component` | `-cc` - Использование ООП синтаксиса, необходим [vue-class-component](https://github.com/vuejs/vue-class-component "Vue Class Component"), либо [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator "Vue Property Decorator"), либо [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator "Nuxt Propert Decorator") (Если используете Nuxt);
* `--style` | `-s` - Файл стилей, поддерживает CSS, SCSS, LESS, пример `gvc --name DataTable --style less` (сгенерирует компонент DataTable с файлом стилей data-table.less);
* `--vue` | `-v` - Версия Vue, принимает строки 'vue2', 'vue3', пример `gvc --vue vue2` (сгенерирует vue-2 компонент с Options API).

## Удаление / Uninstall

Перейдите в папку с проектом и отлинкуйте и удалите глобальный пакет:

```
cd *monorepo catalog*/packages/gvc-cli/
npm unlink @dcrtit/gvc-cli
npm uninstall --global @dcrtit/gvc-cli
```

## Roadmap

> Дополнительные параметры:

* `--root-tag` | `-rt` | `-tag` - Корневой тег компонента;
* `--prefix` | `-pf` - Префикс компонента, css-класса и класса при использовании Class Components.

> Новые фичи:

* Будем думать над глобальным рефакторингом и оптимизацией генерации шаблонов с использованием шаблонизаторов (pug, twig);
* Покрыть тестами генерацию файлов;
* TypeScript поддержка;
* Обработка ошибок, там, где этого еще нет;
* Перевод README.md на инглиш.


Ждем предложений по улучшению в дискусии:
https://github.com/dcrtit/kit/discussions/9
