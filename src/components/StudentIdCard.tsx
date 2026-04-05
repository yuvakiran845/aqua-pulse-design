import React from 'react';
import './StudentIdCard.css';

interface StudentIdCardProps {
  studentName: string;
  studentId: string;
  trainingCenter: string;
  slotTiming: string;
  batchType: string;
  experience: string;
  academicYear?: string;
  photoUrl?: string; // If available (e.g. from file upload)
}

const StudentIdCard: React.FC<StudentIdCardProps> = ({
  studentName,
  studentId,
  trainingCenter,
  slotTiming,
  batchType,
  experience,
  academicYear = "2026",
  photoUrl
}) => {
  return (
    <div className="id-card-container">
      <div className="id-card">
        {/* HEADER SECTION */}
        <div className="header">
          <div className="logo-wrapper">
            <img src="/logo.png" className="logo" alt="Academy Logo" />
          </div>
          <h2>AQUA PULSE SWIMMING ACADEMY</h2>
          <p>STUDENT IDENTITY CARD - {academicYear}</p>
        </div>

        {/* CENTER CONTENT SECTION */}
        <div className="center">
          <div className="photo-container">
            <img
              src={photoUrl || "/placeholder.svg"}
              className="student-photo"
              alt={studentName}
            />
          </div>

          <h1 className="student-name">{studentName || "AFZAL"}</h1>

          <div className="id-badge">
            {studentId || "APSA-2026-R&R-001"}
          </div>

          <div className="details-table">
            <div className="detail-item">
              <span className="detail-label">Training Center</span>
              <span className="detail-value">{trainingCenter || "R&R Swimming Pool"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Batch Time</span>
              <span className="detail-value">{slotTiming || "9:00 AM - 10:00 AM"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Batch Type</span>
              <span className="detail-value">{batchType || "Weekday"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Experience</span>
              <span className="detail-value">{experience || "Intermediate"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Academic Year</span>
              <span className="detail-value">{academicYear}</span>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="footer">
          <p className="auth-label">Authorised Signature</p>
          <img src="/signature.png" className="signature-img" alt="Founder Signature" />
          <p className="founder-name">Founder & Program Director</p>
          <p className="academy-footer">Aqua Pulse Swimming Academy</p>
        </div>
      </div>
    </div>
  );
};

export default StudentIdCard;
