# MedToken
 - Este projeto trata-se de um aplicativo de tokens voltados a hospitais. O projeto é para um trabalho da faculdade.
 - Criado em 20/05/2023
---

## Visão Geral

Este documento descreve o processo de desenvolvimento de um aplicativo de Token de atendimento hospitalar com foco em gerenciamento de dados. O aplicativo permitira que os usuários visualizem e tenham controle sobre sua posição na fila de algum hospital, individualmente cada usuário terá seu token e poderá gerenciar melhor o tempo até a sua vez no atendimento.

## Tecnologias Utilizadas

- Linguagem Frontend: <a href="https://www.typescriptlang.org/">Typescript</a>
- Framework FrontEnd: <a href="https://reactnative.dev/">React Native </a>
- Linguagem de Backend: <a href="https://www.typescriptlang.org/">Typescript</a>
- Framework Backend: <a href="https://fastify.dev/">Fastify</a> 
- ORM: <a href="https://www.prisma.io/">Prisma</a> 
- Banco de Dados: <a href="https://www.postgresql.org/">Postgres</a>

## Configuração do Ambiente de Desenvolvimento

1. Instale o Node.js e o npm;
2. Clone o repositório do projeto: `git clone https://github.com/carloosf/MedToken.git`;
3. Acesse a pasta do projeto: `cd medtoken`;
4. Acesse a pasta do projeto - back: `cd server`;
5. Acesse a pasta do projeto - front: `cd client`;
6. Instale as dependências em cada: `npm install`;
7. Configure as variáveis de ambiente, como chaves de API e configurações de segurança.

## Estrutura do Banco de Dados

- Tabela "tokendb":
    - id: id único e com auto-incrementação;
    - token: String única que define o Token do usuário;
    - name: String com nome do usuário;
    - date: String com data da solicitação do token;
    - prioridade: String informando qual opção de atendimento utilizada;
    - status: Booleano informando se o paciente já foi atendido.
    

## Rotas Implementadas

- `POST /`: Criação de novo token;
    - name: String;
    - prioridade: String.
- `GET /`: Solicitação para visualizar quais tokens estão na fila atual;
- `PUT /:id/`: Atualização pós consumo do token.





## :man_technologist: Autores

<table class="author">
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/ccarlossilv/">
       <img src="https://avatars.githubusercontent.com/carloosf" 
        width="100px;" alt="Carlos Silva"/>
        <br/>
        <sub>
          <b>Carlos Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/iamsamarav/">
       <img src="https://avatars.githubusercontent.com/iamsamarav" 
        width="100px;" alt="Samara Vitoria"/>
        <br/>
        <sub>
          <b>Samara Vitoria</b>
        </sub>
      </a>
    </td>
  </tr>
</table>   

<h4>Carlos Silva - Contatos</h4>
   Linkedin: [https://www.linkedin.com/in/carloosf/]
   
   E-mail: contato.carlossilvaf@gmail.com
   
<h4>Samara Vitória - Contatos</h4>
   Linkedin: [https://www.linkedin.com/in/iamsamarav/]
   
   E-mail: devsamaravitoria@gmail.com
