import React, { ReactNode } from "react";
import { CloseIcon } from "./Icon";
interface Props {
  title: string;
  children: ReactNode;
  onClose: () => void;
}
const Modal: React.FC<Props> = ({ title, children, onClose }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#111827] bg-opacity-80 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex items-center justify-between">
                <h1 className="text-[30px] font-semibold">{title}</h1>
                <div className=" cursor-pointer" onClick={onClose}>
                  <CloseIcon />
                </div>
              </div>
              <div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
