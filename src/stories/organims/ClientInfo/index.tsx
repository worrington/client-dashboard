import React from 'react';

// Interface for customer data
interface ClientInfoProps {
  clientData: {
    name: string;
    email: string;
    order_number: string;
  }
}

// Function to generate a random date in the current year
const getRandomDateThisYear = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const randomDate = new Date(year, Math.floor(Math.random() * 9), Math.floor(Math.random() * 28) + 1, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
  
  return randomDate.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }) + ` a las ${randomDate.getHours().toString().padStart(2, '0')}:${randomDate.getMinutes().toString().padStart(2, '0')} hrs`;
};

// Function to format monetary amounts
const formatCurrency = (amount: number): string => {
  return `$${amount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};


const randomProductCost = Math.random() * 1000;
const randomShippingCost = Math.random() * 500;
const totalCost = randomProductCost + randomShippingCost;

const ClientInfo: React.FC<ClientInfoProps> = ({clientData}) => {
  return (
    <div className="p-6 bg-grey border border-grey rounded-lg shadow-lg">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-bold text-lg">Cliente</p>
          <p className="text-base">{clientData.name}</p>
          <p className="font-bold text-lg mt-2">Correo</p>
          <p className="text-base">{clientData.email}</p>
        </div>
        <div>
          <p className="font-bold text-lg">No. de orden</p>
          <p className="text-base">{clientData.order_number}</p>
          <p className="font-bold text-lg mt-2">Enviado el</p>
          <p className="text-base">{getRandomDateThisYear()}</p>
        </div>
        <div>
          <p className="font-bold text-lg">Costo</p>
          <div className="flex justify-between text-base">
            <span>Productos</span>
            <span>{formatCurrency(randomProductCost)}</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Envío</span>
            <span>{formatCurrency(randomShippingCost)}</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Total</span>
            <span>{formatCurrency(totalCost)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
