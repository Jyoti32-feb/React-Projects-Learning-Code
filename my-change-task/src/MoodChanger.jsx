import React from 'react'

const MoodChanger = () => {
    const [mood, setMood] = React.useState("");
  return (
    <div>
      <h2>Mood Changer</h2>
      <p>Current Mood: {mood}</p>
      <button onClick={() => setMood("😢")}>Sad</button>
      <button onClick={() => setMood("😊")}>Happy</button>
      <button onClick={() => setMood("😡")}>Angry</button>
      <button onClick={() => setMood("😎")}>Cool</button>
      <button onClick={() => setMood("😴")}>Sleepy</button>
      <button onClick={() => setMood("😱")}>Surprised</button>
      <button onClick={() => setMood("😇")}>Blessed</button>
    

    </div>
  )
}

export default MoodChanger
