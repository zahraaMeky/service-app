import CategorySideBar from "@/components/CategorySideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <div className="mt-5 padding-container">
    <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
        <div className='hidden md:block'>
          
         {/* Side Category Nav bar  */}
         <CategorySideBar/>
        </div>
        <div className='md:col-span-3 '>
        {children}
        </div>
    </div>
    </div>
    
  );
}
