import React from "react";
import { TextField } from "@rmwc/textfield";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";

class OutputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  areaMuuttu = event => {
    console.log(event.target.value);
  };

  doStory = (story, index) => {
    return `
    {
          id: ${index},
          text: \`${story.teksti}\`,
          picSrc: '@/../static/images/${story.kuva}'
    }`;
  };
  doStories = () => {
    return `${this.props.data.tekstitJaKuvat
      .map((s, i) => this.doStory(s, i))
      .join(",")}`;
  };

  generate = () => {
    // return JSON.stringify(this.props.data);
    if (this.props.data.tekstitJaKuvat === undefined) {
      return ``;
    }
    return `export default  {
        name: '${this.props.data.nimi}',
        stories: [
            ${this.doStories()}
        ]
    }`;
  };

  downloadFile = () => {
    let blobbi = new Blob([this.generate()], { type: "text/plain" });
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
          value={this.generate()}
          onChange={this.areaMuuttu}
        />
      </div>
    );
  }
}

export default OutputComponent;
