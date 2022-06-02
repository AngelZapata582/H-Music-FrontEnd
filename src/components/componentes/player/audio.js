import React, { Component } from "react"
import { Howl } from 'howler';
import './audio.css';

class Reproductor extends Component {

  constructor(props) {
    super(props);
    console.log();
    this.state = {
      playing: true,
      loaded: false,
      mute: false,
      volume: 1.0,
      seek: 0.0,
      duration: 0.0,
      currentTime: 0.0,
      timer: 0.0,
      position:0
    }
    
    this.music = new Howl({
      src: ["http://localhost:8000/api/music/"+props.music[this.state.position].nombre],
      html5: true,
      volume: 1.0,
      format: ['mp3'],
      onload: function (){
        console.log("cargado")
      }
    });
  }

  componentDidMount() {
    
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
      playing: !this.state.playing
    })
    if (this.state.playing) {
      this._handlePlay()
    } else {
      this._handlePause()
    }
  }
  _handleDuration() {
    this.setState({
      duration: this.music.duration()
    })
    
  }

  _handleSeek = () => {
    var seektime = this.music.seek() || 0
    console.log(seektime)
    this.setState({
      current: seektime
    })
  }

  _handleVolumen = () => {
    this.setState({
      volume: document.getElementById("volumen").value / 100
    })
    this._handleChangeVolume()
  }

  _handleChangeVolume = () => {
    this.music.volume(this.state.volume)
  }

  _handleCurrentDuration = () => {
    this.setState({
      currentTime: document.getElementById("duracion").value
    })
    this.music.seek(this.state.currentTime)

  }

  _handleNextMusic = () => {
    this.music.unload()
    console.log(this.state.position)
    if(this.state.position < this.props.music.length - 1){
      this.setState({
        position:this.state.position + 1
      })
    }else{
      this.setState({
        position:0
      })
    }
    this.music = new Howl({
      src: ["http://localhost:8000/api/music/"+this.props.music[this.state.position].nombre],
      html5: true,
      volume: 1.0,
      format: ['mp3'],
      onload: function (){
        console.log("cargado")
      }
    });
    this.music.play()
  }

  _handlePrevMusic = () => {
    this.music.unload()
    console.log(this.state.position)
    if(this.state.position > 0){
      this.setState({
        position:this.state.position - 1
      })
    }else{
      this.setState({
        position:this.props.music.length - 1
      })
    }
    
    this.music = new Howl({
      src: ["http://localhost:8000/api/music/"+this.props.music[this.state.position].nombre],
      html5: true,
      volume: 1.0,
      format: ['mp3'],
      onload: function (){
        console.log("cargado")
      }
    });
    this.music.play();
  }

  render() {
    let btn;
    if (this.state.playing) {
      btn = <img src={require("../../icons/tocar.png")} alt="play" width="50%" height="50%" />
    } else {
      btn = <img src={require("../../icons/pause.png")} alt="pause" width="50%" height="50%" />;
    }
    return (
      <div>
        <div>
          <p>props:{JSON.stringify(this.props.music)}</p>
          <p>props lenght: {this.props.music.length}</p>
          <p>duracion: {(this.state.duration % 3600 / 60).toFixed(2)}</p>
          <button onClick={this._handleToggle} className="btn_player" width="20%" height="20%">
            {btn}
          </button>
          <input type="range" id="volumen" min="0" max="100" onChange={this._handleVolumen} />
          <p>{this.state.volume}</p>
        </div>
        <div>
          {this.state.currentTime}
          { }
          <input type="range" id="duracion" max={this.state.duration} min='0'
            onChange={this._handleCurrentDuration} />
        </div>
        <div>
          <button type="button" id="prev" onClick={this._handlePrevMusic}>prev</button>
          <button type="button" id="next" onClick={this._handleNextMusic}>next</button>
        </div>
      </div>
    )
  }
}
export default Reproductor