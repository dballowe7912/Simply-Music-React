import React from 'react';

class Song extends React.Component {

    constructor(props) {
        super(props);

    }
    
    render() {
        console.log(this.props)
        return (
            <tr>
                <td>
                    <button>play</button>
                    <button>pause</button>
                </td>
                <td>{this.props.song.title}</td>
                <td>{this.props.song.artist}</td>
                <td>{this.props.song.length}</td>
            </tr>
        )
    }
}

export default Song;