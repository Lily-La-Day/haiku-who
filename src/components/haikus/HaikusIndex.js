import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class HaikusIndex extends React.Component {
  constructor() {
    super()

    this.state = { haikus: null }
    this.colorChange = this.colorChange.bind(this)

  }


  componentDidMount() {
    axios.get('/api/haikus')
      .then(res => this.setState({ haikus: res.data }))
      .catch(err => console.log(err))
  }

  colorChange() {
    event.target.style.backgroundColor = this.colorGenerator()
  }


  colorGenerator(){
    const randomR = Math.floor(Math.random()*255)
    const randomG = Math.floor(Math.random()*255)
    const randomB = Math.floor(Math.random()*255)
    const randomA = Math.random() / 2 + 0.5
    return `rgba(${randomR},${randomG},${randomB},${randomA})`
  }

  render() {

    if (!this.state.haikus) return null
    console.log(this.state.haikus)

    return (
      <main>



        <div className="grid-container">

          {this.state.haikus.map((haiku, i) => (

            <div onMouseOver={this.colorChange}  key={i} className ="haiku">

              <Link to={`/haikus/${haiku.id}`}>
                <span key={haiku.id}><h3 key={haiku.id}> {haiku.text}</h3></span>
              </Link>
            </div>

          ))}

        </div>



      </main>
    )
  }
}

export default HaikusIndex
