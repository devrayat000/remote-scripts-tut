/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "https://esm.sh/react@^18.3.1";
import { motion } from "https://esm.sh/framer-motion@^11.2.14?deps=react@^18.3.1,react-dom@^18.3.1";
import ModalProvider, { ModalContext } from "../../context/ModalContext";
import SellerModal from "../modals/SellerModal";
import MessageModal from "../modals/MessageModal";

function Container({ children, className }) {
  return (
    <ModalProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`w-full mx-auto px-2 sm:px-5 ${className}`}
      >
        {children}
      </motion.div>
      <ModalContext.Consumer>
        {({
          showSellerModal,
          showMessageModal,
          handleMessageToggle,
          handleSellerToggle,
        }) => (
          <>
            {showSellerModal && <SellerModal onClose={handleSellerToggle} />}
            {showMessageModal && <MessageModal onClose={handleMessageToggle} />}
          </>
        )}
      </ModalContext.Consumer>
    </ModalProvider>
  );
}

export default Container;
