import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomeLayouts from '../layouts/HomeLayouts'
import Hero from '../components/molecules/Hero'
import Newsletter from '../components/molecules/Newsletter'
import CourseGrid from '../components/organisms/CourseGrid'
import { coursesData, getCoursesByCategory, categories } from '../data/coursesData'

export default function Home() {
    const [activeCategory, setActiveCategory] = useState('Semua Kelas');
    const [filteredCourses, setFilteredCourses] = useState(coursesData);
    const [isGuestLoggedIn, setIsGuestLoggedIn] = useState(false);
    
    const location = useLocation();

    // Check if user came from login/register as guest
    useEffect(() => {
        if (location.state?.isGuestLoggedIn) {
            setIsGuestLoggedIn(true);
        }
    }, [location.state]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setFilteredCourses(getCoursesByCategory(category));
    };

    return (
        <>
            <HomeLayouts isGuestLoggedIn={isGuestLoggedIn}>
                <Hero />
                
                {/* Main Content Container with consistent gaps */}
                <div className="px-4 sm:px-8 pt-4 md:pt-8 lg:pt-12">
                    <div className="flex flex-col w-full max-w-[1170px] mx-auto">
                        
                        {/* Title Section */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-2xl md:text-3xl text-gray-800">
                                Koleksi Video Pembelajaran Unggulan
                            </h3>
                            <p className="font-medium text-base text-gray-500">
                                Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                            </p>
                        </div>

                        {/* Dynamic Tabs */}
                        <div className="flex gap-1 overflow-x-auto">
                            {categories.map((category) => (
                                <div 
                                    key={category}
                                    className={`flex flex-col gap-2 px-9 py-3 cursor-pointer transition-colors ${
                                        activeCategory === category ? '' : ''
                                    }`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    <a 
                                        href="#" 
                                        className={`font-medium text-base whitespace-nowrap transition-colors ${
                                            activeCategory === category 
                                                ? 'text-orange-500' 
                                                : 'text-gray-500 hover:text-orange-400'
                                        }`}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {category}
                                    </a>
                                    {activeCategory === category && (
                                        <div className="w-13 h-1.5 rounded-lg bg-orange-500"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Course Grid with filtered courses */}
                        <CourseGrid courses={filteredCourses} />

                        {/* Course Statistics */}
                        <div className="text-center py-4">
                            <p className="text-gray-600">
                                Menampilkan {filteredCourses.length} dari {coursesData.length} kursus tersedia
                            </p>
                        </div>
                    </div>
                </div>

                <Newsletter />
            </HomeLayouts>
        </>
    )
}