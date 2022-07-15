import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25155.290491200543!2d23.702461439494606!3d37.99086557330319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2zzpHOuM6uzr3OsQ!5e0!3m2!1sel!2sgr!4v1657799208043!5m2!1sel!2sgr"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
