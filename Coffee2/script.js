//const elemC = document.getElementsByClassName('coffee')[0];
//elemC.style.backgroundColor ='#ff5577';
volCoffe = 50;
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
        if (this.coffee1 < this.coffee2 & this.water1 < this.water2) {
            alert("baki zapolnit");
        }else {
             if (this.coffee1 < this.coffee2 & this.water1 >= this.water2) {
               alert("coffee zapolnit");
             } else {
                 if (this.coffee1 >= this.coffee2 & this.water1 < this.water2) {
                     alert("water zapolnit");
                 } else{
                    this.coffee1 = this.coffee1-this.coffee2;
                    this.water1 = this.water1 - this.water2;
                     alert("coffe please");
                     console.log(this.coffee1);
                     console.log(this.water1)
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
        alert("water full");
        console.log(this.water1)
    }
    fillCoffee(){
        this.coffee1 = volCoffe;
        alert("coffe full");
        console.log(this.coffee1);
    }

}
const americano = new Coffeema(5,20);





