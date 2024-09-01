import React, { useState, useEffect, useCallback } from 'react';
import Table from './stories/organims/Table';
import { TableColumn } from './stories/organims/Table/types';
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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchField, setSearchField] = useState<keyof Client>('name');
  const [filteredData, setFilteredData] = useState<Client[]>([]);

  // Definir las columnas de la tabla
  const columns: TableColumn[] = [
    { key: 'name', label: 'Nombre', sortable: true, filterable: true },
    { key: 'email', label: 'Correo', sortable: true, filterable: true },
    { key: 'state', label: 'Estado', sortable: true, filterable: true },
    { key: 'order_number', label: 'No. Pedido', sortable: true, filterable: true },
    { key: 'status', label: 'Estatus', sortable: true, filterable: true },
    { key: 'actions', label: 'Acciones' }
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
          status: (
            <div className='flex'>
              <Badge
                label={client.status}
                color={getBadgeColor(client.status)}
                className="w-full text-center"
              />
            </div>
          ),
          actions: (
            <div className='flex'>
              <Button variant='text' color='light' label='View' />
              <Button variant='text' color='light' label='Delete' onClick={() => deleteRecord(client.id)} />
            </div>
          ),
        }));

        setData(transformedData);
        setFilteredData(transformedData); // Inicialmente, los datos filtrados son los mismos que los datos obtenidos

      } catch (error) {
        console.log('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  const deleteRecord = useCallback((id: number) => {
    setData(prevData => prevData.filter(client => client.id !== id));
    setFilteredData(prevData => prevData.filter(client => client.id !== id)); // Actualiza también filteredData
  }, []);

  const handleSearch = () => {
    const result = data.filter(client =>
      client[searchField]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(result);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
         <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value as keyof Client)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="name">Nombre</option>
          <option value="email">Correo</option>
          <option value="state">Estado</option>
          <option value="order_number">No. Pedido</option>
          <option value="status">Estatus</option>
        </select>
        <Button variant='contained' color='primary' label='Buscar' onClick={handleSearch} />
      </div>
      <Table data={filteredData} columns={columns} />

      {filteredData.length < 0 && <p>No se encontraron resultados</p> }
    </div>
  );
};

export default App;
