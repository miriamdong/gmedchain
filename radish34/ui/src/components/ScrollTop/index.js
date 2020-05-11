import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import './style.scss'
class ScrollTop extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }
    componentDidMount() {
        if (window.length < 991) {
            let position = window.scrollY;
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY;
                if (scroll > position) {
                    this.setState({
                        isFixed: false,
                        isAnim: true
                    })
                } else {
                    this.setState({
                        isFixed: true,
                        isAnim: true
                    })
                }
                position = scroll;
                if (scroll <= 180) {
                    this.setState({
                        isFixed: false,
                        isAnim: false
                    })
                }
            });
        } else {
            console.log('Fuck of')
        }

    }

    render() {
        return (
            <Fragment>
                <Button className='scrollTopBtn'
                    onClick={() => { this.scrollToTop(); }}>
                    back to top <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" ></path></svg>
                </Button>

            </Fragment>
        )
    }
}
export default ScrollTop