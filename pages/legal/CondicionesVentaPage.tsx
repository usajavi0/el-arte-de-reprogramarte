import React from 'react';

const CondicionesVentaPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#0e0e1b] mb-4">Condiciones de Venta</h1>
      <div className="space-y-3 text-[#0e0e1b] text-base leading-relaxed">
        <p>
          Estas son las Condiciones de Venta para los productos y/o servicios ofrecidos por El Arte de Reprogramarte. 
          Al realizar una compra, aceptas estas condiciones.
        </p>
        <p>
          <strong>1. Objeto:</strong> Las presentes condiciones regulan la adquisición de los cursos, guías, u otros productos digitales
          (en adelante, "Productos") ofrecidos a través de nuestro sitio web.
        </p>
        <p>
          <strong>2. Proceso de compra:</strong> Para adquirir un Producto, deberás seguir el proceso de compra online y realizar el pago
          correspondiente a través de los métodos de pago habilitados.
        </p>
        <p>
          <strong>3. Precios e impuestos:</strong> Los precios de los Productos se indican en euros (€) e incluyen los impuestos aplicables,
          salvo que se indique lo contrario.
        </p>
        <p>
          <strong>4. Política de cancelación y devoluciones:</strong> [Detallar aquí la política de cancelación y devoluciones, por ejemplo,
          si no se admiten devoluciones para productos digitales una vez descargados, o si hay un plazo para cursos].
        </p>
        <p>
          Para cualquier duda respecto a las condiciones de venta, puedes contactarnos en [Email de Contacto para Ventas].
        </p>
      </div>
    </div>
  );
};

export default CondicionesVentaPage;
