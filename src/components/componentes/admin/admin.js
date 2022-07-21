import React from "react"
import './admin.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
class FilterTableMusic extends React.Component {
  state = {
    show: false,
    music: null,
    songs:[],
    isloaded:false
  };

  constructor(props) {
    super(props)
    axios.get('http://localhost:8000/api/music/all')
    .then(res => {
      this.setState({
        songs: res.data,
        isloaded: true
      })
    })
    this.musics = [
      { id: 0, name: "", Formato:"", type: "", autor: "", duration: "", image: "", musica:"" }
      //{ id: 1, name: 'track1', Formato:"mp3", type: "POP", autor: "alguien", duration: "3:40", image: "una ruta",musica:"una ruta" },
      //{ id: 2, name: "track2", Formato:"mp3", type: "POP", autor: "alguien", duration: "3:40", image: "una ruta", musica:"una ruta" },
      //{ id: 3, name: "track3", Formato:"mp3", type: "POP", autor: "alguien", duration: "3:40", image: "una ruta", musica:"una ruta" }
    ];  

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount(){
    this.getMusicList()
    
  }

  getMusicList = async event =>  {
    
    const res = await axios.get('http://localhost:8000/api/music/all')
    this.setState({
      songs: res.data
    })
    
    // .then(response => {
    //   const songs = response.data
      
    //   this.setState({songs})
    // })
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

  _deleteButton = (id) => {
    alert(id)

  }

  showModal = (music) => {
    this.setState({ show: true });
    console.log(music)
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    if(this.state.isloaded){
      const TableData = this.state.songs

    const column = Object.keys(TableData[0])
    const ThData = () => {
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
                this.showModal(data)
              }}>Editar</Button>
              <Button className="btn_admin mx-2" variant="danger" onClick={() => {
                this._deleteButton(data.id)
              }}>Eliminar</Button>
            </td>
          </tr>
        )
      })
    }
    return (
      <div className="bg">
        <input className="btn_admin" type="text" id="myInput" onKeyUp={this.filterfunction} placeholder="Buscar..."></input>
        <div className="m-4">
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
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="Nombre" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Autor" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tipo</Form.Label>
                <Form.Select>
                  <option>POP</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Duracion</Form.Label>
                <Form.Control type="text" placeholder="Duracion" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" placeholder="image" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Musica</Form.Label>
                <Form.Control type="file" placeholder="music" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={this.hideModal}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={this.hideModal}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
    }else{
      return <p className="text-light">NO HAY DATOS</p>
    }
  }
}

export default FilterTableMusic;