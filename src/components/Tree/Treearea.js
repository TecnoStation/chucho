import React from 'react'
import { Tree } from 'antd'
import { useTranslation } from "react-i18next";

import './Treearea.scss'
  

export default function Treearea(props) {
    const [t, i18n] = useTranslation("global");  
      
    return (
        <>
            <Tree
                 showLine={{showLeafIcon: false}}
                 defaultExpandedKeys={['0-0']}
                 showIcon={true}
                 treeData={props.treeData}
            />
        </>
    )
}
