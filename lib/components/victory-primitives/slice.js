import React from "react";
import { Path } from "../../index";
import { Slice } from "victory-pie/es";

export default class extends Slice {
  static defaultProps = Object.assign({}, Slice.defaultProps, {
    pathComponent: <Path/>
  });
}
