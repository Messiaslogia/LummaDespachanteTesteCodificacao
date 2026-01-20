# Lumma Despachante Teste de Codificacao
Etapa de Codificação para vaga de Analista JR 

Script em Node.js para coleta automatizada de notícias do New York Times
com base em um termo informado via linha de comando.

O script busca no mínimo 50 notícias, extrai título, data de publicação
e descrição, e exporta os dados para um arquivo Excel (.xlsx).

## Tecnologias utilizadas
- Node.js
- JavaScript
- Axios
- XLSX
- Dotenv

## Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- API Key do New York Times


## Configuração

Crie um arquivo `.env` na raiz do projeto, ou utilize o arquivo `.env.exemple`:
Troque o valor de: NYT_API_KEY=SUA_API_KEY_AQUI

A API Key pode ser obtida em:  
https://developer.nytimes.com/

## Instalação
Instale as dependências do projeto com o comando:

`npm install`

## Execução
`npm start -- economia`

## Funcionalidades
- Busca notícias no New York Times a partir de um termo informado pelo usuário
- Coleta de até **50 notícias** relacionadas ao tema pesquisado
- Extração das seguintes informações:
  - Título da notícia
  - Data de publicação
  - Descrição (abstract)
- Exportação dos dados para um arquivo **Excel (.xlsx)**
- Logs simples de progresso no terminal durante a execução
- Tratamento de casos onde o termo não possui 50 notícias disponíveis


