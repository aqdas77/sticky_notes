import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementBoardCount,
  addBoard,
  deleteBoard,
  updateBoardName,
} from "../../Redux/Action/Action";

import DashboardHeader from "./dashboardHeader";
import { BiEdit } from "react-icons/bi";
import { BsPlus, BsTrash } from "react-icons/bs";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [notes, setNotes] = useState([]);

  const [editingBoardIndex, setEditingBoardIndex] = useState(-1); // State for tracking the index of the board being edited
  const boards = useSelector((state) => state.boards);

  const boardCount = useSelector((state) => state.boardCount);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShowModal(false);
    setEditingBoardIndex(-1); // Reset the editing board index
    setBoardName(""); // Reset the board name state
  };

  const handleShow = () => setShowModal(true);

  const deleteBoardItem = (name) => {
    dispatch(deleteBoard(name));
  };

  const handleSaveChanges = () => {
    if (boardName) {
      if (editingBoardIndex !== -1) {
        // If editing a board, update the board name

        dispatch(updateBoardName(editingBoardIndex, boardName));
      } else {
        // If adding a new board, dispatch actions to increment board count and add board
        dispatch(incrementBoardCount());
        dispatch(addBoard(boardName));
      }
      handleClose();
    }
  };

  const handleBoardNameChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleEditBoardName = (index) => {
    // Function to handle editing board name
    setEditingBoardIndex(index); // Set the editing board index
    setBoardName(boards[index]); // Set the board name to be edited in the input field
    handleShow(); // Show the modal
  };

  const handleNotes = () => {
    console.log("clicked");
    const newNote = {
      id: `${notes.length + 1}`,
      content: "",
    };
    setNotes([...notes, newNote]);
  };

  const closeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const boardComponents = boards.map((board, index) => (
    <div key={index}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          padding: "10px",
          borderRadius: "10px",
          border: "2px solid green",
        }}
      >
        {/* Render each board component */}
        {/* You can replace this with your actual board component */}
        <Link to="/drawing" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "black" }}>{board}</h1>
        </Link>
        <div style={{ display: "flex" }}>
          <div
            onClick={() => handleEditBoardName(index)}
            style={{ padding: "5px", color: "red" }}
          >
            <BiEdit size={40} />
          </div>

          <div
            onClick={() => deleteBoardItem(board)}
            style={{ padding: "5px", color: "red" }}
          >
            {" "}
            <BsTrash size={40} />
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <DashboardHeader />
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginLeft: "50px",
          padding: "10px",
        }}
      >
        <p
          style={{
            backgroundColor: "blue",
            borderRadius: "0.375rem",
            padding: "8px",
            color: "white",
          }}
        >
          {" "}
          <BsPlus size={30} onClick={handleNotes} />
        </p>
        <h2>Sticky Notes</h2>
      </div>
      {notes.map((ele) => (
        <Draggable>
          <div class="card" key={ele.id} style={{ width: "200px" }}>
            <div
              class="modal-header"
              style={{
                backgroundColor: "aqua",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            >
              <h6 class="modal-title">Note</h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeNote(ele.id)}
              ></button>
            </div>

            <textarea
              class="form-control"
              placeholder="Type notes here..."
              id="textarea2"
              style={{
                height: "100px",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            ></textarea>
          </div>
        </Draggable>
      ))}
      {/* Recent board */}
      <h2 style={{ margin: "40px" }}>Recent Boards</h2>
      <div style={{ margin: "0 auto", maxWidth: "1140px", padding: "0 15px" }}>
        <div
          style={{
            display: "flex",
            gap: "4px",
            borderRadius: "10px",
            padding: "10px",
            borderRadius: "20px",
            border: "1.5px solid green",
          }}
          onClick={handleShow}
        >
          <p
            style={{
              backgroundColor: "green",
              borderRadius: "0.375rem",
              padding: "12px",
              color: "white",
            }}
          >
            {" "}
            <BsPlus size={40} />
          </p>
          <h1>New Board</h1>
        </div>
        {/* Modal code */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingBoardIndex !== -1 ? "Edit Board" : "New Board"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className="form-control"
              value={boardName}
              onChange={handleBoardNameChange}
              placeholder="Enter board name"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSaveChanges}>
              {editingBoardIndex !== -1 ? "Save Changes" : "Create Board"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>{" "}
      {/* Render the list of boards */}
      <div style={{ margin: "0 auto", maxWidth: "1140px", padding: "0 15px" }}>
        <div>{boardComponents}</div>
      </div>
    </div>
  );
};

export default Dashboard;
