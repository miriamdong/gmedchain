import React, { useState } from 'react';
import { Grid, ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core'
import './style.scss'

const faqs = [
    {
        title: 'How to create an account on Edefy?',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        id: 1
    },
    {
        title: 'How to write the changelog for theme updates?',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        id: 2
    },
    {
        title: 'What happens when my license expires?',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        id: 3
    },
    {
        title: 'Do you recommend using a download manager software?',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        id: 4
    },
    {
        title: 'What version of WordPress do I need?',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        id: 5
    },
]

const Faq = () => {
    const [expanded, setExpanded] = useState(1);
    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Grid className="faqWrap">
            {faqs.map((item, i) => (
                <ExpansionPanel
                    classes={{
                        root: 'faqWrapper',
                        expanded: 'faqWrapperExpanded',
                    }}
                    square
                    key={i}
                    expanded={expanded === item.id}
                    onChange={handleChange(item.id)}>
                    <ExpansionPanelSummary
                        className="faqHeader">
                        {item.title}
                    </ExpansionPanelSummary>
                    <p>{item.details}</p>
                </ExpansionPanel>
            ))}

        </Grid>
    );
}
export default Faq;
