import React from 'react'
import Image from 'next/image'

import Blog1 from '@/assets/blog-1.jpg'; 
import Blog2 from '@/assets/blog-2.jpg'; 
import Blog3 from '@/assets/blog-3.jpg'; 
import Blog4 from '@/assets/blog-4.jpg'; 
import Blog5 from '@/assets/blog-5.jpg'; 
import Blog6 from '@/assets/blog-6.jpg'; 

const BlogsPage = () => {
  return (
    <div className="blogs">

      <h2 className="h2 article-title">Blog</h2>

      <section className="blog-posts">

        <ul className="blog-posts-list">

          <li className="blog-post-item">
            <a href="#">

              <figure className="blog-banner-box">
                  <Image
                    src={Blog1}
                    alt="blogs"
                    width={405}
                    height={230}
                    priority
                  />
              </figure>

              <div className="blog-content">

                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">Design conferences in 2022</h3>

                <p className="blog-text">
                  Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                </p>

              </div>

            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">

              <figure className="blog-banner-box">
                  <Image
                    src={Blog2}
                    alt="blogs"
                    width={405}
                    height={230}
                    priority
                  />
              </figure>

              <div className="blog-content">

                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">Best fonts every designer</h3>

                <p className="blog-text">
                  Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                </p>

              </div>

            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">

              <figure className="blog-banner-box">
                  <Image
                    src={Blog3}
                    alt="blogs"
                    width={405}
                    height={230}
                    priority
                  />
              </figure>

              <div className="blog-content">

                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">Design digest #80</h3>

                <p className="blog-text">
                  Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                </p>

              </div>

            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">

              <figure className="blog-banner-box">
                  <Image
                    src={Blog4}
                    alt="blogs"
                    width={405}
                    height={230}
                    priority
                  />
              </figure>

              <div className="blog-content">

                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">UI interactions of the week</h3>

                <p className="blog-text">
                  Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                </p>

              </div>

            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">

              <figure className="blog-banner-box">
                  <Image
                    src={Blog5}
                    alt="blogs"
                    width={405}
                    height={230}
                    priority
                  />
              </figure>

              <div className="blog-content">

                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">The forgotten art of spacing</h3>

                <p className="blog-text">
                  Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

              </div>

            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">

              <figure className="blog-banner-box">
                  <Image
                    src={Blog6}
                    alt="blogs"
                    width={405}
                    height={230}
                    priority
                  />
              </figure>

              <div className="blog-content">

                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">Design digest #79</h3>

                <p className="blog-text">
                  Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                </p>

              </div>

            </a>
          </li>

        </ul>

      </section>

    </div>
  )
}

export default BlogsPage
