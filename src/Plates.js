import React, { Component } from 'react'
import Modal from 'react-modal';
import './Plates.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const plates = { 100: 0, 55: 0, 45: 0, 35: 0, 25: 0, 15: 0, 10: 0, 5: 0, 2.5: 0, 1.25: 0 };

export default class Plates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openModal = () => {
    this.setState({ open: true })
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  savePlates = () => {
    Object.keys(plates).forEach(key => plates[key] = document.getElementById(String(key)).value)
  }

  render() {
    return <>
      <div>
        <button onClick={(this.openModal)}>Set Plate Count</button>
        <Modal
          isOpen={this.state.open}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="My Plates"
        >
          <div>
            <table>
              {Object.keys(plates).map(
                (plate) =>
                  <tr>
                    <td>{plate}</td>
                    <td><input id={plate} type='number' defaultValue={plates[plate]}></input></td>
                  </tr>
              )}
            </table>
          </div>
          <button onClick={() => {
            this.savePlates();
            this.closeModal();
          }}>Save and Close</button>
        </Modal>
      </div>
    </>
  }
}
