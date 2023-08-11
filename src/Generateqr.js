import React from 'react'
import QRCode from "react-qr-code"
function Generateqr() {
  return (
    <div>
      <QRCode
    size={256}
    style={{ height: "50vh", maxWidth: "100%", margin:"1rem",width: "100%" }}
    value={"hi"}
    viewBox={`0 0 256 256`}
    />
    </div>
  )
}

export default Generateqr
