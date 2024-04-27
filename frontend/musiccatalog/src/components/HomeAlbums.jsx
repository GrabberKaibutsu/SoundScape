// import React from 'react'
// import { Link } from "react-router-dom";

// const HomeAlbum = ({albums}) => {
//   return (
//     <div className="text-slate-50">
//         <ul className="grid grid-cols-1 md:flex gap-3 justify-items-center">
//             {/* Goes over each album in the list to display the top 20 albums */}
//             {albums && albums.map((item, index) => {
//                 return (
//                     <li className="flex">
//                         {/* link to the show album page that will show more details about the album */}
//                         <Link to={`/album/${item.id}`} className="hover:text-indigo-600">
//                             <img src={item.images[0]?.url} className="w-full h-auto" />
//                             {item?.name}
//                         </Link>
//                     </li>
//                 );
//             })}
//         </ul>
//     </div>
//   )
// }

// export default HomeAlbum

import React from 'react'
import { Link } from "react-router-dom";

const HomeAlbum = ({ albums }) => {

    console.log(albums)
  return (
    <div className="text-slate-50">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 justify-items-center">
        {/* className="grid grid-cols-1 md:flex gap-3 justify-items-center" */}
            {/* Goes over each album in the list to display the top 20 albums */}
            {albums && albums.map((item, index) => {
                return (
                    <li className="flex" key={index}>
                        {/* link to the show album page that will show more details about the album */}
                        <Link to={`/album/${item.id}`} className="hover:text-indigo-600">
                            <img src={item.images[0]?.url} className="w-full md:w-1/2 lg:w-full xl:w-full" />
                            <p className="mt-2 text-center">{item?.name}</p>
                            <p className="mt-2  text-sm md:text-md lg:text-lg text-zinc-500">Released: {item?.release_date}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default HomeAlbum