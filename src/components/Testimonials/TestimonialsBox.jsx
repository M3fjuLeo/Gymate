function TestimonialsBox() {
  const reviews = [
    {
      name: 'Harry Potter',
      job: 'CEO of Hogwarts',
      descriptions: `'I've been a member of Gymate for the past 6 months and it has been an
        amazing experience. The trainers are knowledgeable and supportive, the
        equipment is top-notch, and the community of members is friendly and
        encouraging.`,
    },
  ];

  return (
    <div className="flex w-full flex-col p-10 text-white">
      {reviews.map((review, id) => (
        <div key={id}>
          <img
            className="mb-6 w-16"
            src="public/images/TestimonialsImg/quotes.png"
            alt="quotes"
          />
          <p className="mb-6 font-thin italic text-neutral-300">
            “{review.descriptions}”
          </p>
          <h3 className="text-2xl font-bold">{review.name}</h3>
          <p className="text-neutral-300">{review.job}</p>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsBox;
