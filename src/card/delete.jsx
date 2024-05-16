import React from "react";
import Popup from "reactjs-popup";
import Button from "../redux/button/button";

export default function Delete() {
  return (
    <Popup
      trigger={
        <button style={{ border: "none", background: "none" }}>
          <svg
            style={{ cursor: "pointer", background: "none", border: "none" }}
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cp"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C13.5977 0 14.9037 1.24892 14.9949 2.82373L15 3V4H17H19C19.5523 4 20 4.44772 20 5C20 5.51284 19.614 5.93551 19.1166 5.99327L19 6H18V19C18 20.5977 16.7511 21.9037 15.1763 21.9949L15 22H5C3.40232 22 2.09634 20.7511 2.00509 19.1763L2 19V6H1C0.447715 6 0 5.55228 0 5C0 4.48716 0.38604 4.06449 0.883379 4.00673L1 4H3H5V3C5 1.40232 6.24892 0.0963391 7.82373 0.00509269L8 0H12ZM4 6V19C4 19.5128 4.38604 19.9355 4.88338 19.9933L5 20H15C15.5128 20 15.9355 19.614 15.9933 19.1166L16 19V6H14H6H4ZM13 4H7V3L7.00673 2.88338C7.06449 2.38604 7.48716 2 8 2H12L12.1166 2.00673C12.614 2.06449 13 2.48716 13 3V4ZM8 9C8.51284 9 8.93551 9.38604 8.99327 9.88338L9 10V16C9 16.5523 8.55229 17 8 17C7.48716 17 7.06449 16.614 7.00673 16.1166L7 16V10C7 9.44771 7.44772 9 8 9ZM12.9933 9.88338C12.9355 9.38604 12.5128 9 12 9C11.4477 9 11 9.44771 11 10V16L11.0067 16.1166C11.0645 16.614 11.4872 17 12 17C12.5523 17 13 16.5523 13 16V10L12.9933 9.88338Z"
              fill="#F65160"
            ></path>
          </svg>
        </button>
      }
      modal
      nested
      contentStyle={{
        borderRadius: "30px",
        boxSizing: "border-box",
        padding: "30px",
        width: "400px",
        height: "200px",

        color: "rgb(0, 0, 0)",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: 1.5,
        textAlign: "center",
      }}
    >
      {(close) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div
            style={{
              color: "#000",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            are you sure you want to delette this task ?
          </div>
          <div
            style={{
              borderRadius: "40px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button
                style={{
                  background: "#713FFF",
                  border: "none",
                  borderRadius: "14px",
                  boxShadow: "0 6px 12px rgba(113, 63, 255, .25)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: 600,
                  outline: "none",
                  padding: "13px 30px",
                }}
                onClick={close}
              >
                delete
              </button>
              <button
                style={{
                  cursor: "pointer",
                  background: "#fff",
                  border: "1px solid #d8e0f0",
                  boxShadow: "0 1px 2px rgba(184, 200, 224, .222)",
                  color: "#7d8592",
                  padding: "13px 30px",
                  borderRadius: "14px",

                  fontWeight: 400,
                }}
                onClick={close}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}
