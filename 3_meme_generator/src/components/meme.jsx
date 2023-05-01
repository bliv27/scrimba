import memesData from "../memesData"

export default function Meme() {

  function getRandomMeme() {
    const memesArray = memesData.data.memes
    const randNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randNum].url
    console.log(url)
  }
  
  return(
    <main className="meme">
      <div className="form">
          <input 
            type="text"
            placeholder="Top text"
            className="form__input"
          />
          <input 
            type="text"
            placeholder="Bottom text"
            className="form__input"
          />
        <button 
          className="form__button"
          onClick={getRandomMeme}
        >
          Generate a new meme image 🖼
        </button>
      </div>
    </main>
  )
}