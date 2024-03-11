import {Component} from 'react'
import {BsAndroid2, BsApple, BsAlarmFill, BsFillBellFill} from 'react-icons/bs'
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaShoppingCart,
} from 'react-icons/fa'
import './index.css'

const icons = [
  {
    id: 1,
    icon: <BsAndroid2 />,
    alpha: 'a',
    active: false,
    matched: false,
  },
  {
    id: 2,
    icon: <BsApple />,
    active: false,
    matched: false,
    alpha: 'b',
  },
  {
    id: 3,
    icon: <BsAlarmFill />,
    active: false,
    matched: false,
    alpha: 'c',
  },
  {
    id: 4,
    icon: <BsFillBellFill />,
    active: false,
    matched: false,
    alpha: 'd',
  },
  {
    id: 5,
    icon: <FaFacebookF />,
    active: false,
    matched: false,
    alpha: 'e',
  },
  {
    id: 6,
    icon: <FaInstagramSquare />,
    active: false,
    matched: false,
    alpha: 'f',
  },
  {
    id: 7,
    icon: <FaLinkedin />,
    active: false,
    matched: false,
    alpha: 'g',
  },
  {
    id: 8,
    icon: <FaShoppingCart />,
    active: false,
    matched: false,
    alpha: 'h',
  },
  {
    id: 9,
    icon: <BsAndroid2 />,
    active: false,
    matched: false,
    alpha: 'a',
  },
  {
    id: 10,
    icon: <BsApple />,
    active: false,
    matched: false,
    alpha: 'b',
  },
  {
    id: 11,
    icon: <BsAlarmFill />,
    active: false,
    matched: false,
    alpha: 'c',
  },
  {
    id: 12,
    icon: <BsFillBellFill />,
    active: false,
    matched: false,
    alpha: 'd',
  },
  {
    id: 13,
    icon: <FaFacebookF />,
    active: false,
    matched: false,
    alpha: 'e',
  },
  {
    id: 14,
    icon: <FaInstagramSquare />,
    active: false,
    matched: false,
    alpha: 'f',
  },
  {
    id: 15,
    icon: <FaLinkedin />,
    active: false,
    matched: false,
    alpha: 'g',
  },
  {
    id: 16,
    icon: <FaShoppingCart />,
    active: false,
    matched: false,
    alpha: 'h',
  },
]

class LoginForm extends Component {
  state = {
    imageList: [],
    selectTile: null,
    score: 0,
    min: '00',
    sec: '00',
    user: 'bhanu',
  }

  componentDidMount() {
    const name1 = localStorage.getItem('username')
    console.log(name1)
    const iconList = icons
    const shuffleList = iconList
    this.setState({imageList: shuffleList, user: name1})
    this.interval = setInterval(this.getTime, 1000)
  }

  /*shuffle = array => {
    let j
    for (let i = array.length - 1; i > 0; i-=1) {
      j = Math.floor(Math.random() * (i + 1))
      [array[i], array[j]] = [ array[j], array[i]]
    }
    return array
  }*/

  getTime = () => {
    this.setState(prev => {
      const temp = parseInt(prev.sec) + 1
      if (temp === 59) {
        const temp1 = parseInt(prev.min) + 1
        if (temp1 < 10) {
          return {min: `0${temp1}`, sec: '00'}
        }
        return {min: `${temp1}`, sec: '00'}
      } else if (temp < 10) {
        return {min: prev.min, sec: `0${temp}`}
      }
      return {min: prev.min, sec: temp}
    })
  }

  getFilterItems = () => {
    const {imageList} = this.state
    const update = imageList.filter(each => each.matched)
    return update
  }

  tileCheck = each => {
    const {imageList, selectTile} = this.state
    if (each.matched) {
      return this.setState({imageList: imageList, selectTile: selectTile})
    }
    if (selectTile === null) {
      const update = [...imageList]
      update[each.id - 1].active = true
      this.setState({imageList: update, selectTile: each})
    } else {
      const update = [...imageList]
      update[each.id - 1].active = true
      this.setState({imageList: update})
      if (each.id === selectTile.id) {
        update[each.id - 1].active = false
        this.setState({imageList: update, selectTile: null})
      } else if (each.alpha === selectTile.alpha) {
        const updated = imageList.map(item => {
          if (item.id === each.id) {
            return {...item, active: true, matched: true}
          } else if (item.id === selectTile.id) {
            return {...item, matched: true}
          }
          return item
        })
        this.setState(prev => {
          return {score: prev.score + 1, imageList: updated, selectTile: null}
        })
      } else {
        setTimeout(() => {
          const update1 = imageList.map(item => {
            if (item.id === selectTile.id) {
              return {...item, active: false}
            } else if (item.id === each.id) {
              return {...item, active: false}
            }
            return item
          })
          this.setState(prev => {
            return {score: prev.score - 1, imageList: update1, selectTile: null}
          })
        }, 1000)
      }
    }
  }

  render() {
    const {imageList, score, min, sec, user} = this.state

    const updatedList = this.getFilterItems()

    if (updatedList.length === imageList.length) {
      clearInterval(this.interval)
      localStorage.removeItem('name')
      return (
        <div className="container">
          <h1 className="heading1">React Tiles</h1>
          <div className="sub-container">
            <h1 className="heading">Score : {score}</h1>
            <h1 className="heading">
              Time: {min}:{sec}
            </h1>
          </div>
          <div className="cart-container">
            <h1 className="paragraph">Welcome {user}</h1>
            <div className="middle-container">
              <h1 className="heading">Game Finished!</h1>
              <div className="end-container">
                <h1 className="head">Score: {score}</h1>
                <h1 className="head">
                  Time Taken: {min}:{sec}
                </h1>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <h1 className="heading1">Mahajong Game</h1>
        <div className="sub-container">
          <h1 className="heading">Score : {score}</h1>
          <h1 className="heading">
            Time: {min}:{sec}
          </h1>
        </div>
        <div className="cart-container">
          <h1 className="paragraph">Welcome {user}</h1>
          <ul className="unorder-list">
            {imageList.map(each => (
              <li className="list-item" key={each.id}>
                <button
                  className="outputButton"
                  type="button"
                  onClick={() => this.tileCheck(each)}
                >
                  {each.active || each.matched ? each.icon : '?'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default LoginForm
