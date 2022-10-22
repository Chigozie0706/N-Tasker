import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Cover = ({ name, login, coverImg }) => {
  if ((name, login, coverImg)) {
    return (
      <div
        className="d-flex justify-content-center flex-column text-center "
        style={{  minHeight: "100vh" }}
      > <div className="mt-auto">
       <h4 className="mt-auto text-secondary">Welcome to DecTask-Scheduler</h4>
      <p className="mt-auto text-secondary">In DecTask-Scheduler you create your todo list on the blockchain</p>
          <p className="mt-auto text-secondary">Please connect your wallet to continue.</p>
          <Button
            onClick={login}
            // variant="outline-light"
            className="rounded-pill px-3 mt-3"
          >
            Connect Wallet
          </Button>
        </div>
        <p className="mt-auto text-secondary">Powered by NEAR</p>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;
