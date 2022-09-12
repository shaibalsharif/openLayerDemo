import React from 'react'

const Popup = () => {
   
  const closePopUp = (e) => {
    //console.log(e.target.parentNode);
    e.target.parentNode.style.display = 'none';
  }

  return (
    <div className='absolute hidden
    bg-green-200 top-0 left-0 rounded-xl p-2 leading-5' id="popup">
      <div className="closeBtn absolute
       right-1 leading-3 top-0  rounded-md bg-green-250
        w-4 h-4 pl-[.25rem] hover:cursor-pointer hover:bg-red-400" onClick={closePopUp}>x</div>
      <div className="content mt-2">
        <p id='lat'>Lat: </p>
        <p id='lon'>Lon: </p>
      </div>

    </div>
  )
}

export default Popup