"use client"
import { useEffect, useState } from "react";
import GlobalApi from "../app/api/GlobalApi";
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from "next/navigation";

// Define the Category interface
interface Category {
    name: string;
    image: { url: string };
    // Add other fields as necessary
}

const CategorySideBar = () => {
    const [categoryList, setCategoryList] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const params = useParams();

    useEffect(() => {
        getCategoryList();
    }, []);

    useEffect(() => {
        console.log(params.category, typeof (params.category));
        setSelectedCategory(params.category);
    }, [params]);

    /**
     * Used to get All Category List
     */
    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            setCategoryList(resp.categories);
        });
    };

    return (
        <div>
            <h2 className='font-bold mb-3 text-lg text-purple-700'>Categories</h2>
            <div>
                {categoryList.map((category, index) => (
                    <Link href={'/search/' + category.name} key={index}
                        className={`flex gap-2 p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer hover:bg-purple-50 hover:shadow-md items-center hover:text-purple-400 hover:border-purple-700 ${selectedCategory === category.name.toString() && 'border-purple-700 text-purple-700 shadow-md bg-purple-50'}`}>
                        <Image
                            src={category.image.url}
                            alt='icon'
                            width={35}
                            height={35}
                        />
                        <h2 className='text-purple-700'>{category.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategorySideBar;
