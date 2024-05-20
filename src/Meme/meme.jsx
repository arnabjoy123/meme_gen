import "./styles.css";
import { useEffect, useState } from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  function randomImg() {
    const rand = Math.floor(Math.random() * allMemes.data.memes.length);
    const url = allMemes.data.memes[rand].url;
    setMemImg(url);
  }

  const [memimg, setMemImg] = useState("https://i.imgflip.com/1ur9b0.jpg");

  const [form, setForm] = useState({
    toptext: "",
    bottomtext: "",
  });

  function handleForm(event) {
    const { name, value } = event.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  console.log(form);

  return (
    <>
      <div className="box">
        <div className="meme-text">
          <label>Top text</label>
          <input
            type="text"
            placeholder="Shut up"
            name="toptext"
            value={form.toptext}
            onChange={handleForm}
          />
        </div>
        <div className="meme-text">
          <label>Bottom text</label>
          <input
            type="text"
            placeholder="And take my money"
            name="bottomtext"
            value={form.bottomtext}
            onChange={handleForm}
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={randomImg}>Get a new meme image 🖼</button>
      </div>
      <div className="mem-img">
        <img className="mema" src={memimg} alt="new-mem" />
        <h1 className="meme--text top">{form.toptext}</h1>
        <h1 className="meme--text bott">{form.bottomtext}</h1>
      </div>
    </>
  );
}
