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
  photoUrl?: string; 
  programName?: string; // New prop for Program
}

const StudentIdCard: React.FC<StudentIdCardProps> = ({
  studentName,
  studentId,
  trainingCenter,
  slotTiming,
  batchType,
  experience,
  academicYear = "2026",
  photoUrl,
  programName = "Beginners Program"
}) => {
  return (
    <div className="id-card-container">
      <div className="id-card">
        {/* HEADER SECTION - UNCHANGED */}
        <div className="header">
          <div className="logo-wrapper">
            <img src="/logo.png" className="logo" alt="Academy Logo" />
          </div>
          <h2>AQUA PULSE SWIMMING ACADEMY</h2>
          <p>STUDENT IDENTITY CARD • {academicYear}</p>
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

          <h1 className="student-name">{studentName || "SRNYMJDSTU"}</h1>

          <div className="id-badge">
            {studentId || "APSA-2026-R&R-0001"}
          </div>

          {/* BOXED DETAILS LIST */}
          <div className="details-list">
            <div className="detail-box">
              <p className="detail-box-label">PROGRAM</p>
              <p className="detail-box-value">{programName}</p>
            </div>
            <div className="detail-box">
              <p className="detail-box-label">TRAINING CENTER</p>
              <p className="detail-box-value">{trainingCenter || "R&R Swimming Pool"}</p>
            </div>
            <div className="detail-box">
              <p className="detail-box-label">BATCH TIME</p>
              <p className="detail-box-value">{slotTiming || "6:00 AM - 7:00 AM"}</p>
            </div>
            <div className="detail-box">
              <p className="detail-box-label">BATCH TYPE</p>
              <p className="detail-box-value">{batchType || "Weekday Batch"}</p>
            </div>
            <div className="detail-box">
              <p className="detail-box-label">ACADEMIC YEAR</p>
              <p className="detail-box-value">{academicYear}</p>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="footer">
          <p className="auth-label">AUTHORISED SIGNATURE</p>
          <div className="signature-box">
             <svg className="signature-wave" width="100" height="20" viewBox="0 0 100 20">
               <path d="M0,10 Q10,2 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="#00eaff" strokeWidth="2" />
             </svg>
          </div>
          <p className="founder-name">Founder & Program Director</p>
          <p className="academy-footer">Aqua Pulse Swimming Academy</p>
          
          <div className="contact-footer">
            <span>aquapulsehub.in</span>
            <span className="dot">•</span>
            <span>aquapulsehub@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentIdCard;
