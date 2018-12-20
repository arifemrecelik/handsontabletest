import React, { Component } from "react";
import "./App.css";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";
import { Modal } from "antd";
import { Button } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.myTable = React.createRef();
    this.state = {
      modalVisible: false
    };
  }
  render() {
    const myData = [[1, 1, 1, 1, 1]];
    return (
      <div style={{ padding: "30px" }}>
        <Button
          onClick={() => {
            this.setState(prevState => ({
              modalVisible: !prevState.modalVisible
            }));
          }}
        >
          TEST
        </Button>
        <Modal visible={this.state.modalVisible}>
          <HotTable
            ref={this.myTable}
            data={myData}
            width='500'
            height='500'
            colHeaders
            rowHeaders
          />
        </Modal>
      </div>
    );
  }
}

export default App;
