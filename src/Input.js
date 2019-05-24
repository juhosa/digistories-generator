import React from "react";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import { TextField } from "@rmwc/textfield";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import Nakyma from "./Nakyma";
import "./Input.css";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   nakymat: [<Nakyma />],
      nakymat: [],
      nimi: "",
      tekstitJaKuvat: []
    };
  }

  generate = () => {
    // console.log("generate");
    this.props.parentFunc(this.state);
  };

  addTextBox = () => {
    // lisää tyhjän nakymän arrayhin
    this.setState(state => ({
      nakymat: [
        ...state.nakymat,
        <Nakyma index={state.nakymat.length} parentFunc={this.nakymaMuuttu} />
      ]
    }));
  };

  nimiMuuttu = event => {
    this.setState({ nimi: event.target.value });
  };

  nakymaMuuttu = n => {
    // console.log(n);
    let tmp = this.state.tekstitJaKuvat;
    tmp[n[0]] = n[1];
    this.setState({ tekstitJaKuvat: tmp });
  };

  render() {
    const nakymaElementit = this.state.nakymat.map((n, index) => {
      return <div key={index}>{n}</div>;
    });

    return (
      <div>
        <h1>Syötä tekstit</h1>
        <h3>(yksi tekstilaatikko on yksi näkymä Pepperissä)</h3>

        <TextField
          label="Henkilön nimi"
          type="text"
          value={this.state.nimi}
          onChange={this.nimiMuuttu}
        />

        <h2>Tekstit:</h2>
        <div>
          <Button onClick={this.addTextBox} raised>
            Lisää teksti
          </Button>

          <Button onClick={this.generate} raised>
            Generoi
          </Button>
        </div>
        {nakymaElementit}
      </div>
    );
  }
}

export default InputComponent;
