import React , { useState ,useRef}from 'react'
import Webcam from "react-webcam";

function Takepic() {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  return (
    <div>
     {picture == '' ?  <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
          />: <img src={picture}/>}
     {picture == '' ? <button onClick={(e)=>{e.preventDefault() ; capture()}}>capture</button> : <div>Good</div>}
    </div>
  )
}

export default Takepic
