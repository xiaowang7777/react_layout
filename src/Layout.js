import React from "react";
import './Layout.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.handlerSidebarChange = this.handlerSidebarChange.bind(this);
    this.handlerLayoutClassName = this.handlerLayoutClassName.bind(this);
    this.getSidebarChanged = this.getSidebarChanged.bind(this);
    this.state = {
      mainClassName: "init",
      mainClassChanged: false,
      Header: props.Header === null || props.Header === undefined ? (<Header/>) : props.Header,
      Sidebar: props.Sidebar === null || props.Sidebar === undefined ? (<Sidebar>
        <SidebarChild onClick={this.handlerSidebarChange}/>
      </Sidebar>) : props.Sidebar,
      Main: props.Main === null || props.Main === undefined ? (<Main/>) : props.Main,
      Footer: props.Footer === null || props.Footer === undefined ? (<Footer/>) : props.Footer,
    };
  }

  handlerLayoutClassName() {
    return this.props.className === undefined || this.props.className === '' ? 'layout' : this.props.className;
  }

  handlerSidebarChange(e) {
    this.setState((state) => ({
      mainClassChanged: !state.mainClassChanged,
      mainClassName: state.mainClassChanged ? "init" : "new"
    }))
  }

  getSidebarChanged() {
    return this.state.mainClassChanged;
  }

  render() {
    return (
      <div id="layout-lay">
        <div id="header">
          {this.state.Header}
        </div>
        <div id="main" className={this.state.mainClassName}>
          {this.state.Sidebar}
          {this.state.Main}
        </div>
        <div id="footer">
          {this.state.Footer}
        </div>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div id="layout-header">

      </div>
    )
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div id="layout-sidebar">
        <div id="child">
          {this.props.children}
        </div>
        <div id="sidebar-main">

        </div>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div id="layout-main">

      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div id="layout-footer">

      </div>
    )
  }
}

class SidebarChild extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOnClick = this.handlerOnClick.bind(this)
    this.state = {
      clicked: false
    }
  }

  handlerOnClick(e) {
    this.props.onClick(e);
    this.setState((state)=>({
      clicked: !state.clicked
    }))
  }

  render() {
    return (
      <div id="sidebar-child">
        <button id="sidebar-child-btn" onClick={this.handlerOnClick}>
          {this.state.clicked ? "展开" : "收起"}
        </button>
      </div>
    )
  }
}

export {Layout}