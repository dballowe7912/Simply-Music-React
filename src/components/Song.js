import React from 'react';


class Song extends React.Component {

    constructor(props) {
        super(props);

    }
    
    render() {
        
        return (
            <tr>
                <td>
                    <audio ref="audio_tag" src={this.props.song.location} controls autoPlay/>
                </td>
                <td>{this.props.song.title}</td>
                <td>{this.props.song.artist}</td>
                <td>{this.props.song.length}</td>
            </tr>
        )
    }
}

export default Song;