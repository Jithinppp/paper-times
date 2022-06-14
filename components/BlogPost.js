import styles from "../styles/blogPost.module.css";
import Link from "next/link";

function BlogPost({ title, author, datePublished, slug, coverPhoto }) {
  return (
    <Link href={"/posts/" + slug}>
      <div className={styles.blogPostContainer}>
        <img className={styles.coverPhoto} src={coverPhoto.url} alt={title} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.authorContainer}>
          <p>{author.name}</p>
          <p>{datePublished}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogPost;
