import Post from "./Post";

function Home() {
    const postList = [
        {
            nom: "Peach Thief, The (Kradetzat na praskovi)",
            contenu:
                "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            categorie: "space invader",
            location: {
                lon: 44.5128424,
                lat: 40.2047139,
            },
            likes: 99,
            comments: "[]",
        },
        {
            nom: "Cry in the Dark, A",
            contenu:
                "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
            categorie: "balade",
            location: {
                lon: 104.512603,
                lat: 26.006775,
            },
            likes: 90,
            comments: "[]",
        },
    ];

    return (
        <div className="Home">
            {postList.map((post, postIndex) => (
                <Post content={post} key={postIndex}></Post>
            ))}
        </div>
    );
}

export default Home;
