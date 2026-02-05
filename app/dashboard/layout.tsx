'use client'

import React, { useEffect } from 'react'
import { Button, Layout, Menu, ConfigProvider } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { BsMoon, BsSun } from 'react-icons/bs'
import { ThemeContext } from '@/lib/ThemeContext'
import Title from 'antd/es/typography/Title'

const { Header, Sider, Content } = Layout

const lightTheme = {
    colorPrimary: '#124c1f',
    colorInfo: '#1890ff',
    colorBgBase: '#ffffff',
    colorTextBase: '#000000',
}

const darkTheme = {
    colorPrimary: '#0e7235',
    colorInfo: '#1890ff',
    colorBgBase: '#100e0e',
    colorTextBase: '#f5eded',
}

const lightComponentColors = {
    siderBg: '#ffffff',
    headerBg: '#ffffff',
    menuItemBg: '#ffffff',
    menuItemColor: '#000000',
    menuItemSelectedBg: '#e6f4ff',
    menuItemSelectedColor: '#124c1f',
    bodyBg: '#d4d4d4',
    colorBgLayout: '#25a242'
}

const darkComponentColors = {
    siderBg: '#100e0e',
    headerBg: '#100e0e',
    menuItemBg: '#100e0e',
    menuItemColor: '#f5eded',
    menuItemSelectedBg: '#1f1f1f',
    menuItemSelectedColor: '#ffffff',
    bodyBg: '#252522',
    colorBgLayout: '#e90505'
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    const [isMounted, setIsMounted] = React.useState(false)
    const [collapsed, setCollapsed] = React.useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setIsDarkMode(savedTheme === 'dark')
        setIsMounted(true)
    }, [])

    // Save theme to localStorage
    const toggleTheme = () => {
        const newDarkMode = !isDarkMode
        setIsDarkMode(newDarkMode)
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
    }

    // Prevent hydration mismatch
    if (!isMounted) {
        return null
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ConfigProvider
                theme={{
                    token: isDarkMode ? darkTheme : lightTheme,
                    components: {
                        Layout: {
                            siderBg: isDarkMode ? darkComponentColors.siderBg : lightComponentColors.siderBg,
                            headerBg: isDarkMode ? darkComponentColors.headerBg : lightComponentColors.headerBg,
                        },
                        Menu: {
                            itemBg: isDarkMode ? darkComponentColors.menuItemBg : lightComponentColors.menuItemBg,
                            itemColor: isDarkMode ? darkComponentColors.menuItemColor : lightComponentColors.menuItemColor,
                            itemSelectedBg: isDarkMode ? darkComponentColors.menuItemSelectedBg : lightComponentColors.menuItemSelectedBg,
                            itemSelectedColor: isDarkMode ? darkComponentColors.menuItemSelectedColor : lightComponentColors.menuItemSelectedColor,
                            darkItemBg: isDarkMode ? darkComponentColors.menuItemBg : lightComponentColors.menuItemBg,
                            darkItemColor: isDarkMode ? darkComponentColors.menuItemColor : lightComponentColors.menuItemColor,
                            darkItemSelectedBg: isDarkMode ? darkComponentColors.menuItemSelectedBg : lightComponentColors.menuItemSelectedBg,
                            darkItemSelectedColor: isDarkMode ? darkComponentColors.menuItemSelectedColor : lightComponentColors.menuItemSelectedColor,
                        },
                    },
                }}
            >
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider  collapsedWidth={60} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={250}>
                        <Title level={3} style={{ textAlign: "center" }}                    >
                            {collapsed ? "-" : "Dashboard"}
                        </Title>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['home']}

                            items={[
                                {
                                    key: 'home',
                                    icon: <HomeOutlined />,
                                    label: <Link href="/dashboard/">Home</Link>,
                                },
                                {
                                    key: 'userinfo',
                                    icon: <UserOutlined />,
                                    label: <Link href="/dashboard/userinfo">User Info</Link>,
                                },
                            ]}
                        />
                    </Sider>
                    <Layout>
                        <Header style={{
                            padding: '0 20px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            borderBottomLeftRadius: "-10px"

                        }}>
                            <Button
                                shape="circle"
                                onClick={toggleTheme}

                            >
                                {isDarkMode ? <BsSun /> : <BsMoon />}
                            </Button>
                        </Header>
                        <Content style={{
                            margin: '10px 10px',
                            padding: 12,
                            borderRadius: "10px",
                        }}>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </ThemeContext.Provider>
    )
}

