import React from 'react'

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImg: []
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({allMemeImg: memes})
      })
  }
  render() {
    return (
      <div>
        <form className='meme-form'>
          <input type='text'
          name='topText'
          placeholder='Top Text'
          value={this.state.topText}
          onChange={}
          />
          <input type='text'
          name='bottomText'
          placeholder='Bottom Text'
          value={this.state.bottomText}
          onChange={}
          />
          <button>Gen</button>

        </form>
      </div>
    )
  }
}

export default MemeGenerator
