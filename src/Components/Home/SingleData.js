import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999'
  }
};


Modal.setAppElement('#root')

const SingleData = ({ details }) => {

  const today = new Date();
  let month = today.toLocaleString('default', { month: 'long' });
  let finalDate = month + " " + today.getDate() + "," + today.getFullYear();
  

  const { title, content, author, thumbnail, date, avatar } = details;
 
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={thumbnail.small} alt="card-img" />
          </div>
          <div className="learn-more-btn">
            <p><a onClick={openModal}>Learn More</a></p>
          </div>

          <div className="card_content">
            <h2 className="card_title" onClick={openModal}>{title}</h2>
            <p className="card_text">{content}</p>
            <div className="card-footer">
              <p> {author.name} - {author.role}</p>
              <p>{finalDate}</p>
            </div>
          </div>
        </div>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >


        <div className="card">
          <div className="card_image">
            <h2 ref={_subtitle => (subtitle = _subtitle)}></h2>
            <button onClick={closeModal}><AiOutlineClose /></button>
            <img src={thumbnail.small} alt="card-img" />

          </div>

          <div className="card_content">
            <h2 className="card_title">{title}</h2>
            <p className="card_text">{content}</p>
            <div className="card-footer ">
              <p style={{ display: 'flex', alignItems: 'center' }}><div style={{ marginRight: '15px' }}><img src={author.avatar} alt="" /></div> <div>{author.name} - {author.role}</div></p>
            </div>
          </div>
        </div>

      </Modal>
    </>
  );
};

export default SingleData;