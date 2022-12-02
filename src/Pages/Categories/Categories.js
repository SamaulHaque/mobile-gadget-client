import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import Category from './Category';

const Categories = () => {
    const {data:categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
        const res = await fetch('https://mobile-gadget-server.vercel.app/categories');
        const data = await res.json();
        return data;
        }
    })

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