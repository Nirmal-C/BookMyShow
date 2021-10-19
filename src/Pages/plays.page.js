import React from "react";
import Poster from '../components/Poster/poster.component';
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";

const Plays = () => {
    return(
        <>
        <div className="container mx-auto px-4 bg-opacity-50 bg-gray-200">
            <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="flex flex-col items-start mt-7 lg:w-8/12">
                <h2 className="text-gray-900 text-2xl font-bold ml-5 mb-7">Plays in Chennai</h2>
                <div className="flex flex-wrap">
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjElICA1ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00313056-qgpyckalbn-portrait.jpg"
                        title="Aranmanai 3"
                        subtitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxOSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311451-afnkylwekc-portrait.jpg"
                        title="Walk through the city of Dublin"
                        subtitle="English ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314533-jermladzay-portrait.jpg"
                        title="Tvk Cultural presents Ponniyin Selvan"
                        subtitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxOSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311414-zjpbvnxhka-portrait.jpg"
                        title="Walk in Tradition"
                        subtitle="English ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxOSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311436-unxzuctsrv-portrait.jpg"
                        title="Catching Sites"
                        subtitle="English ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315436-swbeldttns-portrait.jpg"
                        title="Queen of Concert"
                        subtitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                        title="Tvk Cultural presents Ponniyin Selvan"
                        subtitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314524-twwbljthjv-portrait.jpg"
                        title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                        subtitle="Tamil ₹300"
                        />
                    </div>                   
                </div>            
            </div>
            <div className="my-7 ml-0 lg:w-1/4 flex flex-col items-start">
            <h2 className="text-gray-900 text-2xl font-bold ml-5">Filters</h2>
            <div className=" bg-opacity-100 rounded-md p-2">
           <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
           <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/>
           <PlaysFilter title="Categories" tags={["Theatre"]}/>
           <PlaysFilter title="Genres" tags={["Drama", "Adaptation", "Historical", "Online Streaming Plays"]} />
 		     <PlaysFilter title="More Filters" tags={["Online Streaming", "Kids Allowed", "Outdoor Events"]} />
		     <PlaysFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} />
            </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Plays;