const impuestos = {
  UT: 0.0665,  
  NV: 0.08,    
  TX: 0.0625,  
  AL: 0.04,    // 4.00%
  CA: 0.0825   // 8.25%
};

function calcularNeto(cantidad, precioUnitario) {
  return cantidad * precioUnitario;
}


function calcularImpuesto(precioNeto, estado) {
  const tasa = impuestos[estado];
  if (!tasa) {
    throw new Error("Estado no válido");
  }
  return precioNeto * tasa;
}


function calcularTotal(precioNeto, estado) {
  const impuesto = calcularImpuesto(precioNeto, estado);
  return precioNeto + impuesto;
}

export { calcularNeto, calcularImpuesto, calcularTotal };