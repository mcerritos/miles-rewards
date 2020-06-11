import React from 'react';
import './App.css';

import React, { useCallback } from "react";
import cuid from "cuid";
import Dropzone from "./Dropzone";

function App() {
  const [images, setImages] = useState([]);



  const onDrop = useCallback(acceptedFiles => {
    // Loop through accepted files
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function(e) { 
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <main className="App">
      <h1 className="text-center">Drag and Drop Example</h1>
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageList images={images} />
    </main>
  );
}


export default App;
