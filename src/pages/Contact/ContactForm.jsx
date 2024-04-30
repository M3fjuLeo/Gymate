function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Full Name *"
        className="h-12 w-full border p-3 font-thin outline-none"
      />
      <input
        type="email"
        placeholder="Email Address *"
        className="h-12 w-full border p-3 font-thin outline-none"
      />
      <select
        name="Select Class"
        className="h-12 w-full border p-3 font-thin outline-none"
      >
        <option value="">Select Class</option>
        <option value="boxing">Boxing</option>
        <option value="bodybuilding">Body Building</option>
        <option value="running">Runing</option>
        <option value="yoga">Yoga</option>
        <option value="fitness">Fitness</option>
        <option value="workout">Workout</option>
        <option value="karate">Karate</option>
        <option value="meditation">Meditation</option>
        <option value="crossfit">Crossfit</option>
        <option value="cycling">Cycling</option>
      </select>
      <textarea
        placeholder="Comment"
        cols="30"
        rows="5"
        className="border p-3 font-thin outline-none"
      ></textarea>
      <button className="h-12 w-40 bg-red-500 uppercase text-white">
        submit now
      </button>
    </form>
  );
}

export default ContactForm;
