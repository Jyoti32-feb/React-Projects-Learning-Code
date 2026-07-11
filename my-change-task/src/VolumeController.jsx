import React from 'react'

const VolumeController = () => {
    const [volume, setVolume] = React.useState(50);
    function changeVolume(e){
        setVolume(e.target.value);
    }
  return (
    <div>
        <h2>Volume Controller</h2>
        <input type="range" min="0" max="100" value={volume} onChange={changeVolume} />
        <button onClick={() => setVolume(volume+10)}>Increase</button>
         <button onClick={() => setVolume(volume-10)}>Decrease</button>
        <button onClick={() => setVolume(0)}>Mute</button>
        <p>Current Volume: {volume}</p>
    </div>
  )
}

export default VolumeController
