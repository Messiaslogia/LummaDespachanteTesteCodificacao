import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

class NYTController {

    constructor() {
        this.API_KEY = process.env.NYT_API_KEY;
        this.BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    }

    // Busca noticias na API do New York Times
    async buscarNoticias(termo) {
        try {
            let noticias = [];

            for (let page = 0; page < 5; page++) {
                console.log(`Buscando página: ${page + 1}`);

                const response = await axios.get(this.BASE_URL, {
                    params: {
                        q: termo,
                        page,
                        'api-key': this.API_KEY
                    }
                });

                const docs = response.data.response.docs

                for (const doc of docs) {
                    noticias.push({
                        titulo: doc.headline.main,
                        data_publicacao: doc.pub_date.split('T')[0],
                        descricao: doc.abstract
                    });
                }
            }

            return noticias.slice(0, 50);;
        }
        catch (err) {
            console.error('Erro ao pesquisar notícias:');
            console.error(err.response?.data || err.message);
            return;
        }

    }

}

export default new NYTController();
