import React, { ReactNode } from 'react';
import Icon from '../../molecules/Icon';
import { Button } from '../../molecules/Button';

// Interface for Modal component props
interface ModalProps {
  /** Title of the modal */
  title: string;
  /** Callback function to close the modal */
  onClose: () => void;
  /** Content to be displayed inside the modal */
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      {/* Modal container */}
      <div className="relative bg-[#232A33] border border-grey rounded-lg shadow-lg px-12 py-10 text-light opacity-100">
        
        {/* Modal Header */}
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

        {/* Footer with Return Button */}
        <div className="flex justify-end mt-5">
          <Button
            label='Return'
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
