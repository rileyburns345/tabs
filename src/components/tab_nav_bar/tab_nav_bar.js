import React, {useState} from 'react'
import './tab_nav_bar.css'

const TabNavBar = props => {

    const [...tablist] = props.tabs

    const sendId = (id) => {
        props.tabClick(id)
    }
    return (
        <div>
            {
                tablist.map((tab) => 
                    <div class="tab-label" onClick={() => sendId(tab.id)}>Tab {tab.id}</div>
                )
            }
        </div>
    )
}

export default TabNavBar