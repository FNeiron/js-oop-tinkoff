"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [lastName, firstName] = fio.split(' ');
    return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const set = new Set(array);
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (!array.length) return false;
    const min = array.reduce(function (accumulator, currentValue) {
        if (accumulator > currentValue) accumulator = currentValue;
        return accumulator;
    });
    const max = array.reduce(function (accumulator, currentValue) {
        if (accumulator < currentValue) accumulator = currentValue;
        return accumulator;
    });

    return max / min;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.map = new Map()
    }
    get(word){
        if(typeof word === 'string' && this.map.has(word))
            return this.map.get(word)
        else
            return false

    }
    set(word, word2){
        if(typeof word === 'string' && typeof word2 === 'string')
            this.map.set(word, word2)
        else
            return false
        return true
    }
    remove(word){
        if(typeof word === 'string' && this.map.has(word)) {
                this.map.delete(word)
                return true
            }
        else
            return false
    }
    printSelectedWord(word){
        if(typeof word === 'string')
            if(this.map.has(word))
                console.log(word + " " + this.get(word))
            else
                return false
        else
           return false
    }
    printAllWords(){
        for(let key of this.map.keys())
            console.log(key + " " + this.get(key))
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};