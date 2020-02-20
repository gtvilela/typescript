abstract class View<T> {
//Classe marcada como abstrata porque não deve ser implementada
//Classe pai com tipo genérico para que as classes que forem herdar, possa utilizar o tipo necessário para a mesma

    private _elemento: JQuery;

    constructor(seletor: string) {
        
        this._elemento = $(seletor);
    }

    update(model: T) {

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}