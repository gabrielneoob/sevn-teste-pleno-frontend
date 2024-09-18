# SEVN Sports - Rodadas de Jogos de Futebol

Este é um projeto desenvolvido como parte do teste de front-end pleno da SEVN, que consiste na criação de uma página fictícia de esportes, com um componente que exibe as rodadas de jogos de futebol.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página e do componente.
- **CSS**: Estilização do layout, com foco em responsividade.
- **TypeScript**: Adicionado para garantir tipagem estática e melhorar a manutenção do código.
- **Vite**: Ferramenta de build e desenvolvimento para otimizar o projeto.

## Funcionalidades

- **Exibição de Rodadas**: A página inicializa exibindo os jogos da primeira rodada.
- **Navegação entre Rodadas**: Botões de setas "<" e ">" permitem navegar entre as rodadas de jogos.
  - As setas são desativadas automaticamente se não houver rodadas anteriores ou próximas.
- **Escudos dos Times**: Os escudos são renderizados dinamicamente com base nos IDs retornados pela API.
- **Responsividade**: O componente e a página são responsivos, se ajustando a diferentes tamanhos de tela.

## Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabrielneoob/sevn-teste-pleno-frontend.git

2. Navegue até o diretório do projeto:

   ```bash
   cd sevn-teste-pleno-frontend

3. Instale as dependências:

   ```bash
   npm install

4. Execute o projeto:

   ```bash
   npm run dev