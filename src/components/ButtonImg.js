import React from "react";
import { useState } from "react";

const AddImage = (props) => {
    const [preview, setPreview] = useState("");

    const handleChangeImage = (e) => {
        if (e.target.files.length > 0) {
            setPreview(URL.createObjectURL(e.target.files[0]));
            props.onSelectImage(e.target.files[0]);
        }
    };

    return (
        <div>
            <label htmlFor="upload-button">
                {preview ? (
                    <img src={preview} alt="photo" width="300" height="300" />
                ) : (
                    <h5 className="text-center"> Ajouter votre photo</h5>
                )}
            </label>
            <input type="file" id="upload-button" style={{ display: "none" }} onChange={handleChangeImage} />
            <br />
        </div>
    );
};
export default AddImage;
