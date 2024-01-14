import React, { useState } from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import FormModal from "../formModal/formModal";
import classes from "./modal.module.css";

const CustomModal = ({ isOpen, onClose }) => {
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 5,
        },
        content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "90%",
            overflow: "auto",
            backgroundColor: "#fff",
            padding: "3px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
        },
    };

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 600);
    };

    return (
        <CSSTransition
            in={isOpen}
            timeout={800}
            classNames={{
                enterActive: classes.modalEnter,
                exitActive: classes.modalExit,
            }}
            unmountOnExit
        >
            <Modal
                isOpen={isOpen}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel="Example Modal"
                className={isClosing ? classes.modalExit : classes.modalEnter}
            >
                <div className={classes.close} onClick={handleClose}>
                    &times;
                </div>
                <FormModal />
            </Modal>
        </CSSTransition>
    );
};

export default CustomModal;
