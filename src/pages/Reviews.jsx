import SimpleReview from "../components/SimpleReviewCard"

function Reviews() {
    const comentarios = [
        {
            photo: null,
            username: "Daniela Zambrano",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
            photo: null,
            username: "John Doe",
            text: "This is a review from John Doe",
            },
            {
            photo: null,
            username: "Jane Doe",
            text: "This is a review from Jane Doe",
            },
        ];
    return (
        <div className="max-w-3xl mx-auto m-10 p-4 bg-white rounded shadow-md border border-gray-300">
            <h1 className="text-3xl font-bold mb-4">Reseñas</h1>
            <hr className="h-px mb-5 bg-gray-300 border-0" />


            {comentarios.map((comentario, index) => (
        <SimpleReview key={index} comment={comentario} />
        ))}

            

        </div>
    );
}

export default Reviews;