import React from 'react'
import { Tree } from 'antd'

import './Treearea.scss'
  

export default function Treearea(props) {
      
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
