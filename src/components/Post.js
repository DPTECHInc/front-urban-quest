function Post(props) {
    const postContent = props.content;
    return (
        <div className="Post">
            <h2>{postContent.nom}</h2>
            <p>{postContent.contenu}</p>
        </div>
    );
}

export default Post;
