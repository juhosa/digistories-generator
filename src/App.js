import React from "react";
import "./App.css";
import InputComponent from "./Input";
import OutputComponent from "./Output";
import { Grid, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import { SimpleDialog } from "@rmwc/dialog";
import "@material/dialog/dist/mdc.dialog.css";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import {
  TopAppBar,
  TopAppBarSection,
  TopAppBarRow,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputData: "", dialogOpen: false };
  }

  generateInApp = args => {
    console.log("generate in App", args);
    this.setState({ inputData: args });
  };

  render() {
    return (
      <>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>Digistories Generator</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />

        <Grid>
          <SimpleDialog
            title="Ohjeteksti"
            open={this.state.dialogOpen}
            cancelLabel={null}
            acceptLabel="Sulje"
            onClose={evt => {
              console.log(evt.detail.action);
              this.setState({ dialogOpen: false });
            }}
          >
            <p>
              Syötä "henkilön nimi"-kenttään tarinan kohteena olevan ihmisen
              nimi.
            </p>

            <p>
              "Lisää teksti"-napista saat aina yhden tekstilaatikon ja siihen
              liitetyn kuvan valinnan lisää. Yksi tälläinen yhdistelmä on yksi
              näkymä Digistories-sovelluksessa Pepperissä.
            </p>

            <p>
              Kun olet lisännyt tekstit ja valinnut kuvat, paina "generoi" ja
              sen jälkeen voit ladata tekstitiedoston "Lataa"-napista.
            </p>

            <p>Lähetä lataamasi tiedosto Juholle tai Santerille.</p>

            <p>Onnittelut, olet juuri tehnyt robottiin tarinan!</p>
          </SimpleDialog>
          <GridCell span={6}>
            <Button
              raised
              onClick={e => {
                this.setState({ dialogOpen: true });
              }}
            >
              Ohje
            </Button>
            <InputComponent parentFunc={this.generateInApp} />
          </GridCell>
          <GridCell span={6}>
            <OutputComponent data={this.state.inputData} />
          </GridCell>
        </Grid>
      </>
    );
  }
}

export default App;
