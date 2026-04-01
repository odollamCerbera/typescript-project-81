### Hexlet tests and linter status:
[![Actions Status](https://github.com/odollamCerbera/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/odollamCerbera/typescript-project-81/actions)

# Проект - "Генератор форм на Typescript"

Генератор форм — это библиотека, которая берет на себя обработку ошибок и другие задачи, для которых обычно нужно писать много шаблонного кода.  

## Установка:

После клонирования репозитория необходимо установить все зависимости:
```
git clone https://github.com/odollamCerbera/typescript-project-81.git
make install  
npm link 
```

## Демонстрация: 

Другие пакеты могут использовать библиотеку следующим образом:

```
import HexletCode from '@hexlet/code'

const template = { name: 'rob', job: 'hexlet', gender: 'm' }
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
  f.input('name')
  f.input('job', { as: 'textarea' })
  f.submit('Wow')
})

console.log(form)

//  <form action="#" method="post">
//      <label for="name">Name</label>
//      <input name="name" type="text" value="rob">
//      <label for="job">Job</label>
//      <textarea cols="20" rows="40" name="job">hexlet</textarea>
//      <input type="submit" value="Wow">
//  </form>
```