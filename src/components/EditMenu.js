import React, { Component} from "react";
import { FiCheck, FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaSpinner } from "react-icons/fa"

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
                <p className="icon pr-2 text-danger">{isNotFound ? "Can't find": ""}</p>
                <p className="icon pr-2">{showSpinner ? <FaSpinner /> : ""}</p>
                <p className="icon pr-2" onClick={handleSave}>{saveIcon}</p>
                <p className="icon pr-1" disabled onClick={handleEdit}>{editIcon}</p>
            </div>
        );
    }
}

export default EditMenu;