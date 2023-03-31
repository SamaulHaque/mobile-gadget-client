import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Category from './Category';

const Categories = () => {
    const {loading} = useContext(AuthContext)
    
    const {data:categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
        const res = await fetch('https://mobile-gadget-server.vercel.app/categories');
        const data = await res.json();
        return data;
        }
    })

    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }
    

    return (
        <div className='mx-5'>
            <h2 className='text-4xl text-cyan-600 text-center font-bold mb-16'>Brand Categories</h2>            
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                categories.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
            </div>

        </div>
    );
};

export default Categories;