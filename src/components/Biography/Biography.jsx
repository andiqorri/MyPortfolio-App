 import React from 'react'
 import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
 } from 'react-accessible-accordion'
 import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Biography.css'
import data from '../../utils/accordion'
import { useState } from "react";


 const Biography = () => {
   return (
    
     <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side*/}
            <div className="v-left">
                <div className="image-container">
                    <img src="./image/biography.jpg" alt="" />
                </div>
            </div>

            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>My Biography</span>
                <span className='primaryText'>You Become What You Believe</span>
                <span className='secondaryText'>One day I'd like to go to the Moon and look at the planet Earth and say.
                    <br />
                    Wow, there's part of my portfolio.
                </span>

                <Accordion className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]} 
                > 
                        {data.map((item, i) => {

                              return (
                       <AccordionItem className='accordionItem'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                {/* <AccordionItemState>
                                                    {({expanded})=> 
                                                    expanded 
                                                    ? setClassName("expanded") 
                                                    : setClassName("collapsed")
                                                    }
                                                </AccordionItemState> */}
                                                 <div className="flexCenter icon">{item.icon}</div>
                                                 <span className='primaryText'>
                                                    {item.heading}
                                                 </span>
                                                 <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                 </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                }
                </Accordion>

            </div>
        </div>
     </section>
   )
 }
 
 export default Biography