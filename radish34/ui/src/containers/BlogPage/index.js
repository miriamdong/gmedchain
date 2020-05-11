import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Button, TextField, InputAdornment } from '@material-ui/core'
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Pagination from 'components/Pagination'
import CategoryList from 'components/CategoryList/Loadable'
import RecentPost from 'components/RecentPost/Loadable'
import Quote from 'components/Quote/Loadable'
import Tags from 'components/Tags/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'

// images 
import logo from 'images/logo.png'
import image1 from 'images/blogs/img4.jpg'
import image2 from 'images/blogs/img5.jpg'
import image3 from 'images/blogs/img6.jpg'
import avarar1 from 'images/blogs/avatar1.png'
import avarar2 from 'images/blogs/avatar2.png'
import avarar3 from 'images/blogs/avatar3.png'

const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Blog',
    },
]



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

const searchingFor = search => blog =>
    blog.title.toLowerCase().includes(search.toLowerCase()) || !search;
class BlogPage extends Component {
    state = {
        pageOfItems: [],
        search: '',
        open: false
    }
    changeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
    }


    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
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
                    <title>Blog</title>
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <Breadcumb
                    title="Blog"
                    menus={menus}
                />
                <Grid className="blogPageArea ptb-104">
                    <Grid container className="container" spacing={4}>
                        <Grid item md={8} xs={12}>
                            {this.state.pageOfItems.filter(searchingFor(this.state.search)).map((blog, i) => (
                                <Grid key={i} className={blog.image || blog.slider || blog.video ? 'blogGridWrap' : 'blogGridWrap blogGridWrapStyleTwo'}>
                                    {blog.image && <Grid className="blogGridImg">
                                        <img src={blog.image} alt="" />
                                    </Grid>}
                                    {blog.video && <Grid className="blogGridVideo">
                                        <img src={blog.video} alt="" />
                                        <Button
                                            onClick={() => this.setState({ open: true })}>
                                            <i className="fa fa-play"></i>
                                        </Button>
                                    </Grid>}
                                    {blog.slider && <Grid className="blogGridSlider">
                                        <Swiper {...params}>
                                            {blog.slider.map((item, i) => (
                                                <img key={i} src={item} alt="" />
                                            ))}
                                        </Swiper>
                                    </Grid>}
                                    <Grid className="blogGridContent">
                                        <ul className="blogGridMeta">
                                            <li><img src={blog.author} alt="" /> By <Link to="/author">{blog.author_name}</Link></li>
                                            <li><i className="fi flaticon-calendar"></i> {blog.date}</li>
                                            <li><i className="flaticon-heart-2"></i> {blog.like}</li>
                                        </ul>
                                        <h3><Link to={`/blog-details/${blog.id}`}>{blog.title}</Link></h3>
                                        <p>{blog.details}</p>
                                        <Link className="readmore" to={`/blog-details/${blog.id}`}>Read More...</Link>
                                    </Grid>
                                </Grid>
                            ))}
                            <Pagination
                                rowShow={4}
                                items={blogs}
                                onChangePage={this.onChangePage}
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <aside className="blogSlidebar">
                                <TextField
                                    variant="outlined"
                                    value={this.state.search}
                                    fullWidth
                                    placeholder="Search..."
                                    className="searchField"
                                    onChange={this.changeHandler}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <Button><i className="ti-search"></i></Button>
                                        </InputAdornment>,
                                    }}
                                />
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

export default BlogPage;
