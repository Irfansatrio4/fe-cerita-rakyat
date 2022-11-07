import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ModalN(props) {
  const { isOpen, closeModal, handleSubmit } = props;

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Masukkan Nilai Acuan (N){" "}
                  </Dialog.Title>
                  <form className="py-2" onSubmit={handleSubmit}>
                    <input
                      className="w-full px-2 py-1 mt-3 text-sm border-2 rounded-md border-slate-300 focus:outline-none"
                      placeholder="0.1"
                      type="number"
                      step="any"
                      name="nilaiN"
                    ></input>
                    <div className="flex mt-8 space-x-2">
                      <button size="small">Ubah</button>
                      <button
                        size="small"
                        variant="danger"
                        onClick={closeModal}
                      >
                        Kembali
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
