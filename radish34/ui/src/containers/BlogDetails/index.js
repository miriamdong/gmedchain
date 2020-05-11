import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper';
import ModalVideo from 'react-modal-video'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import CategoryList from 'components/CategoryList/Loadable'
import RecentPost from 'components/RecentPost/Loadable'
import Quote from 'components/Quote/Loadable'
import Tags from 'components/Tags/Loadable'
import CommentItem from 'components/CommentItem/Loadable'
import PostComment from 'components/PostComment/Loadable'
import Footer from 'components/Footer/Loadable'

import 'containers/BlogPage/style.scss'
import './style.scss'

// images 
import logo from 'images/logo.png'
import image1 from 'images/blogs/img4.jpg'
import image2 from 'images/blogs/img5.jpg'
import image3 from 'images/blogs/img6.jpg'
import avarar1 from 'images/blogs/avatar1.png'
import avarar2 from 'images/blogs/avatar2.png'
import avarar3 from 'images/blogs/avatar3.png'
import author from 'images/author.jpg'

const blogs = [
    {
        title: 'How to estublish a team with a great way?',
        date: 'Sep 25,2019',
        author_name: 'themekhr',
        author: avarar1,
        like: '34',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        image: image1,
        id: 1
    },
    {
        title: 'The definitive list of digital products you can sell',
        date: 'Sep 10,2019',
        author_name: 'soft_theme',
        author: avarar3,
        like: '147',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        video: image3,
        id: 3,
    },
    {
        title: 'Protecting your digital products',
        date: 'Sep 05,2019',
        author_name: 'templathunt',
        author: avarar2,
        like: '75',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        slider: [image1, image2, image3],
        id: 2,
    },

    {
        title: 'Selling WordPress plugins',
        date: 'Sep 10,2019',
        author_name: 'soft_theme',
        author: avarar3,
        like: '785',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        id: 4,
    },
    {
        title: 'How to estublish a team with a great way?',
        date: 'Sep 25,2019',
        author_name: 'themekhr',
        author: avarar1,
        like: '34',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        image: image1,
        id: 5
    },

    {
        title: 'Selling WordPress plugins',
        date: 'Sep 10,2019',
        author_name: 'soft_theme',
        author: avarar3,
        like: '785',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        id: 8,
    },
    {
        title: 'How to estublish a team with a great way?',
        date: 'Sep 25,2019',
        author_name: 'themekhr',
        author: avarar1,
        like: '34',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        image: image1,
        id: 9
    },
    {
        title: 'The definitive list of digital products you can sell',
        date: 'Sep 10,2019',
        author_name: 'soft_theme',
        author: avarar3,
        like: '147',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        video: image3,
        id: 6,
    },
    {
        title: 'Protecting your digital products',
        date: 'Sep 05,2019',
        author_name: 'templathunt',
        author: avarar2,
        like: '75',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        slider: [image1, image2, image3],
        id: 7,
    },


    {
        title: 'Selling WordPress plugins',
        date: 'Sep 10,2019',
        author_name: 'soft_theme',
        author: avarar3,
        like: '785',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        id: 12,
    },
    {
        title: 'The definitive list of digital products you can sell',
        date: 'Sep 10,2019',
        author_name: 'soft_theme',
        author: avarar3,
        like: '147',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        video: image3,
        id: 10,
    },
    {
        title: 'Protecting your digital products',
        date: 'Sep 05,2019',
        author_name: 'templathunt',
        author: avarar2,
        like: '75',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        slider: [image1, image2, image3],
        id: 11,
    },
]



class BlogDetails extends Component {
    state = {
        blog: {},
        blogs: blogs,
        value: 0,
        open: false
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }
    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        let blog = this.state.blogs.filter(b => b.id === id);
        if (blog.length >= 0) {
            this.setState({
                blog: blog[0]
            })
        }
    }
    render() {
        const menus = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Blog Details',
            },
        ]

        const params = {
            speed: 600,
            parallax: true,
            parallaxEl: {
                el: '.parallax-bg',
                value: '-23%'
            },
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }

        return (
            <Fragment>
                <Helmet>
                    <title>{this.state.blog.title}</title>
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <Breadcumb
                    title='Blog Details'
                    menus={menus}
                />
                <Grid className="blogDetailsArea ptb-104">
                    <Grid container spacing={4} className="container">
                        <Grid item md={8} xs={12}>
                            <Grid className='blogGridWrap'>
                                {this.state.blog.image && <Grid className="blogGridImg">
                                    <img src={this.state.blog.image} alt="" />
                                </Grid>}
                                {this.state.blog.video && <Grid className="blogGridVideo">
                                    <img src={this.state.blog.video} alt="" />
                                    <Button
                                        onClick={() => this.setState({ open: true })}>
                                        <i className="fa fa-play"></i>
                                    </Button>
                                </Grid>}
                                {this.state.blog.slider && <Grid className="blogGridSlider">
                                    <Swiper {...params}>
                                        {this.state.blog.slider.map((item, i) => (
                                            <img key={i} src={item} alt="" />
                                        ))}
                                    </Swiper>
                                </Grid>}
                                <Grid className="blogGridContent">
                                    <ul className="blogGridMeta">
                                        <li><img src={this.state.blog.author} alt="" /> By <Link to="/author">{this.state.blog.author_name}</Link></li>
                                        <li><i className="fi flaticon-calendar"></i> {this.state.blog.date}</li>
                                        <li><i className="flaticon-heart-2"></i> {this.state.blog.like}</li>
                                    </ul>
                                    <h3>{this.state.blog.title}</h3>
                                    <p>{this.state.blog.details}</p>
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </blockquote>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>

                                    <Grid className="tagShare">
                                        <ul className="tag">
                                            <li><Button component="a" href="Javascript:void(0)">Business</Button></li>
                                            <li><Button component="a" href="Javascript:void(0)">Marketing</Button></li>
                                            <li><Button component="a" href="Javascript:void(0)">SEO</Button></li>
                                        </ul>
                                        <ul className="share">
                                            <li><Button component="a" href="Javascript:void(0)"><i className="ti-facebook"></i></Button></li>
                                            <li><Button component="a" href="Javascript:void(0)"><i className="ti-twitter-alt"></i></Button></li>
                                            <li><Button component="a" href="Javascript:void(0)"><i className="ti-linkedin"></i></Button></li>
                                            <li><Button component="a" href="Javascript:void(0)"><i className="ti-instagram"></i></Button></li>
                                        </ul>
                                    </Grid>
                                    <Grid className="authorBox">
                                        <Grid className="authorImg">
                                            <img src={author} alt="" />
                                        </Grid>
                                        <Grid className="authorContent">
                                            <h4>Henry Joyes</h4>
                                            <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                            <ul className="socialLink">
                                                <li><a href="#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                                <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                    <ul className="nextPrevPost">
                                        <li><Button component={Link} to="/blog">Previous</Button></li>
                                        <li><Button component={Link} to="/blog">Next post</Button></li>
                                    </ul>
                                    <h3>Comments</h3>
                                    <CommentItem />
                                    <PostComment />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <aside className="blogSlidebar">
                                <CategoryList className="blogCategory" />
                                <RecentPost />
                                <Quote />
                                <Tags />
                            </aside>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.open}
                    videoId='XOStXaZ25cw'
                    onClose={() => this.setState({ open: false })}
                />
            </Fragment>
        )
    }
}

export default BlogDetails;
