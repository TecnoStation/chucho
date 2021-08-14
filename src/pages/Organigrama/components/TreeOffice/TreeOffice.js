import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart';
import CardNode from '../CardNode/CardNode'


function TreeOffice({setColor, setHistorialP, setHistorialC, setModalPassword}) {
    return (
        <>
            <Tree className="tree"
                lineWidth={'2px'}
                lineColor={'#AAB4C8'}
                lineBorderRadius={'5px'}
                lineHeight={'30px'}
                label={<CardNode setColor={setColor} setHistorialP={setHistorialP} setHistorialC={setHistorialC} setModalPassword={setModalPassword}  >Root</CardNode>}
            >
                
                <TreeNode label={<CardNode setColor={setColor} setHistorialP={setHistorialP} setHistorialC=  {setHistorialC} setModalPassword={setModalPassword}  />} />
                <TreeNode label={<CardNode setColor={setColor} setHistorialP={setHistorialP} setHistorialC=  {setHistorialC} setModalPassword={setModalPassword}  />} />
                <TreeNode label={<CardNode setColor={setColor} setHistorialP={setHistorialP} setHistorialC=  {setHistorialC} setModalPassword={setModalPassword}  />} />
                <TreeNode label={<CardNode setColor={setColor} setHistorialP={setHistorialP} setHistorialC=  {setHistorialC} setModalPassword={setModalPassword}  />} />
                <TreeNode label={<CardNode setColor={setColor} setHistorialP={setHistorialP} setHistorialC=  {setHistorialC} setModalPassword={setModalPassword} />} />

                {/* <TreeNode label={<CardNode/>}>
                    <TreeNode label={<CardNode/>} />
                </TreeNode> */}

            </Tree>
        </>
    )
}

export default TreeOffice
