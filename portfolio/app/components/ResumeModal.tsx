// components/ResumeModal.tsx
import React from "react";

interface Props {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          x
        </button>
        <embed
          src="/Samuel_EmardThibault_Resume.pdf"
          type="application/pdf"
          className="pdf-embed"
        />
        <div className="mobile-fallback">
            <a href="/Samuel_EmardThibault_Resume.pdf" download>
              Download Resume</a>
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          width: 90vw;
          height: 90vh;
          background: #272822;
          border: 2px solid #3e3d32;
          box-shadow: 0 0 10px #000;
        }
        .close-btn {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1.5rem;
          background: none;
          border: none;
          color: #f8f8f2;
          cursor: pointer;
        }
        .pdf-embed {
          width: 100%;
          height: 100%;
          border: none;
        }
        .mobile-fallback {
          display: none;
        }
        @media (max-width: 600px) {
          .pdf-embed { display: none; }
          .mobile-fallback {
            display: block;
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
            background: #1e1e1e;
            padding: 0.5rem;
            text-align: center;
            border-top: 1px solid #3e3d32;
          }
          .mobile-fallback a {
            color: #66d9ef;
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  );
}

