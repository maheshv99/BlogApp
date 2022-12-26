import React from 'react'

export  function SmImgOverlay() {
  return (
    <div className="position-relative smallImgBox">
        
        <img src="https://cdn.britannica.com/88/158788-050-314EBC88/Mount-Triumph-height-North-Cascades-National-Park.jpg" alt="" className='img-sm'/>
        
        <div class="bottom-left-small">
            <h5 className='m-0'>The Sound cloud</h5>
            <h5>You loved is doomed</h5>
            <p className='grey-text'>Travel / August 21 2017</p>
        </div>
    </div>
  )
}
const LgImgOverlay = () => {
  return (
    <div className="position-relative largeImgBox">
         
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FH1WYEDn9jV1J6rI-AoiTI3PT-NgFwiNPQ&usqp=CAU" alt="" className='img-lg'/>
       
        <div class="bottom-left">
           <h3>Title of vertical </h3>
           <p className='text-grey'>Travel / August 21 2017</p>
        </div>
    </div>
  )
}
export default LgImgOverlay