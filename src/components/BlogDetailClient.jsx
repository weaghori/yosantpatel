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
      <article className="modern-blog-container">
        {/* Meta Header */}
        <div className="modern-blog-header">
          <h1 className="modern-blog-title">{post.title}</h1>
          <div className="modern-blog-meta">
            {post.date || (post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '')} / By {post.author?.name || "Yosant Patel"}
          </div>
        </div>

        {/* Hero Image */}
        {post.mainImage && (
          <div className="modern-blog-hero">
            <img 
              src={post.mainImage.startsWith('http') ? post.mainImage : `https://ams.aghorimediahouse.com${post.mainImage}`} 
              alt={post.title} 
            />
          </div>
        )}

        {/* Content */}
        <div className="modern-prose-container" dangerouslySetInnerHTML={{ 
          __html: post.content
            ? post.content
                .replace(/src="\/uploads\//g, 'src="https://ams.aghorimediahouse.com/uploads/')
                .replace(/src='\/uploads\//g, "src='https://ams.aghorimediahouse.com/uploads/")
                .replace(/<li>\s*[●•·⁃■\-\*]\s*/g, '<li>')
                .replace(/<li>\s*<span[^>]*>\s*[●•·⁃■\-\*]\s*<\/span>\s*/g, '<li>')
            : '' 
        }} />
      </article>

      <style>{`
        /* Make body background white since this is a clean layout */
        body {
          background-color: #ffffff !important;
        }

        .modern-blog-container {
            max-width: 56rem;
            margin: 0 auto;
            padding: 4rem 1rem 6rem;
            background: #ffffff;
            color: #000000;
            font-family: 'Open Sans', sans-serif;
        }

        .modern-blog-header {
            margin-bottom: 3rem;
            text-align: left;
        }

        .modern-blog-title {
            font-size: 2.25rem;
            font-weight: 900;
            letter-spacing: -0.025em;
            line-height: 1.1;
            color: #000000;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            font-family: 'Open Sans', sans-serif;
        }

        @media (min-width: 768px) {
            .modern-blog-title {
                font-size: 3.75rem;
            }
        }

        .modern-blog-meta {
            font-size: 1rem;
            color: #6b7280;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .modern-blog-hero {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            border-radius: 1.5rem;
            overflow: hidden;
            margin-bottom: 4rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .modern-blog-hero img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Base Prose Container for the Content */
        .modern-prose-container {
            font-family: 'Open Sans', sans-serif;
        }

        /* Headings */
        .modern-prose-container h1,
        .modern-prose-container h2,
        .modern-prose-container h3,
        .modern-prose-container h4,
        .modern-prose-container h5,
        .modern-prose-container h6 {
            font-weight: 900 !important;
            text-transform: uppercase !important;
            letter-spacing: -0.025em !important;
            color: #000000 !important;
            margin-top: 2em !important;
            margin-bottom: 1em !important;
            line-height: 1.2 !important;
            background: transparent !important;
            font-family: 'Open Sans', sans-serif !important;
        }

        .modern-prose-container h2 { font-size: 2.25rem !important; }
        .modern-prose-container h3 { font-size: 1.875rem !important; }
        .modern-prose-container h4 { font-size: 1.5rem !important; }

        @media (max-width: 768px) {
            .modern-prose-container h2 { font-size: 1.875rem !important; }
            .modern-prose-container h3 { font-size: 1.5rem !important; }
        }

        /* Paragraphs */
        .modern-prose-container p {
            color: #1f2937 !important;
            line-height: 1.85 !important;
            font-size: 1.125rem !important;
            margin-bottom: 1.5em !important;
            background: transparent !important;
        }

        /* Lists */
        .modern-prose-container ul {
            list-style-type: disc !important;
            margin-left: 2rem !important;
            margin-bottom: 1.5em !important;
        }
        .modern-prose-container ol {
            list-style-type: decimal !important;
            margin-left: 2rem !important;
            margin-bottom: 1.5em !important;
        }
        .modern-prose-container li {
            color: #1f2937 !important;
            line-height: 1.85 !important;
            font-size: 1.125rem !important;
            margin-bottom: 0.5em !important;
            background: transparent !important;
        }

        /* Nested list resets */
        .modern-prose-container ul ul,
        .modern-prose-container ol ul,
        .modern-prose-container ul ol,
        .modern-prose-container ol ol {
          margin-left: 1.5rem !important;
          margin-top: 0.5rem !important;
          margin-bottom: 0.5rem !important;
        }

        /* Links */
        .modern-prose-container a {
            color: #9333ea !important;
            font-weight: 900 !important;
            text-decoration: underline !important;
        }

        /* Images inside content */
        .modern-prose-container img {
            border-radius: 1.5rem !important;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
            max-width: 100% !important;
            height: auto !important;
            display: block !important;
            margin: 3rem auto !important;
        }

        /* Force CKEditor layout wrappers to be transparent */
        .modern-prose-container div,
        .modern-prose-container span,
        .modern-prose-container table,
        .modern-prose-container section {
            background-color: transparent !important;
            background: transparent !important;
            max-width: 100% !important;
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
