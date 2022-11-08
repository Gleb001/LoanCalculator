
# Translation of documentation
* [RU version](#Документация-к-скриптовой-части-проекта)
* [EN version](#Documentation-for-the-script-part-of-the-project)

# Документация к скриптовой части проекта

Идея и начальная реализация калькулятора для займов
была взята у [vitya101](https://github.com/vitya101).

Ссылка на сайт-калькулятор: https://gleb001.github.io/LoanCalculator/

## Оглавление
* [Архитектура проекта](## Архитектура проекта)
* [Словарть проекта](## Словарть проекта)
* [Выводы](##Выводы)

## Архитектура проекта
Архитектура данной программы имеет следующий достаточно
упрощённый вид, где:
* стрелки - зависимость одного файла от другого;
* пунктирные прямоугольные области - поле папки, слева вверху
данной области указано наименование папки;
* сплошные выделенные прямоугольные области с тектсом внутри -
файлы с их наименованием.

![sheme_1](./media/Simplified%20view%20of%20the%20js%20code%20architecture.png)

Как можно увидеть из вышепоказанной схемы, основной 
скрипт программы должен быть описан внутри файла,
содержащего прогаммируемые элементы. Например, в данном
небольшом проекте в качестве программируемых элементов (на
скриптовом языке JavsScript) выступают инпуты (inputs). 
Поэтому в папке scripts/ данного проекта лежат два файла в
папке inputs/, к каждому из которых подключаются требуемые
определёнными задачами:
* утилиты ([см. "Cловарь проекта"](###Утилита));
* иные подобные программируемые элементы (для получения постоянных
переменных или функций, для взаимодействия с данными элементами и т.п.).

Общая схема данного проекта представлена ниже (обозначения схемы
приводятся выше, при описании упрощенной системы проекта).

![sheme_2](./media/file%20script%20structure%20of%20the%20project.png)

Во время разработки описываемой архитектуры данного проекта наибольшее
внимание уделялось - возможности расширить проект добавлением новых
утилит или элементов проекта. Поэтому считаю важным остановиться на
данном моменте и уделить ему достаточное внимание. Хотя, вероятно, вы
и без моей помощи сможете реализовать данную идею.
Для расширения данного или проекта с подобной архитектурой, вы можете
использовать два по моему мнению подхода:
1. Добавление новых утилит в папкt utilities/ и последующее их
использование в проекте;
2. Добавление в файлы с программируемыми элементами функций с
расширенным функционалом.

Но всё же, как вы возможно понимаете, текущая архитектура далеко не
является "идеальной" во всех возможных отношенях. Поэтому доработка или
отказ от текущей архитектуры в угоду поставленных перед вами задач - 
неминуем.


## Словарть проекта
### Утилита
**Утилита (в данном проекте)** - это определённый набор независимых
вспомогательных функций, которые подточены под решение
определённых задач и могут использоваться в разных разделах /
частях проекта.

## Выводы
По окончанию ведению данного небольшого проекта были сделаны
следующие достаточно ценные выводы:
1. Использование самописных утилит - занимает достаточное
время на их разрабоку (примерно, 1-3 часов - зависит от
программиста), однако облегчает поддержку, отладку и изменение
проекта.
При изменении утилиты (например, изменении наименования
функции или её аргументов) может потребоваться соответствующие
изменения во всех разделах проекта, где используется данная
утилита. Поэтому к разработке самописных утилит (обратите на
это внимание) следуте подходить с определёнными продуманными
мотивами, чтобы в последствии не тратить на их изменение или
доработку много времени!
2. Лицензия - позволяет защитить права автора. В данном проекте
утилиты, находятся под лицензией
[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html),
которая была добавлена в проект с целью ознакомления с лицензиями
на программное обеспечение.
3. Следует перейти с JavaScript на [TypeScript](https://www.typescriptlang.org/),
так как статическая типизация TypeScript, дополняющая JavaScript,
имеет неоценимую пользу при разработке веб-приложений, а именно
защищает от неправильного использования функционала программы.
4. Скорее не вывод, а напоминанию самому себе, что наличие архитектуры,
основанной на [критериях хорошей архитектуры](https://habr.com/ru/post/276593/)
прораммного обеспечения, в программном обеспечении имеет
огромное значение при его разработке и отладке.


# Documentation for the script part of the project

The idea and initial implementation of the loan calculator
was taken from [vitya101](https://github.com/vitya101 ).

Link to the calculator website: https://gleb001.github.io/LoanCalculator/

## Table of contents
* [Project architecture](## Project architecture)
* [Project Dictionary](## Project Dictionary)
* [Conclusions](## Conclusions)

## Project architecture
The architecture of this program has the following rather
simplified form, where:
* arrows - dependence of one file on another;
* dotted rectangular areas - the folder field,
the name of the folder is indicated at the top left of this area;
* solid highlighted rectangular areas with text inside -
files with their names.

![sheme_1](./media/Simplified%20view%20of%20the%20js%20code%20architecture.png)

As can be seen from the above diagram, the main
script of the program should be described inside a file
containing programmable elements. For example, in this
small project, inputs act as programmable elements (in the
Javascript scripting language).
Therefore, in the scripts/ folder of this project there are two
files in:
* utilities ([see "Project Dictionary"](###Utility);
* other similar programmable elements (for obtaining constant
variables or functions, for interacting with these elements, etc.).

The general scheme of this project is presented below (the scheme
designations are given above when describing the simplified project
system): in a small project, inputs act as programmable elements
(in the Javascript scripting language).
Therefore, in the scripts/ folder of this project there are
two files in the inputs/ folder, to each of which the required
tasks are connected.

![sheme_2](./media/file%20script%20structure%20of%20the%20project.png)

During the development of the described architecture of this
project, the greatest attention was paid to the possibility of
expanding the project by adding new utilities or project elements.
Therefore, I consider it important to focus on this point and pay
sufficient attention to it. Although, probably, you will be able
to implement this idea without my help. To expand this or a project
with a similar architecture, you can use two approaches in my opinion:
1. Adding new utilities in the utilities/ folder and then
using them in the project;
2. Adding functions to files with programmable elements with
advanced functionality.

But still, as you may understand, the current architecture is far
from being "ideal" in every possible way. Therefore, the revision or
rejection of the current architecture for the sake of the tasks
assigned to you is inevitable.

## Project Dictionary
### Utility
**Utility (in this project)** is a certain set of independent
auxiliary functions that are tailored to solve
certain tasks and can be used in different sections /
parts of the project.

## Conclusions made during the development and debugging of this project
At the end of the management of this small project, the following
rather valuable conclusions were made:
1. Using self-written utilities - takes enough
time to develop them (approximately 1-3 hours - depends on
the programmer), but makes it easier to support, debug and modify
the project.
When changing the utility (for example, changing the name
of the function or its arguments), appropriate
changes may be required in all sections of the project where this
utility is used. Therefore, the development of self-written utilities
(pay attention to this) should be approached with certain thoughtful
motives, so as not to spend a lot of time later on changing or
refining them!
2. License - allows you to protect the rights of the author. In this
project, the utilities are under license
[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html),
which was added to the project in order to familiarize with
software licenses.
3. You should switch from JavaScript to [TypeScript](https://www.typescriptlang.org/),
since static TypeScript typing, which complements JavaScript,
has an invaluable benefit in the development of web applications, namely
, it protects against misuse of the program's functionality.
4. Rather than a conclusion, but a reminder to yourself that the presence of architecture,
based on [criteria for good architecture (ru)](https://habr.com/ru/post/276593/)
software, in software is of great importance in its development and debugging.
