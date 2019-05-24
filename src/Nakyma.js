import React, { useState } from "react";
import { TextField } from "@rmwc/textfield";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import { Select } from "@rmwc/select";
import "@material/select/dist/mdc.select.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "@material/list/dist/mdc.list.css";
import "@material/menu/dist/mdc.menu.css";
import "@material/menu-surface/dist/mdc.menu-surface.css";
import kuvat from "./kuvat";

import hevonen_talvi from "./images/hevonen_talvi.jpg"
import iltajarvi from "./images/iltajarvi.jpg"
import jaa1 from "./images/jaa1.jpg"
import lampaat from "./images/lampaat.jpg"
import metsapolku from "./images/metsapolku.jpg"
import mokki from "./images/mokki.jpg"
import norppa from "./images/norppa.jpg"
import orava from "./images/orava.jpg"
import pikkulintu from "./images/pikkulintu.jpg"//
import puisto from "./images/puisto.jpg"
import sininenkukka from "./images/sininenkukka.jpg"
import sorsa from "./images/sorsa.jpg"
import valkoinenkukka from "./images/valkoinenkukka.jpg"


const Nakyma = props => {
  const [teksti, setTeksti] = useState("");
  const [kuva, setKuva] = useState("");
  const [valittuKuva, setValittuKuva] = useState("");

  const kuvaMuuttu = event => {
    // console.log("kuvamuuttu()", event.target.value);
    setKuva(event.target.value);
    const nimi = event.target.value.split('.')[0]
    if (nimi === 'hevonen_talvi') {setValittuKuva(hevonen_talvi)}
    if (nimi === 'iltajarvi') {setValittuKuva(iltajarvi)}
    if (nimi === 'jaa1') {setValittuKuva(jaa1)}
    if (nimi === 'lampaat') {setValittuKuva(lampaat)}
    if (nimi === 'metsapolku') {setValittuKuva(metsapolku)}
    if (nimi === 'mokki') {setValittuKuva(mokki)}
    if (nimi === 'norppa') {setValittuKuva(norppa)}
    if (nimi === 'orava') {setValittuKuva(orava)}
    if (nimi === 'pikkulintu') {setValittuKuva(pikkulintu)}
    if (nimi === 'puisto') {setValittuKuva(puisto)}
    if (nimi === 'sininenkukka') {setValittuKuva(sininenkukka)}
    if (nimi === 'sorsa') {setValittuKuva(sorsa)}
    if (nimi === 'valkoinenkukka') {setValittuKuva(valkoinenkukka)}
    props.parentFunc([props.index, { kuva: event.target.value, teksti: teksti }])
  };

  const tekstiMuuttu = event => {
    // console.log("tekstimuuttu()", event.target.value);
    setTeksti(event.target.value);
    props.parentFunc([props.index, { kuva: kuva, teksti: event.target.value }])
  };

  return (
    <>
      <Select
        onChange={kuvaMuuttu}
        label="Valitse kuva"
        enhanced
        options={kuvat}
      />

    <img src={valittuKuva} alt={kuva} />

      <TextField
        textarea
        fullwidth
        outlined
        defaultValue={teksti}
        onChange={tekstiMuuttu}
      />
    </>
  );
};

export default Nakyma;
