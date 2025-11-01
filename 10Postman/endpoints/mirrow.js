const mirrow = (req, res) =>{
  const methods=[{
    method: 'POST',
    hasBody: true,
    purpouse: 'El metodo post se utiliza para enviar una entidad a un recurso, especifico. Causando a menudo un cambio en el estado o efectos secundarios en el servidor'
  },{
    method: 'PUT',
    hasBody: true,
    purpouse: 'El metodo put reemplaza todas las representaciones actuales del recurso de destino con la carga util de la petición.'
  },{
    method: 'PATCH',
    hasBody: true,
    purpouse: 'El metodo patch es utilizado para aplicar modificaciones parciales a un recurso'
  },{
    method: 'HEAD',
    hasBody: false,
    purpouse: 'El metodo head pide una respuesta identica a la de una peticion get, pero sin el cuerpo de la respuesta.'
  },{
    method: 'GET',
    hasBody: false,
    purpouse: 'El metodo get solicita una representacion de un recurso especifico. Las peticiones que usan el metodo get solo deben recuperar datos.'
  },{
    method: 'DELETE',
    hasBody: false,
    purpouse: 'El metodo delete elimina el recurso especificado'
  }];

  const requestMethod = methods.find(m => m.method === req.method) || {
    method: req.method,
    hasBody: false,
    purpouse: "No tiene un body, no hay una respuesta. Metodo no soportado"
  };

  requestMethod.purpouse+= requestMethod.hasBody ? 'Tiene cuerpo' : 'No tiene cuerpo';
  if(requestMethod.hasBody){
    req.body;
    res.json({...req.body, ruta_consumida: req.route.path, ...requestMethod});
  }else{
    res.json({ruta_consumida: req.originalUrl, ...requestMethod})
  }
}

module.exports = mirrow;