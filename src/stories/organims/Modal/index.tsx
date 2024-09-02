import React, { ReactNode } from 'react';
import Icon from '../../molecules/Icon';
import { Button } from '../../molecules/Button';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="relative bg-[#232A33] border border-grey rounded-lg shadow-lg px-12 py-10 text-light opacity-100">
        <div className="flex justify-between items-center mb-5">
          {/* Modal Title */}
          <h2 className="text-2xl font-monument font-semibold">{title}</h2>

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
  );
};

export default Modal;
