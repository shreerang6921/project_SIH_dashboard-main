import React from "react";
import "./faq.css";

function FAQ () {
    return (
        <div className="FAQ-bg text-center">
            <div className="Top">
                <h1 className="Title"> Frequently Asked Questions </h1>
                <h4 className="Subtitle">Have any questions? We're here to assist you.</h4>
            </div>
            <div className="Content">
                <div className="Card1">
                    <h5 className="T1"> Do I have to take the intial assessment again?</h5>
                    <h6 className="St1"> If you already have taken an initial assesment, you don't have to retake it. Our website has already recorded your base speed and you can proceed to further steps.</h6>
                </div>
                <div className="Card1">
                    <h5 className="T1"> How do I change my theme?</h5>
                    <h6 className="St1"> To change the theme of your website, click on the 'settings' icon at the bottom right corner of the page. You can also switch between light and dark modes.</h6>
                </div>
                <div className="Card1">
                    <h5 className="T1"> Can I switch between different techniques?</h5>
                    <h6 className="St1"> We do not recommend switching between techniques as it will further confuse you in the long run.</h6>
                </div>
                <div className="Card2">
                    <h5 className="T1"> What would be the time duration of the course?</h5>
                    <h6 className="St1"> Ideally the course can be completed in the span of a week, but the user can go through the course at his/her own pace.</h6>
                </div>
                <div className="Card2">
                    <h5 className="T1"> Does my score get updated after every assessment?</h5>
                    <h6 className="St1"> Yes, your score gets updated after every assessment and is reflected on the dashboard.</h6>
                </div>
                <div className="Card2">
                    <h5 className="T1"> What is the source of the paragraphs used? </h5>
                    <h6 className="St1"> The paragraphs are book excerpts taken from copyright free books for e.g: Little Women, Alice in Wonderland, etc. </h6>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
