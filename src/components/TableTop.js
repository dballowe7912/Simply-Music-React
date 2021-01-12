import React from 'react';
import Song from './Song';

const TableTop = ({songData}) => {
    
    return (
        <table className="table-top">
            <tbody>
                <tr>                   
                    <th></th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Length</th>
                </tr>
                {songData.map((song, index) => {
                    return <Song song={song} key={index}/>
                })}
            </tbody>
        </table>
    )
}

export default TableTop;