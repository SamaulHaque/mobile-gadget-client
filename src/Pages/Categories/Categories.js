import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import Category from './Category';

const Categories = () => {
    const {data:categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
        const res = await fetch('http://localhost:5000/categories');
        const data = await res.json();
        return data;
        }
    })

    return (
        <div className='mx-5'>
            <h2 className='text-4xl text-cyan-600 text-center font-bold mb-16'>Brand Categories</h2>            
            
            <div className='grid grid-cols-3 gap-4'>
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