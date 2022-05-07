import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.node.slug}>
              <Link to={`/blog/${post.node.slug}`} className={styles.link}>
                <img className={styles.previewImage} alt="" src={`https://miro.medium.com/max/1400/${post.node.virtuals.previewImage.imageId}`} />
                <h2 className={styles.title}>{post.node.title}</h2>
              </Link>
              <div>
                {post.node.content?.subtitle && renderRichText(post.node.content.subtitle)}
              </div>
              <div className={styles.meta}>
                <small className="meta">{post.node.firstPublishedAt}</small>
                <Tags tags={post.node.virtuals.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
