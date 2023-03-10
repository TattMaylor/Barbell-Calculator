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

const plates = ['100', '55', '45', '35', '25', '15', '10', '5', '2.5', '1.25'];

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
              {plates.map(
                (plate) =>
                  <tr>
                    <td>{plate}</td>
                    <td><input id={'plates' + plate} type='number'></input></td>
                  </tr>
              )}
            </table>
          </div>
          <button onClick={this.closeModal}>Save and Close</button>
        </Modal>
      </div>
    </>
  }
}
