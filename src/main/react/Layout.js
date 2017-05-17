import React, { Component } from 'react'
import { Layout as RTLayout, NavDrawer, Panel } from 'react-toolbox'
import { AppBar } from 'react-toolbox'
import isBrowser from 'react-toolbox/lib/utils/is-browser'
import breakpoints from 'react-toolbox/lib/utils/breakpoints'
import { getViewport } from 'react-toolbox/lib/utils/utils'
import DocumentTitle from 'react-document-title'
import 'Layout.css'

class Layout extends Component {
  state = {
    drawerActive: false,
    width: isBrowser() && getViewport().width
  }

  permanentAt = 'lg'

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive })
  }

  componentDidMount () {
    if (!this.state.width) this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  hideDrawer = () => {
    this.setState({ drawerActive: false })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({ width: getViewport().width })
  }

  render() {
    const appBarIconVisible = this.state.width <= breakpoints[this.permanentAt]

    let appBarIcon
    if (appBarIconVisible) {
      appBarIcon = 'menu'
    }

    const navDrawerProps = {
      active: this.state.drawerActive,
      permanentAt: this.permanentAt,
      onOverlayClick: this.toggleDrawerActive
    }

    return (
      <DocumentTitle title="Test">
        <RTLayout>
          <NavDrawer { ...navDrawerProps }>
            <ul>
              <li>Menu item 1</li>
              <li>Menu item 2</li>
            </ul>
          </NavDrawer>
          <Panel>
            <AppBar
              title="Test"
              leftIcon={appBarIcon}
              onLeftIconClick={this.toggleDrawerActive}
            />
            <div>
              Hello world
            </div>
          </Panel>
        </RTLayout>
      </DocumentTitle>
    )
  }
}

export default Layout
