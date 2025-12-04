function createNewItem(event) {
  event.preventDefault();
  const name = document.getElementById('newItemName').value;
  const price = parseFloat(document.getElementById('newItemPrice').value);
  const stock = parseInt(document.getElementById('newItemStock').value);
  const categoryid = document.getElementById('newItemCategory').value;

  let id = categoryid + 1;
  const newItem = {
    name: name,
    price: price,
    stock: stock,
    categoryid: id,
  };

  fetch('products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Producto creado exitosamente:', data);
  })
  .catch(error => {
    console.error('Error al crear el producto:', error);
  });
}