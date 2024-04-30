import NavLi from './NavLi';

function NavLinksList() {
  return (
    <>
      <NavLi title={'Home'} to={'/'} />
      <NavLi title={'About'} to={'/about'} />
      <NavLi title={'Gallery'} to={'/gallery'} />
      <NavLi title={'Schedule'} to={'/schedule'} />
      <NavLi title={'Blog'} to={'/blog'} />
      <NavLi title={'Pricing'} to={'/pricing'} />
      <NavLi title={'Classes'} to={'/classes'} />
      <NavLi title={'Contact'} to={'/contact'} />
    </>
  );
}

export default NavLinksList;
