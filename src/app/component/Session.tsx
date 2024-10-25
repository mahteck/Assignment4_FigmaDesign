export default function Session(){
    return(
        <>
        <section className="recent-posts">
            <div className="posts-header">
                <h2 className="recent-post">Recent Post</h2>
                <a href="#" className="view-all">View all</a>
            </div>

            <div className="post-boxes">
                <div className="post-box">
                <h3>Making a design system from scratch</h3>
                <br/>
                <p>12 Feb 2020 | Design, Pattern</p>
                <br/>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div className="post-box">
                <h3>Making a design system from scratch</h3>
                <br/>
                <p>12 Feb 2020 | Design, Pattern</p>
                <br/>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            </section>
            
            <section className="featured-work">
            <h2 className="heading">Featured Work</h2>
            <br/>
                <div className="container">
                    <div className="work-grid">
                        <div className="work-item">
                            <div className="work-content">
                                <img src="/images/image1.png" alt="Work 1" />
                                <div className="work-details">
                                    <h1>Designing Dashboards</h1>
                                    <p><span className="work-year">2020</span></p>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p>
                                </div>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-content">
                                <img src="/images/image2.png" alt="Work 2" />
                                <div className="work-details">
                                    <h1>Designing Dashboards</h1>
                                    <p><span className="work-year">2020</span></p>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-content">
                                <img src="/images/image3.png" alt="Work 3" />
                                <div className="work-details">
                                    <h1>Designing Dashboards</h1>
                                    <p><span className="work-year">2020</span></p>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </>
      
    )
}