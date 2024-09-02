import React from 'react';

interface ClientData {
  name: string;
  email: string;
  order_number: string;
  sent_date: string; // Agregado para el "Enviado el"
  cost: {
    products: number;
    shipping: number;
  };
}

interface ClientInfoProps {
  clientData: ClientData;
}

const ClientInfo: React.FC<ClientInfoProps> = ({ clientData }) => {
  return (
    <div className="p-6 bg-grey border border-grey rounded-lg shadow-lg">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-bold text-lg">Cliente</p>
          <p className="text-base">{clientData.name}</p>
          <p className="font-bold text-lg">Correo</p>
          <p className="text-base">{clientData.email}</p>
        </div>
        <div>
          <p className="font-bold text-lg">No. de orden</p>
          <p className="text-base">{clientData.order_number}</p>
          <p className="font-bold text-lg">Enviado el</p>
          <p className="text-base">{clientData.sent_date}</p>
        </div>
        <div>
          <p className="font-bold text-lg">Costo</p>
          <div className="flex justify-between text-base">
            <span className="">Productos</span> <span>$ {clientData.cost.products.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-base">
            <span className="">Envio</span> <span>$ {clientData.cost.shipping.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-base">
            <span className="">Total</span> <span>$ </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
