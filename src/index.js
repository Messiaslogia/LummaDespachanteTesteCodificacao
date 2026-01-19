// coletando argumento de pesquisa via CLI
const termo = process.argv[2];

if (!termo) {
    console.log("Informe um termo de busca");
    console.log("npm start -- 'economia'");
    process.exit(1)
};

console.log(`Buscando notícias sobre: ${termo}`);