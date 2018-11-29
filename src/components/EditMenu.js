import React, { Component} from "react";
import { FiCheck, FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

class EditMenu extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { isEdited, isEmpty, isNotFound, showSpinner, handleSave, handleEdit } = this.props;
        const editIcon = !isEdited ? <FiEdit className="icon-color" /> : <IoMdClose className="icon-color"/>;
        const saveIcon = isEdited && !isEmpty ? <FiCheck className={!isNotFound ? "icon-color": ""}/>: ""
        return (
            <div className="d-flex justify-content-end">
                <a className="icon pr-2">{isNotFound ? "Can't find": ""}</a>
                <a className="icon pr-2">{showSpinner ? "Spinner" : ""}</a>
                <a className="icon pr-2" onClick={handleSave}>{saveIcon}</a>
                <a className="icon pr-1" disabled onClick={handleEdit}>{editIcon}</a>
            </div>
        );
    }
}

export default EditMenu;