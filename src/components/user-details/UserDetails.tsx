import Listing from "../listing/Listing";
import SectionHeader from "./SectionHeader";

function UserDetails() {
  return (
    <div className="border-y-1 border-50">
      <div className="ml-4 mt-2 w-auto">
        <div className="flex">
          <div className="w-full flex-2">
            <SectionHeader />
            <p className="text-xl text-500 font-medium">Employee Directory</p>
            <Listing />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
