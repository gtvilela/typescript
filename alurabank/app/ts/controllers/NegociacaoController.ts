class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');


    constructor() {
        //Pegando os elementos do DOM com determinados id's utilzando JQuery
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();
        //Pega os dados do input e cria um objeto negociação
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        //Adiciona cada negociação criada dentro de um array
        this._negociacoes.adiciona(negociacao);
        //Cria uma tabela e inclui as negociações feitas detalhadas nela
        this._negociacoesView.update(this._negociacoes);
        //Cria uma mensagem ao incluir uma nova negociação 
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}