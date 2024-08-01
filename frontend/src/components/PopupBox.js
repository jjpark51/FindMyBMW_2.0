import React, {useState} from "react"
import PopRadarChart from "./PopRadarChart";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

function PopupBox({keywords, name, icon, image, pop, pop_sub, thenew, performance, space, fuel, popularity, price, color, weight, power, fuele, costkm, lwh, legtrunk}) {
    //             <div style={{color: 'whitesmoke', fontSize: '8pt', position: 'absolute', top: '210px', left: '30px', fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif"}}>Based on your Lifestyle</div>
    // const [anchorEl, setAnchorEl] = useState(null);
    // const [open, setOpen] = useState(false);
    // const [placement, setPlacement] = useState();
  
    // const handleClick = (newPlacement) => (event) => {
    //   setAnchorEl(event.currentTarget);
    //   setOpen((prev) => placement !== newPlacement || !prev);
    //   setPlacement(newPlacement);
    // };
  
    return (
        
        <div className='popup-box' style={{height: '690px',margin: '0', padding: '0'}}>
                                {/* <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                    <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                    </Paper>
                </Fade>
                )}
            </Popper> */}
        <div className='popup-image' style={{backgroundImage: `url(${pop})`, height: '350px', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', zIndex: '1'}} >
        <div className="text-underlayer" style={{position: 'relative', top: '220px', width: '100%',height: '80px', backgroundColor: 'transparent', background: 'linear-gradient(0deg,#0000,#0000)', zIndex: '2'}}></div>
            <div className='text-block' style={{display: 'flex', flexDirection: 'column' }}>
            {/* <div style={{color: 'whitesmoke', fontSize: '20pt', position: 'absolute', top: '200px', left: '30px', fontWeight: 'bold', fontStretch: '100%', fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif" , zIndex: '4'}}>{name}</div> */}
            <div style={{color: 'whitesmoke', fontSize: '34pt', position: 'absolute', top: '254px', left: '4px', paddingLeft: '30px', fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif", background: 'linear-gradient(0deg,rgba(0,0,0,1), rgba(0,0,0,0))', zIndex: '4', width: '96.5%', height: '100px'}}><a style={{position: 'relative', top: '30px'}}>{name}</a><div style={{width:'50px', height: '50px', backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', position: 'relative', bottom: '60%'}}></div></div>
            </div>
        </div>
        <div className='info-grid' style={{display: 'grid', justifyContent: 'space-evenly', marginTop: '0px', marginLeft: '20px', gridTemplateColumns: '30% 40% 30%'}}>
        <div style={{height: 'fit-content', color: 'black', marginTop: '20px', paddingTop: '10px' ,textAlign: 'center',fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif",}}><a style={{textDecoration: 'underline', fontSize: '12pt'}}>SUMMARY</a>
                <PopRadarChart color={color} performance={performance} price={price} space={space} popularity={popularity} fuel={fuel}/>

            </div>
            <div className='keywords' style={{height: 'fit-content',color: 'black', marginRight: '50px', paddingTop: '30px', backgroundColor: 'transparent', fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif", textAlign: 'center'}}><a style={{textDecoration: 'underline', fontSize: '12pt'}}>KEYWORDS</a>
                <div className="keyword-grid" style={{display: 'grid',  gridTemplateColumns: '1fr 8fr', position: 'relative', top: '40px', lineHeight: '50px', rowGap: '20px', columnGap:'10px'}}>
                    <div style={{backgroundColor: 'blue', borderRadius: '8', backgroundColor: 'white' ,fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif",}}><a>1.</a></div>
                    {/* <div style={{backgroundColor: 'green', borderRadius: '8', backgroundColor: '#EBEBEB', fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif", fontSize: '11pt'}}>{keywords[0]}</div>
                    <div style={{backgroundColor: 'blue', borderRadius: '8', backgroundColor: 'white',fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif",}}><a>2.</a></div>
                    <div style={{backgroundColor: 'green', borderRadius: '8', backgroundColor: '#EBEBEB', fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif", fontSize: '11pt'}}>{keywords[1]}</div>
                    <div style={{backgroundColor: 'blue',  borderRadius: '8', backgroundColor: 'white', fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif",}}><a>3.</a></div>
                    <div style={{backgroundColor: 'green', borderRadius: '8', backgroundColor: '#EBEBEB', fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif", fontSize: '11pt'}}>{keywords[2]}</div> */}
                </div>
            </div>
            <div className="spec" style={{height: 'fit-content', color:'black', width: '100%', height: 'fit-content', paddingTop: '30px', textAlign: 'center',  fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif", rowGap: '20px'}}><a style={{textDecoration: 'underline', fontSize: '12pt'}}>SPEC INFO</a>

                {/* <a style={{fontSize: '6pt', position: 'relative', left: '80px', top: '20px'}}>BMW Dictionary</a> */}
                <div className="spec-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', lineHeight: '35px', paddingTop: '30px', columnGap: '10px'}}>
                <div style={{ borderTop: '1px solid #D9D9D9', cursor: 'pointer',fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif", fontSize: '10pt'}}>Gross Weight</div>
                <div style={{ borderTop: '1px solid #D9D9D9', textAlign: 'center', fontSize: '10pt'}}>{weight} <a style={{fontSize: '8pt'}}>kg</a></div>
                <div style={{ borderTop: '1px solid #D9D9D9', cursor: 'pointer', fontSize: '10pt'}}>EnginePower <a style={{fontSize: '8pt'}}>(ps/rm)</a></div>
                <div style={{ borderTop: '1px solid #D9D9D9', textAlign: 'center', fontSize: '10pt'}}>{power}</div>
                <div style={{ borderTop: '1px solid #D9D9D9', cursor: 'pointer',  fontSize: '10pt'}}>Fuel Efficiency</div>
                <div style={{ borderTop: '1px solid #D9D9D9', textAlign: 'center', fontSize: '10pt'}}>{fuele} </div>
                <div style={{ borderTop: '1px solid #D9D9D9', cursor: 'pointer',  fontSize: '10pt'}}>Cost per 100 km</div>
                <div style={{ borderTop: '1px solid #D9D9D9', textAlign: 'center', fontSize: '10pt'}}><a>₩ </a>{costkm}</div>
                <div style={{ borderTop: '1px solid #D9D9D9', cursor: 'pointer',  fontSize: '10pt'}}>L x W x H <a style={{fontSize: '8pt'}}>(mm)</a></div>
                <div style={{ borderTop: '1px solid #D9D9D9', textAlign: 'center', fontSize: '10pt'}}>{lwh}</div>
                <div style={{ borderTop: '1px solid #D9D9D9', cursor: 'pointer', borderBottom: '1px solid #D9D9D9', fontSize: '10pt'}}>Legroom <a style={{fontSize: '8pt'}}>(in) </a>/Trunk<a style={{fontSize: '8pt'}}> (m<sup>2</sup>)</a></div>
                <div style={{ borderTop: '1px solid #D9D9D9', borderBottom:'1px solid #D9D9D9', textAlign: 'center', fontSize: '10pt'}}>{legtrunk}</div>

                </div>
            
            </div>

        </div>

        </div>
    )
}

export default PopupBox