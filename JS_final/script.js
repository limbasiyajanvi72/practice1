let myheroes=['Thor','Spiderman']
let dcHeroes=['batman','superman','black-adam'];

let heropowers={
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log('Spider poewer is ${this.spiderman}');
    }
}

Object.prototype.janvi=function(){
    console.log('Janvi is present in all objects');
}

myheroes.janvi()

const user={
    name:'topname',
    email:'topuser@mail.com'
}

const Teacher={
    makevideoes:true
}

const TeachingSupport={
    isAvailable:false
}

const TsAssistant={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user
Object.setPrototypeOf(TeachingSupport,Teacher)

