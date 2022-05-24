import React, { Component } from "react"
import { Howl } from 'howler';
import '../css/audio.css';

class Reproductor extends Component {

  constructor(){
    super();
    this.state = {
      playing: false,
      loaded: false,
      mute: false,
      volume: 1.0,
      seek: 0.0,
    }

    
  }

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
  _handleToggle = () => {
    this.setState({
      playing:!this.state.playing
    })
    if(this.state.playing){
      this._handlePlay()
    }else{
      this._handlePause()
    }
  }
  render() {
    let btn;
    if(this.state.playing){
      btn = <img src={require("../icons/tocar.png")} alt="play" width="50%" height="50%"/>
    }else{
      btn = <img src={require("../icons/pause.png")} alt="pause" width="50%" height="50%"/>;
    }
    return (
      <div>
        <p>duracion: {}</p>
        <button onClick={this._handleToggle} className="btn_player" width="20%" height="20%">
          {btn}
        </button>
        <button onClick={this._handlePlay} className="btn_player">Play</button>
        <button onClick={this._handlePause}>Pause</button>
      </div>
    )
  }
}
export default Reproductor