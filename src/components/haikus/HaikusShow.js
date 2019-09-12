import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'


class HaikusShow extends React.Component {
  constructor() {
    super()

    this.state = { haiku: null }
    this.haikuDelete = this.haikuDelete.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/haikus/${this.props.match.params.id}`)
      .then(res => this.setState({ haiku: res.data }))
      .catch(err => console.log(err))

  }

  haikuDelete(e) {
    if (e.target.value === 'delete this please') {
      axios.delete(`/api/haikus/${this.props.match.params.id}`)
        .then(() => this.props.history.push('/haikus'))
        .catch(err => console.log(err))

    }
  }


  render() {
    if (!this.state.haiku) return null

    const { haiku } =  this.state

    return (

      <div className="titleContainer">
        <h2 className="haikuTitle">{haiku.name}</h2>
        <div className ="haiku show">


          <span key={haiku.id}><h3 key={haiku.id}> {haiku.text}</h3></span>

          <div className="secret control">
            <input
              onChange = {this.haikuDelete}
              className="input"/>

          </div>
        </div>
      </div>

    )
  }
}

export default HaikusShow
