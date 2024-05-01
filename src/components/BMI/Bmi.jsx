import { useState } from 'react';

function Bmi() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [description, setDescription] = useState('');

  function calcBmi() {
    if (!weight || !height) alert('Please enter a valid weight and height');

    setBmi((weight / ((height * height) / 10000)).toFixed(1));

    if (bmi < 20) {
      setDescription('Underweight');
    } else if (bmi >= 20 && bmi < 27) {
      setDescription('Normal');
    } else {
      setDescription('Overweight');
    }

    setHeight('');
    setWeight('');
  }

  return (
    <section className="BmiBg" id="BMI">
      <div className="page-padding container">
        <div className="flex flex-col gap-6 py-12">
          <h1 className="text-5xl font-bold text-white">
            Let's Calculate Your <span className="text-red-500">BMI</span>
          </h1>
          <p className="text-xl text-neutral-500">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <input
                onChange={(e) => setWeight(e.target.value)}
                className="w-60 border-2 border-neutral-500 bg-transparent p-2 text-white"
                type="number"
                placeholder="Weight / kg"
                value={weight}
              />
              <h3 className="text-white">
                Your BMI is:&nbsp;{' '}
                <span className="text-lg text-red-500">{bmi}</span>
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <input
                onChange={(e) => setHeight(e.target.value)}
                className="w-60 border-2 border-neutral-500 bg-transparent p-2 text-white"
                type="number"
                placeholder="Height / cm"
                value={height}
              />
              <h3 className="text-white">
                Your weight is: &nbsp;{' '}
                <span className="text-lg text-red-500">{description}</span>
              </h3>
            </div>
          </div>
          <button
            onClick={() => calcBmi()}
            className="h-10 w-36 cursor-pointer bg-neutral-700 uppercase text-white duration-300 hover:bg-red-500"
          >
            calculate
          </button>
        </div>
      </div>
    </section>
  );
}

export default Bmi;
