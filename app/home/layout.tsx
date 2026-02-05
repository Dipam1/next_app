'use client'

import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Home', key: 'home' },
    { label: 'Services', key: 'services' },
    { label: 'Contact', key: 'contact' },
  ];

  return (
    <Header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px' 
    }}>
      {/* Logo - hidden on mobile using inline media query */}
      <div 
        style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
        className="desktop-only"
      >
        LOGO
      </div>

      {/* Desktop Menu - hidden on mobile */}
      <Menu 
        mode="horizontal" 
        items={menuItems} 
        style={{ flex: 1, justifyContent: 'flex-end', border: 'none' }}
        className="desktop-only"
      />

      {/* Mobile Hamburger Button - hidden on desktop */}
      <div style={{ marginLeft: 'auto' }} className="mobile-only">
        <Button 
          type="text" 
          icon={<MenuOutlined style={{ fontSize: '20px' }} />} 
          onClick={() => setOpen(true)} 
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        styles={{
          wrapper: {
            transition: 'all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1)',
          },
        }}
      >
        <Menu mode="vertical" items={menuItems} onClick={() => setOpen(false)} />
      </Drawer>
    </Header>
  );
};

export default Navbar;