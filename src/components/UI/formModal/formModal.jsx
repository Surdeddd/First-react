import React from "react";
import Form from "../form/form";
import classes from "./FormModal.module.css";

const FormModal = () => {
    return (
        <div className={classes.formModal}>
            <Form />
        </div>
    );
};

export default FormModal;
