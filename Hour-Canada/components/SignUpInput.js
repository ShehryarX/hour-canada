import React from "react";
import {
    TextInput,
    View
} from "react-native";

export default class SignUpInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    render = () => (
        <View style={{margin: 0}}>
            <TextInput
                secureTextEntry={this.props.password}
                autoCapitalize={(this.props.autoCapitalize != undefined && this.props.autoCapitalize) ? "words" : "none"}
                placeholder={this.props.placeholder}
                style={{
                    paddingLeft: 20,
                    paddingVertical: 10,
                    width: 280,
                    color: "#333",
                    fontSize: 20,
                    backgroundColor: "#fff"
                }}
                onChangeText={ text => this.setState({text}) }
                value={this.state.text}
                onFocus={() => this.onFocus()}
            />
        </View>
    )

    onFocus() {
        if (this.props.password) this.setState({ text: "" });
    }

}
