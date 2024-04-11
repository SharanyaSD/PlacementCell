import React from "react";

const ImageDashboard = () => {
  return (
    <div className="h-[35rem] overflow-hidden relative">
      <img
        // src={home}
        alt="Description"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute top-1/2 right-[55%] transform -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded text-white "
        style={{ maxWidth: "40%", padding: "2rem" }}
      >
        <h2>D Y Patil College of Engineering Akurdi, Pune </h2>
        <h4>
          APPROVED BY AICTE , RECOGNIZED BY DTE (GOVT.) & AFFILIATED TO
          SAVITRIBAI PHULE PUNE UNIVERSITY (Formerly Known as University of
          Pune)
        </h4>
        <p>
          Dr. D. Y. Patil Prathishthan's, D.Y. Patil College of Engineering, was
          established in 1984 in Pimpri and later shifted to Akurdi complex in
          2001, which is in the vicinity of Pimpri Chinchwad Industrial area,
          one of the biggest Industrial belts in Asia. The college spreads over
          10 acres of land with seven Engineering disciplines. This Institute is
          approved by AICTE, New Delhi and is affiliated to the Savitribai Phule
          Pune University. The college has excellent & ambient infrastructure
          with well-equipped laboratories. Well-qualified, motivated, and
          dedicated faculty members are serving in the Institute. Students are
          encouraged to actively participate in National and State level
          co-curricular and extracurricular activities. The institute has well
          planned boys and girls hostel in the campus with better amenities and
          ultra-modern facilities.
        </p>
      </div>
    </div>
  );
};

export default ImageDashboard;
