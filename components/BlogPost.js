import styles from "../styles/blogPost.module.css";
import Link from "next/link";

function BlogPost({ title, author, datePublished, slug, coverPhoto }) {
  return (
    <div className={styles.blogPostContainer}>
      <Link href={"/posts/" + slug}>
        <>
          <img className={styles.coverPhoto} src={coverPhoto.url} alt={title} />
          <h3 className={styles.cardTitle}>{title}</h3>
          <div className={styles.authorContainer}>
            <p>{author.name}</p>
            <p>{datePublished}</p>
          </div>
        </>
      </Link>
    </div>
  );
}

export default BlogPost;
