import React, { ReactNode, useEffect, useState } from 'react';
import Icon from '../../molecules/Icon';
import { Button } from '../../molecules/Button';
import './modal.css'; // Importa el archivo CSS con las animaciones

// Interface for Modal component props
interface ModalProps {
  /** Title of the modal */
  title: string;
  /** Callback function to close the modal */
  onClose: () => void;
  /** Content to be displayed inside the modal */
  children: ReactNode;
  /** Indicates if the modal is open */
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children, isOpen }) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {show && (
        <div className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm ${isOpen ? 'fade-in' : 'fade-out'}`}>
          {/* Modal container */}
          <div className="relative bg-[#232A33] border border-grey rounded-lg shadow-lg px-12 py-10 text-light opacity-100">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-5">
              {/* Modal Title */}
              <h2 className="text-2xl font-monument tracking-wider">{title}</h2>

              {/* Close Button */}
              <Button
                label=''
                className="hover:text-gray-700"
                onClick={onClose}
                icon={<Icon name="XMarkIcon" color="gray" />}
              />
            </div>

            {/* Modal Body */}
            <div className="flex flex-col gap-5">
              {children}
            </div>

            {/* Footer */}
            <div className="flex justify-end mt-5">
              <Button
                label='Volver'
                onClick={onClose}
                variant='outlined'
                color='secondary'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
