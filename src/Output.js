import React from "react";
import { TextField } from "@rmwc/textfield";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import generateStory from "./digistories-generator";

class OutputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  areaMuuttu = event => {
    console.log(event.target.value);
  };

  downloadFile = () => {
    let blobbi = new Blob(
      [generateStory(this.props.data.nimi, this.props.data.tekstitJaKuvat)],
      { type: "text/plain" }
    );
    var downloadLink = document.createElement("a");
    downloadLink.download = `${this.props.data.nimi}.js`;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = window.URL.createObjectURL(blobbi);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  };

  render() {
    return (
      <div>
        <h1>Outputti</h1>

        <Button onClick={this.downloadFile} raised>
          Lataa
        </Button>

        <TextField
          textarea
          outlined
          fullwidth
          rows={40}
          value={generateStory(
            this.props.data.nimi,
            this.props.data.tekstitJaKuvat
          )}
          onChange={this.areaMuuttu}
        />
      </div>
    );
  }
}

export default OutputComponent;
