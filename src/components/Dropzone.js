import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept
    });

    return (
        <div {...getRootProps()}>
          <input className="dropzone-input" {...getInputProps()} />
          <div className="text-center">
            {isDragActive ? 
            (<p className="dropzone-content">Choose your reward tier</p>)
             :
             (<p className="dropzone-content">Select a reward!</p>)}
          </div>
        </div>
      );
    };

    export default Dropzone;