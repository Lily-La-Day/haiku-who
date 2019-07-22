import React from 'react'
import axios from 'axios'



class HaikusShow extends React.Component {
  constructor() {
    super()

    this.state = { haiku: null }

  }

  componentDidMount() {
    axios.get(`/api/haikus/${this.props.match.params.id}`)
      .then(res => this.setState({ haiku: res.data }))
      .catch(err => console.log(err))

  }


  render() {
    if (!this.state.haiku) return null

    const { haiku } =  this.state

    return (

      <div className="titleContainer">
        <h2 className="haikuTitle">{haiku.name}</h2>
        <div className ="haiku show">


          <span key={haiku.id}><h3 key={haiku.id}> {haiku.text}</h3></span>

        </div>
      </div>

    )
  }
}

export default HaikusShow
