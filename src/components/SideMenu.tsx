import React from 'react'
import { NavLink } from 'react-router-dom'
import type { CSSProperties } from '../types'

const SideMenu = (): JSX.Element => {
    return (
        <div style={styles.container}>
            <NavLink
                to="/"
                style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
                <span className="material-icons" style={styles.icon}>
                    format_list_bulleted
                </span>
                <p style={styles.text}>Food List</p>
            </NavLink>
        </div>
    )
}

const commonLinkStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    margin: '12px 0',
    textDecoration: 'none',
}

const styles: CSSProperties = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#55ACC8',
        padding: '20px',
        minHeight: '100vh',
    },
    link: {
        ...commonLinkStyles,
        color: '#fff',
    },
    activeLink: {
        ...commonLinkStyles,
        color: '#255261',
    },
    icon: {
        fontSize: '40px',
    },
    text: {
        fontSize: '24px',
        marginLeft: '8px',
    },
}

export default SideMenu