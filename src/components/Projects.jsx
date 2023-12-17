import React from "react";
import Modal from "react-modal";
const Projects = ({ isOpen, closeModal, projectDetails }) => {
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#000",
      color: "#fff",
      width: "90%",
      maxWidth: "400px",
      margin: "0 auto",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Project Detail Modal"
      style={modalStyles}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>Project Details</h2>
        {projectDetails && (
          <>
            <img
              src={projectDetails.img}
              alt={projectDetails.title}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <p style={{ marginTop: "20px", fontSize: "16px" }}>
              {projectDetails.description}
            </p>
            <button
              onClick={closeModal}
              style={{
                padding: "10px 20px",
                backgroundColor: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Close
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Projects;
