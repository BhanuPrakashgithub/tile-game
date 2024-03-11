import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {inputValue: ''}

  inputChange = event => this.setState({inputValue: event.target.value})

  buttonClicked = event => {
    event.preventDefault()
    const {inputValue} = this.state
    console.log(typeof inputValue)
    localStorage.setItem('username', inputValue)
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="mainDivision">
        <h1 className="heading">React Tiles</h1>
        <div className="subDivision">
          <h1 className="heading">Enter Your Name</h1>
          <input
            type="text"
            className="input1"
            value={inputValue}
            onChange={this.inputChange}
          />
          <button className="button" type="button" onClick={this.buttonClicked}>
            Play
          </button>
        </div>
      </div>
    )
  }
}
export default Home
