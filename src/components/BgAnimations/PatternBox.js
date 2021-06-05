import { useEffect, useState } from 'react';

const PatternBox = (props) => {

    let [boxesElements, setBoxesElements] = useState([])

    useEffect(()=>{
        setBoxesElements(returnBoxes());
    },[]);

    function returnBoxes() {
        let boxHeight = props.height;
        let boxWidth = props.width;
        let distance = props.distanceBetweenBoxes;
        let boxDOMEle = [];

        let xBoxPos = 0;
        let yBoxPos = 0;
        
        for (let i = 0; i < boxHeight; i++) {
            xBoxPos= 0;
            for(let j=0;j < boxWidth;j++){
                boxDOMEle.push(
                    <rect x={xBoxPos} y={yBoxPos} width={props.boxsize} height={props.boxsize} fill={props.color} />
                )
                xBoxPos += parseInt(distance);
            }
            yBoxPos += parseInt(distance);
        }

        return boxDOMEle;

    }

    return (
        <svg className={props.className} width="369" height="369" viewBox="0 0 369 369" fill="none" xmlns="http://www.w3.org/2000/svg">
            {boxesElements.map(ele => ele)}
        </svg>

    )
}

export default PatternBox;



// <rect x="0" y="0" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="20" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="40" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="60" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="80" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="100" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="120" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="140" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="160" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="20" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="40" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="60" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="80" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="100" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="120" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="140" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="160" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />
// <rect x="180" y="180" width={props.boxsize} height={props.boxsize} fill={props.color} />