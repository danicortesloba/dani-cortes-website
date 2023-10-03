import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenFancy,
  faCameraRetro,
  faUser,
  faBook,
  faMicrophoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Sobre Dani",
    path: "/",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    label: "Publicaciones",
    path: "/publicaciones",
    icon: <FontAwesomeIcon icon={faPenFancy} />
  },
  {
    label: "Fotografía",
    path: "/fotografia",
    icon: <FontAwesomeIcon icon={faCameraRetro} />
  },
  {
    label: "Entrevistas",
    path: "/entrevistas",
    icon: <FontAwesomeIcon icon={faMicrophoneAlt} />
  },
  {
    label: "Edición",
    path: "https://lobaediciones.cl/?page_id=2",
    icon: <FontAwesomeIcon icon={faBook} />
  },
  {
    label: "Contacto",
    path: "/contacto",
    icon: <FontAwesomeIcon icon={faEnvelope} />
  }
];

export default navButtons;