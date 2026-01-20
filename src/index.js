import nytController from './controllers/NYTController.js';
import { exportarNoticiasExcel } from './services/xlsxService.js';

// coletando argumento de pesquisa via CLI
const termo = process.argv[2];

if (!termo) {
    console.log("Informe um termo de busca");
    console.log("npm start -- 'economia'");
    process.exit(1)
};

console.log(`Buscando notícias sobre: ${termo}`);

try {
    const noticias = await nytController.buscarNoticias(termo);

    if (noticias.length < 50) {
        console.log(`Foram encontradas apenas ${noticias.length} noticias`);
    } else {
        console.log(`50 noticias encontradas com sucesso!`);
    }

    exportarNoticiasExcel(noticias, termo);

} catch (error) {
    console.error("Erro durante a execução do script:");
    console.error(error.message || error);
    process.exit(1);
}







