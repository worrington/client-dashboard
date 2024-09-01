// App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import Table from './stories/organims/Table';
import {TableColumn } from './stories/organims/Table/types';
import { Badge } from './stories/molecules/Badge';
import { Button } from './stories/molecules/Button';

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

  const getBadgeColor = (status: string) => {
    switch (status) {
      case 'Enviado':
        return 'success';
      case 'Pendiente':
        return 'warning';
      case 'Cancelado':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const deleteRecord = useCallback((id: number) => {
    setData(prevData => prevData.filter(client => client.id !== id));
  }, [setData]);

  // Data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/clientes.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        const transformedData = result.map((client: Client) => ({
          ...client,
          status: <div className='flex'>
            <Badge
              label={client.status}
              color={getBadgeColor(client.status)}
              className="w-full text-center"
            />
          </div>,
          actions: (
            <div className='flex'>
              <Button variant='text' color='light' label='View' />
              <Button variant='text' color='light' label='Delete' onClick={() => deleteRecord(client.id)}/>
            </div>
          ),
        }));

        setData(transformedData);

      } catch (error) {
        console.log('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default App;
