
const I = actor();

module.exports = {

    // setting locators
    fields: {
      campo_pesquisa: '#lst-ib'
    },
    
    submitButton: { 
      name: 'btnK'
    },

    pesquisar_algo(texto) {
      I.fillField(this.fields.campo_pesquisa, texto);
      I.click(this.submitButton);
    }
}


