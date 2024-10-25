// components/Footer.tsx

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 mb-6 ">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Azka Khizer. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center flex-wrap">
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  