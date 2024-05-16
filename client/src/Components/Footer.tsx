const Footer: React.FC = () => {
    return (
      <footer className=" bg-cyan-500 text-white py-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">TaskBliss</h2>
            <p className="text-sm">&copy; 2024 TaskBliss. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="" className="hover:underline">About</a>
            <a href="" className="hover:underline">Contact</a>
            <a href="" className="hover:underline">Privacy Policy</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 2.072c0-1.144-.928-2.072-2.072-2.072h-15.856c-1.144 0-2.072.928-2.072 2.072v19.856c0 1.144.928 2.072 2.072 2.072h10.694v-8.625h-2.887v-3.373h2.887v-2.479c0-2.856 1.747-4.412 4.296-4.412 1.23 0 2.286.091 2.594.132v3.007h-1.778c-1.393 0-1.663.662-1.663 1.632v2.12h3.328l-.434 3.373h-2.894v8.625h5.695c1.144 0 2.072-.928 2.072-2.072v-19.856z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.923 0 .386.044.761.128 1.122-4.092-.205-7.719-2.165-10.141-5.144-.424.729-.666 1.575-.666 2.476 0 1.71.871 3.213 2.19 4.096-.808-.026-1.566-.248-2.229-.617v.062c0 2.386 1.698 4.374 3.95 4.828-.414.113-.849.173-1.298.173-.318 0-.627-.031-.928-.089.627 1.956 2.445 3.379 4.6 3.419-1.685 1.32-3.808 2.106-6.114 2.106-.398 0-.79-.023-1.176-.069 2.179 1.396 4.768 2.211 7.548 2.211 9.056 0 14.01-7.505 14.01-14.01 0-.213-.005-.425-.014-.637.961-.694 1.8-1.56 2.462-2.549z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.994 3h-15.987c-1.104 0-2.007.903-2.007 2.007v15.986c0 1.104.903 2.007 2.007 2.007h15.986c1.104 0 2.007-.903 2.007-2.007v-15.987c0-1.104-.903-2.007-2.007-2.007zm-11.994 16h-3v-10h3v10zm-1.5-11.292c-.966 0-1.5-.668-1.5-1.5 0-.846.558-1.5 1.485-1.5.927 0 1.5.654 1.5 1.5 0 .832-.573 1.5-1.485 1.5zm11.494 11.292h-3v-5.548c0-1.354-.47-2.278-1.64-2.278-.895 0-1.427.605-1.662 1.188-.085.207-.106.497-.106.788v5.85h-3s.039-9.49 0-10.48h3v1.484c.397-.614 1.107-1.484 2.698-1.484 1.966 0 3.44 1.289 3.44 4.061v6.419z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  