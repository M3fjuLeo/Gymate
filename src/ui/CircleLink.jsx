import { Link } from 'react-router-dom';

function CircleLink({ icon, to }) {
  return (
    <Link
      to={to}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-red-500 text-white"
    >
      <i className={`${icon} absolute text-xl`}></i>
    </Link>
  );
}

export default CircleLink;
