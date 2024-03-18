import Listing from './Listing';
import SectionHeader from './SectionHeader';

function MainSection() {
  return (
    <div className='border-y-1 border-50'>
      <div className='ml-4 mt-2 w-auto'>
        <SectionHeader />
        <p className='text-xl text-500 font-medium'>Employee Directory</p>
        <Listing />
      </div>
    </div>
  );
}

export default MainSection;
