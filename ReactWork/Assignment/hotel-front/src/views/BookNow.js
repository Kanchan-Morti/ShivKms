import { useState } from "react";

const BookNow = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Popup Styles */}
      <style>
        {`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
          }

          .popup {
            background: white;
            padding: 30px;
            border-radius: 10px;
            width: 300px;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
            position: relative;
          }

          .close-btn {
            position: absolute;
            top: 8px;
            right: 12px;
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
          }

          .popup input {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .popup h2 {
            margin-top: 0;
          }

          .knsl-btn {
            padding: 10px 20px;
            background: #333;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
        `}
      </style>

      {/* Book Now Button */}
      <button className="knsl-btn" onClick={() => setShowPopup(true)}>
        Book Now
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              &times;
            </button>
            <h2>Book Your Room</h2>
            <form>
              <label>Check-in Date:</label>
              <input type="date" name="checkin" required />

              <label>Check-out Date:</label>
              <input type="date" name="checkout" required />

              <button className="knsl-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNow;
