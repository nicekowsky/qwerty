import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import AutorsList from './components/AutorsList';
import Autor from './Autor'

type State = {
  autors: Autor[]
}

export class App extends Component<{}, State> {
  constructor(props: {}) {
      super(props);
      this.state = {
          autors: []
      }
  }

  async componentDidMount() {
      let res = await fetch("http://localhost:5000/api/Autorzy");
      let autors = (await res.json()) as Autor[];
      this.setState({ autors: autors });
  }

  addAutor = async (autor: Autor): Promise<void> => {
      const request: RequestInit = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(autor)
      };

      const res = await fetch("http://localhost:5000/api/Autorzy", request);
      const autorResponse = (await res.json()) as Autor;

      this.setState({ autors: [...this.state.autors, autorResponse] })
  }

  editAutor = async (autor: Autor): Promise<void> => {
      const request: RequestInit = {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(autor)
      };

      const res = await fetch(`http://localhost:5000/api/Autorzy/${autor.id}`, request);
      console.log(res);
      const autorResponse = (await res.json()) as Autor;

      this.setState({ autors: this.state.autors.map(p => p.id === autorResponse.id ? autorResponse : p) })
  }

  render() {
      return (
          <div>
              <Form addAutor={this.addAutor} />
              {this.state.autors.length !== 0 ? <AutorsList autors={this.state.autors} editAutor={this.editAutor} /> : <h1>Brak danych</h1>}
          </div>
      )
  }
}

export default App;
