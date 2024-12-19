function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento"
    objetoProducto.calcularPrecioDescuento = function() {
      // Multiplica el precio del producto por el porcentajeDeDescuento
      const descuento = this.precio * this.porcentajeDeDescuento;
      // Resta el valor del descuento del precio total del producto
      const precioFinal = this.precio - descuento;
      // Retorna el precio final
      return precioFinal;
    };
  }
  
  // Ejemplo de uso
  const producto = {
    precio: 10,
    porcentajeDeDescuento: 0.2
  };
  
  agregarMetodoCalculoDescuento(producto);
  console.log(producto.calcularPrecioDescuento()); // 8
  
  module.exports = agregarMetodoCalculoDescuento;
  