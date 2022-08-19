import React, { Component } from "react"
import { Howl } from 'howler';
import './audio.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class Timer extends React.Component {

  render() {
    var minute = ~~(this.props.currentTime % 3600 / 60),
      second = ~~(this.props.currentTime % 60)
    var t = "" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)
    return (<div>
      <p className="text-light">{t}</p>
    </div>)
  }
}

class TotalTimer extends React.PureComponent {
  render() {
    var minute = ~~(this.props.Time % 3600 / 60),
      second = ~~(this.props.Time % 60)
    var t = "" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)
    return (<div>
      <p className="text-light">{t}</p>
    </div>)
  }
}
class Reproductor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCalled:true,
      playing: true,
      loaded: false,
      mute: false,
      volume: 1.0,
      seek: 0.0,
      duration: 0.0,
      currentTime: 0,
      timer: 0.0,
      position: 0,
      minute: 0,
      second: 0,
    }
    
    
    this._handleNextMusic = this._handleNextMusic.bind(this);
    this._handlePrevMusic = this._handlePrevMusic.bind(this);
    this._handleVolumen = this._handleVolumen.bind(this);
    this._handleVisibility = this._handleVisibility.bind(this);
    this.music = new Howl({
      src: ["http://localhost:8000/api/music/" + props.music[this.state.position].Musica],
      html5: true,
      volume: 1.0,
      format: ['mp3'],
      onload: function () {
        console.log("cargado")
      }
    });
  }

  componentDidMount() {
    this.music.once('load', () => {
      this.setState({
        duration: this.music._duration,
      })
    })
    this._handleVisibility()
  }

  componentWillUnmount(){
    this.music.pause()
    this.music.unload()
  }

  _handleVisibility = () => {
    this.setState({
      isCalled:this.props.calling
    })
  }
  _timerStart = () => {
    this.time = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1
      })
      document.getElementById("duracion").value = this.state.currentTime
    }, 1000)
  }

  _timerStop = () => { clearInterval(this.time) }

  _handlePlay = () => {
    this.music.play()
    this._timerStart()
    console.log('play')
  }

  _handlePause = () => {
    this.music.pause()
    this._timerStop()
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
    this.music.volume(this.state.volume)
  }

  _handleCurrentDuration = () => {
    this.setState({
      currentTime: parseInt(document.getElementById("duracion").value)
    })
    this.music.seek(this.state.currentTime)

  }

  _handleNextMusic = () => {
    this.music.unload()
    if (this.state.position < this.props.music.length - 1) {
      this.setState({
        position: this.state.position + 1,
        currentTime: 0,
      })
    } else {
      this.setState({
        position: 0,
        currentTime: 0,
      })
    }
    console.log(this.state.position)
    this.music = new Howl({
      src: ["http://localhost:8000/api/music/" + this.props.music[this.state.position].Musica],
      html5: true,
      volume: 1.0,
      format: ['mp3'],
      onload: function () {
        console.log("cargado")
      }
    });
    this.music.once('load', () => {
      this.setState({
        duration: this.music._duration,
      })
    })
    this.music.play()
  }

  _handlePrevMusic = () => {
    this.music.unload()
    if (this.state.position > 0) {
      this.setState({
        position: this.state.position - 1,
        currentTime: 0,
      })
    } else {
      this.setState({
        position: this.props.music.length - 1,
        currentTime: 0,
      }) 
    }
    console.log(this.state.position)
    this.music = new Howl({
      src: ["http://localhost:8000/api/music/" + this.props.music[this.state.position].Musica],
      html5: true,
      volume: 1.0,
      format: ['mp3'],
      onload: function () {
        console.log("cargado")
      }
    });
    this.music.once('load', () => {
      this.setState({
        duration: this.music._duration,
      })
    })
    this.music.play();
  }

  render() {
    if(this.state.isCalled) {
      let btn;
      if (this.state.playing) {
        btn = <img src={require("../../icons/tocar.png")} alt="play" width="50%" height="50%" />
      } else {
        btn = <img src={require("../../icons/pause.png")} alt="pause" width="50%" height="50%" />;
      }
      
      return (
        <div className="bg_player">
          <div>
            <Container>
              <Row className="justify-content-center">
                <Col>
                  <p className="text-light fs-6 my-2">{this.props.music[this.state.position].Nombre}</p>
                </Col>
              </Row>
              <Row >
                <Col md={{ span: 4, offset: 4 }} sm={{ span: 5, offset: 3 }}>
                  <button type="button" id="prev" className="btn_np" onClick={this._handlePrevMusic}  width="10%" height="10%">
                    <img src={require("../../icons/previous.png")} alt="anterior" width="45%" height="45%" />
                  </button>
                  <button type="button" onClick={this._handleToggle} className="btn_player_audio" width="20%" height="20%">
                    {btn}
                  </button>
                  <button type="button" id="next" className="btn_np" onClick={this._handleNextMusic} width="10%" height="10%">
                    <img src={require("../../icons/next.png")} alt="siguiente" width="45%" height="45%" />
                  </button>
                </Col>
                <Col md={2} sm={2} className="m-4">
                  <input type="range" id="volumen" min="0" max="100" className="slider_volume" onChange={this._handleVolumen} />
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Container>
              <Row>
                <Col md={2} sm={2}>
                  <Timer currentTime={this.state.currentTime} playing={this.state.playing} />
                </Col>
                <Col md={{ span: 2, offset: 8 }} sm={{ span: 2, offset: 8 }}>
                  <TotalTimer Time={this.state.duration}/>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <input type="range" id="duracion" max={this.state.duration} min='0'
              onChange={this._handleCurrentDuration} className="slider" />
  
          </div>
  
        </div>
      )
    }
  }
}
export default Reproductor