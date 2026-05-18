'use client';
import { useEffect, useState } from 'react';

export default function BlogDetailClient({ post }) {
  const [captcha, setCaptcha] = useState({ question: '', correctAnswer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() < 0.5 ? '+' : '-';
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = operation === '+' ? num1 + num2 : num1 - num2;
    setCaptcha({ question, correctAnswer });
  };

  const handleCaptchaChange = (e) => {
    const val = e.target.value;
    setUserAnswer(val);
    if (parseInt(val, 10) === captcha.correctAnswer) {
      setIsValid(true);
      setShowError(false);
    } else {
      setIsValid(false);
      if (val !== '') setShowError(true);
    }
  };

  return (
    <>
      {/* Intro Title Section 1 */}
      <div className="section-block intro-title-1 small bkg-yblue color-white">
        <div className="row">
          <div className="column width-12 mt-30">
            <div className="title-container">
              <div className="title-container-inner">
                <h1 className="inline">{post.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Intro Title Section 1 End */}

      <section className="inner_blog">
        <div className="container blog_container">
          <div className="date_author">
            <div className="row">
              <div className="column width-12">
                <span className="post-date">
                  {post.date || (post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '')} / By {post.author?.name || "Yosant Patel"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner_blog_three">
        <div className="row">
          <div className="container prose-container" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>

      <style>{`
        /* Make the entire blog body and author sections full viewport width white */
        .inner_blog,
        .inner_blog_three {
          background-color: #ffffff !important;
        }

        .date_author {
          color: #555555 !important;
        }

        .date_author span {
          color: #555555 !important;
        }

        /* Force structural wrapper elements from CKEditor to be transparent */
        .prose-container div,
        .prose-container span,
        .prose-container table,
        .prose-container section {
          background-color: transparent !important;
          background: transparent !important;
          max-width: 100% !important;
        }

        /* Headings styling */
        .prose-container h1,
        .prose-container h2,
        .prose-container h3,
        .prose-container h4,
        .prose-container h5,
        .prose-container h6 {
          color: #111111 !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          background-color: transparent !important;
          background: transparent !important;
        }

        .prose-container h2 {
          font-size: 32px !important;
          margin-top: 40px !important;
          margin-bottom: 20px !important;
          line-height: 1.3 !important;
        }

        .prose-container h3 {
          font-size: 26px !important;
          margin-top: 30px !important;
          margin-bottom: 16px !important;
          line-height: 1.3 !important;
        }

        .prose-container h4 {
          font-size: 22px !important;
          margin-top: 24px !important;
          margin-bottom: 12px !important;
        }

        /* Spacing for Paragraphs */
        .prose-container p {
          margin-bottom: 24px !important;
          color: #2d3748 !important; /* text-gray-800 */
          line-height: 1.85 !important;
          font-size: 18px !important;
          background-color: transparent !important;
          background: transparent !important;
        }

        /* Unordered Lists */
        .prose-container ul {
          list-style-type: disc !important;
          list-style-position: outside !important;
          margin-left: 28px !important;
          margin-bottom: 24px !important;
          padding-left: 8px !important;
          background-color: transparent !important;
          background: transparent !important;
        }

        .prose-container ul li {
          list-style-type: disc !important;
          margin-bottom: 10px !important;
          color: #2d3748 !important;
          line-height: 1.85 !important;
          font-size: 18px !important;
          background-color: transparent !important;
          background: transparent !important;
        }

        /* Ordered Lists */
        .prose-container ol {
          list-style-type: decimal !important;
          list-style-position: outside !important;
          margin-left: 28px !important;
          margin-bottom: 24px !important;
          padding-left: 8px !important;
          background-color: transparent !important;
          background: transparent !important;
        }

        .prose-container ol li {
          list-style-type: decimal !important;
          margin-bottom: 10px !important;
          color: #2d3748 !important;
          line-height: 1.85 !important;
          font-size: 18px !important;
          background-color: transparent !important;
          background: transparent !important;
        }

        /* Nested list resets to prevent excessive double indents */
        .prose-container ul ul,
        .prose-container ol ul,
        .prose-container ul ol,
        .prose-container ol ol {
          margin-left: 24px !important;
          margin-top: 8px !important;
          margin-bottom: 8px !important;
        }

        /* Override large inline font-sizes for mobile screens */
        @media (max-width: 767px) {
          .prose-container h2 {
            font-size: 24px !important;
            margin-top: 30px !important;
            margin-bottom: 16px !important;
          }
          .prose-container h3 {
            font-size: 20px !important;
            margin-top: 24px !important;
            margin-bottom: 12px !important;
          }
          .prose-container p, 
          .prose-container ul li, 
          .prose-container ol li {
            font-size: 15px !important;
            line-height: 1.7 !important;
            margin-bottom: 16px !important;
          }
        }

        .prose-container img {
          max-width: 100% !important;
          height: auto !important;
          display: block !important;
          margin: 2rem auto !important;
          border-radius: 12px !important;
        }
      `}</style>

      <section className="comment_section">
        <div className="container" id="comment-form-id">
          <div className="row">
            <div className="comment-form">
              <h5>Leave a Comment</h5>
              <div className="form">
                <form className="contact-form1 row" method="post" action="/api/comment">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="comment" placeholder="Your Comment"></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="form-group col-lg-12" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                      <label htmlFor="captcha-question" id="captcha-question-label">Solve:</label>
                      <input type="text" id="captcha-question" value={captcha.question} readOnly style={{ border: 'none', fontWeight: 'bold', textAlign: 'center', width: '15%', margin: '0px !important', color: 'black !important', background: 'transparent' }} />
                      <span style={{ fontWeight: 'bold', width: 'auto', marginRight: '10px' }}>=</span>
                      <input id="captcha-answer" className="captcha" name="captcha" type="number" required placeholder="Your Answer" value={userAnswer} onChange={handleCaptchaChange} style={{ border: 'none', width: 'auto', padding: '10px 5px 10px 5px', textAlign: 'center', margin: '0px !important', background: 'transparent' }} />
                    </div>
                    {showError && <p style={{ color: 'red', marginLeft: '15px' }}>Incorrect answer.</p>}
                    <div className="col-12">
                      <div className="form-group" style={{ marginTop: '25px' }}>
                        <button type="submit" className="blog-btn" disabled={!isValid}>
                          <span>Post Comment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
