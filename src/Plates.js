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
    Object.keys(this.props.plates).forEach(key => this.props.plates[key] = document.getElementById(String(key)).value)
  }

  render() {
    Modal.setAppElement('body');
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
              <tbody>
                {Object.keys(this.props.plates).map(
                  (plate) =>
                    <tr key={plate}>
                      <td>{plate}</td>
                      <td><input id={plate} type='number' defaultValue={this.props.plates[plate]}></input></td>
                    </tr>
                )}
              </tbody>
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
