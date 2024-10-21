import React, { useRef, useState } from 'react';
import Card from './Card';
import { IoClose } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";




const Foreground = ({ isDarkMode, setIsDarkMode }) => {
  const ref = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');  // State to handle search input
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to handle selected category

  // Example data for cards
  const data = [
    {
      desc: "Learn React, a JavaScript library for building user interfaces.", 
      filesize: "1.2mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "React Documentation", tagUrl: "https://react.dev/learn#", tagColor: "#61DBFB" },
      category: "React"
    },
    {
      desc: "HTML is the standard markup language for creating web pages.", 
      filesize: "1.0mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "HTML Documentation", tagUrl: "https://www.w3schools.com/html/html_intro.asp", tagColor: "#E34F26" },
      category: "HTML"
    },
    {
      desc: "CSS is a stylesheet language used for describing the presentation of a document.", 
      filesize: ".8mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "CSS Documentation", tagUrl: "https://www.w3schools.com/css/default.asp", tagColor: "#264DE4" },
      category: "CSS"
    },
    
    {
      desc: "JavaScript is a versatile programming language for web development.", 
      filesize: "1.5mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "JavaScript Documentation", tagUrl: "https://www.w3schools.com/js/default.asp", tagColor: "#F0DB4F" },
      category: "JavaScript"
    },
    {
      desc: "Next.js is a React framework for server-side rendering and static site generation.", 
      filesize: "1.3mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "Next.js Documentation", tagUrl: "https://nextjs.org", tagColor: "#0070F3" },
      category: "Next.js"
    },
    {
      desc: "Angular is a platform for building mobile and desktop web applications.", 
      filesize: "2.0mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "Angular Documentation", tagUrl: "https://angular.io", tagColor: "#DD0031" },
      category: "Angular"
    },
    {
      desc: "MongoDB is a document-based NoSQL database.", 
      filesize: "1.6mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "MongoDB Documentation", tagUrl: "https://www.mongodb.com", tagColor: "#47A248" },
      category: "MongoDB"
    },
    {
      desc: "MySQL is a popular open-source relational database management system.", 
      filesize: "2.5mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "MySQL Documentation", tagUrl: "https://dev.mysql.com/doc", tagColor: "#4479A1" },
      category: "MySQL"
    },
    {
      desc: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.", 
      filesize: "1.4mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "Node.js Documentation", tagUrl: "https://nodejs.org", tagColor: "#43853D" },
      category: "Node.js"
    },
    {
      desc: "TypeScript is a strongly typed programming language that builds on JavaScript.", 
      filesize: "1.1mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "TypeScript Documentation", tagUrl: "https://www.typescriptlang.org", tagColor: "#3178C6" },
      category: "TypeScript"
    },
    {
      desc: "Python is a high-level, interpreted programming language with dynamic semantics.", 
      filesize: "1.7mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "Python Documentation", tagUrl: "https://docs.python.org", tagColor: "#3776AB" },
      category: "Python"
    },
    {
      desc: "GraphQL is a query language for your API, giving clients the power to ask for exactly what they need.", 
      filesize: "1.0mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "GraphQL Documentation", tagUrl: "https://graphql.org", tagColor: "#E10098" },
      category: "GraphQL"
    },
    {
      desc: "Docker is a platform for developing, shipping, and running applications in containers.", 
      filesize: "2.2mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "Docker Documentation", tagUrl: "https://docs.docker.com", tagColor: "#2496ED" },
      category: "Docker"
    },
    {
      desc: "Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.", 
      filesize: "3.1mb",
      close: false, 
      tag: { isOpen: true, tagTitle: "Kubernetes Documentation", tagUrl: "https://kubernetes.io/docs", tagColor: "#326CE5" },
      category: "Kubernetes"
    },
      {
        desc: "PHP is a popular general-purpose scripting language that is especially suited to web development.", 
        filesize: "1.8mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "PHP Documentation", tagUrl: "https://www.php.net/docs.php", tagColor: "#777BB4" },
        category: "PHP"
      },
      {
        desc: "Laravel is a PHP framework for web artisans.", 
        filesize: "2.0mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Laravel Documentation", tagUrl: "https://laravel.com/docs", tagColor: "#FF2D20" },
        category: "Laravel"
      },
      {
        desc: "AWS is a cloud platform offering over 200 services including computing power, storage, and databases.", 
        filesize: "3.5mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "AWS Documentation", tagUrl: "https://aws.amazon.com/documentation", tagColor: "#FF9900" },
        category: "AWS"
      },
      {
        desc: "GCP offers cloud computing, storage, and machine learning services.", 
        filesize: "3.2mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Google Cloud Documentation", tagUrl: "https://cloud.google.com/docs", tagColor: "#4285F4" },
        category: "Google Cloud"
      },
      {
        desc: "Azure is Microsoft's public cloud computing platform.", 
        filesize: "2.8mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Azure Documentation", tagUrl: "https://docs.microsoft.com/en-us/azure", tagColor: "#0089D6" },
        category: "Azure"
      },
      {
        desc: "SASS is a preprocessor scripting language that is interpreted or compiled into CSS.", 
        filesize: ".9mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "SASS Documentation", tagUrl: "https://sass-lang.com/documentation", tagColor: "#CC6699" },
        category: "SASS"
      },
      {
        desc: "Bootstrap is a free and open-source CSS framework for responsive, mobile-first projects.", 
        filesize: "1.0mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Bootstrap Documentation", tagUrl: "https://getbootstrap.com/docs", tagColor: "#7952B3" },
        category: "Bootstrap"
      },
      {
        desc: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.", 
        filesize: "1.2mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Tailwind Documentation", tagUrl: "https://tailwindcss.com/docs", tagColor: "#06B6D4" },
        category: "Tailwind CSS"
      },
      {
        desc: "Vue.js is a progressive JavaScript framework for building user interfaces.", 
        filesize: "1.3mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Vue.js Documentation", tagUrl: "https://vuejs.org", tagColor: "#42B883" },
        category: "Vue.js"
      },
      {
        desc: "Redis is an in-memory data structure store used as a database, cache, and message broker.", 
        filesize: "1.6mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Redis Documentation", tagUrl: "https://redis.io/documentation", tagColor: "#DC382D" },
        category: "Redis"
      },
      {
        desc: "PostgreSQL is an open-source, object-relational database system.", 
        filesize: "2.1mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "PostgreSQL Documentation", tagUrl: "https://www.postgresql.org/docs", tagColor: "#336791" },
        category: "PostgreSQL"
      },
      {
        desc: "Figma is a web-based UI/UX design tool with real-time collaboration features.", 
        filesize: "1.1mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Figma Documentation", tagUrl: "https://www.figma.com", tagColor: "#F24E1E" },
        category: "Figma"
      },
      {
        desc: "Heroku is a cloud platform as a service supporting several programming languages.", 
        filesize: "2.3mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Heroku Documentation", tagUrl: "https://devcenter.heroku.com", tagColor: "#430098" },
        category: "Heroku"
      },
      {
        desc: "GraphQL is a query language for APIs, allowing clients to specify the structure of the responses.", 
        filesize: "1.0mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "GraphQL Documentation", tagUrl: "https://graphql.org", tagColor: "#E10098" },
        category: "GraphQL"
      },
      {
        desc: "C++ is a general-purpose programming language used for systems and applications programming.", 
        filesize: "2.0mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "C++ Documentation", tagUrl: "https://cplusplus.com/doc", tagColor: "#00599C" },
        category: "C++"
      },
      {
        desc: "Rust is a systems programming language focused on safety, speed, and concurrency.", 
        filesize: "1.9mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Rust Documentation", tagUrl: "https://www.rust-lang.org/learn", tagColor: "#DEA584" },
        category: "Rust"
      },
      {
        desc: "Flutter is Google's UI toolkit for building natively compiled applications.", 
        filesize: "2.4mb",
        close: false, 
        tag: { isOpen: true, tagTitle: "Flutter Documentation", tagUrl: "https://flutter.dev/docs", tagColor: "#02569B" },
        category: "Flutter"
      }
    
    
  ];

  // Array of categories for the dropdown
  const categories = [
    "All", 
    "React", 
    "HTML", 
    "CSS", 
    "JavaScript", 
    "Next.js", 
    "Angular", 
    "MongoDB", 
    "MySQL", 
    "Node.js", 
    "Express", 
    "PHP", 
    "Laravel", 
    "AWS", 
    "Google Cloud", 
    "Azure", 
    "SASS", 
    "Bootstrap", 
    "Tailwind CSS", 
    "Vue.js", 
    "Redis", 
    "PostgreSQL", 
    "Figma", 
    "Heroku", 
    "GraphQL", 
    "C++", 
    "Rust", 
    "Flutter"
  ];
  
  // Filter logic for search term and category
  const filteredData = data.filter(card => {
    const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
    const matchesSearch = card.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`absolute p-5 right-4 z-10 flex items-center ${isDarkMode ? 'bg-zinc-800 text-white' : 'bg-white text-black'}`}>
      {/* Toggle Button for Dark/Light Mode */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)} 
        className={`mb-4 p-2 rounded border relative z-50 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />        }
      </button>
      
      
      {/* Search Bar with Clear Button */}
      <div className="relative mb-4 ml-4 flex w-[200px]">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`p-2 border rounded w-[300px] relative z-50 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="absolute z-50 right-2 top-1/2 transform -translate-y-1/2 p-1 rounded text-sm bg-transparent">
            <span className={isDarkMode ? 'text-white' : 'text-black'}>
            <IoClose  />
    </span>    </button>
        )}
      </div>

      {/* Dropdown for categories */}
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)} 
        className={`mb-4 ml-4 p-2 border rounded w-[110px] relative z-50 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black '}`}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Cards displayed based on the search and filter */}
      <div style={{overflowY: 'scroll', paddingBottom: '100px'}} ref={ref} className="fixed justify-center top-16 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card key={index} data={item} reference={ref} isDarkMode={isDarkMode} />
          ))
        ) : (
          <div className="text-center text-gray-500">No results found</div>
        )}
      </div>
    </div>
  );
}

export default Foreground;
