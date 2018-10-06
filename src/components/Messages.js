import React, { Component } from 'react';
import { SideNav, Nav } from 'react-sidenav'

const Navigation = () => (
    <SideNav defaultSelectedPath="1">
        <Nav id="1">Item 1</Nav>
        <Nav id="2">Item 2</Nav>
        <Nav id="3">Item 3</Nav>
    </SideNav>
)

const side = {
    background: 'white',
}
const content = {
    background: 'white'
}
const sideItem = {
    borderStyle: 'solid',
    width: '100%',
}
class Messages extends Component {
    // state = {
    //     showInbox: false
    // }

    state = { selectedPath: '1' }

        onItemSelection = (arg) => {
        this.setState({ selectedPath: arg.path }) 
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <SideNav 
                            selectedPath={this.state.selectedPath} 
                            onItemSelection={this.onItemSelection}>
                            <Nav id={'1'}>Inbox</Nav>
                            <Nav id={'2'}>Sent</Nav>
                            <Nav id={'3'}>Drafts</Nav>
                            <Nav id={'4'}>Announcements</Nav>
                            <Nav id={'5'}>Trash</Nav>
                        </SideNav>
                    </div>
                    <div class="col-8">
                       <p>This is a placeholder message.</p> 
                    </div>
                </div>
            </div>
        )
    }
} 

export default Messages;