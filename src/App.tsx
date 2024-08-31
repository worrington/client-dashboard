// App.tsx
import React, { useState, useEffect } from 'react';
import Table from './stories/organims/Table';
import {TableColumn } from './stories/organims/Table/types';

// Definir el tipo para los datos de cliente
type Client = {
  id: number;
  name: string;
  email: string;
  state: string;
  order_number: string;
  status: string;
};

const App: React.FC = () => {
  
  const [data, setData] = useState<Client[]>([]);
  
  // Definir las columnas de la tabla
  const columns: TableColumn[] = [
    { key: 'name', label: 'Nombre', sortable: true, filterable: true },
    { key: 'email', label: 'Correo', sortable: true, filterable: true },
    { key: 'state', label: 'Estado', sortable: true, filterable: true },
    { key: 'order_number', label: 'No. Pedido', sortable: true, filterable: true },
    { key: 'status', label: 'Estatus', sortable: true, filterable: true },
    { key: 'actions', label: 'Acciones'}
  ];

  // Data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/clientes.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        setData(result);

      } catch (error) {
        console.log('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default App;
