import React, { Component } from "react"
import { Howl } from 'howler';

class Reproductor extends Component {

  /*constructor(){
    super();
    
  }*/

  componentDidMount(){
    //this.url = "http://localhost:8000/api/music/track1/mp3"
    this.music = new Howl({
      src:["http://localhost:8000/api/music/track1/mp3"],
      html5:true,
      volume:0.5,
      format:['mp3'],
      onload:function(){
        console.log("cargando")
      },
    });
  }
  _handlePlay = () => {
    this.music.play()
    console.log('play')
  }
  _handlePause = () => {
    this.music.pause()
    console.log('pause')
  }
  render() {
    return (
      <div>
        <p>duracion: {}</p>
        <button onClick={this._handlePlay}>Play</button>
        <button onClick={this._handlePause}>Pause</button>
        <audio src="http://localhost:8000/api/music/track1/mp3" controls></audio>
      </div>
    )
  }
}
export default Reproductor