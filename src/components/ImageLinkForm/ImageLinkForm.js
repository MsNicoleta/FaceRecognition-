import React from "react";



const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                  {'This magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="">
                <input className="f4 pa2 w-60 center" type="text" />
                <button className="w-10 grow f4 link ph3 pv2 dib white bg-light-purple"> Detect</button>
            </div>
        </div>
    );
}
export default ImageLinkForm;