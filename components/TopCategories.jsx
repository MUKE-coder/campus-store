import { getData } from "@/lib/getData";
import HomeSwiper from "./HomeSwiper";


export default async function TopCategories() {
  const allCategories = (await getData("categories")) || [];

  return (
    <div className='flex flex-col gap-6 w-full min-h-[20vh] lg:min-h-[50vh] bg-[#ff9900] mt-5'>
      <div className='text-xl text-center text-[#313133] font-semibold pt-4'>
        Top Categories | Unlock Mega categories!
      </div>
      <div className='lg:h-[40vh] min-h-[30vh]'>
      <HomeSwiper allCategories={allCategories}/>
      </div>
    </div>
  );
}
