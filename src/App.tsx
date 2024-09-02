import React, { useState, useEffect, useCallback } from 'react';
import Table from './stories/organims/Table';
import { TableColumn } from './stories/organims/Table/types';
import { Badge } from './stories/molecules/Badge';
import { Button } from './stories/molecules/Button';
import { Header } from './stories/molecules/Header';
import Input from './stories/molecules/Input';
import Select from './stories/molecules/Select';
import Icon from './stories/molecules/Icon';
import Modal from './stories/organims/Modal';
import ClientInfo from './stories/organims/ClientInfo';
import Logo from './Logo';

// Define the type for client data
type Client = {
  id: number;
  name: string;
  email: string;
  state: string;
  order_number: string;
  status: string;
  statusLabel: string;
};

const options = [
  { value: 'name', label: 'Nombre' },
  { value: 'email', label: 'Correo' },
  { value: 'state', label: 'Estado' },
  { value: 'order_number', label: 'No. Pedido' },
]

const filters = [
  { value: 'Enviado', label: 'Enviado' },
  { value: 'Pendiente', label: 'Pendiente' },
  { value: 'Cancelado', label: 'Cancelado' },
  { value: 'Todos', label: 'Todos' },
]

const App: React.FC = () => {
  const [data, setData] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchField, setSearchField] = useState<keyof Client>('name');
  const [filteredData, setFilteredData] = useState<Client[]>([]);
  const [clientData, setClientData] = useState<Client>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  // Function to delete a record
  const deleteRecord = useCallback((id: number) => {
    setData(prevData => prevData.filter(client => client.id !== id));
    setFilteredData(prevData => prevData.filter(client => client.id !== id));
  }, []);
  
   // Function to handle search
  const handleSearch = () => {
    const result = data.filter(client =>
      client[searchField]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(result);
  };

  // Function to handle filtering by status
  const handleFilter = ( filterState: string) => {
    if(filterState === "Todos") {
      setFilteredData(data)
    } else {
      setFilteredData(data.filter(client => client?.statusLabel === filterState));
    }
  };

  // Function to open the modal
  const handleOpenModal = (clientData: Client) => {
    setClientData(clientData);
    setIsModalOpen(true)
  };

  // Function to close the modal
  const handleCloseModal = () => setIsModalOpen(false);
  
  // Define table columns
  const columns: TableColumn[] = [
    { key: 'name', label: 'Nombre', sortable: true },
    { key: 'email', label: 'Correo', sortable: true },
    { key: 'state', label: 'Estado', sortable: true },
    { key: 'order_number', label: 'No. Pedido', sortable: true},
    { key: 'status', label: 'Estatus', filterable: true, options: filters, onFilter: handleFilter },
    { key: 'actions', label: 'Acciones' }
  ];

   // Function to get badge color based on status
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
          statusLabel: client.status,
          actions: (
            <div className='flex'>
              <Button
                variant='text'
                color='light'
                label=''
                className='p-1'
                icon={
                  <Icon name={'EyeIcon'} color='light'/>
                }
                onClick={() => handleOpenModal(client)}
              />
              <Button
                variant='text'
                color='light'
                label=''
                className='p-1'
                icon={
                  <Icon name={'TrashIcon'} color='light'/>
                }
                onClick={() => deleteRecord(client.id)}
              />
            </div>
          ),
        }));

        setData(transformedData);
        setFilteredData(transformedData);

      } catch (error) {
        console.log('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <Header logo={Logo} />
      <div className="flex min-h-screen flex-col p-4 md:p-24">
        <div className="mb-8 sm:flex items-end justify-between">
          <h1>Clientes</h1>
          <div className="sm:flex items-end gap-2">
            <Input
              type="text"
              value={searchTerm}
              label='Búsqueda'
              onChange={(e) => setSearchTerm(e.target.value)}
              />
            <div className="flex align-items-end gap-2 mt-2">
              <Select
                value={searchField}
                onChange={(e) => setSearchField(e.target.value as keyof Client)}
                options={options}
              />
              <Button variant='contained' color='primary' label='Buscar' onClick={handleSearch} />
            </div>
          </div>
        </div>
        <div className="items-center">
          <div className="overflow-x-auto rounded-lg">
            <Table data={filteredData} columns={columns} />

            {filteredData.length <= 0 && <p>No se encontraron resultados.</p> }
          </div>

          {isModalOpen && clientData && (
            <Modal
              title="Detalles de la orden"
              onClose={handleCloseModal}
            >
              <ClientInfo clientData={clientData} />

              
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
