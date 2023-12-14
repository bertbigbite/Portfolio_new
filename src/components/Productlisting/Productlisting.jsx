import "./Productlisting.css"
import Projects from '/projects.json'
import { useNavigate } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

// booklisting will take props to display JSON data from Home 
function ProductListing({id, name, desc, image, url, git, setClickedBookId}){
    const navigate = useNavigate();

     const projects = 
        [
            {
                "id" : "1",
            "name" : "Project One",
            "desc" : "This is project one. It's a project that I worked on",
            "image" : "images/5.png",
            "url" : "<i className='fa-solid fa-globe'></i>",
            "view" : "#",
            "git" : "<i className='fa-brands fa-square-github'></i>"
            },
        
            {
            "id" : "1",
            "name" : "Project One",
            "desc" : "This is project one. It's a project that I worked on",
            "image" : "images/5.png",
            "url" : "<i className='fa-solid fa-globe'></i>",
            "view" : "#",
            "git" : "<i className='fa-brands fa-square-github'></i>"
            },
    
        
            {
            "id" : "2",
            "name" : "Project Two",
            "desc" : "This is project two. It's a project that I worked on",
            "image" : "images/1.png",
            "url" : "<i className='fa-solid fa-globe'></i>",
            "view" : "#",
            "git" : "<i className='fa-brands fa-square-github'></i>"
            },
        
        
            {
            "id" : "3",
            "name" : "Project Three",
            "desc" : "This is project three. It's a project that I worked on",
            "image" : "images/2.png",
            "url" : "<i className='fa-solid fa-globe'></i>",
            "view" : "#",
            "git" : "<i className='fa-brands fa-square-github'></i>"
            },
        
        
            {
            "id" : "4",
            "name" : "Project Four",
            "desc" : "This is project four. It's a project that I worked on",
            "image" : "images/3.png",
            "url" : "<i className='fa-solid fa-globe'></i>",
            "view" : "#",
            "git" : "<i className='fa-brands fa-square-github'></i>"
            },
        
        
            {
            "id" : "5",
            "name" : "Project Five",
            "desc" : "This is project five. It's a project that I worked on",
            "image" : "images/4.png",
            "url" : "<i className='fa-solid fa-globe'></i>",
            "view" : "#",
            "git" : "<i className='fa-brands fa-square-github'></i>"
            },
        
        
            {
            "id" : "6",
            "name" : "Project Six",
            "desc" : "This is project six. It's a project that I worked on",
            "image" : "images/5.png",
            "url" : "<i className='fa-solid fa-globe'></i>",
            "view" : "#",
            "git" : "<i className='fa-brands fa-square-github'></i>"
            }
        
    ]

    function productClick() {
        //setClickedBookId(id)
        navigate('projects.json')
    }

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return(
       <>
       {/* <div className="">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                <div className="max-w-sm min-h-lg mt-6 grid grid-cols-1 gap-x- gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-2">
                    <div className="aspect-h-1 aspect-w-1 w-full max-w-lg overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img src={image} alt={name} className="max-w-lg h-full  object-cover object-center lg:h-full lg:w-full"/>
                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                <div>
                <h2>{name}</h2>
                </div>
                <div className=" flex flex-row justify-between">
                    <a href="#">{url}</a>
                    <button
                    type="button"
                    onClick={openModal}
                    className="mt-6 rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    > More info
                </button>
                    <a href="#">{git}</a>
                </div>
                
            </div>
                </div>
            </div>
            </div>
            <div className="flex items-center justify-center">
        </div> */}
        
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-0 sm:py-0">
  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
    <h2 class="pt-8 text-base font-semibold leading-7">{name}</h2>
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
        <img src={image} alt={name} className="rounded max-w-lg h-full  object-cover object-center lg:h-full lg:w-full"/>
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Customizing your
                <code class="text-sm font-bold text-gray-900"> tailwind.config.js</code> file
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Extracting classes with
                <code class="text-sm font-bold text-gray-900"> @apply</code>
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">Code completion with instant preview</p>
            </li>
          </ul>
        </div>
        <div class="pt-8 text-base font-semibold leading-7">
          <p class="text-gray-900">Want to find out more about this project?</p>
          <p>
            <a onClick={openModal} class="text-sky-500 hover:text-sky-600">More info &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
     
        
       

      <Transition enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0" show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <Dialog.Panel className=" Modal w-2/3 h-4/5 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  
                  <Dialog.Title
                    as="h1"
                    className="text-2xl font-bold leading-6 text-gray-900"
                  >
                    {name}
                  </Dialog.Title>
                    <div className="content">
                    <div className=" imagerow mt-8">
                        <img className="image" src={image} alt={name} />
                        <img className="image" src={image} alt={name} />
                        <img className="image" src={image} alt={name} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500"><strong>Name:</strong> {name}</p>
                        <p className="text-sm text-gray-500"><strong>Details:</strong> {desc}</p>
                        <p className="text-sm text-gray-500"><strong>URL:</strong> {url}</p>
                        <p className="text-sm text-gray-500"><strong>Git:</strong> {name}</p>
                    </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>

    )
}
export default ProductListing