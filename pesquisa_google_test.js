
Feature('Pesquisa google');

const login_page = require('./pages/pesquisa_google');

Scenario('test something', (I) => {
    I.amOnPage('/');
    login_page.pesquisar_algo('foo fighters');
    I.see('https://foofighters.com/')
});

