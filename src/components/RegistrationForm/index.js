// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    lastname: '',
    success: true,
    isFirstname: false,
    isLastname: false,
  }

  eventname = event => {
    this.setState({username: event.target.value})
  }

  eventlastname = event => {
    this.setState({lastname: event.target.value})
  }

  blurname = () => {
    const isValid = this.isValidFirst()

    this.setState({isFirstname: !isValid})
  }

  isValidFirst = () => {
    const {username} = this.state

    return username !== ''
  }

  rendername = () => {
    const {username, isFirstname} = this.state
    return (
      <>
        <label className="labe inside" htmlFor="name">
          FIRST NAME
        </label>
        <input
          className="inpu"
          placeholder="First name"
          type="text"
          id="name"
          value={username}
          onChange={this.eventname}
          onBlur={this.blurname}
        />
      </>
    )
  }

  blurnames = () => {
    const isValids = this.isValidFirsts()

    this.setState({isLastname: !isValids})
  }

  isValidFirsts = () => {
    const {username} = this.state

    return username !== ''
  }

  renderlastname = () => {
    const {lastname} = this.state
    return (
      <>
        <label className="labe inside" htmlFor="lastname">
          Last NAME
        </label>
        <input
          className="inpu"
          placeholder="Last name"
          type="text"
          id="lastname"
          value={lastname}
          onChange={this.eventlastname}
          onBlur={this.blurnames}
        />
      </>
    )
  }

  sumbitbtn = event => {
    event.preventDefault()

    const {username, lastname} = this.state

    if (username !== '' && lastname !== '') {
      this.setState({success: false, isFirstname: true})
    }
  }

  succbtn = () => {
    this.setState({
      success: true,
      username: '',
      lastname: '',
      isFirstname: false,
      isLastname: false,
    })
  }

  failrender = () => {
    const {username} = this.state
    return (
      <>
        <div className="card cards">
          <img
            alt="success"
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          />
          <p>Submitted Successfully</p>
          <button type="button" className="btn" onClick={this.succbtn}>
            submit Another Response
          </button>
        </div>
      </>
    )
  }

  formrender = () => {
    const {isFirstname, isLastname} = this.state
    return (
      <>
        <form className="in" onSubmit={this.sumbitbtn}>
          {this.rendername()}
          {isFirstname && <p className="p">Required</p>}
          {this.renderlastname()}
          {isLastname && <p className="p">Required</p>}
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }

  render() {
    const {success} = this.state

    return (
      <div className="whole">
        <h1 className="head">Registration</h1>
        {success ? this.formrender() : this.failrender()}
      </div>
    )
  }
}

export default RegistrationForm
