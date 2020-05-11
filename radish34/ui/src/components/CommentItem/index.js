import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './style.scss'

// images 
import image1 from '../../images/comments/img1.jpg'
import image2 from '../../images/comments/img2.jpg'
import image3 from '../../images/comments/img3.jpg'


const comments = [
    {
        image: image1,
        name: 'John Abraham',
        time: 'Octobor 28,2018 At 9.00am',
        details: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
        id: 1,
        reply: [
            {
                image: image2,
                name: 'John Abraham',
                time: 'Octobor 28,2018 At 9.00am',
                details: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
                id: 1,
            },
            {
                image: image3,
                name: 'John Abraham',
                time: 'Octobor 28,2018 At 9.00am',
                details: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
                id: 2,
            },
        ]
    },
    {
        image: image2,
        name: 'John Abraham',
        time: 'Octobor 28,2018 At 9.00am',
        details: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
        id: 2,
        reply: [
            {
                image: image3,
                name: 'John Abraham',
                time: 'Octobor 28,2018 At 9.00am',
                details: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
                id: 1,
            },
        ]
    },
]


const CommentItem = () => {
    return (
        <ul className="commentItems">
            {comments.map((comment, i) => (
                <li key={i} className="commentItem">
                    <Grid className="commentItemWrap">
                        <Grid className="commentImg">
                            <img src={comment.image} alt="" />
                        </Grid>
                        <Grid className="commentContent">
                            <h4>{comment.name}</h4>
                            <span>{comment.time}</span>
                            <p>{comment.details}</p>
                            <Button>Reply</Button>
                        </Grid>
                    </Grid>

                    <ul className="commentItems">
                        {
                            comment.reply.map((item, i) => (
                                <li key={i} className="commentItem">
                                    <Grid className="commentItemWrap">
                                        <Grid className="commentImg">
                                            <img src={item.image} alt="" />
                                        </Grid>
                                        <Grid className="commentContent">
                                            <h4>{item.name}</h4>
                                            <span>{item.time}</span>
                                            <p>{item.details}</p>
                                            <Button>Reply</Button>
                                        </Grid>
                                    </Grid>
                                </li>
                            ))
                        }
                    </ul>

                </li>
            ))}

        </ul>
    );
}

export default CommentItem;
