//const elemC = document.getElementsByClassName('coffee')[0];
//elemC.style.backgroundColor ='#ff5577';
volCoffe = 5;
volWater = 200;
class Coffeema{
    


    coffee1 = volCoffe;//текущее значение кофе в баке
    water1 = volWater;//текущее значение воды в баке

    coffee2; //гр кофе для напитка
    water2;// воды для напитка
    constructor(coffee2,water2){
        this.coffee2 = coffee2;
        this.water2 = water2;
    }
    
    coffeeCup(coffee2, water2){
        if (coffee1 < coffee2 & water1 < water2) {
            alert("Добавьте в бак кофе и воду");
        }else {
             if (coffee1 < coffee2 & water1 >= water2) {
               alert("Добавьте в бак кофе");
             } else {
                 if (coffee1 >= coffee2 & water1 < water2) {
                     alert("Добавьте в бак воду");
                 } else{
                     coffee1 = coffee1-coffee2;
                     water1 = water1 - water2;
                     alert("Кофе готов");
                 }
                }
            }
    }
    americano(){
        this.coffeeCup(5,200);
    }
    dowbleespresso(){
        this.coffeeCup(8,150);
    }
    espresso(){
        this.coffeeCup(4,150);
    }
    fillWater(){
        this.water1 = volWater;
        alert("Бак с водой заполнен");
    }
    fillCoffee(){
        this.coffee1 = volCoffe;
        alert("Бак с кофе заполнен");
    }

}
const americano = new Coffeema;
americano.coffeeCup(5,20);




