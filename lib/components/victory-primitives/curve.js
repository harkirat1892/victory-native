import React from "react";
import { Path } from "../../index";
import { Curve } from "victory-line/es";

export default class extends Curve {
  static defaultProps = Object.assign({}, Curve.defaultProps, {
    pathComponent: <Path/>
  });
}
