import React from 'react';
import { Link } from 'react-router-dom';


const BlogGrid = () => {
  // Hardcoded blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Components',
      image: 'https://www.emizentech.com/blog/wp-content/uploads/sites/2/2022/05/types-of-react-components.jpg',
      date: '10/14/2024',
    },
    {
      id: 2,
      title: 'A Guide to Modern Web Development',
      image: 'https://media.licdn.com/dms/image/D5612AQEwnWzfekbWLQ/article-cover_image-shrink_720_1280/0/1676868245321?e=2147483647&v=beta&t=1ssUOjHU3MPggb6EACp2REXtcJeQgoTjCjQCq7eaJVY',
      date: '10/10/2024',
    },
    {
      id: 3,
      title: 'The Importance of UI/UX Design',
      image: 'https://www.valens.dev/images/Blog-Images/ux-vs-ui-wallpaper.jpeg',
      date: '09/30/2024',
    },
  ];

  // Fallback image URL
  const fallbackImage = 'https://via.placeholder.com/300';

  return (
    <div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
      <div className="container">
        <div className="row">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-sm-6 col-12">
                <div className="ltn__blog-item ltn__blog-item-3">
                  <div className="ltn__blog-img">
                    <Link to={`/blog-details/${encodeURIComponent(post.title.replace(/\s+/g, '-'))}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        onError={(e) => (e.target.src = fallbackImage)}
                      />
                    </Link>
                  </div>
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author go-top">
                          <Link to="#"><i className="far fa-user" />by: Admin</Link>
                        </li>
                        <li className="ltn__blog-tags go-top">
                          <Link to="/service"><i className="fas fa-tags" />Services</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title">
                      <Link to={`/blog-details/${encodeURIComponent(post.title.replace(/\s+/g, '-'))}`}>{post.title}</Link>
                    </h3>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date"><i className="far fa-calendar-alt" />{post.date}</li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <Link to={`/blog-details/${encodeURIComponent(post.title.replace(/\s+/g, '-'))}`}>Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
