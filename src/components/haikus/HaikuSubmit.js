import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class HaikuSubmit extends React.Component {
  constructor() {
    super()

    this.state = { data: { portrait: true }, error: '', haiku: 'haiku' }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeTwo = this.handleChangeTwo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.haikuCheck = this.haikuCheck.bind(this)


  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }

    this.setState({ data, error: ''})

  }

  handleChangeTwo({ target: { name, value }}) {
    console.log(value)
    const data = {...this.state.data, [name]: value }

    this.setState({ data, error: '', haiku: value })

  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/haikus', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/haikus')
      })
      .catch(() => this.setState({ error: 'Invalid Crendentials'}))
  }

  haikuCheck(string) {
    if(string.length > 10) {
      const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
      const countOne = string.split('').reduce((count, letter) => {
        return vowels.includes(letter.toLowerCase()) ? count + 1 : count

      }, 0)
      const dubVowels = ['ee', 'ie', 'ou', 'au', 'ea', 'ei', 'oo', 'oy', 'e ', 'ai', 'yo', 'ya', 'ye', 'yi']
      const stringPair = string.match(/(..?)/g)
      const countTwo =stringPair.reduce((count, letter) => {

        return dubVowels.includes(letter.toLowerCase()) ? count - 1 : count
      }, 0)
      let stringTwo = string.substring(1)
      stringTwo = stringTwo.match(/(..?)/g)
      const countThree = stringTwo.reduce((count, letter) => {
        return dubVowels.includes(letter.toLowerCase()) ? count - 1 : count
      }, 0)
      const syllables = countOne + countTwo + countThree
      console.log(countOne,countTwo,countThree, syllables)
      if (syllables > 15 && syllables < 19) return true
    }
  }



  render(){

    return (
      <main>
        <form className="form-style" onSubmit={this.handleSubmit} >
          <h3>Submit a Haiku-Who</h3>

          <label className='label'>Name</label>
          <div className="control">
            <input
              onChange = {this.handleChange}
              className="input"
              name="name"
              placeholder="A Haiku-Who should be a haiku portrait of a person, their name should go here."/>
          </div>
          <label className='label'>Haiku</label>
          <div className="control">
            <textarea
              onChange = {this.handleChangeTwo}
              type="text"
              className="input haiku-input"
              name="text"
              rows="3"
              placeholder={

                'Your haiku here please \nMake it with five, seven, five \nWith line breaks too'}
            />
          </div>
          {!this.haikuCheck(this.state.haiku) && <button type="submit" className="button" > Not a haiku yet... </button> }
          {this.haikuCheck(this.state.haiku) && <button type="submit" className="button" > Submit your haiku. </button> }


        </form>
      </main>
    )
  }
}

export default HaikuSubmit
