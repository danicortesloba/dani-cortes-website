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
    label: "About Dani",
    path: "/",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    label: "Publications",
    path: "/publications",
    icon: <FontAwesomeIcon icon={faPenFancy} />
  },
  {
    label: "Photography",
    path: "/photography",
    icon: <FontAwesomeIcon icon={faCameraRetro} />
  },
  {
    label: "Interviews",
    path: "/interviews",
    icon: <FontAwesomeIcon icon={faMicrophoneAlt} />
  },
  {
    label: "Editing",
    path: "/editing",
    icon: <FontAwesomeIcon icon={faBook} />
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faEnvelope} />
  }
];

export default navButtons;