import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
    return (
        <Menu>
            <Menu.Item>CrowdCoin</Menu.Item>
            
            <Menu.Menu position="right">
                <Menu.Item>Campaign</Menu.Item>
                <Menu.Item>+</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Header;