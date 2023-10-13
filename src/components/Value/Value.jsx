import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
            <div className="image-container">
                <img src="./app.png" alt="" />
            </div>   
        </div>
        <div className="flexColStart v-right">
                <span className="orangeText">The i-Smart App</span>
                <span className="primaryText">Get all your data on one app</span>
                <span className="secondaryText">Stay connected on the ride with smart e-cycles</span>
                <Accordion className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((item, i)=> {
                            // const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem className="accordionItem" key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">

                                            {/* <AccordionItemState>
                                                {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState> */}
                                            {/* <div className="flexCenter icon">{item.icon}</div> */}
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
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
    </section>
  )
}

export default Value
