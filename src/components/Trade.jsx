import React, { Component } from "react";
import SLIDE_PIC_1 from "../Img/SLIDE PIC 1.png";
import wpf_coins from "../Img/wpf_coins.png";
import clarity_group_solid from "../Img/clarity_group-solid.png";
import BNB from "../Img/BNB.png";
import fluent_qr_code_28_filled from "../Img/fluent_qr-code-28-filled.png";
import fluent_gift_16_filled from "../Img/fluent_gift-16-filled.png";
import carbon_next_filled from "../Img/carbon_next-filled.png";
class trade extends Component {
  state = {};
  render() {
    return (
      <div className="trade_margin_top" style={{ color: "white" }}>
        <div className="trade_back_img">
          <div
            className="trade_back"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 8, 44, 0) 0%, #00082C 100%)",
              position: "relative",
            }}
          ></div>
        </div>
        <div style={{ padding: "0 40px", margin: "100px 0" }}>
          <div className="row">
            <div className="col-lg-4 col-md-12 py-2">
              <button
                style={{
                  padding: "10px 15px 10px 30px",
                  display: "flex",
                  flexDirection: "row",
                  background: "#333146",
                  borderRadius: "20px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img src={wpf_coins} alt="" />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                      }}
                    >
                      Personal Staking
                    </span>
                    <span style={{ display: "inline-block" }}>$0</span>
                  </span>
                </span>
              </button>
            </div>
            <div className="col-lg-4 col-md-12 py-2">
              <button
                style={{
                  padding: "10px 15px 10px 30px",
                  display: "flex",
                  flexDirection: "row",
                  background: "#333146",
                  borderRadius: "20px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img src={clarity_group_solid} alt="" />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                      }}
                    >
                      Group TVL
                    </span>
                    <span style={{ display: "inline-block" }}>$0</span>
                  </span>
                  <span style={{ display: "inline-block" }}>
                    {" "}
                    <img src={carbon_next_filled} alt="aa" />{" "}
                  </span>
                </span>
              </button>
            </div>
            <div className="col-lg-4 col-md-12 py-2">
              <button
                style={{
                  padding: "10px 15px 10px 30px",
                  display: "flex",
                  flexDirection: "row",
                  background: "#333146",
                  borderRadius: "20px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img src={BNB} alt="" />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                      }}
                    >
                      BSC Address
                    </span>
                    <span style={{ display: "inline-block" }}></span>
                  </span>
                  <span style={{ display: "inline-block" }}>
                    {" "}
                    <img src={carbon_next_filled} alt="aa" />{" "}
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 py-2">
              <button
                style={{
                  padding: "10px 15px 10px 30px",
                  display: "flex",
                  flexDirection: "row",
                  background: "#333146",
                  borderRadius: "20px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img src={fluent_qr_code_28_filled} alt="" />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                      }}
                    >
                      Invite Friend
                    </span>
                    <span style={{ display: "inline-block" }}></span>
                  </span>
                  <span style={{ display: "inline-block" }}>
                    {" "}
                    <img src={carbon_next_filled} alt="aa" />{" "}
                  </span>
                </span>
              </button>
            </div>
            <div className="col-lg-4 col-md-12 py-2">
              <button
                style={{
                  padding: "10px 15px 10px 30px",
                  display: "flex",
                  flexDirection: "row",
                  background: "#333146",
                  borderRadius: "20px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img src={fluent_gift_16_filled} alt="" />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                      }}
                    >
                      Rewards
                    </span>
                    <span style={{ display: "inline-block" }}></span>
                  </span>
                  <span style={{ display: "inline-block" }}>
                    {" "}
                    <img src={carbon_next_filled} alt="aa" />{" "}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default trade;
