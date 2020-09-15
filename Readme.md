# Тестовое задание - Фьюче на позицию frontend разработчика

**Инструменты:** любой сборщик на платформе Node.js; \
**Библиотеки:** React, Redux; \
**Результат:** ссылка на страницу, а также git репозиторий с исходниками верстки.

## Описание задания

Необходимо разработать React-приложение для отображения таблицы с данными. Дополнительным плюсом будет: Финальный билд приложения должен быть запускаться из Docker контейнера (хотябы с минимальной конфигурацией)\

**Функционал**

1. Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике — по убыванию. Графическим элементом или текстовым сообщением указывается направление сортировки.

2. Клиентская пагинация: данные необходимо отображать постранично, максимум 50 элементов на страницу. Необходимо предоставить пользовательскую навигацию для перехода по страницам.

3. Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Перефильтрация осуществляется по нажатию на кнопку "Найти".
   По клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей.
   Данные в таблицу загружаются с сервера. Способ загрузки с сервера на ваш выбор.
   Над таблицей присутсвует кнопка добавить, по нажатии на которую выпадает форма добавления ряда :<br>

|  id   | firstName | lastName | email | phone |
| :---: | :-------: | :------: | :---: | :---: |
| input |   input   |  input   | input | input |

После заполнения всех инпутов активируется кнопка Добавить в таблицу которая вставляет заполненный ряд в начало таблицы

Для демонстрации работы компонента необходимо сделать простую HTML страницу. Пользователю предлагается выбрать набор данных: маленький или большой. При выборе набора данных он загружается с сервера и по данным строится таблица.

**Формат данных от сервера**

Сервер возвращает JSON-массив данных. Пример данных:

```
[
	{
		id: 101,
		firstName: 'Sue',
		lastName: 'Corson',
		email: 'DWhalley@in.gov',
		phone: '(612)211-6296',
		address: {
			streetAddress: '9792 Mattis Ct',
			city: 'Waukesha',
			state: 'WI',
			zip: '22178'
		},
		description: 'et lacus magna dolor...',
	}
]
```

Маленький объем данных берется по ссылке http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}

Большой объем данных берется по ссылке http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}

**Замечания**

Особое внимание следует уделить скорости работы. Зависание интерфейса при выполнении операций загрузки данных, фильтрации, сортировки недопустимо.
Во время загрузки данных стоит показать какой-то индикатор
Использование сторонних библиотек будет плюсом только в случае если это оправданно и вы сможете объяснить причину выбора. Показав свои знания в грамотном применении сторонних готовых решений, вы имеете шанс повысить свою профессиональную привлекательность для нас.
Пишите код так, как бы вы его писали в работе — внутренности задания будут оцениваться даже тщательней, чем внешнее соответствие заданию. Код должен быть организован так, чтобы его можно было заново использовать.
Помните про обработку ошибок!
Верстка может быть самая простая. Визуализацию и украшение делайте на ваш вкус. Мы не против использования Bootstrap или похожего UI фреймворк, но только для UI представления (нельзя использовать JS код для решения задачи, но можно использовать для оформительских эффектов (анимации и тому подобное))!
Схема визуального представления данных

| id ▲ | firstName ▼ | lastName ▼ | email ▼         | phone ▼       |
| ---- | ----------- | ---------- | --------------- | ------------- |
| 101  | Sue         | Corson     | DWhalley@in.gov | (612)211-6296 |
| 102  | Lor         | Ipsumd     | dwhalley@in.gov | (612)211-6296 |
| 103  | Ips         | Umdolo     | dwhalley@in.gov | (612)211-6296 |

Если выделен пользователем с id = 101, то под таблицей выводим следующую информацию:

```
Выбран пользователь <b>Sue Corson</b>
Описание:
<textarea>
et lacus magna dolor...
</textarea>
Адрес проживания: <b>9792 Mattis Ct</b>
Город: <b>Waukesha</b>
Провинция/штат: <b>WI</b>
Индекс: <b>22178</b>
```

**Дополнительно** напишите нам, как вы тестировали результат своей работы. Какие используете инструменты и как вы осуществляете тестирование.
