import React from "react"
import './admin.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
class FilterTableMusic extends React.Component {
  state = {
    tokencsrf:"",
    show: false,
    music: null,
    songs: [],
    isloaded: false,
    id: 0,
    Nombre: "",
    Formato: "",
    genero_id: 0,
    Autor: "",
    Duracion: "",
    Imagen: "",
    Musica: "",
    Generos: [],
    action: "",
  };

  constructor(props) {
    super(props)

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.changeNombre = this.changeNombre.bind(this);
    this.changeAutor = this.changeAutor.bind(this);
    this.changeFormato = this.changeFormato.bind(this);
    this.changeMusica = this.changeMusica.bind(this);
    this.changeGenero = this.changeGenero.bind(this);
    this.changeDuracion = this.changeDuracion.bind(this);
    this.changeImagen = this.changeImagen.bind(this);
    this.onChangeFileImage = this.onChangeFileImage.bind(this);
    this.onChangeFileMusic = this.onChangeFileMusic.bind(this);
    this.updateMusic = this.updateMusic.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentDidMount() {
    this.getMusicList()
    this.getGeneros()
  }

  onChangeFileImage = (e) => {
    const imagearray = []
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;
    this.createImage(files[0])
    
  }

  createImage = (img) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        Imagen: e.target.result
      })
    }
    reader.readAsDataURL(img)
  }

  onChangeFileMusic = (e) => {
    const musicArray = []
    let files = e.target.files || e.dataTransfer.files;
    
    if (!files.length)
        return;
    this.createMusic(files[0])
  }

  createMusic = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        Musica: e.target.result
      })
    }
    reader.readAsDataURL(file)
  }

  getMusicList = async event => {
    console.log("musicas")
    const res = await axios.get('http://localhost:8000/api/musics')
    this.setState({
      songs: res.data,
      isloaded: true
    })
  }

  getGeneros = async event => {
    const res = await axios.get('http://localhost:8000/api/generos/all')
    this.setState({
      Generos: res.data
    })
  }

  filterfunction = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  _deleteButton = async (id) => {
    await axios.delete("http://localhost:8000/api/music/" + id)
      .then(res => {
        alert("Cancnion elminada")
        this.getMusicList()
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateMusic = () => {
    if(this.state.action == "e"){
      const music = {
        id: this.state.id,
        Nombre: this.state.Nombre,
        Autor: this.state.Autor,
        Formato: this.state.Formato,
        genero_id: this.state.genero_id,
        Duracion: this.state.Duracion,
        Imagen: this.state.Imagen,
        Musica: this.state.Musica,
      }
      axios.put("http://localhost:8000/api/cancion/"+music.id,music,
      { headers: {"Authorization" : "Bearer 1|CcCmwoFPkrCbynLhv1mGL0UtidNNtwGYdpoH8s8r"} })
      .then(res => {
        console.log(res)
        this.getMusicList()
        alert("Cancion modificada")
      })
      .catch(err => { console.log(err) })
    }
    if(this.state.action == "a"){
      const music = {
        Nombre: this.state.Nombre,
        Autor: this.state.Autor,
        Formato: this.state.Formato,
        genero_id: this.state.genero_id,
        Duracion: this.state.Duracion,
        Imagen: this.state.Imagen,
        Musica: this.state.Musica,
      }
      axios.post("http://localhost:8000/api/cancion",music,
      { headers: {"Authorization" : "Bearer 1|CcCmwoFPkrCbynLhv1mGL0UtidNNtwGYdpoH8s8r"} })
      .then(res => {
        console.log(res)
        this.getMusicList()
        alert("Cancion agregada")
      })
      .catch(err => { console.log(err) })
    }
  }

  showModal = async (id,action) => {
    this.setState({ show: true });

    const res = await axios.get("http://localhost:8000/api/music/" + id)
    this.setState({
      id: id,
      Nombre: res.data.Nombre,
      Formato: res.data.Formato,
      Autor: res.data.Autor,
      genero_id: res.data.genero_id,
      Duracion: res.data.Duracion,
      Imagen: res.data.Imagen,
      Musica: res.data.Musica,
      action: action
    })
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  changeNombre = event => { this.setState({ Nombre: event.target.value }); }
  changeFormato = event => { this.setState({ Formato: event.target.value }); }
  changeGenero = event => { this.setState({ genero_id: event.target.value }); }
  changeAutor = event => { this.setState({ Autor: event.target.value }); }
  changeDuracion = event => { this.setState({ Duracion: event.target.value }) }
  changeImagen = event => { this.setState({ Imagen: event.target.value }); }
  changeMusica = event => { this.setState({ Musica: event.target.value }); }
  uploadMusic = event => { this.setState({ Musica: event.target.files[0]});}
  uploadImage = event => { this.setState({ Imagen: event.target.files[0]})}

  render() {
    if (this.state.isloaded) {
      const TableData = this.state.songs

      const column = Object.keys(TableData[0])
      const ThData = () => {
        console.log("montado")
        return column.map((data) => {
          return <th className="text-light" key={data}>{data}</th>
        })
      }

      const TdData = () => {

        return TableData.map((data) => {
          return (
            <tr>
              {column.map((v) => {
                return (<td className="text-light" key={v}>{data[v]}</td>)
              })}
              <td>
                <Button className="btn_admin mx-2" variant="warning" onClick={() => {
                  this.showModal(data.id,"e")
                }}>Editar</Button>
                <Button className="btn_admin mx-2" variant="danger" onClick={() => {
                  this._deleteButton(data.id)
                }}>Eliminar</Button>
              </td>
            </tr>
          )
        })
      }

      const gener = () => {
        return this.state.Generos.map((gen) => {
          return (<option value={gen.id || 0}>{gen.Genero}</option>)
        })
      }
      return (
        <div className="bg">
          <Container>
            <Row>
              <Col md={2}>
              <Button variant="primary" onClick={()=>{this.showModal(null,"a")}}>Agregar</Button>
              </Col>
              <Col md={{span: 2, offset: 7 }}>
                <input className="btn_admin" type="text" id="myInput" onKeyUp={this.filterfunction} placeholder="Buscar..."></input>
              </Col>
            </Row>
            <div>
              <Table hover id="myTable">
                <thead>
                  <tr>
                    {ThData()}
                  </tr>
                </thead>
                <tbody>
                  {TdData()}
                </tbody>
              </Table>
            </div>
          </Container>

          <Modal show={this.state.show} onHide={this.hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control value={this.state.Nombre || ''} type="text" placeholder="Nombre" onChange={this.changeNombre} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Formato</Form.Label>
                  <Form.Control value={this.state.Formato || ''} type="text" placeholder="Formato" onChange={this.changeFormato} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control value={this.state.Autor || ''} type="text" placeholder="Autor" onChange={this.changeAutor} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Genero</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={this.changeGenero}>
                    <option>Default</option>
                    {gener()}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Duracion</Form.Label>
                  <Form.Control value={this.state.Duracion || ''} type="text" placeholder="Duracion" onChange={this.changeDuracion} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control type="file" placeholder="image" onChange={this.uploadImage}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Musica</Form.Label>
                  <Form.Control type="file" placeholder="music" onChange={this.uploadMusic}/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="secondary" onClick={this.hideModal}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={this.updateMusic}>
                Guardar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    } else {
      return <p className="text-light">NO HAY DATOS</p>
    }
  }
}

export default FilterTableMusic;