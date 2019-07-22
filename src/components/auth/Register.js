import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state ={ data: {}, errors: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data )
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    console.log(this.state)
    return (
      <main className="section">

        <section className="container">
          <form className="register form-style" onSubmit={this.handleSubmit}>

            <div className="field">
              {/* <label className="label">Username</label> */}
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              {/* <label className="label">Email</label> */}
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              {/* <label className="label">Password</label> */}
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              {/* <label className="label">Password Confirmation</label> */}
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" >Submit</button>
          </form>
        </section>
      </main>
    )
  }
}

export default Register


// import React from 'react'
// import axios from 'axios'
// import ErrorHandler from '../../lib/ErrorHandler'
//
// class Register extends React.Component {
//   constructor() {
//     super()
// 
//     this.state ={ data: {}, errors: {} }
//
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//
//   handleChange({ target: { name, value }}) {
//     const data = { ...this.state.data, [name]: value }
//     const errors = {...this.state.errors, [name]: ''}
//     this.setState({ data, errors })
//   }
//
//   handleSubmit(e) {
//     e.preventDefault()
//     axios.post('/api/register', this.state.data )
//       .then((req,res,err) =>  console.log(err))
//       // .then((req,res,err) =>  this.getErrors(req, res, err))
//       .then(() => this.props.history.push('/login'))
//       // .catch((req,res,err) =>  this.getErrors(req, res, err))
//       .catch(err => this.setState({ errors: err.response.data.errors }))
//   }
//
//   getErrors(req, res, err) {
//     console.log(err)
//     ErrorHandler.errorHandler(req, res, err)
//     this.setState({ errors: err.response.data.errors })
//   }
//
//
//
//
//   render() {
//     console.log(this.state)
//     return (
//
//       <main className="section">
//
//         <section className="container">
//           <form className="register form-style" onSubmit={this.handleSubmit}>
//
//             <div className="field">
//               {/* <label className="label">Username</label> */}
//               <div className="control">
//                 <input
//                   className={`input ${this.state.errors.name ? 'error' : ''}`}
//                   name="username"
//                   placeholder="Username"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               {this.state.errors.name && <small className="error">A username is required.</small>}
//             </div>
//             <div className="field">
//               {/* <label className="label">Email</label> */}
//               <div className="control">
//                 <input
//                   className={`textarea ${this.state.errors.description ? 'error' : ''}`}
//                   name="email"
//                   placeholder="Email"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               {this.state.errors.email && <small className="error">An email is required.</small>}
//             </div>
//             <div className="field">
//               {/* <label className="label">Password</label> */}
//               <div className="control">
//                 <input
//                   className={`input ${this.state.errors.password ? 'error' : ''}`}
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               {this.state.errors.password && <small className="error">A password is required.</small>}
//             </div>
//             <div className="field">
//               {/* <label className="label">Password Confirmation</label> */}
//               <div className="control">
//                 <input
//                   className={`input ${this.state.errors.passwordConfirmation ? 'error' : ''}`}
//                   type="password"
//                   name="password_confirmation"
//                   placeholder="Password Confirmation"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               {this.state.errors.passwordConfirmation && <small className="error">{this.state.errors.passwordConfirmation}</small>}
//             </div>
//             <button type="submit" >Submit</button>
//           </form>
//         </section>
//       </main>
//     )
//   }
// }
//
// export default Register
