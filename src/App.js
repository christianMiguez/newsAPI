import React, { Component } from 'react';
import Header from './components/Header'
import Noticias from './components/Noticias'
import Formulario from './components/Formulario'

// api: ae3c5ba2ece84e5eb0cc090ae2575071

class App extends Component {

  state = {
    noticias: [],
    error: false
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  //parametro categoria por default general (antes era undefined sino)
  consultarNoticias = (categoria = 'general') => {
    let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=ae3c5ba2ece84e5eb0cc090ae2575071`

    fetch(url).then(respuesta => {
      return respuesta.json()
  }).then(noticias => {
    this.setState({
      noticias: noticias.articles
    })
  })
}

  render() {
    return (
      <div className="contenedor-app">
        <Header title="News!" />

        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <Noticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;
