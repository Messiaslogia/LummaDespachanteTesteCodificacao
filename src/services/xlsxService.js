import xlsx from 'xlsx';

// Exportação da pesquisa do termo em arquivo .xlsx
export function exportarNoticiasExcel(noticias, termo) {
    const dados = noticias.map(n => ({
        'Título': n.titulo,
        'Data de Publicação': n.data_publicacao,
        'Descrição': n.descricao
    }));

    const worksheet = xlsx.utils.json_to_sheet(dados);
    const workbook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(workbook, worksheet, 'Noticias');

    const nomeArquivo = `src/utils/spreadSheets/noticias-${termo}.xlsx`;

    xlsx.writeFile(workbook, nomeArquivo);

    console.log(`Arquivo Excel gerado: ${nomeArquivo}`);
}