document.addEventListener('DOMContentLoaded', function() {
    const formEstoque = document.getElementById('formEstoque');
    const tabelaEstoque = document.getElementById('tabelaEstoque').getElementsByTagName('tbody')[0];

    formEstoque.addEventListener('submit', function(event) {
        event.preventDefault();

        const nomeProduto = document.getElementById('nomeProduto').value;
        const quantidadeProduto = document.getElementById('quantidadeProduto').value;
        const valorProduto = document.getElementById('valorProduto').value;
        const descricaoProduto = document.getElementById('descricaoProduto').value;
        const precoCustoProduto = document.getElementById('precoCustoProduto').value;
        const precoVendaProduto = document.getElementById('precoVendaProduto').value;
        const lucroProduto = (precoVendaProduto - precoCustoProduto).toFixed(2);

        const newRow = tabelaEstoque.insertRow();
        newRow.innerHTML = `
            <td>${nomeProduto}</td>
            <td>${quantidadeProduto}</td>
            <td>${valorProduto}</td>
            <td>${descricaoProduto}</td>
            <td>${precoCustoProduto}</td>
            <td>${precoVendaProduto}</td>
            <td>${lucroProduto}</td>
        `;

        formEstoque.reset();
    });
});
