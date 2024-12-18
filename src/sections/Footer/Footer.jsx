
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className='card text-center py-4'>
      <p className="text-base">
        All rights reserved &copy; {year} CV Reyschelle Iradiel
      </p>
    </footer>
  );
}

export default Footer;