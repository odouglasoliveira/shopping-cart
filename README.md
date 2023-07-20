# Shopping Cart

Este é um projeto de um site que simula uma loja online. Ao acessar o site, ele fará uma consulta a uma API para obter a lista de produtos disponíveis na loja. Em seguida, os produtos serão renderizados dinamicamente na página na forma de cards, contendo a imagem, preço, descrição e um botão "Adicionar ao Carrinho" para cada produto.

## Funcionalidades

- Consulta à API: Ao carregar a página, o código fará uma consulta à API para obter a lista de produtos disponíveis na loja.
- Renderização Dinâmica: Os produtos obtidos da API serão exibidos na página em formato de cards.
- Adicionar ao Carrinho: Cada card de produto terá um botão "Adicionar ao Carrinho" que permitirá ao usuário adicionar o produto ao carrinho de compras.
- Carrinho de Compras: O carrinho de compras mostrará os produtos adicionados, permitindo visualizar a imagem, preço, quantidade e um botão "Remover do Carrinho" para cada produto.
- Subtotal: O carrinho de compras também exibirá o subtotal dos produtos selecionados.
- Local Storage: Os produtos adicionados ao carrinho e o subtotal serão armazenados no Local Storage, tornando os dados persistentes mesmo após o fechamento do navegador.

## Tecnologias Utilizadas

- HTML: Responsável pela estrutura e marcação da página.
- CSS: Utilizado para estilização e layout do site.
- JavaScript: Responsável pela lógica e interatividade do projeto.
- API do MercadoLivre: A API será utilizada para obter a lista de produtos da loja.

## Instruções de Uso

1. Clone o repositório do projeto para o seu ambiente local:

 `git clone https://github.com/odouglasoliveira/shopping-cart.git`

2. Abra o arquivo `index.html` em seu navegador de preferência.

3. Ao acessar o site, os produtos da loja serão carregados e exibidos em cards.

4. Para adicionar um produto ao carrinho, clique no botão "Adicionar ao Carrinho" no card do produto desejado.

5. O carrinho de compras será atualizado automaticamente, exibindo os produtos adicionados, o subtotal e o botão "Remover do Carrinho" para cada produto.

6. Caso deseje visualizar o endereço correspondente ao CEP, digite o CEP desejado no campo específico e clique no botão "Buscar Endereço".
