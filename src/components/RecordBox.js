import React from 'react';

const RecordBox = () => {
    return (
        <div id='record-box'>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p id="inProgress">Click REC to start recording</p>
                    <div class="record-control-box">
                    <button id="record">REC</button>
                    <button id="stopRecord">STOP</button>
                    <audio id="recordedAudio" controls></audio>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordBox;