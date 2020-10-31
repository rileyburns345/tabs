import React, {useState} from 'react'

const TabView = props => {

    const clicked_tab = props.tabs.filter(tab => tab.id === props.current_tab)
    console.log(clicked_tab)

    return (
    <p>{clicked_tab[0].content}</p>
    )
}

export default TabView