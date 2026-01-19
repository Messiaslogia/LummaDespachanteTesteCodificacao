import nytController from './controllers/NYTController.js';

// coletando argumento de pesquisa via CLI
const termo = process.argv[2];

if (!termo) {
    console.log("Informe um termo de busca");
    console.log("npm start -- 'economia'");
    process.exit(1)
};

console.log(`Buscando notícias sobre: ${termo}`);

const noticias = await nytController.buscarNoticias('tecnologia');

console.log(noticias)

if (noticias.length < 50) {
    console.log(`Foram encontradas apenas ${noticias.length} notícias.`);
} else {
    console.log("50 notícias encontradas com sucesso!");
}




