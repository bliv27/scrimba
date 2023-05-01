export default function Meme() {
  return(
    <main className="meme">
      <form className="form">
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
        <button className="form__button">Generate a new meme image 🖼</button>
      </form>
    </main>
  )
}