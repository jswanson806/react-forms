import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        color: '',
        height: '',
        width: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData.color, formData.height, formData.width);
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color: </label>
            <input
                id="color"
                name="color"
                placeholder="color"
                value={formData.color}
                onChange={handleChange} 
            />
            <label htmlFor="height">Height: </label>
            <input
                id="height"
                name="height"
                placeholder="height"
                value={formData.height}
                onChange={handleChange} 
            />
            <label htmlFor="width">Width: </label>
            <input
                id="width"
                name="width"
                placeholder="width"
                value={formData.width}
                onChange={handleChange} 
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;