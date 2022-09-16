# considerations

- Cenários:
  - Foram mapeados e implementados os principais cenários end-to-end da aplicação considerando casos de sucesso e casos de exceção.
- Implementação:
  - Testes separados em fluxos realizados diretamente na interface (diretório e2e/gui) e interações nos endpoints (diretório e2e/api);
  - Implementados para serem independentes da massa de dados, ou seja, todo o setup necessário para cada teste é feito através do uso de beforeEach;
  - Separação de responsabilidades entre commands e asserções, onde um atua de forma isolada do outro.
- Pacotes:
  - cypress (framework em javascript para testes e2e);
  - @bahmutov/cy-api (facilita a visualização da interação com os endpoints);
  - chance (gerar dados aleatórios nos testes onde faz sentido randomizar informações);
  - eslint (padronização da escrita de código).
- Pontos de melhorias:
  - Devido à necessidade de criar testes independentes, o tempo de setup para alguns cenários acaba sendo um pouco maior. Uma forma de facilitar e otimizar isso seria, por exemplo, dispor de endpoints tanto para a criação de novos usuários, quanto para a geração de tokens. Dessa forma, nos fluxos onde existe a necessidade de possuir um usuário cadastrado, por exemplo, esse cadastro poderia ser feito via API e tornar a execução do teste muito mais rápida. O mesmo vale para os testes nas API's, onde é necessário o uso de um token válido;
  - Alguns elementos da aplicação não possuem bons identificadores para a seleção, uma forma de melhorar isso seria o uso de [atributos específicos](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) para os testes end-to-end.
