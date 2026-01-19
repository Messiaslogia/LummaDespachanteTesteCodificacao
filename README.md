# LummaDespachanteTesteCodificacao
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
- Node.js instalado
- API Key do New York Times


## Configuração

Crie um arquivo `.env` na raiz do projeto, ou utilize o arquivo `.env.exemple`:
Troque o valor de: NYT_API_KEY=SUA_API_KEY_AQUI