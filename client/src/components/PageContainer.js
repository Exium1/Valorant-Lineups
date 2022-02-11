import React, { Component } from "react";
import "./PageContainer.css";

class PageContainer extends Component {
    render() {
        var newClassName = this.props.first
            ? `page-container ${this.props.className} first`
            : `page-container ${this.props.className}`;
        var newStyle = this.props.topMargin
            ? { marginTop: this.props.topMargin }
            : {};

        return (
            <div className={newClassName} style={newStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default PageContainer;
