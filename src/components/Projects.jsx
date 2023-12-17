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
      backgroundColor: "#1c1c1c",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      color: "white",
      width: "48%",
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
      <div
        style={{
          textAlign: "center",
          alignContent: "center",
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
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
                backgroundColor: "white",
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
