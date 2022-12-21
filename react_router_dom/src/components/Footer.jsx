import { Link } from "react-router-dom"


const footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About Us
            </Link>
            <Link to="/terms" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Terms of Service
            </Link>
            <Link to="/privacy" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Privacy Policy
            </Link>
          </div>
          <div>
            <span className="text-gray-400">Copyright &copy; 2020 My App</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer


